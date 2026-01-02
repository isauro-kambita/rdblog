import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-3">
              RDBlogue
            </h3>
            <p className="text-gray-400 text-sm">
              Discover premium interior design and furniture inspiration for your Irish home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/interiors" className="text-gray-400 hover:text-amber-400 transition">
                  Interiors
                </Link>
              </li>
              <li>
                <Link href="/furniture" className="text-gray-400 hover:text-amber-400 transition">
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-gray-400 hover:text-amber-400 transition">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-amber-400 transition">
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/rooms/living-room" className="text-gray-400 hover:text-amber-400 transition">
                  Living Room
                </Link>
              </li>
              <li>
                <Link href="/rooms/bedroom" className="text-gray-400 hover:text-amber-400 transition">
                  Bedroom
                </Link>
              </li>
              <li>
                <Link href="/rooms/dining-room" className="text-gray-400 hover:text-amber-400 transition">
                  Dining Room
                </Link>
              </li>
              <li>
                <Link href="/ireland" className="text-gray-400 hover:text-amber-400 transition">
                  Ireland
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-amber-400" />
                <span className="text-gray-400">hello@rdblogue.ie</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-400" />
                <span className="text-gray-400">+353 (0)1 234 5678</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-amber-400 mt-0.5" />
                <span className="text-gray-400">Dublin, Ireland</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 RDBlogue. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition">
                Terms & Conditions
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
