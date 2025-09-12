import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Shield, Clock, Star, ArrowRight, Play, CheckCircle, Globe, Headphones } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Digital Creator Workspace"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-white mb-6 text-balance">
            Empowering{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
              Digital Creators
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
            Build your career as a live presenter, educator, or entertainer with professional training, 24/7 support,
            and transparent income opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold"
            >
              <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                Join Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/about">
                Learn More <Play className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-400">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-400">Privacy Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">₹50K+</div>
              <div className="text-gray-400">Average Monthly Income</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">What We Offer</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive support to build and grow your digital creator career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold text-white mb-3">Professional Training</h3>
                <p className="text-gray-400">
                  Complete onboarding, technical setup, and audience-building strategies to maximize your success.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold text-white mb-3">Career Growth</h3>
                <p className="text-gray-400">
                  Personalized mentoring and growth strategies to help you build a sustainable income stream.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold text-white mb-3">Privacy & Security</h3>
                <p className="text-gray-400">
                  Complete data protection, legal compliance, and privacy safeguards for your peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold text-white mb-3">Flexible Schedule</h3>
                <p className="text-gray-400">
                  Work on your own terms with flexible hours that fit your lifestyle and commitments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <Headphones className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-400">
                  Round-the-clock technical and professional support to help you succeed at every step.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold text-white mb-3">Global Reach</h3>
                <p className="text-gray-400">
                  Access to international platforms and audiences to maximize your earning potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Stripechat Agency?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Transparent Payments</h4>
                    <p className="text-gray-400">Clear payment structure with no hidden fees or deductions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Professional Development</h4>
                    <p className="text-gray-400">Continuous training and skill development programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Legal Compliance</h4>
                    <p className="text-gray-400">Full legal protection and compliance with all regulations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Community Support</h4>
                    <p className="text-gray-400">Join a supportive community of successful creators</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Professional Team"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400">Hear from our successful creators</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Stripechat Agency transformed my career. The training was comprehensive and the support is
                  incredible. I'm earning more than I ever imagined."
                </p>
                <div className="font-semibold text-white">- Priya S.</div>
                <div className="text-sm text-gray-400">Content Creator</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "The flexibility and professional support made all the difference. I can work around my schedule while
                  building a sustainable income."
                </p>
                <div className="font-semibold text-white">- Rahul M.</div>
                <div className="text-sm text-gray-400">Live Presenter</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Privacy and security were my main concerns, but Stripechat Agency handles everything professionally.
                  I feel completely safe and supported."
                </p>
                <div className="font-semibold text-white">- Anita K.</div>
                <div className="text-sm text-gray-400">Digital Educator</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-red-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Creator Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of successful creators who are building their careers with our support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold"
            >
              <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-primary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-heading font-bold text-xl text-white">Stripechat Agency</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering digital creators with professional training, career growth, and income opportunities in the
                live streaming and content creation industry.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  YouTube
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
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
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2">
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
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
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
