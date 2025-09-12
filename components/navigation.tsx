"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
import Image from "next/image"

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
    <nav className="bg-black/95 backdrop-blur-sm border-b border-primary/30 sticky top-0 z-50 shadow-lg shadow-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
              <Image src="/logo.png" alt="Stripechat Agency Logo" fill className="object-cover" priority />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl text-white group-hover:text-primary transition-colors">
                STRIPECHAT
              </span>
              <span className="font-heading font-semibold text-sm text-gray-400 -mt-1">AGENCY</span>
            </div>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+918700955207"
              className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-all duration-300 group"
            >
              <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">+91 8700955207</span>
            </a>
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 text-white font-semibold px-6 py-2 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
            >
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

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-br from-card/95 to-black/95 backdrop-blur-sm rounded-xl mt-2 border border-primary/20 shadow-xl">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white hover:bg-primary/10 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-primary/20">
                <a
                  href="tel:+918700955207"
                  className="flex items-center space-x-3 text-gray-300 hover:text-primary px-4 py-3 rounded-lg transition-all duration-300 hover:bg-primary/10"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 8700955207</span>
                </a>
                <a
                  href="mailto:info@stripchatagency.in"
                  className="flex items-center space-x-3 text-gray-300 hover:text-primary px-4 py-3 rounded-lg transition-all duration-300 hover:bg-primary/10"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@stripchatagency.in</span>
                </a>
                <div className="px-4 py-3">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 text-white font-semibold rounded-full"
                  >
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
