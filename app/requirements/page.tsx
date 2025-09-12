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
} from "lucide-react"
import Link from "next/link"

export default function RequirementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=800&width=1920"
            alt="Requirements"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-black text-4xl md:text-6xl text-white mb-6 text-balance">
              Join Our{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                Creator Community
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-pretty">
              Simple requirements to start your journey as a successful digital content creator
            </p>
          </div>
        </div>
      </section>

      {/* Basic Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Basic Requirements</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to get started on your creator journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Valid ID */}
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors text-center">
              <CardContent className="p-6">
                <User className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="font-heading text-xl font-bold text-white mb-3">Valid ID</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Government-issued photo ID for age verification and account setup
                </p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Aadhaar Card</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Passport</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Driving License</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Device Requirements */}
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors text-center">
              <CardContent className="p-6">
                <Laptop className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="font-heading text-xl font-bold text-white mb-3">Device</h3>
                <p className="text-gray-400 text-sm mb-4">Laptop or 5G smartphone with good camera quality</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-2">
                    <Laptop className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Laptop (Preferred)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">5G Smartphone</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">HD Camera Quality</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Internet Connection */}
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors text-center">
              <CardContent className="p-6">
                <Wifi className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="font-heading text-xl font-bold text-white mb-3">Internet</h3>
                <p className="text-gray-400 text-sm mb-4">Stable high-speed internet connection for streaming</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Min 10 Mbps Upload</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Stable Connection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Low Latency</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Time Commitment */}
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors text-center">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="font-heading text-xl font-bold text-white mb-3">Time</h3>
                <p className="text-gray-400 text-sm mb-4">7-8 hours daily commitment for audience building</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Flexible Schedule</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Consistent Presence</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Growth Focused</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Qualities */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Personal Qualities</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The mindset and attitude that lead to success in content creation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-white text-xl">Willingness to Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Open mindset to learn new skills, techniques, and adapt to platform changes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Attend training sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Follow guidelines</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Continuous improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-white text-xl">Positive Attitude</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Enthusiastic, friendly personality that engages and entertains audiences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Engaging personality</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Professional demeanor</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Audience-focused</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-white text-xl">Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Dedication to building your audience and growing your creator career consistently.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Regular schedule</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Long-term focus</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Goal-oriented</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Age & Legal Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Legal Requirements</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Important legal and age requirements for content creation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-card border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <AlertCircle className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-white mb-2">Age Requirement</h3>
                      <p className="text-gray-300 text-lg">Must be 18 years or older</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Legal Adult Status</h4>
                        <p className="text-gray-400 text-sm">
                          Must be legally recognized as an adult to enter into contracts and agreements
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Identity Verification</h4>
                        <p className="text-gray-400 text-sm">
                          Valid government ID required for age and identity verification
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Legal Compliance</h4>
                        <p className="text-gray-400 text-sm">
                          Adherence to all platform terms of service and local regulations
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Professional Standards</h4>
                        <p className="text-gray-400 text-sm">
                          Commitment to maintaining professional and ethical content standards
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Legal Requirements"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Process */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-red-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Simple steps to begin your creator journey with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">Contact Us</h3>
              <p className="text-gray-400 text-sm">
                Reach out via WhatsApp or email to express your interest and schedule a consultation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">Verification</h3>
              <p className="text-gray-400 text-sm">
                Complete the verification process with your ID and basic information for account setup.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">Start Training</h3>
              <p className="text-gray-400 text-sm">
                Begin your comprehensive training program and start building your creator career.
              </p>
            </div>
          </div>

          <div className="text-center">
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
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg bg-transparent"
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
