"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/why-join", label: "Why Join Us" },
    { href: "/requirements", label: "Requirements" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-heading font-bold text-xl text-white">Stripechat Agency</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+918700955207"
              className="flex items-center space-x-1 text-gray-300 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 8700955207</span>
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                Join Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-primary"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-sm rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+918700955207"
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary px-3 py-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 8700955207</span>
                </a>
                <a
                  href="mailto:info@stripchatagency.in"
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary px-3 py-2 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@stripchatagency.in</span>
                </a>
                <div className="px-3 py-2">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                      Join Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
