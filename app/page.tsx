import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
  Play,
  CheckCircle,
  Globe,
  Headphones,
  Sparkles,
  Zap,
  Target,
  Award,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-red-600/20" />
          {/* Animated geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-600/10 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-lg animate-bounce" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Professional Creator Management</span>
            </div>
          </div>

          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white mb-8 text-balance leading-tight">
            Empowering{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-red-500 to-red-600 bg-clip-text text-transparent">
                Digital
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-red-600 rounded-full" />
            </span>
            <br />
            <span className="text-gray-200">Creators</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto text-pretty leading-relaxed">
            Build your career as a <span className="text-primary font-semibold">live presenter</span>, educator, or
            entertainer with professional training,
            <span className="text-primary font-semibold"> 24/7 support</span>, and transparent income opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 text-white px-10 py-6 text-xl font-bold rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                <Zap className="mr-3 w-6 h-6" />
                Start Your Journey
                <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 text-white hover:bg-primary/10 hover:border-primary px-10 py-6 text-xl font-semibold bg-transparent rounded-full backdrop-blur-sm"
            >
              <Link href="/about">
                <Play className="mr-3 w-6 h-6" />
                Learn More
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-gray-400 font-medium">Active Creators</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-gray-400 font-medium">Support Available</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-gray-400 font-medium">Privacy Protected</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                ₹50K+
              </div>
              <div className="text-gray-400 font-medium">Avg. Monthly Income</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Our Services</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">What We Offer</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive support to build and grow your digital creator career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Professional Training</h3>
                <p className="text-gray-400 leading-relaxed">
                  Complete onboarding, technical setup, and audience-building strategies to maximize your success.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Career Growth</h3>
                <p className="text-gray-400 leading-relaxed">
                  Personalized mentoring and growth strategies to help you build a sustainable income stream.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Privacy & Security</h3>
                <p className="text-gray-400 leading-relaxed">
                  Complete data protection, legal compliance, and privacy safeguards for your peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Flexible Schedule</h3>
                <p className="text-gray-400 leading-relaxed">
                  Work on your own terms with flexible hours that fit your lifestyle and commitments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-400 leading-relaxed">
                  Round-the-clock technical and professional support to help you succeed at every step.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Global Reach</h3>
                <p className="text-gray-400 leading-relaxed">
                  Access to international platforms and audiences to maximize your earning potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary/5 via-transparent to-red-600/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Why Choose Us</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">
              Why Choose Stripechat Agency?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-white mb-2">Transparent Payments</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Clear payment structure with no hidden fees or deductions
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-white mb-2">Professional Development</h4>
                  <p className="text-gray-400 leading-relaxed">Continuous training and skill development programs</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-white mb-2">Legal Compliance</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Full legal protection and compliance with all regulations
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-white mb-2">Community Support</h4>
                  <p className="text-gray-400 leading-relaxed">Join a supportive community of successful creators</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-red-600/20 rounded-3xl p-12 border border-primary/20">
                <div className="text-center space-y-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-red-600 rounded-full mx-auto flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl font-bold text-white mb-4">Join Our Success Story</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Become part of a thriving community where creators build sustainable careers with professional
                      support and guidance.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">95%</div>
                      <div className="text-sm text-gray-400">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">4.9★</div>
                      <div className="text-sm text-gray-400">Creator Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary/10 via-red-600/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-full mx-auto flex items-center justify-center mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
          </div>

          <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">
            Ready to Start Your Creator Journey?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Join hundreds of successful creators who are building their careers with our support
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 text-white px-10 py-6 text-xl font-bold rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                Apply Now <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white px-10 py-6 text-xl font-semibold bg-transparent rounded-full backdrop-blur-sm"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-primary/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-primary/20">
                  <Image src="/logo.png" alt="Stripechat Agency Logo" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-black text-xl text-white">STRIPECHAT</span>
                  <span className="font-heading font-semibold text-sm text-gray-400 -mt-1">AGENCY</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Empowering digital creators with professional training, career growth, and income opportunities in the
                live streaming and content creation industry.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors font-medium">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors font-medium">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors font-medium">
                  YouTube
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-6 text-lg">Quick Links</h4>
              <div className="space-y-3">
                <Link href="/about" className="block text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/services" className="block text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
                <Link href="/requirements" className="block text-gray-400 hover:text-primary transition-colors">
                  Requirements
                </Link>
                <Link href="/faq" className="block text-gray-400 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-6 text-lg">Contact</h4>
              <div className="space-y-3">
                <a href="tel:+918700955207" className="block text-gray-400 hover:text-primary transition-colors">
                  +91 8700955207
                </a>
                <a
                  href="mailto:info@stripchatagency.in"
                  className="block text-gray-400 hover:text-primary transition-colors"
                >
                  info@stripchatagency.in
                </a>
                <Link href="/privacy" className="block text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-gray-400 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Stripechat Agency. All rights reserved. | Professional Digital Creator Management
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  )
}
