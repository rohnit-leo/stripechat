import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  Laptop,
  Smartphone,
  Wifi,
  Clock,
  User,
  ArrowRight,
  AlertCircle,
  BookOpen,
  Heart,
  Sparkles,
  Zap,
  Star,
  Award,
  Shield,
} from "lucide-react"
import Link from "next/link"

export default function RequirementsPage() {
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
              <span className="text-primary font-semibold">Join Our Community</span>
            </div>

            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white mb-8 text-balance leading-tight">
              Join Our{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary via-red-500 to-red-600 bg-clip-text text-transparent">
                  Creator
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-red-600 rounded-full" />
              </span>
              <br />
              <span className="text-gray-200">Community</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto text-pretty leading-relaxed">
              Simple requirements to start your journey as a{" "}
              <span className="text-primary font-semibold">successful digital content creator</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Basic Requirements</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">Basic Requirements</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to get started on your creator journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-4">Valid ID</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Government-issued photo ID for age verification and account setup
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Aadhaar Card</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Passport</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Driving License</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Laptop className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-4">Device</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Laptop or 5G smartphone with good camera quality
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <Laptop className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Laptop (Preferred)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">5G Smartphone</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">HD Camera Quality</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-4">Internet</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Stable high-speed internet connection for streaming
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Min 10 Mbps Upload</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Stable Connection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Low Latency</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-4">Time</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  7-8 hours daily commitment for audience building
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Flexible Schedule</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Consistent Presence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Growth Focused</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary/5 via-transparent to-red-600/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Personal Qualities</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">Personal Qualities</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              The mindset and attitude that lead to success in content creation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-black">Willingness to Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Open mindset to learn new skills, techniques, and adapt to platform changes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Attend training sessions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Follow guidelines</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Continuous improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-black">Positive Attitude</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Enthusiastic, friendly personality that engages and entertains audiences.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Engaging personality</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Professional demeanor</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Audience-focused</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-black">Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Dedication to building your audience and growing your creator career consistently.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Regular schedule</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Long-term focus</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">Goal-oriented</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Legal Requirements</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">Legal Requirements</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Important legal and age requirements for content creation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
                <CardContent className="p-10">
                  <div className="flex items-start space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl font-bold text-white mb-2">Age Requirement</h3>
                      <p className="text-gray-300 text-xl">Must be 18 years or older</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-heading text-lg font-bold text-white mb-2">Legal Adult Status</h4>
                        <p className="text-gray-400 leading-relaxed">
                          Must be legally recognized as an adult to enter into contracts and agreements
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-heading text-lg font-bold text-white mb-2">Identity Verification</h4>
                        <p className="text-gray-400 leading-relaxed">
                          Valid government ID required for age and identity verification
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-heading text-lg font-bold text-white mb-2">Legal Compliance</h4>
                        <p className="text-gray-400 leading-relaxed">
                          Adherence to all platform terms of service and local regulations
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-heading text-lg font-bold text-white mb-2">Professional Standards</h4>
                        <p className="text-gray-400 leading-relaxed">
                          Commitment to maintaining professional and ethical content standards
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-red-600/20 rounded-3xl p-12 border border-primary/20">
                <div className="text-center space-y-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-red-600 rounded-full mx-auto flex items-center justify-center">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl font-bold text-white mb-4">Legal Protection</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      We ensure full legal compliance and protection for all our creators with professional contracts
                      and privacy safeguards.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-black text-primary mb-2">100%</div>
                      <div className="text-sm text-gray-400">Legal Compliance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-primary mb-2">24/7</div>
                      <div className="text-sm text-gray-400">Legal Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary/10 via-red-600/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Getting Started</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Simple steps to begin your creator journey with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                <span className="text-white font-black text-2xl">1</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-4">Contact Us</h3>
              <p className="text-gray-400 leading-relaxed">
                Reach out via WhatsApp or email to express your interest and schedule a consultation.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                <span className="text-white font-black text-2xl">2</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-4">Verification</h3>
              <p className="text-gray-400 leading-relaxed">
                Complete the verification process with your ID and basic information for account setup.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                <span className="text-white font-black text-2xl">3</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-4">Start Training</h3>
              <p className="text-gray-400 leading-relaxed">
                Begin your comprehensive training program and start building your creator career.
              </p>
            </div>
          </div>

          <div className="text-center">
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
                className="border-2 border-primary/50 text-white hover:bg-primary/10 hover:border-primary px-10 py-6 text-xl font-semibold bg-transparent rounded-full backdrop-blur-sm"
              >
                <Link href="/faq">View FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  )
}
