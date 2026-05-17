# DataMegaThos - Modern Blog Platform

A fully-featured blog application built with the latest web technologies.

## 🚀 Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **State Management**: TanStack Query (React Query)
- **Database ORM**: Prisma
- **Database**: Supabase PostgreSQL
- **Validation**: Zod
- **Environment**: Node.js 18+, npm 9+

## 📋 Prerequisites

Before you begin, make sure you have:

1. **Node.js** (v18+) and npm (v9+) installed
2. A **Supabase** account ([Create one here](https://supabase.com))
3. PostgreSQL database (provided by Supabase)

## ⚙️ Setup Instructions

### 1. Clone and Install

```bash
cd datamegathos-frontend
npm install
```

### 2. Create Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Click "New Project"
3. Enter project details and create
4. Wait for the database to initialize

### 3. Get Database Connection String

1. In Supabase, go to **Settings → Database**
2. Copy the Connection String (PostgreSQL URL)
3. Replace the default password and database name if needed

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
DATABASE_URL="postgresql://[user]:[password]@[host]:[port]/[database]"
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
```

### 5. Set Up Database Schema

Run Prisma migrations to create the database tables:

```bash
npx prisma migrate dev --name init
```

This will:
- Create the `Post` table
- Set up indexes for performance
- Generate Prisma Client

### 6. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your blog!

## 📖 Usage

### Create a Blog Post

1. Navigate to `/blog`
2. Click "Create New Post"
3. Fill in the form fields:
   - **Title**: Post title (slug auto-generates)
   - **Content**: Main post content
   - **Excerpt**: Short summary
   - **Author**: Post author name
   - **Category**: Post category
   - **Image URL**: Featured image
   - **Tags**: Comma-separated tags
   - **Published**: Toggle to publish
   - **Featured**: Mark as featured post

### View Blog Posts

- **Blog Listing**: `/blog` - View all published posts
- **Individual Post**: `/blog/[slug]` - View specific post with full content

### API Endpoints

- `GET /api/posts` - Get all posts (pagination supported)
- `POST /api/posts` - Create a new post
- `GET /api/posts/[slug]` - Get a specific post
- `PUT /api/posts/[slug]` - Update a post
- `DELETE /api/posts/[slug]` - Delete a post

Query parameters for GET /api/posts:
- `published=true` - Filter published posts only
- `limit=10` - Posts per page (default: 10)
- `page=1` - Page number (default: 1)

## 🏗️ Project Structure

```
app/
├── api/
│   └── posts/
│       ├── route.ts           # GET all, POST new posts
│       └── [slug]/route.ts    # GET, PUT, DELETE single post
├── blog/
│   ├── page.tsx              # Blog listing page
│   └── [slug]/page.tsx       # Individual post page
├── about/
│   └── page.tsx              # About page
├── layout.tsx                # Root layout with providers
└── page.tsx                  # Home page

components/
├── BlogPostCard.tsx          # Post preview card
└── CreatePostForm.tsx        # Form for creating/editing posts

lib/
├── hooks.ts                  # TanStack Query hooks
├── providers.tsx             # Query client provider
└── utils.ts                  # Utility functions

prisma/
└── schema.prisma             # Database schema
```

## 🎨 Customization

### Update Site Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Blog Title",
  description: "Your blog description",
};
```

### Modify Tailwind Theme

Edit `tailwind.config.ts` to customize colors, fonts, and more.

### Change Database Schema

1. Edit `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name <migration_name>`
3. Update types in `lib/hooks.ts` if needed

## 🔒 Security Considerations

- Never commit `.env.local` to version control
- Use environment variables for sensitive data
- Validate all user inputs (already done with Zod)
- Consider adding authentication for post creation
- Implement rate limiting for API endpoints

## 📊 Database Schema

### Post Table

| Field | Type | Description |
|-------|------|-------------|
| id | Int | Primary key (auto-increment) |
| title | String | Post title |
| slug | String | URL-friendly identifier (unique) |
| content | String | Post body content |
| excerpt | String? | Short summary |
| published | Boolean | Publication status |
| featured | Boolean | Featured post flag |
| author | String? | Author name |
| image | String? | Featured image URL |
| category | String? | Post category |
| tags | String? | Comma-separated tags |
| views | Int | View count |
| createdAt | DateTime | Creation timestamp |
| updatedAt | DateTime | Last update timestamp |

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in project settings
5. Deploy!

### Deploy to Other Platforms

Instructions for Netlify, Heroku, or other platforms are similar - connect your Git repo and add environment variables.

## 🐛 Troubleshooting

### Database Connection Error

- Verify DATABASE_URL is correct
- Check Supabase project is active
- Ensure your IP is whitelisted in Supabase

### Prisma Migration Issues

```bash
# Reset database (warning: deletes all data!)
npx prisma migrate reset

# View migration status
npx prisma migrate status
```

### Port Already in Use

```bash
# Use a different port
npm run dev -- -p 3001
```

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 💬 Support

For issues and questions, please open a GitHub issue or contact the development team.

---

Built with ❤️ using modern web technologies
