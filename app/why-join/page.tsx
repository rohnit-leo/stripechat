import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Shield, Clock, Headphones, DollarSign, Globe, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WhyJoinPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-200/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-300/20 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-100/40 rounded-full blur-lg animate-bounce" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-black text-4xl md:text-6xl text-gray-900 mb-6 text-balance">
              Why Join{" "}
              <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                STRIPCHAT Agency
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto text-pretty">
              Discover the advantages that make us the leading choice for digital content creators
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to build a successful creator career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-red-100 hover:border-red-300 transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <Clock className="w-12 h-12 text-red-600 mb-4" />
                <CardTitle className="text-gray-900 text-xl">Flexible Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Work on your own terms with flexible hours that fit your lifestyle and commitments.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Choose your own hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Work from anywhere</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Balance work and life</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:border-red-300 transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <Headphones className="w-12 h-12 text-red-600 mb-4" />
                <CardTitle className="text-gray-900 text-xl">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Round-the-clock technical and professional support to help you succeed at every step.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Instant technical help</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Emergency support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:border-red-300 transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <Shield className="w-12 h-12 text-red-600 mb-4" />
                <CardTitle className="text-gray-900 text-xl">Privacy & Legal Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete data protection, legal compliance, and privacy safeguards for your peace of mind.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Data encryption</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Legal contract protection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Privacy compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:border-red-300 transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-red-600 mb-4" />
                <CardTitle className="text-gray-900 text-xl">Growth Mentoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Personalized mentoring and growth strategies to help you build a sustainable income stream.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">One-on-one coaching</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Performance analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Growth optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:border-red-300 transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-red-600 mb-4" />
                <CardTitle className="text-gray-900 text-xl">High Earning Potential</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Transparent payment structure with potential to earn ₹50K+ monthly with dedicated effort.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Weekly payments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Performance bonuses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">No hidden fees</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-100 hover:border-red-300 transition-colors shadow-lg hover:shadow-xl">
              <CardHeader>
                <Globe className="w-12 h-12 text-red-600 mb-4" />
                <CardTitle className="text-gray-900 text-xl">Global Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Access to international platforms and audiences to maximize your earning potential.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Multiple platforms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">International audience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Cross-platform growth</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Success Record</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that speak for our commitment to your success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-700 font-semibold">Active Creators</div>
              <div className="text-gray-600 text-sm mt-1">Successfully onboarded and earning</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">₹50K+</div>
              <div className="text-gray-700 font-semibold">Average Monthly Income</div>
              <div className="text-gray-600 text-sm mt-1">For dedicated creators</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-gray-700 font-semibold">Creator Satisfaction</div>
              <div className="text-gray-600 text-sm mt-1">Based on feedback surveys</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-700 font-semibold">Support Availability</div>
              <div className="text-gray-600 text-sm mt-1">Always here when you need us</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us Over Others?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we compare to other agencies and platforms
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8 text-center">
              STRIPCHAT Agency Advantages
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Training Program</h4>
                    <p className="text-gray-600 text-sm">
                      Complete onboarding with technical, strategic, and professional development training
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Dedicated Account Management</h4>
                    <p className="text-gray-600 text-sm">
                      Personal account manager for ongoing support and growth optimization
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Legal Protection & Compliance</h4>
                    <p className="text-gray-600 text-sm">
                      Full legal contracts, privacy protection, and regulatory compliance
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Transparent Revenue Sharing</h4>
                    <p className="text-gray-600 text-sm">Clear payment structure with no hidden fees or deductions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Community & Networking</h4>
                    <p className="text-gray-600 text-sm">
                      Access to creator community, networking events, and collaboration opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Performance Analytics</h4>
                    <p className="text-gray-600 text-sm">
                      Detailed insights and analytics to optimize your performance and earnings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Take the first step towards building your successful creator career with our expert guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-semibold rounded-full"
            >
              <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 hover:border-white px-8 py-4 text-lg bg-transparent rounded-full"
            >
              <Link href="/requirements">View Requirements</Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  )
}
