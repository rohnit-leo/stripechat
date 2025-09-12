"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918700955207"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
