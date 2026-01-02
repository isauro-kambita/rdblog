'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your Home, <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Your Story</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover premium interior design and curated furniture collections crafted for the modern Irish home. Explore timeless styles and contemporary elegance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="/rooms"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-amber-600/50 transition-all duration-300 transform hover:scale-105"
          >
            Explore Rooms <ArrowRight size={20} />
          </Link>
          <Link
            href="/guides"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-amber-600 text-amber-400 font-semibold rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300"
          >
            Read Guides
          </Link>
        </div>

        {/* Featured categories */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link href="/interiors" className="group">
            <div className="h-32 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg p-4 flex flex-col items-center justify-center hover:from-amber-500/40 hover:to-orange-500/40 transition-all duration-300 border border-amber-600/30 hover:border-amber-400">
              <span className="text-2xl mb-2">🎨</span>
              <span className="text-white font-semibold text-sm group-hover:text-amber-400 transition">Interiors</span>
            </div>
          </Link>
          <Link href="/furniture" className="group">
            <div className="h-32 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg p-4 flex flex-col items-center justify-center hover:from-amber-500/40 hover:to-orange-500/40 transition-all duration-300 border border-amber-600/30 hover:border-amber-400">
              <span className="text-2xl mb-2">🛋️</span>
              <span className="text-white font-semibold text-sm group-hover:text-amber-400 transition">Furniture</span>
            </div>
          </Link>
          <Link href="/rooms" className="group">
            <div className="h-32 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg p-4 flex flex-col items-center justify-center hover:from-amber-500/40 hover:to-orange-500/40 transition-all duration-300 border border-amber-600/30 hover:border-amber-400">
              <span className="text-2xl mb-2">🏠</span>
              <span className="text-white font-semibold text-sm group-hover:text-amber-400 transition">Rooms</span>
            </div>
          </Link>
          <Link href="/ireland" className="group">
            <div className="h-32 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg p-4 flex flex-col items-center justify-center hover:from-amber-500/40 hover:to-orange-500/40 transition-all duration-300 border border-amber-600/30 hover:border-amber-400">
              <span className="text-2xl mb-2">🍀</span>
              <span className="text-white font-semibold text-sm group-hover:text-amber-400 transition">Ireland</span>
            </div>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
