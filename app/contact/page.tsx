"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"

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

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=800&width=1920"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-black text-4xl md:text-6xl text-white mb-6 text-balance">
              Contact{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-pretty">
              Ready to start your creator journey? Get in touch with our team for personalized guidance and support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-8">Get In Touch</h2>
              <p className="text-gray-300 mb-8 text-lg">
                We're here to help you start your successful creator career. Reach out to us through any of the
                following channels, and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg mb-1">Phone & WhatsApp</h3>
                        <p className="text-gray-400 mb-2">Call or message us directly</p>
                        <a
                          href="tel:+918700955207"
                          className="text-primary hover:text-primary/80 transition-colors font-medium"
                        >
                          +91 8700955207
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg mb-1">Email</h3>
                        <p className="text-gray-400 mb-2">Send us a detailed message</p>
                        <a
                          href="mailto:info@stripchatagency.in"
                          className="text-primary hover:text-primary/80 transition-colors font-medium"
                        >
                          info@stripchatagency.in
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg mb-1">Response Time</h3>
                        <p className="text-gray-400 mb-2">We typically respond within</p>
                        <p className="text-primary font-medium">24 hours or less</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg mb-1">Preferred Contact</h3>
                        <p className="text-gray-400 mb-2">For fastest response</p>
                        <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
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

            {/* Contact Form */}
            <div>
              <Card className="bg-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Send Us a Message</CardTitle>
                  <p className="text-gray-400">
                    Fill out the form below and we'll get back to you with personalized information about joining our
                    creator community.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-input border-border text-white placeholder-gray-400"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-input border-border text-white placeholder-gray-400"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-input border-border text-white placeholder-gray-400"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-input border-border text-white placeholder-gray-400"
                        placeholder="Tell us about your interest in becoming a content creator, any questions you have, or your experience level..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message via WhatsApp
                    </Button>

                    <p className="text-sm text-gray-400 text-center">
                      By submitting this form, you agree to be contacted by our team regarding creator opportunities.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">Before You Contact Us</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              You might find answers to your questions in our comprehensive FAQ section
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white text-lg mb-2">Getting Started</h3>
                <p className="text-gray-400 text-sm mb-4">Requirements, application process, and first steps</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  <a href="/faq#start">View FAQ</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white text-lg mb-2">Earnings & Payments</h3>
                <p className="text-gray-400 text-sm mb-4">Income potential, payment schedules, and fee structure</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  <a href="/faq#payment">View FAQ</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white text-lg mb-2">Safety & Privacy</h3>
                <p className="text-gray-400 text-sm mb-4">Data protection, privacy measures, and safety protocols</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
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
