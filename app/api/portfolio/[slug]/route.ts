import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { z } from 'zod';

const UpdatePortfolioSchema = z.object({
  title: z.string().min(3).optional(),
  slug: z.string().min(3).optional(),
  description: z.string().min(10).optional(),
  client: z.string().optional(),
  category: z.string().optional(),
  techs: z.string().optional(),
  image: z.string().url().optional(),
  images: z.string().optional(),
  liveUrl: z.string().url().optional().or(z.literal('')),
  caseStudy: z.string().optional(),
  featured: z.boolean().optional(),
  published: z.boolean().optional(),
});

// GET single portfolio by slug (public)
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const portfolio = await prisma.portfolio.findUnique({
      where: { slug },
    });

    if (!portfolio) {
      return NextResponse.json(
        { error: 'Portfolio item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(portfolio);
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolio item' },
      { status: 500 }
    );
  }
}

// UPDATE portfolio item (protected)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { slug } = await params;
    const body = await request.json();
    const validatedData = UpdatePortfolioSchema.parse(body);

    const existing = await prisma.portfolio.findUnique({
      where: { slug },
    });

    if (!existing) {
      return NextResponse.json(
        { error: 'Portfolio item not found' },
        { status: 404 }
      );
    }

    // If slug is being changed, check uniqueness
    if (validatedData.slug && validatedData.slug !== slug) {
      const slugExists = await prisma.portfolio.findUnique({
        where: { slug: validatedData.slug },
      });
      if (slugExists) {
        return NextResponse.json(
          { error: 'A portfolio item with this slug already exists' },
          { status: 400 }
        );
      }
    }

    const portfolio = await prisma.portfolio.update({
      where: { slug },
      data: validatedData,
    });

    return NextResponse.json(portfolio);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      );
    }
    console.error('Error updating portfolio:', error);
    return NextResponse.json(
      { error: 'Failed to update portfolio item' },
      { status: 500 }
    );
  }
}

// DELETE portfolio item (protected)
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { slug } = await params;

    const existing = await prisma.portfolio.findUnique({
      where: { slug },
    });

    if (!existing) {
      return NextResponse.json(
        { error: 'Portfolio item not found' },
        { status: 404 }
      );
    }

    await prisma.portfolio.delete({ where: { slug } });

    return NextResponse.json({ message: 'Portfolio item deleted successfully' });
  } catch (error) {
    console.error('Error deleting portfolio:', error);
    return NextResponse.json(
      { error: 'Failed to delete portfolio item' },
      { status: 500 }
    );
  }
}
