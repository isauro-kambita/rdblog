import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featuredArticles = [
    {
      title: "How to Choose the Perfect Sofa for Your Small Living Room",
      excerpt: "Expert tips on selecting furniture that maximizes space without compromising on style and comfort.",
      category: "Guides",
      href: "/guides/choose-sofa",
      date: "Jan 15, 2024",
    },
    {
      title: "Modern vs Classic: Furnishing Your Irish Home",
      excerpt: "Explore the differences between contemporary and classic interior design styles for the Irish market.",
      category: "Interiors",
      href: "/interiors/modern-vs-classic",
      date: "Jan 12, 2024",
    },
    {
      title: "The Complete Dining Room Design Guide",
      excerpt: "Create the perfect dining space with our comprehensive guide to tables, chairs, lighting, and decor.",
      category: "Rooms",
      href: "/rooms/dining-room",
      date: "Jan 10, 2024",
    },
    {
      title: "Premium vs Luxury: Understanding Furniture Quality",
      excerpt: "Decode the terminology and learn what truly sets premium furniture apart from luxury pieces.",
      category: "Guides",
      href: "/guides/premium-vs-luxury",
      date: "Jan 8, 2024",
    },
    {
      title: "Interior Design Trends in Ireland 2024",
      excerpt: "Discover the latest design trends shaping Irish homes, from materials to color palettes.",
      category: "Ireland",
      href: "/ireland/design-trends",
      date: "Jan 5, 2024",
    },
    {
      title: "Living Room Layouts That Maximize Comfort",
      excerpt: "Learn proven layout strategies to create a functional and beautiful living space.",
      category: "Rooms",
      href: "/rooms/living-room",
      date: "Dec 28, 2023",
    },
  ];

  return (
    <main>
      <HeroSection />

      {/* Featured Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600">
              Discover our latest insights on interior design, furniture, and creating beautiful spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
            Explore our complete collection of interior design guides and premium furniture recommendations tailored for modern Irish homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/furniture"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Browse Furniture <ArrowRight size={20} />
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-amber-600 transition-all duration-300"
            >
              Read All Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Explore by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Interiors Card */}
            <Link href="/interiors">
              <div className="group relative overflow-hidden rounded-lg shadow-lg h-64 bg-gradient-to-br from-slate-700 to-slate-900 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all duration-300"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="text-6xl mb-4">🎨</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Interiors</h3>
                  <p className="text-gray-300 text-sm">
                    Design styles, philosophy, and curated inspirations
                  </p>
                  <div className="mt-4 text-amber-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Furniture Card */}
            <Link href="/furniture">
              <div className="group relative overflow-hidden rounded-lg shadow-lg h-64 bg-gradient-to-br from-slate-700 to-slate-900 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all duration-300"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="text-6xl mb-4">🛋️</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Furniture</h3>
                  <p className="text-gray-300 text-sm">
                    Premium collections and furniture recommendations
                  </p>
                  <div className="mt-4 text-amber-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Rooms Card */}
            <Link href="/rooms">
              <div className="group relative overflow-hidden rounded-lg shadow-lg h-64 bg-gradient-to-br from-slate-700 to-slate-900 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all duration-300"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="text-6xl mb-4">🏠</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Rooms</h3>
                  <p className="text-gray-300 text-sm">
                    Design guides for each room in your home
                  </p>
                  <div className="mt-4 text-amber-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
