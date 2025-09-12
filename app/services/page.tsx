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
  Sparkles,
  Zap,
  Star,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
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
              <Star className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Our Services</span>
            </div>

            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white mb-8 text-balance leading-tight">
              Our{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary via-red-500 to-red-600 bg-clip-text text-transparent">
                  Services
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-red-600 rounded-full" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto text-pretty leading-relaxed">
              Comprehensive support and training to help you build a{" "}
              <span className="text-primary font-semibold">successful career</span> as a digital content creator
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Complete Support</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">Complete Creator Support</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to succeed in the digital content creation industry
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-black">Onboarding & Account Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Complete guidance through the initial setup process to get you started on the right foot.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Platform account creation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Profile optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Initial content strategy</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Legal documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-black">Technical Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Master the technical aspects of content creation with our comprehensive training program.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Monitor className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Camera setup & positioning</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Lightbulb className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Lighting optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mic className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Audio quality enhancement</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Streaming software training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-black">Audience Building Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Learn proven strategies to grow your audience and increase engagement across platforms.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Content planning & scheduling</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Audience engagement techniques</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Growth optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Analytics & performance tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-black">Transparent Payment Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Clear guidance on payment structures, optimization strategies, and financial planning.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Payment structure explanation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Income optimization tips</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Financial planning support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Tax guidance & compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-black">24/7 Support System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Round-the-clock support to help you overcome challenges and maximize your success.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">24/7 technical support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Regular training sessions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Performance reviews</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-black">Privacy & Legal Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Complete privacy protection and legal compliance to ensure your safety and security.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Data protection & privacy</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Legal contract protection</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Compliance monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Safety guidelines training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary/5 via-transparent to-red-600/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Our Process</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">Our Process</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              A structured approach to ensure your success from day one
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                <span className="text-white font-black text-2xl">1</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-4">Initial Consultation</h3>
              <p className="text-gray-400 leading-relaxed">
                We assess your goals, skills, and preferences to create a personalized plan.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                <span className="text-white font-black text-2xl">2</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-4">Training & Setup</h3>
              <p className="text-gray-400 leading-relaxed">
                Comprehensive training program covering all technical and strategic aspects.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                <span className="text-white font-black text-2xl">3</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-4">Launch Support</h3>
              <p className="text-gray-400 leading-relaxed">
                Guided launch with hands-on support to ensure a successful start.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                <span className="text-white font-black text-2xl">4</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-4">Ongoing Growth</h3>
              <p className="text-gray-400 leading-relaxed">
                Continuous support, optimization, and growth strategies for long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Service Packages</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">Service Packages</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Choose the package that best fits your needs and goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-white text-2xl font-black mb-2">Starter Package</CardTitle>
                <p className="text-gray-400">Perfect for beginners</p>
                <div className="text-4xl font-black text-primary mt-6">Free</div>
                <p className="text-gray-400">Initial consultation & basic setup</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Initial consultation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Basic account setup</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Getting started guide</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Email support</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-8 bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 text-white font-semibold rounded-full"
                  asChild
                >
                  <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary hover:border-primary transition-all duration-300 relative group transform hover:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-black mb-2">Professional Package</CardTitle>
                <p className="text-gray-400">Complete creator support</p>
                <div className="text-4xl font-black text-primary mt-6">Revenue Share</div>
                <p className="text-gray-400">No upfront costs, we succeed when you do</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Complete training program</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Technical setup & optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">24/7 support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Growth optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Legal protection</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-8 bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 text-white font-semibold rounded-full"
                  asChild
                >
                  <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-white text-2xl font-black mb-2">Premium Package</CardTitle>
                <p className="text-gray-400">VIP creator experience</p>
                <div className="text-4xl font-black text-primary mt-6">Custom</div>
                <p className="text-gray-400">Tailored solutions for established creators</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Everything in Professional</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Priority support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Custom marketing strategies</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Advanced analytics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Brand partnership opportunities</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-8 bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 text-white font-semibold rounded-full"
                  asChild
                >
                  <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </Button>
              </CardContent>
            </Card>
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
            Get started today with our comprehensive creator support services
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

      <WhatsAppFloat />
    </div>
  )
}
