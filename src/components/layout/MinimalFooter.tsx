'use client'

import Link from 'next/link'
import { Instagram } from 'lucide-react'

const MinimalFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-2xl font-display font-bold text-white tracking-wide">
              APRIL & BUTTER
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed max-w-sm text-sm">
              A cozy earth-toned bakery in Bali where every pastry is crafted with care and quiet love. Fresh ingredients, warm hospitality, and peaceful moments await you daily.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-wide text-neutral-300">
              Links
            </h4>
            <nav className="space-y-3">
              <Link
                href="/menu"
                className="block text-neutral-400 hover:text-white font-light transition-colors duration-300"
              >
                Menu
              </Link>
              <Link
                href="/visit-us"
                className="block text-neutral-400 hover:text-white font-light transition-colors duration-300"
              >
                Visit Us
              </Link>
              <Link
                href="/contact"
                className="block text-neutral-400 hover:text-white font-light transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-wide text-neutral-300">
              Connect
            </h4>
            <div className="space-y-3 text-neutral-400 font-light">
              <p>(503) 482-1234</p>
              <p>hello@aprilandbutter.com</p>
              <p>1604 Bali Indonesia</p>
            </div>
            
            {/* Social */}
            <div className="pt-4">
              <a
                href="https://instagram.com/aprilnbutter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-light">@aprilnbutter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-500 font-light text-sm">
              © {currentYear} April & Butter. All rights reserved.
            </p>
            <p className="text-neutral-500 font-light text-sm">
              Bali, Indonesia • Tropical Paradise
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MinimalFooter