"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, MessageCircle, Send, Sparkles, Zap } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const message = `Hi! I'm interested in joining Stripechat Agency.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}`

    const whatsappUrl = `https://wa.me/918700955207?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-red-600/20" />
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-600/10 rounded-full blur-xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Contact Our Team</span>
            </div>

            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white mb-8 text-balance leading-tight">
              Contact{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary via-red-500 to-red-600 bg-clip-text text-transparent">
                  Our Team
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-red-600 rounded-full" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto text-pretty leading-relaxed">
              Ready to start your creator journey? Get in touch with our team for{" "}
              <span className="text-primary font-semibold">personalized guidance</span> and support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Get In Touch</span>
              </div>

              <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-8">Get In Touch</h2>
              <p className="text-gray-300 mb-12 text-lg md:text-xl leading-relaxed">
                We're here to help you start your successful creator career. Reach out to us through any of the
                following channels, and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-white mb-2">Phone & WhatsApp</h3>
                        <p className="text-gray-400 mb-3">Call or message us directly</p>
                        <a
                          href="tel:+918700955207"
                          className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg"
                        >
                          +91 8700955207
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-white mb-2">Email</h3>
                        <p className="text-gray-400 mb-3">Send us a detailed message</p>
                        <a
                          href="mailto:info@stripchatagency.in"
                          className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg"
                        >
                          info@stripchatagency.in
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-white mb-2">Response Time</h3>
                        <p className="text-gray-400 mb-3">We typically respond within</p>
                        <p className="text-primary font-semibold text-lg">24 hours or less</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                        <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-white mb-2">Preferred Contact</h3>
                        <p className="text-gray-400 mb-4">For fastest response</p>
                        <Button
                          asChild
                          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full"
                        >
                          <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                            WhatsApp Chat
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-3xl font-black">Send Us a Message</CardTitle>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Fill out the form below and we'll get back to you with personalized information about joining our
                    creator community.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-input border-border text-white placeholder-gray-400 h-12 text-lg"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-input border-border text-white placeholder-gray-400 h-12 text-lg"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-3">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-input border-border text-white placeholder-gray-400 h-12 text-lg"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-input border-border text-white placeholder-gray-400 text-lg"
                        placeholder="Tell us about your interest in becoming a content creator, any questions you have, or your experience level..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 text-white py-4 text-lg font-bold rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-3" />
                      Send Message via WhatsApp
                    </Button>

                    <p className="text-sm text-gray-400 text-center leading-relaxed">
                      By submitting this form, you agree to be contacted by our team regarding creator opportunities.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary/5 via-transparent to-red-600/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Quick Help</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-6">Before You Contact Us</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              You might find answers to your questions in our comprehensive FAQ section
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-red-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">Getting Started</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">Requirements, application process, and first steps</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary bg-transparent rounded-full font-semibold"
                >
                  <a href="/faq#start">View FAQ</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-red-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">Earnings & Payments</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Income potential, payment schedules, and fee structure
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary bg-transparent rounded-full font-semibold"
                >
                  <a href="/faq#payment">View FAQ</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-red-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">Safety & Privacy</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Data protection, privacy measures, and safety protocols
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary bg-transparent rounded-full font-semibold"
                >
                  <a href="/faq#safety">View FAQ</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  )
}
