import BlogCard from "@/components/BlogCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RoomsPage() {
  const articles = [
    {
      title: "Living Room Design Essentials",
      excerpt: "Create a welcoming living space with our comprehensive design and furniture guide.",
      category: "Rooms",
      href: "/rooms/living-room",
      date: "Jan 14, 2024",
    },
    {
      title: "The Complete Bedroom Design Guide",
      excerpt: "Design a serene and stylish bedroom that promotes rest and relaxation.",
      category: "Rooms",
      href: "/rooms/bedroom",
      date: "Jan 12, 2024",
    },
    {
      title: "Dining Room Design & Layout",
      excerpt: "Perfect your dining space with tables, chairs, lighting, and decor recommendations.",
      category: "Rooms",
      href: "/rooms/dining-room",
      date: "Jan 10, 2024",
    },
    {
      title: "Modern Kitchen Interior Design",
      excerpt: "Create a functional and beautiful kitchen that's both practical and aesthetically pleasing.",
      category: "Rooms",
      href: "/rooms/kitchen",
      date: "Jan 8, 2024",
    },
    {
      title: "Home Office Setup Guide",
      excerpt: "Design a productive and inspiring workspace in your home with proper furniture and layout.",
      category: "Rooms",
      href: "/rooms/home-office",
      date: "Jan 5, 2024",
    },
    {
      title: "Small Spaces: Maximizing Your Room",
      excerpt: "Smart design strategies for creating functional and beautiful small living spaces.",
      category: "Rooms",
      href: "/rooms/small-spaces",
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
            Room Design Guides
          </h1>
          <p className="text-xl text-amber-50 max-w-2xl">
            Explore design solutions and furniture recommendations for every room in your home.
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
