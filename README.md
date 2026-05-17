# DataMegaThos - Modern Blog Platform

A fully-featured, production-ready blog application built with cutting-edge web technologies.

## 🎯 Overview

DataMegaThos is a modern blog platform demonstrating best practices in full-stack web development. It showcases integration of:

- **Next.js 16** with App Router and Server Components
- **React 19** with latest features
- **TypeScript** for type safety
- **Tailwind CSS** for beautiful UI
- **Prisma** for database ORM
- **Supabase PostgreSQL** for reliable data storage
- **TanStack Query** for efficient data fetching
- **Zod** for schema validation

## ✨ Features

- 📝 Create, read, update, and delete blog posts
- 🏷️ Organize posts with categories and tags
- ⭐ Mark posts as featured
- 👁️ Automatic view count tracking
- 📱 Fully responsive design
- ⚡ High-performance caching with TanStack Query
- 🔐 Type-safe API routes
- 🎨 Beautiful UI with Tailwind CSS
- 📊 Pagination support
- 🔍 SEO-friendly

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm 9+
- Supabase account (free tier available)

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables (see SETUP_GUIDE.md)
cp .env.local.example .env.local

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view your blog!

## 📖 Detailed Setup

For comprehensive setup instructions, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org)
- [Prisma Documentation](https://prisma.io)
- [Supabase Documentation](https://supabase.com/docs)
- [TanStack Query](https://tanstack.com/query)
- [Tailwind CSS](https://tailwindcss.com)

---

Check out [SETUP_GUIDE.md](./SETUP_GUIDE.md) for comprehensive deployment instructions.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
