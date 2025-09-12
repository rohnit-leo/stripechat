import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Shield, Clock, Headphones, DollarSign, Globe, CheckCircle, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function WhyJoinPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=800&width=1920"
            alt="Why Join Us"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-black text-4xl md:text-6xl text-white mb-6 text-balance">
              Why Join{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                Our Agency
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-pretty">
              Discover the advantages that make us the leading choice for digital content creators
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to build a successful creator career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-white text-xl">Flexible Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Work on your own terms with flexible hours that fit your lifestyle and commitments.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Choose your own hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Work from anywhere</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Balance work and life</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Headphones className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-white text-xl">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Round-the-clock technical and professional support to help you succeed at every step.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Instant technical help</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Emergency support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-white text-xl">Privacy & Legal Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Complete data protection, legal compliance, and privacy safeguards for your peace of mind.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Data encryption</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Legal contract protection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Privacy compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-white text-xl">Growth Mentoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Personalized mentoring and growth strategies to help you build a sustainable income stream.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">One-on-one coaching</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Performance analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Growth optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-white text-xl">High Earning Potential</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Transparent payment structure with potential to earn ₹50K+ monthly with dedicated effort.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Weekly payments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Performance bonuses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">No hidden fees</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-white text-xl">Global Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Access to international platforms and audiences to maximize your earning potential.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Multiple platforms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">International audience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Cross-platform growth</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Success Record</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Numbers that speak for our commitment to your success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-400 font-semibold">Active Creators</div>
              <div className="text-gray-500 text-sm mt-1">Successfully onboarded and earning</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">₹50K+</div>
              <div className="text-gray-400 font-semibold">Average Monthly Income</div>
              <div className="text-gray-500 text-sm mt-1">For dedicated creators</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-400 font-semibold">Creator Satisfaction</div>
              <div className="text-gray-500 text-sm mt-1">Based on feedback surveys</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-400 font-semibold">Support Availability</div>
              <div className="text-gray-500 text-sm mt-1">Always here when you need us</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us Over Others?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See how we compare to other agencies and platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-6">Stripechat Agency Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Comprehensive Training Program</h4>
                    <p className="text-gray-400 text-sm">
                      Complete onboarding with technical, strategic, and professional development training
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Dedicated Account Management</h4>
                    <p className="text-gray-400 text-sm">
                      Personal account manager for ongoing support and growth optimization
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Legal Protection & Compliance</h4>
                    <p className="text-gray-400 text-sm">
                      Full legal contracts, privacy protection, and regulatory compliance
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Transparent Revenue Sharing</h4>
                    <p className="text-gray-400 text-sm">Clear payment structure with no hidden fees or deductions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Community & Networking</h4>
                    <p className="text-gray-400 text-sm">
                      Access to creator community, networking events, and collaboration opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Success Comparison"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-red-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">What Our Creators Say</h2>
            <p className="text-xl text-gray-400">Real feedback from successful creators in our community</p>
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
                  "The support and training I received was incredible. I went from zero experience to earning ₹80K per
                  month in just 4 months. The team is always there when I need help."
                </p>
                <div className="font-semibold text-white">- Kavya R.</div>
                <div className="text-sm text-gray-400">Content Creator, Mumbai</div>
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
                  "What I love most is the flexibility. I can work around my college schedule and still earn enough to
                  support myself. The privacy protection gives me complete peace of mind."
                </p>
                <div className="font-semibold text-white">- Arjun S.</div>
                <div className="text-sm text-gray-400">Student & Creator, Delhi</div>
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
                  "The professional development and growth mentoring helped me build not just income, but a real career.
                  I'm now earning more than my previous corporate job."
                </p>
                <div className="font-semibold text-white">- Meera P.</div>
                <div className="text-sm text-gray-400">Professional Creator, Bangalore</div>
              </CardContent>
            </Card>
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
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg bg-transparent"
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
