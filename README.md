# Portfolio + Blog

This is a simple portfolio and blog website built with Next.js and Tailwind CSS. It is a static site that is generated at build time. The blog posts are written in markdown and are rendered as static HTML pages.

## Features

- **Portfolio**: Showcase your projects with a title, description, and image.
- **Blog**: Write blog posts in markdown and have them rendered as static HTML pages.
- **SEO**: Optimized for search engines with meta tags and Open Graph tags.
- **Syntax Highlighting**: Code blocks in blog posts are syntax highlighted.
- **Mobile Responsive**: Works on all devices.

## Getting Started

### 1. Clone the Repository

```bash
    git clone
```

### 2. Install Dependencies

```bash
    npm install
```

### 3. Add Your Projects

Add your projects to the `projects` array in `data/projects.js`.

```javascript
export const projects = [
  {
    title: "Project 1",
    description: "Description of project 1.",
    imgSrc: "/images/project1.png",
    href: "https://project1.com",
  },
  {
    title: "Project 2",
    description: "Description of project 2.",
    imgSrc: "/images/project2.png",
    href: "https://project2.com",
  },
];
```

### 4. Write Blog Posts

Write your blog posts in markdown and place them in the `content/posts` directory.

### 5. Run the Development Server

```bash
    npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 6. Build for Production

```bash
    npm run build
```

Your site is ready to be deployed.

Things Todo

- [ ] Add a contact form
- [ ] Blog Search
- [ ] Blogs List
- [ ] Render Blogs in a separate page
- [ ] Add a blog post page
