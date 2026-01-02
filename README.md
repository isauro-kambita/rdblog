# RDBlogue - Premium Interior Design & Furniture Blog

A modern, professional interior design and furniture blog built with the latest Next.js 16, TypeScript, Tailwind CSS, and responsive design principles.

## 🎨 Project Overview

RDBlogue is a sophisticated blogging platform designed for Irish interior design enthusiasts. It features a clean, premium aesthetic with comprehensive content organization across multiple categories.

### Key Features

- **File-System Based Routing**: Modern Next.js App Router with clean URL structure
- **Responsive Design**: Mobile-first approach with burger menu for small devices
- **Professional UI/UX**: Premium gradient themes with amber/orange accent colors
- **Optimized Performance**: Static site generation with Next.js 16
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid, responsive design

## 📋 Site Structure

### Main Navigation Menu

1. **Home** (`/`) - Landing page with featured articles and category overview
2. **Interiors** (`/interiors`) - Interior design styles, philosophy, and curated inspirations
3. **Furniture** (`/furniture`) - Premium furniture collections and recommendations
4. **Rooms** (`/rooms`) - Design guides for specific rooms (Living Room, Bedroom, Dining Room, Kitchen, Home Office, Small Spaces)
5. **Guides** (`/guides`) - Educational content (buying guides, design tips, comparisons)
6. **Ireland** (`/ireland`) - Ireland-specific content for local context and SEO

### Content Categories

#### Interiors
- Contemporary Interior Design Styles
- Classic & Traditional Design Elements
- Modern vs Classic Design
- Minimalist Design Philosophy
- Luxury Interior Design
- Color Theory in Design

#### Furniture
- Living Room Essentials
- Premium Sofa Selection
- Dining Room Tables
- Bedroom Furniture Organization
- Sustainable Furniture
- Home Office Furniture

#### Rooms
- Living Room Design
- Bedroom Design
- Dining Room Design
- Kitchen Interior Design
- Home Office Setup
- Small Spaces Solutions

#### Guides
- How to Choose a Sofa
- Buying Guide for Dining Furniture
- Premium vs Luxury Furniture
- Design Mistakes to Avoid
- Room Planning & Measuring
- Budget-Friendly Design Tips

#### Ireland
- Interior Design in Irish Homes
- Design Trends in Ireland
- Traditional Irish Architecture
- Furniture Shopping in Ireland
- Climate & Design Influence
- Dublin Design Solutions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Technology Stack

### Core Framework
- **Next.js 16.1.1** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Static type checking

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Lucide React** - Icon library

### Development Tools
- **ESLint** - Code quality and style enforcement
- **Turbopack** - Fast bundler (enabled in dev)

## 📁 Project Structure

```
rdblog/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Navbar & Footer
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── interiors/
│   │   │   └── page.tsx        # Interiors section
│   │   ├── furniture/
│   │   │   └── page.tsx        # Furniture section
│   │   ├── rooms/
│   │   │   └── page.tsx        # Rooms section
│   │   ├── guides/
│   │   │   └── page.tsx        # Guides section
│   │   └── ireland/
│   │       └── page.tsx        # Ireland section
│   └── components/
│       ├── Navbar.tsx          # Navigation bar with responsive menu
│       ├── Footer.tsx          # Footer with links and info
│       ├── HeroSection.tsx     # Home page hero with animations
│       └── BlogCard.tsx        # Reusable article card component
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── eslint.config.mjs
```

## 🎯 Component Overview

### Navbar
- Sticky navigation with smooth scrolling
- Responsive burger menu for mobile devices
- Smooth hover transitions
- Brand logo with gradient text

### Footer
- Multi-column layout
- Quick links to all sections
- Contact information
- Social navigation
- Copyright and legal links

### HeroSection
- Full-screen hero with animated gradient blobs
- Call-to-action buttons
- Featured categories grid
- Responsive typography

### BlogCard
- Reusable article preview component
- Category badge
- Excerpt with line clamping
- Date and read more link
- Hover effects and animations

## 🎨 Design System

### Color Palette
- **Primary**: Amber (#d4af37) - Premium, warm, professional
- **Secondary**: Orange (#f97316) - Energetic, accent color
- **Background**: White (#ffffff) - Clean, premium
- **Text**: Gray (#111827) - Readable, professional
- **Dark Background**: Gray-900 (#111827) - Contrast sections

### Typography
- **Display**: Bold, large (7xl on desktop, 5xl on mobile)
- **Headlines**: Bold, medium (4xl-2xl range)
- **Body**: Regular weight, medium size
- **Font Family**: Geist Sans (primary), Geist Mono (code)

### Spacing & Layout
- Max width container: 80rem (7xl)
- Responsive padding: 1rem (mobile) to 2rem (desktop)
- Grid gaps: 1.5rem to 2rem
- Consistent margin spacing: 5rem to 20rem sections

## 🔧 Customization Guide

### Adding New Pages
1. Create a new folder in `src/app/[section]/`
2. Add a `page.tsx` file
3. The URL will automatically match the folder structure

### Modifying Styles
- Edit `src/app/globals.css` for global styles
- Use Tailwind classes directly in components
- Customize theme in Tailwind configuration

### Adding Articles
- Update the `articles` array in each section's `page.tsx`
- Each article object should have: `title`, `excerpt`, `category`, `href`, `date`

### Colors
To change the primary color scheme, search and replace:
- `amber-` with your preferred Tailwind color
- `orange-` with your secondary color

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column, burger menu)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3+ columns)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel automatically detects Next.js and configures build settings
3. Deploy with `git push` to your main branch

### Other Platforms
- Build: `npm run build`
- Start: `npm start`
- Ensure Node.js 18+ is available on your hosting platform

## 📈 Performance

- Static site generation for all pages
- Code splitting and lazy loading
- Turbopack for fast development builds
- Optimized CSS with Tailwind
- ~6 seconds build time with all pages

## 🔒 SEO Optimization

- Metadata configured in `layout.tsx`
- Structured semantic HTML
- Fast loading times
- Mobile responsive design
- Open Graph meta tags

## 📝 Future Enhancements

- [ ] Individual article detail pages
- [ ] Search functionality
- [ ] Blog category filtering
- [ ] Newsletter subscription
- [ ] Comments section
- [ ] Related articles
- [ ] Reading time estimates
- [ ] Author information
- [ ] Tags and taxonomy
- [ ] Admin dashboard

## 🤝 Contributing

To add features or fix bugs:
1. Create a new branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is created for RDBlogue. All rights reserved.

## 📞 Support

For questions or issues:
- Email: hello@rdblogue.ie
- Phone: +353 (0)1 234 5678
- Location: Dublin, Ireland

---

**Built with ❤️ using Next.js 16 and Tailwind CSS**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
