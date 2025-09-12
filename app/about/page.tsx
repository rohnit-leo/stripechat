import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Globe, Award, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=800&width=1920"
            alt="About Stripechat Agency"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-black text-4xl md:text-6xl text-white mb-6 text-balance">
              About{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                Stripechat Agency
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-pretty">
              We are a leading digital content creator management agency dedicated to empowering individuals to build
              successful careers in live streaming, content creation, and digital entertainment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To empower digital creators with the tools, training, and support they need to build sustainable,
                profitable careers in the rapidly growing digital content industry. We believe everyone deserves the
                opportunity to monetize their creativity and personality in a safe, professional environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Professional Excellence</h4>
                    <p className="text-gray-400">Maintaining the highest standards in training and support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Creator Empowerment</h4>
                    <p className="text-gray-400">Providing tools and knowledge for long-term success</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Ethical Practices</h4>
                    <p className="text-gray-400">Operating with transparency, integrity, and respect</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/placeholder.svg?height=600&width=800" alt="Our Mission" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="font-heading text-xl font-bold text-white mb-3">Community First</h3>
                <p className="text-gray-400">
                  Building a supportive community where creators help each other succeed and grow together.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors text-center">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="font-heading text-xl font-bold text-white mb-3">Results Driven</h3>
                <p className="text-gray-400">
                  Focused on delivering measurable results and helping creators achieve their income goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors text-center">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="font-heading text-xl font-bold text-white mb-3">Global Reach</h3>
                <p className="text-gray-400">
                  Connecting creators with international audiences and opportunities for maximum growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="font-heading text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-gray-400">
                  Committed to excellence in training, support, and creator development programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-heading text-xl font-bold text-white mb-2">Sarah Johnson</h3>
                <p className="text-primary font-semibold mb-3">Head of Creator Development</p>
                <p className="text-gray-400 text-sm">
                  10+ years in digital marketing and creator economy. Specializes in audience growth and monetization
                  strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-heading text-xl font-bold text-white mb-2">Michael Chen</h3>
                <p className="text-primary font-semibold mb-3">Technical Training Lead</p>
                <p className="text-gray-400 text-sm">
                  Expert in streaming technology, equipment setup, and technical optimization for content creators.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-heading text-xl font-bold text-white mb-2">Priya Sharma</h3>
                <p className="text-primary font-semibold mb-3">Creator Success Manager</p>
                <p className="text-gray-400 text-sm">
                  Dedicated to creator support and success, with expertise in performance optimization and career
                  growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-red-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Why Creators Choose Us</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">The advantages that set us apart in the industry</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Proven Track Record</h4>
                  <p className="text-gray-400">
                    Over 500 successful creators with an average monthly income increase of 300% within 6 months.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Comprehensive Training</h4>
                  <p className="text-gray-400">
                    Complete onboarding program covering technical setup, content strategy, and audience engagement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Legal Protection</h4>
                  <p className="text-gray-400">
                    Full legal compliance, privacy protection, and professional contracts for your security.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-2">Ongoing Support</h4>
                  <p className="text-gray-400">
                    24/7 technical support, regular check-ins, and continuous professional development opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Success Statistics"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Take the first step towards building your successful creator career with our expert guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold"
            >
              <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  )
}
