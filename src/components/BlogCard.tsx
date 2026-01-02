import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  image?: string;
  href: string;
  date?: string;
}

export default function BlogCard({
  title,
  excerpt,
  category,
  image,
  href,
  date,
}: BlogCardProps) {
  return (
    <Link href={href}>
      <article className="group h-full bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-amber-600 cursor-pointer transform hover:-translate-y-1">
        {/* Image placeholder */}
        {image && (
          <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}
        {!image && (
          <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
            <span className="text-4xl">📷</span>
          </div>
        )}

        <div className="p-6">
          {/* Category badge */}
          <div className="inline-block mb-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-700 bg-amber-100 rounded-full group-hover:bg-amber-600 group-hover:text-white transition-colors">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {excerpt}
          </p>

          {/* Date and link */}
          <div className="flex items-center justify-between">
            {date && (
              <span className="text-xs text-gray-500">{date}</span>
            )}
            <span className="ml-auto text-amber-600 group-hover:text-orange-600 flex items-center gap-1 font-semibold text-sm">
              Read More <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
