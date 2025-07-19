'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Instagram, Phone, Mail, Search } from 'lucide-react'
import SearchOverlay from '@/components/search/SearchOverlay'

const BromaStyleHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navigationItems = [
    { href: '/menu', label: 'MENU' },
    { href: '/visit-us', label: 'VISIT US' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
  ]

  const iconItems = [
    { 
      href: 'https://instagram.com/aprilnbutter', 
      icon: Instagram, 
      label: 'Instagram',
      external: true 
    },
    { 
      href: 'tel:+15034821234', 
      icon: Phone, 
      label: 'Phone' 
    },
    { 
      href: 'mailto:hello@aprilandbutter.com', 
      icon: Mail, 
      label: 'Email' 
    },
    { 
      href: '#', 
      icon: Search, 
      label: 'Search',
      onClick: () => setIsSearchOpen(true)
    },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-neutral-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LEFT - LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="group">
              <h1 className="text-2xl lg:text-3xl font-display font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 tracking-wide">
                APRIL & BUTTER
              </h1>
            </Link>
          </div>

          {/* CENTER - NAVIGATION MENU (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-nav font-bold uppercase tracking-[0.1em] text-neutral-800 hover:text-primary-700 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* RIGHT - SOCIAL & CONTACT ICONS (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            {iconItems.map((item) => {
              const IconComponent = item.icon
              
              if (item.onClick) {
                return (
                  <button
                    key={item.href}
                    onClick={item.onClick}
                    className="text-neutral-700 hover:text-primary-700 transition-colors duration-300"
                    aria-label={item.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </button>
                )
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-700 transition-colors duration-300"
                  aria-label={item.label}
                  {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  <IconComponent className="w-5 h-5" />
                </Link>
              )
            })}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-primary-700 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white">
            <div className="py-6 space-y-6">
              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm font-nav font-bold uppercase tracking-[0.1em] text-neutral-800 hover:text-primary-700 transition-colors duration-300 py-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Icons */}
              <div className="flex items-center space-x-6 pt-4 border-t border-neutral-100">
                {iconItems.map((item) => {
                  const IconComponent = item.icon
                  
                  if (item.onClick) {
                    return (
                      <button
                        key={item.href}
                        onClick={() => {
                          item.onClick()
                          setIsMenuOpen(false)
                        }}
                        className="text-neutral-700 hover:text-primary-700 transition-colors duration-300"
                        aria-label={item.label}
                      >
                        <IconComponent className="w-5 h-5" />
                      </button>
                    )
                  }
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-neutral-700 hover:text-primary-700 transition-colors duration-300"
                      aria-label={item.label}
                      {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <IconComponent className="w-5 h-5" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Search Overlay */}
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </header>
  )
}

export default BromaStyleHeader