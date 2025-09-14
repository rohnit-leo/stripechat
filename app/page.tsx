import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  Shield,
  ArrowRight,
  Play,
  Globe,
  Sparkles,
  Zap,
  Target,
  Star,
  Heart,
  DollarSign,
  Calendar,
  MessageCircle,
  CheckCircle,
  Award,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background Image with Stronger Overlay */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.jpg" alt="Professional Creator" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-red-600/90 backdrop-blur-sm border border-red-500 rounded-full px-6 py-3 mb-6 mt-3.5">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">{"Adult Welcome solution"}</span>
            </div>
            <div className="pb-8"></div>
          </div>

          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white mb-8 text-balance leading-tight drop-shadow-2xl">
            <span className="text-red-400">STRIPCHAT</span>
            <br />
            <span className="text-red-500">Agency</span>
          </h1>

          <div className="space-y-6 mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-white max-w-4xl mx-auto text-pretty leading-relaxed drop-shadow-2xl">
              Kya aap ek <span className="text-red-400 font-semibold">flexible work-from-home opportunity</span> dhundh
              rahe ho jahan aapko{" "}
              <span className="text-red-400 font-semibold">achhi income + freedom + apna schedule</span> mile?
            </p>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-2xl">
              Hum ek STRIPCHAT agency hain aur hum{" "}
              <span className="text-red-400 font-semibold">female models and creators</span> ko recruit kar rahe hain.
              Agar aap dedicated aur motivated ho toh yeh aapke liye{" "}
              <span className="text-red-400 font-semibold">best chance</span> hai.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-xl font-bold rounded-full shadow-2xl shadow-red-900/50 hover:shadow-red-900/70 transition-all duration-300 transform hover:scale-105"
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
              className="border-2 border-white text-white hover:bg-white/10 hover:border-white px-10 py-6 text-xl font-semibold bg-transparent rounded-full backdrop-blur-sm"
            >
              <Link href="/about">
                <Play className="mr-3 w-6 h-6" />
                Learn More
              </Link>
            </Button>
          </div>

          {/* Trust indicators with better contrast */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto py-4">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-red-400 mb-2 group-hover:scale-110 transition-transform drop-shadow-lg">
                500+
              </div>
              <div className="text-gray-200 font-medium drop-shadow py-0">Active Creators</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-red-400 mb-2 group-hover:scale-110 transition-transform drop-shadow-lg">
                24/7
              </div>
              <div className="text-gray-200 font-medium drop-shadow">Support Available</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-red-400 mb-2 group-hover:scale-110 transition-transform drop-shadow-lg">
                100%
              </div>
              <div className="text-gray-200 font-medium drop-shadow">Privacy Protected</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-red-400 mb-2 group-hover:scale-110 transition-transform drop-shadow-lg">
                ₹50K+
              </div>
              <div className="text-gray-200 font-medium drop-shadow">Avg. Monthly Income</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-red-100 border border-red-200 rounded-full px-6 py-3 mb-6">
              <Heart className="w-5 h-5 text-red-600" />
              <span className="text-red-700 font-semibold">About STRIPCHAT Agency</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">Humara Mission</h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Hum female creators ko empower karte hain digital content creation mein successful career banane ke liye
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Professional Training</h3>
                <p className="text-gray-700 leading-relaxed">
                  Complete technical setup, audience building strategies, aur professional presentation skills ki
                  training
                </p>
              </div>
              <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">24/7 Support System</h3>
                <p className="text-gray-700 leading-relaxed">
                  Round-the-clock technical aur emotional support, kyunki aapki success hamari priority hai
                </p>
              </div>
              <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Transparent Income</h3>
                <p className="text-gray-700 leading-relaxed">
                  No hidden charges, clear payment structure, aur guaranteed weekly payouts
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image src="/images/creator-1.jpg" alt="Professional Creator" fill className="object-cover" />
                  </div>
                  <div className="relative h-32 rounded-2xl overflow-hidden">
                    <Image src="/images/creator-2.jpg" alt="Successful Creator" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-32 rounded-2xl overflow-hidden">
                    <Image src="/images/creator-3.jpg" alt="Happy Creator" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image src="/images/creator-4.jpg" alt="Celebrating Success" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Verified Platform</h3>
              <p className="text-gray-700">Legitimate aur secure platform with proper legal compliance</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Industry Recognition</h3>
              <p className="text-gray-700">Top-rated agency with proven track record of success</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Growth Focused</h3>
              <p className="text-gray-700">Continuous improvement aur career advancement opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with better contrast */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white border border-red-200 rounded-full px-6 py-3 mb-6">
              <Target className="w-5 h-5 text-red-600" />
              <span className="text-red-700 font-semibold">Our Services</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Hum Kya Provide Karte Hain
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Complete support system jo aapko successful creator banane mein help karega
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-red-100 hover:border-red-300 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Complete Onboarding</h3>
                <p className="text-gray-700 leading-relaxed">
                  Technical setup se lekar audience building tak, har step mein professional guidance
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:border-red-300 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Income Optimization</h3>
                <p className="text-gray-700 leading-relaxed">
                  Proven strategies jo aapki earning potential ko maximize karte hain
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:border-red-300 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Privacy & Security</h3>
                <p className="text-gray-700 leading-relaxed">
                  Complete data protection aur legal compliance ke saath full privacy guarantee
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:border-red-300 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Flexible Schedule</h3>
                <p className="text-gray-700 leading-relaxed">
                  Apne time pe work karo, koi fixed hours nahi, complete freedom
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:border-red-300 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Personal Mentoring</h3>
                <p className="text-gray-700 leading-relaxed">
                  Dedicated mentor jo aapki growth mein personally involved rahega
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:border-red-300 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Global Platform Access</h3>
                <p className="text-gray-700 leading-relaxed">
                  International audience tak reach aur multiple platform integration
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-red-100 border border-red-200 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-red-600" />
              <span className="text-red-700 font-semibold">Success Stories</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">Real Results</h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Dekho kaise hamari creators ne apni life transform ki hai
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-red-100 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src="/images/creator-5.jpg" alt="Priya S." fill className="object-cover" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Priya S.</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Pehle mujhe lagta tha ki online work safe nahi hai, but STRIPCHAT agency ne complete support diya. Ab
                main monthly ₹80K+ earn kar rahi hun!"
              </p>
              <div className="text-sm text-red-600 font-semibold">Monthly Income: ₹80,000+</div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-red-100 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src="/images/creator-6.jpg" alt="Anita M." fill className="object-cover" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Anita M.</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "College ke saath-saath work kar sakti hun, flexible timing hai. Training bahut helpful thi, ab
                confident feel karti hun."
              </p>
              <div className="text-sm text-red-600 font-semibold">Monthly Income: ₹45,000+</div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-red-100 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src="/images/creator-7.jpg" alt="Sneha K." fill className="object-cover" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Sneha K.</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "6 months mein hi ₹1.2L monthly reach kar gayi. Agency ka support amazing hai, kabhi akela feel nahi
                kiya."
              </p>
              <div className="text-sm text-red-600 font-semibold">Monthly Income: ₹1,20,000+</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">Kaise Start Kare?</h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Simple 3-step process mein apna creator journey shuru karo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full mx-auto flex items-center justify-center mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Apply & Verify</h3>
              <p className="text-gray-700 leading-relaxed">
                WhatsApp pe contact karo, basic details share karo aur verification process complete karo
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full mx-auto flex items-center justify-center mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Training & Setup</h3>
              <p className="text-gray-700 leading-relaxed">
                Complete training program attend karo aur technical setup ke saath profile create karo
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full mx-auto flex items-center justify-center mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Start Earning</h3>
              <p className="text-gray-700 leading-relaxed">
                Go live, audience build karo aur consistent income generate karna start karo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with better contrast */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center mb-6">
              <Zap className="w-10 h-10 text-red-600" />
            </div>
          </div>

          <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl md:text-2xl text-red-100 mb-12 leading-relaxed">
            Aaj hi join karo aur apna successful creator journey start karo
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-red-600 hover:bg-red-50 px-10 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                Apply Now <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 hover:border-white px-10 py-6 text-xl font-semibold bg-transparent rounded-full"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer with better contrast */}
      <footer className="bg-gray-900 border-t border-red-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-red-200">
                  <Image src="/logo.png" alt="STRIPCHAT Agency Logo" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-black text-xl text-white">STRIPCHAT</span>
                  <span className="font-heading font-semibold text-sm text-gray-400 -mt-1">AGENCY</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Empowering female creators with professional training, career growth, and income opportunities in the
                digital content creation industry.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
                  Instagram
                </a>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
                  YouTube
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-6 text-lg">Quick Links</h4>
              <div className="space-y-3">
                <Link href="/about" className="block text-gray-300 hover:text-red-400 transition-colors">
                  About Us
                </Link>
                <Link href="/services" className="block text-gray-300 hover:text-red-400 transition-colors">
                  Services
                </Link>
                <Link href="/requirements" className="block text-gray-300 hover:text-red-400 transition-colors">
                  Requirements
                </Link>
                <Link href="/faq" className="block text-gray-300 hover:text-red-400 transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-6 text-lg">Contact</h4>
              <div className="space-y-3">
                <a href="tel:+918700955207" className="block text-gray-300 hover:text-red-400 transition-colors">
                  +91 8700955207
                </a>
                <a
                  href="mailto:info@stripchatagency.in"
                  className="block text-gray-300 hover:text-red-400 transition-colors"
                >
                  info@stripchatagency.in
                </a>
                <Link href="/privacy" className="block text-gray-300 hover:text-red-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-gray-300 hover:text-red-400 transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 STRIPCHAT Agency. All rights reserved. | Professional Digital Creator Management
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  )
}
