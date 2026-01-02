import BlogCard from "@/components/BlogCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function IrelandPage() {
  const articles = [
    {
      title: "Interior Design in Irish Homes",
      excerpt: "Explore how Irish architecture and climate influence interior design choices.",
      category: "Ireland",
      href: "/ireland/design-ireland",
      date: "Jan 14, 2024",
    },
    {
      title: "Interior Design Trends in Ireland 2024",
      excerpt: "Discover the latest design trends shaping Irish homes, from materials to color palettes.",
      category: "Ireland",
      href: "/ireland/design-trends",
      date: "Jan 12, 2024",
    },
    {
      title: "Traditional Irish Architecture & Interiors",
      excerpt: "Celebrate Irish heritage with design elements inspired by traditional architecture.",
      category: "Ireland",
      href: "/ireland/traditional-design",
      date: "Jan 10, 2024",
    },
    {
      title: "Buying Furniture in Ireland: Where & How",
      excerpt: "Guide to Irish furniture retailers and how to shop for quality pieces locally.",
      category: "Ireland",
      href: "/ireland/furniture-shopping",
      date: "Jan 8, 2024",
    },
    {
      title: "Irish Climate & Interior Design",
      excerpt: "How Ireland's weather influences materials, colors, and design choices for homes.",
      category: "Ireland",
      href: "/ireland/climate-design",
      date: "Jan 5, 2024",
    },
    {
      title: "Dublin Home Design: City Living Spaces",
      excerpt: "Specialized guide for designing modern homes in Dublin's unique urban environment.",
      category: "Ireland",
      href: "/ireland/dublin-design",
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
            Ireland Design Hub
          </h1>
          <p className="text-xl text-amber-50 max-w-2xl">
            Discover interior design insights specifically tailored for Irish homes, architecture, and lifestyle.
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
