# RDBlogue Project - Quick Reference

## 🎯 What Has Been Created

A fully functional, professional interior design blog website with:

### Pages & Routes
✅ **Home** (`/`) - Featured articles + category preview  
✅ **Interiors** (`/interiors`) - 6 interior design articles  
✅ **Furniture** (`/furniture`) - 6 furniture guides  
✅ **Rooms** (`/rooms`) - 6 room-specific design guides  
✅ **Guides** (`/guides`) - 6 educational buying guides  
✅ **Ireland** (`/ireland`) - 6 Ireland-focused articles  

### Components
✅ **Navbar** - Sticky navigation with responsive burger menu  
✅ **Footer** - Multi-section footer with contact info  
✅ **HeroSection** - Animated landing section with CTAs  
✅ **BlogCard** - Reusable article preview cards  

### Features Implemented
✅ File-system based routing (Next.js App Router)  
✅ Fully responsive design (mobile, tablet, desktop)  
✅ Professional color scheme (Amber/Orange)  
✅ Smooth animations and transitions  
✅ TypeScript for type safety  
✅ Tailwind CSS for styling  
✅ Static site generation  
✅ SEO-optimized metadata  
✅ Icon library (Lucide React)  

## 🚀 Running the Project

### Start Development Server
```bash
npm run dev
# Access at http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

### Format & Lint Code
```bash
npm run lint
```

## 📁 Key Files to Customize

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Home page content & layout |
| `src/app/layout.tsx` | Global layout, metadata, Navbar/Footer |
| `src/components/Navbar.tsx` | Navigation menu & logo |
| `src/components/Footer.tsx` | Footer content & links |
| `src/app/globals.css` | Global styles & animations |
| `[section]/page.tsx` | Category pages content |

## 🎨 Customization Quick Tips

### Change Logo Text
Edit `src/components/Navbar.tsx` line 15:
```tsx
<div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
  YOUR_BRAND_NAME
</div>
```

### Change Primary Colors
Search & replace globally:
- `amber-` → `blue-`, `slate-`, `indigo-`, etc.
- `orange-` → Your secondary color

### Update Menu Items
Edit `src/components/Navbar.tsx` array (lines 10-18)

### Add New Articles
Edit the `articles` array in any section's `page.tsx`

### Change Footer Contact Info
Edit `src/components/Footer.tsx` (lines 40-60)

## 📊 Site Structure Overview

```
Homepage (/)
├── Featured Articles (6 articles)
├── Category Preview Section
└── Navigation to all sections

Category Pages (5 sections)
├── /interiors (6 articles)
├── /furniture (6 articles)
├── /rooms (6 articles)
├── /guides (6 articles)
└── /ireland (6 articles)

Header & Navigation
├── Sticky Navbar with responsive menu
└── Active page highlighting

Footer
├── Brand info
├── Quick links
├── Categories
└── Contact info
```

## 🔧 Development Workflow

1. **Edit Components**: Changes auto-refresh in development
2. **Add Articles**: Update article arrays in page files
3. **Style Changes**: Tailwind classes are applied instantly
4. **Build Check**: Run `npm run build` before deployment
5. **Deploy**: Push to GitHub → Auto-deploy on Vercel

## 📱 Mobile Responsiveness

The site is fully responsive with breakpoints:
- **Mobile** (< 768px): Single column, burger menu
- **Tablet** (768px-1024px): 2-column grid
- **Desktop** (> 1024px): 3-column grid

Test by resizing browser or using DevTools Device Emulation.

## 🎯 Next Steps for Your Project

1. **Add Real Content**
   - Replace placeholder articles with real content
   - Add actual images/media

2. **Create Article Detail Pages**
   - Create `[slug]/page.tsx` files in each section
   - Link articles to detail pages

3. **Add Features**
   - Search functionality
   - Category filtering
   - Newsletter signup
   - Comments section

4. **SEO Enhancement**
   - Add structured data (JSON-LD)
   - Create sitemap.xml
   - Add robots.txt

5. **Deployment**
   - Push to GitHub
   - Connect to Vercel
   - Configure custom domain

## 💡 Pro Tips

- Use the `<'use client'>` directive sparingly (only for interactive components)
- Leverage Tailwind's responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Components are located in `/src/components` for reusability
- Each page can have its own metadata in `generateMetadata()`
- Images should go in `/public` folder

## 🐛 Troubleshooting

**Build fails**: Run `npm install` to ensure all dependencies are installed

**Port 3000 in use**: Kill the process or run on different port:
```bash
npm run dev -- -p 3001
```

**TypeScript errors**: Check `tsconfig.json` settings

**Styling not applied**: Ensure Tailwind classes are spelled correctly (hyphens, not underscores)

## 📚 Documentation Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

---

**Project Status**: ✅ Ready for Development & Customization

Happy coding! 🎉
