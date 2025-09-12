import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Camera,
  TrendingUp,
  Shield,
  Clock,
  Headphones,
  Monitor,
  Mic,
  Lightbulb,
  Target,
  DollarSign,
  BookOpen,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=800&width=1920"
            alt="Our Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-black text-4xl md:text-6xl text-white mb-6 text-balance">
              Our{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-pretty">
              Comprehensive support and training to help you build a successful career as a digital content creator
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Complete Creator Support</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to succeed in the digital content creation industry
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Onboarding & Setup */}
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-white text-xl">Onboarding & Account Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Complete guidance through the initial setup process to get you started on the right foot.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Platform account creation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Profile optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Initial content strategy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Legal documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Technical Training */}
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Camera className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-white text-xl">Technical Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Master the technical aspects of content creation with our comprehensive training program.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Monitor className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Camera setup & positioning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Lighting optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Mic className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Audio quality enhancement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Streaming software training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Audience Building */}
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-white text-xl">Audience Building Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Learn proven strategies to grow your audience and increase engagement across platforms.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Content planning & scheduling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Audience engagement techniques</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Growth optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Analytics & performance tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Payment Guidance */}
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-white text-xl">Transparent Payment Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Clear guidance on payment structures, optimization strategies, and financial planning.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Payment structure explanation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Income optimization tips</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Financial planning support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Tax guidance & compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 24/7 Support */}
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Headphones className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-white text-xl">24/7 Support System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Round-the-clock support to help you overcome challenges and maximize your success.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">24/7 technical support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Regular training sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Performance reviews</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-white text-xl">Privacy & Legal Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Complete privacy protection and legal compliance to ensure your safety and security.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Data protection & privacy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Legal contract protection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Compliance monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Safety guidelines training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A structured approach to ensure your success from day one
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">Initial Consultation</h3>
              <p className="text-gray-400 text-sm">
                We assess your goals, skills, and preferences to create a personalized plan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">Training & Setup</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive training program covering all technical and strategic aspects.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">Launch Support</h3>
              <p className="text-gray-400 text-sm">Guided launch with hands-on support to ensure a successful start.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">Ongoing Growth</h3>
              <p className="text-gray-400 text-sm">
                Continuous support, optimization, and growth strategies for long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Service Packages</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the package that best fits your needs and goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl mb-2">Starter Package</CardTitle>
                <p className="text-gray-400">Perfect for beginners</p>
                <div className="text-3xl font-bold text-primary mt-4">Free</div>
                <p className="text-gray-400 text-sm">Initial consultation & basic setup</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Initial consultation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Basic account setup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Getting started guide</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Email support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90" asChild>
                  <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Professional Package */}
            <Card className="bg-card border-primary hover:border-primary transition-colors relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl mb-2">Professional Package</CardTitle>
                <p className="text-gray-400">Complete creator support</p>
                <div className="text-3xl font-bold text-primary mt-4">Revenue Share</div>
                <p className="text-gray-400 text-sm">No upfront costs, we succeed when you do</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Complete training program</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Technical setup & optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">24/7 support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Growth optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Legal protection</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90" asChild>
                  <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl mb-2">Premium Package</CardTitle>
                <p className="text-gray-400">VIP creator experience</p>
                <div className="text-3xl font-bold text-primary mt-4">Custom</div>
                <p className="text-gray-400 text-sm">Tailored solutions for established creators</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Everything in Professional</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Priority support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Custom marketing strategies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Advanced analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Brand partnership opportunities</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90" asChild>
                  <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </Button>
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
            Get started today with our comprehensive creator support services
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

      <WhatsAppFloat />
    </div>
  )
}
