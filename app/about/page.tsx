import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  Target,
  Globe,
  Award,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Heart,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-transparent to-red-800/20" />
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-600/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-600/10 rounded-full blur-xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 rounded-full px-6 py-3 mb-8">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-semibold">About Our Agency</span>
            </div>

            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white mb-8 text-balance leading-tight">
              About{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                  STRIPCHAT
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full" />
              </span>
              <br />
              <span className="text-gray-200">Agency</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto text-pretty leading-relaxed">
              We are a leading{" "}
              <span className="text-red-400 font-semibold">digital content creator management agency</span> dedicated to
              empowering individuals to build successful careers in live streaming, content creation, and digital
              entertainment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-red-100 border border-red-200 rounded-full px-6 py-3 mb-6">
                <Target className="w-5 h-5 text-red-600" />
                <span className="text-red-700 font-semibold">Our Mission</span>
              </div>

              <h2 className="font-heading text-4xl md:text-5xl font-black text-gray-900 mb-8">Our Mission</h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                To empower digital creators with the tools, training, and support they need to build sustainable,
                profitable careers in the rapidly growing digital content industry. We believe everyone deserves the
                opportunity to monetize their creativity and personality in a safe, professional environment.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">Professional Excellence</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Maintaining the highest standards in training and support
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">Creator Empowerment</h4>
                    <p className="text-gray-600 leading-relaxed">Providing tools and knowledge for long-term success</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">Ethical Practices</h4>
                    <p className="text-gray-600 leading-relaxed">Operating with transparency, integrity, and respect</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/creator-1.jpg"
                      alt="Professional Creator Working"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-2xl overflow-hidden">
                    <Image src="/images/creator-5.jpg" alt="Creator at Home Office" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-32 rounded-2xl overflow-hidden">
                    <Image src="/images/creator-6.jpg" alt="Happy Creator" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image src="/images/creator-7.jpg" alt="Successful Creator" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white border border-red-200 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-red-600" />
              <span className="text-red-700 font-semibold">Core Values</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-red-100 hover:border-red-300 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Community First</h3>
                <p className="text-gray-700 leading-relaxed">
                  Building a supportive community where creators help each other succeed and grow together.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:border-red-300 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Results Driven</h3>
                <p className="text-gray-700 leading-relaxed">
                  Focused on delivering measurable results and helping creators achieve their income goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:border-red-300 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Global Reach</h3>
                <p className="text-gray-700 leading-relaxed">
                  Connecting creators with international audiences and opportunities for maximum growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:border-red-300 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Committed to excellence in training, support, and creator development programs.
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
              <Zap className="w-5 h-5 text-red-600" />
              <span className="text-red-700 font-semibold">Our Expertise</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">Expert Team Areas</h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Specialized departments working together for your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-red-100 hover:border-red-300 transition-all duration-300 group shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Creator Development</h3>
                <p className="text-red-600 font-semibold mb-3">Growth & Strategy Team</p>
                <p className="text-gray-700 leading-relaxed">
                  10+ years in digital marketing and creator economy. Specializes in audience growth and monetization
                  strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:border-red-300 transition-all duration-300 group shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Technical Training</h3>
                <p className="text-red-600 font-semibold mb-3">Technology & Setup Team</p>
                <p className="text-gray-700 leading-relaxed">
                  Expert in streaming technology, equipment setup, and technical optimization for content creators.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:border-red-300 transition-all duration-300 group shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Success Management</h3>
                <p className="text-red-600 font-semibold mb-3">Support & Success Team</p>
                <p className="text-gray-700 leading-relaxed">
                  Dedicated to creator support and success, with expertise in performance optimization and career
                  growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white border border-red-200 rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5 text-red-600" />
              <span className="text-red-700 font-semibold">Why Choose Us</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-gray-900 mb-6">Why Creators Choose Us</h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              The advantages that set us apart in the industry
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">Proven Track Record</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Over 500 successful creators with an average monthly income increase of 300% within 6 months.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">Comprehensive Training</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Complete onboarding program covering technical setup, content strategy, and audience engagement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">Legal Protection</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Full legal compliance, privacy protection, and professional contracts for your security.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">Ongoing Support</h4>
                  <p className="text-gray-700 leading-relaxed">
                    24/7 technical support, regular check-ins, and continuous professional development opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <Image src="/images/creator-4.jpg" alt="Celebrating Success" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="font-heading text-2xl font-bold mb-2">Success Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-black text-red-400">300%</div>
                      <div className="text-sm">Income Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-red-400">95%</div>
                      <div className="text-sm">Retention Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center mb-6">
              <Sparkles className="w-10 h-10 text-red-600" />
            </div>
          </div>

          <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl md:text-2xl text-red-100 mb-12 leading-relaxed">
            Take the first step towards building your successful creator career with our expert guidance and support.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-red-600 hover:bg-red-50 px-10 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                Get Started Today <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 hover:border-white px-10 py-6 text-xl font-semibold bg-transparent rounded-full"
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
