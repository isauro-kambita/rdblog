import BlogCard from "@/components/BlogCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GuidesPage() {
  const articles = [
    {
      title: "How to Choose a Sofa for a Small Living Room",
      excerpt: "Expert tips on selecting the perfect sofa that fits your space and lifestyle.",
      category: "Guides",
      href: "/guides/choose-sofa",
      date: "Jan 15, 2024",
    },
    {
      title: "Complete Buying Guide for Dining Furniture",
      excerpt: "Learn what to look for when purchasing dining tables and chairs for your home.",
      category: "Guides",
      href: "/guides/dining-furniture-buying",
      date: "Jan 13, 2024",
    },
    {
      title: "Premium vs Luxury: Understanding Furniture Quality",
      excerpt: "Decode the terminology and learn what sets premium furniture apart from luxury pieces.",
      category: "Guides",
      href: "/guides/premium-vs-luxury",
      date: "Jan 11, 2024",
    },
    {
      title: "Interior Design Mistakes to Avoid",
      excerpt: "Common design errors and how to prevent them in your home improvement projects.",
      category: "Guides",
      href: "/guides/design-mistakes",
      date: "Jan 9, 2024",
    },
    {
      title: "Measuring & Planning Your Room Layout",
      excerpt: "Technical guide to measuring spaces and planning furniture placement effectively.",
      category: "Guides",
      href: "/guides/room-planning",
      date: "Jan 7, 2024",
    },
    {
      title: "Budget-Friendly Interior Design Tips",
      excerpt: "Create beautiful spaces without breaking the bank with smart shopping and design choices.",
      category: "Guides",
      href: "/guides/budget-design",
      date: "Jan 4, 2024",
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
            Design & Buying Guides
          </h1>
          <p className="text-xl text-amber-50 max-w-2xl">
            Educational content to help you make informed decisions about your interior design and furniture purchases.
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
