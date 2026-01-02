import BlogCard from "@/components/BlogCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function FurniturePage() {
  const articles = [
    {
      title: "Essential Furniture Pieces for Every Living Room",
      excerpt: "A comprehensive guide to the must-have furniture that creates a functional and stylish living space.",
      category: "Furniture",
      href: "/furniture/living-room-essentials",
      date: "Jan 14, 2024",
    },
    {
      title: "Premium Sofa Selection Guide",
      excerpt: "How to choose the perfect sofa based on size, style, fabric, and your lifestyle needs.",
      category: "Furniture",
      href: "/furniture/sofas",
      date: "Jan 12, 2024",
    },
    {
      title: "Dining Room Tables: Style & Functionality",
      excerpt: "From extending tables to statement pieces - find the perfect dining table for your home.",
      category: "Furniture",
      href: "/furniture/dining-tables",
      date: "Jan 10, 2024",
    },
    {
      title: "Bedroom Furniture Organization",
      excerpt: "Create a restful bedroom with properly selected furniture and smart storage solutions.",
      category: "Furniture",
      href: "/furniture/bedroom-furniture",
      date: "Jan 8, 2024",
    },
    {
      title: "Sustainable Furniture Choices",
      excerpt: "Explore eco-friendly furniture options that don't compromise on style or quality.",
      category: "Furniture",
      href: "/furniture/sustainable",
      date: "Jan 5, 2024",
    },
    {
      title: "Office Furniture for Home Workspaces",
      excerpt: "Design the perfect productive home office with ergonomic and stylish furniture.",
      category: "Furniture",
      href: "/furniture/home-office",
      date: "Dec 28, 2023",
    },
  ];

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-50 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-white mb-4">
            Furniture Collections
          </h1>
          <p className="text-xl text-amber-50 max-w-2xl">
            Discover premium furniture pieces and collections curated for style and quality.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <BlogCard
                key={index}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                href={article.href}
                date={article.date}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
