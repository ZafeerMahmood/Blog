# Portfolio + Blog

This is a simple portfolio and blog website built with Next.js and Tailwind CSS.
It is a static site that is generated at build time.
The blog posts are written in markdown and are rendered as static HTML pages.

## Zafeer.vercel.app - [Live Preview](https://zafeer.vercel.app)

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Supabase](https://supabase.com/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Getting Started

```bash
git clone https://github.com/ZafeerMahmood/Blog
cd Blog
npm install
npm run dev

```

## Environment Variables

```text
SUPABASE_URL=''
SUPABASE_ANON_KEY=''
```

## Database Schema

```sql
CREATE TABLE views (
  slug VARCHAR(255) PRIMARY KEY,
  count INT NOT NULL
);
```

## License

1. You are free to use this code as inspiration.
2. Please do not copy it directly.
3. Remove my personal information from the project before using it.
