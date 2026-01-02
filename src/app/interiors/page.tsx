import BlogCard from "@/components/BlogCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function InteriorsPage() {
  const articles = [
    {
      title: "Contemporary Interior Design Styles",
      excerpt: "Explore modern and minimalist approaches to creating clean, sophisticated interior spaces.",
      category: "Interiors",
      href: "/interiors/contemporary",
      date: "Jan 14, 2024",
    },
    {
      title: "Classic & Traditional Design Elements",
      excerpt: "Timeless design principles that have stood the test of time in interior aesthetics.",
      category: "Interiors",
      href: "/interiors/classic",
      date: "Jan 12, 2024",
    },
    {
      title: "Modern vs Classic: Furnishing Your Irish Home",
      excerpt: "Blend traditional Irish charm with modern design for a unique aesthetic.",
      category: "Interiors",
      href: "/interiors/modern-vs-classic",
      date: "Jan 10, 2024",
    },
    {
      title: "The Philosophy of Minimalist Design",
      excerpt: "Discover how less really can be more in creating beautiful, functional spaces.",
      category: "Interiors",
      href: "/interiors/minimalism",
      date: "Jan 8, 2024",
    },
    {
      title: "Luxury Interior Design: What Defines It?",
      excerpt: "Understand the principles that separate luxury interiors from standard design.",
      category: "Interiors",
      href: "/interiors/luxury",
      date: "Jan 5, 2024",
    },
    {
      title: "Color Theory in Interior Design",
      excerpt: "Master the use of colors to create mood, balance, and visual harmony.",
      category: "Interiors",
      href: "/interiors/color-theory",
      date: "Dec 30, 2023",
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
            Interior Design
          </h1>
          <p className="text-xl text-amber-50 max-w-2xl">
            Explore interior design styles, philosophies, and curated inspirations for creating beautiful spaces.
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
