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

export default function AboutPage() {
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
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">About Our Agency</span>
            </div>

            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white mb-8 text-balance leading-tight">
              About{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary via-red-500 to-red-600 bg-clip-text text-transparent">
                  Stripechat
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-red-600 rounded-full" />
              </span>
              <br />
              <span className="text-gray-200">Agency</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto text-pretty leading-relaxed">
              We are a leading{" "}
              <span className="text-primary font-semibold">digital content creator management agency</span> dedicated to
              empowering individuals to build successful careers in live streaming, content creation, and digital
              entertainment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Our Mission</span>
              </div>

              <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-8">Our Mission</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                To empower digital creators with the tools, training, and support they need to build sustainable,
                profitable careers in the rapidly growing digital content industry. We believe everyone deserves the
                opportunity to monetize their creativity and personality in a safe, professional environment.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-white mb-2">Professional Excellence</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Maintaining the highest standards in training and support
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-white mb-2">Creator Empowerment</h4>
                    <p className="text-gray-400 leading-relaxed">Providing tools and knowledge for long-term success</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-white mb-2">Ethical Practices</h4>
                    <p className="text-gray-400 leading-relaxed">Operating with transparency, integrity, and respect</p>
                  </div>
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
                    <h3 className="font-heading text-3xl font-bold text-white mb-4">Our Impact</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Transforming lives through professional creator development and sustainable income opportunities.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-black text-primary mb-2">500+</div>
                      <div className="text-sm text-gray-400">Creators Trained</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-primary mb-2">₹2Cr+</div>
                      <div className="text-sm text-gray-400">Total Earnings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary/5 via-transparent to-red-600/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Core Values</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">Our Core Values</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-4">Community First</h3>
                <p className="text-gray-400 leading-relaxed">
                  Building a supportive community where creators help each other succeed and grow together.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-4">Results Driven</h3>
                <p className="text-gray-400 leading-relaxed">
                  Focused on delivering measurable results and helping creators achieve their income goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-4">Global Reach</h3>
                <p className="text-gray-400 leading-relaxed">
                  Connecting creators with international audiences and opportunities for maximum growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-gray-400 leading-relaxed">
                  Committed to excellence in training, support, and creator development programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Our Expertise</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">Expert Team Areas</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Specialized departments working together for your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Creator Development</h3>
                <p className="text-primary font-semibold mb-3">Growth & Strategy Team</p>
                <p className="text-gray-400 leading-relaxed">
                  10+ years in digital marketing and creator economy. Specializes in audience growth and monetization
                  strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Technical Training</h3>
                <p className="text-primary font-semibold mb-3">Technology & Setup Team</p>
                <p className="text-gray-400 leading-relaxed">
                  Expert in streaming technology, equipment setup, and technical optimization for content creators.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Success Management</h3>
                <p className="text-primary font-semibold mb-3">Support & Success Team</p>
                <p className="text-gray-400 leading-relaxed">
                  Dedicated to creator support and success, with expertise in performance optimization and career
                  growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary/10 via-red-600/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Why Choose Us</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">Why Creators Choose Us</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              The advantages that set us apart in the industry
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-white mb-2">Proven Track Record</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Over 500 successful creators with an average monthly income increase of 300% within 6 months.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-white mb-2">Comprehensive Training</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Complete onboarding program covering technical setup, content strategy, and audience engagement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-white mb-2">Legal Protection</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Full legal compliance, privacy protection, and professional contracts for your security.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-white mb-2">Ongoing Support</h4>
                  <p className="text-gray-400 leading-relaxed">
                    24/7 technical support, regular check-ins, and continuous professional development opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-red-600/20 rounded-3xl p-12 border border-primary/20">
                <div className="text-center space-y-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-red-600 rounded-full mx-auto flex items-center justify-center">
                    <TrendingUp className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl font-bold text-white mb-4">Success Metrics</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Real results from our creator development programs and ongoing support systems.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-black text-primary mb-2">300%</div>
                      <div className="text-sm text-gray-400">Income Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-primary mb-2">95%</div>
                      <div className="text-sm text-gray-400">Retention Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary/5 via-transparent to-red-600/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-full mx-auto flex items-center justify-center mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>

          <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Take the first step towards building your successful creator career with our expert guidance and support.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 text-white px-10 py-6 text-xl font-bold rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                Get Started Today <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 text-white hover:bg-primary/10 hover:border-primary px-10 py-6 text-xl font-semibold bg-transparent rounded-full backdrop-blur-sm"
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
