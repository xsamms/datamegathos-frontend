import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { z } from 'zod';

const PortfolioSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  client: z.string().optional(),
  category: z.string().min(1, 'Category is required'),
  techs: z.string().optional(),
  image: z.string().url('Image must be a valid URL'),
  images: z.string().optional(),
  liveUrl: z.string().url().optional().or(z.literal('')),
  caseStudy: z.string().optional(),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
});

// GET all portfolio items (public)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const published = searchParams.get('published') !== 'false'; // default true for public
    const limit = parseInt(searchParams.get('limit') || '20');
    const page = parseInt(searchParams.get('page') || '1');

    const where: Record<string, unknown> = {};
    if (published) where.published = true;
    if (category && category !== 'All') where.category = category;

    const portfolios = await prisma.portfolio.findMany({
      where,
      take: limit,
      skip: (page - 1) * limit,
      orderBy: { createdAt: 'desc' },
    });

    const total = await prisma.portfolio.count({ where });

    return NextResponse.json({
      data: portfolios,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolios' },
      { status: 500 }
    );
  }
}

// CREATE a new portfolio item (protected)
export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validatedData = PortfolioSchema.parse(body);

    // Check if slug already exists
    const existing = await prisma.portfolio.findUnique({
      where: { slug: validatedData.slug },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'A portfolio item with this slug already exists' },
        { status: 400 }
      );
    }

    const portfolio = await prisma.portfolio.create({
      data: {
        ...validatedData,
        liveUrl: validatedData.liveUrl || null,
      },
    });

    return NextResponse.json(portfolio, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      );
    }
    console.error('Error creating portfolio:', error);
    return NextResponse.json(
      { error: 'Failed to create portfolio item' },
      { status: 500 }
    );
  }
}
