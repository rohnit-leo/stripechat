import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Scale, Shield, AlertTriangle } from "lucide-react"

export default function TermsPage() {
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
              <Scale className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Terms & Conditions</span>
            </div>

            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white mb-8 text-balance leading-tight">
              Terms &{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary via-red-500 to-red-600 bg-clip-text text-transparent">
                  Conditions
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-red-600 rounded-full" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto text-pretty leading-relaxed">
              Please read these terms carefully before using our services. They govern your{" "}
              <span className="text-primary font-semibold">relationship</span> with Stripechat Agency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">Service Agreement</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">Legal Framework</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">Rights & Responsibilities</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">Important Notices</h3>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto prose prose-invert">
            <div className="text-gray-300 space-y-12">
              <div>
                <p className="text-sm text-gray-400 mb-6">Last updated: December 2024</p>
                <p className="text-lg md:text-xl leading-relaxed">
                  These Terms and Conditions ("Terms") govern your use of services provided by Stripechat Agency
                  ("Company," "we," "our," or "us"). By accessing or using our services, you agree to be bound by these
                  Terms.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-6">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By registering for our services, participating in our training programs, or engaging with our
                  platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and our
                  Privacy Policy. If you do not agree to these Terms, you may not use our services.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-6">
                  2. Eligibility Requirements
                </h2>
                <p className="leading-relaxed">To use our services, you must:</p>
                <ul className="list-disc list-inside mt-6 space-y-3 text-gray-300">
                  <li>Be at least 18 years of age</li>
                  <li>Provide valid government-issued identification</li>
                  <li>Have the legal capacity to enter into binding agreements</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Meet our technical and equipment requirements</li>
                  <li>Demonstrate commitment to professional content creation</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-6">3. Services Provided</h2>
                <div className="space-y-6">
                  <p className="leading-relaxed">
                    Stripechat Agency provides digital content creator management services, including:
                  </p>
                  <ul className="list-disc list-inside mt-6 space-y-3 text-gray-300">
                    <li>Comprehensive training and onboarding programs</li>
                    <li>Technical setup and optimization support</li>
                    <li>Audience building and engagement strategies</li>
                    <li>Payment processing and financial guidance</li>
                    <li>24/7 technical and professional support</li>
                    <li>Legal compliance and privacy protection</li>
                    <li>Performance monitoring and growth optimization</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-6">
                  4. Creator Responsibilities
                </h2>
                <p className="leading-relaxed">As a creator in our program, you agree to:</p>
                <ul className="list-disc list-inside mt-6 space-y-3 text-gray-300">
                  <li>Provide accurate and truthful information during registration</li>
                  <li>Maintain professional standards in all content creation</li>
                  <li>Follow all platform terms of service and community guidelines</li>
                  <li>Attend required training sessions and follow our guidance</li>
                  <li>Maintain consistent activity levels as agreed upon</li>
                  <li>Protect confidential information and trade secrets</li>
                  <li>Report any issues or concerns promptly to our support team</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-6">5. Payment Terms</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">Revenue Sharing</h3>
                    <p className="leading-relaxed">
                      Our revenue-sharing model is based on transparent agreements outlined in your individual creator
                      contract. All payment terms, percentages, and schedules are clearly defined before you begin
                      creating content.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">Payment Processing</h3>
                    <p className="leading-relaxed">
                      Payments are processed according to the schedule outlined in your agreement. We provide detailed
                      earnings reports and ensure all payments comply with tax and regulatory requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">Taxes and Compliance</h3>
                    <p className="leading-relaxed">
                      You are responsible for reporting and paying all applicable taxes on your earnings. We provide
                      necessary documentation to assist with tax compliance.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-6">
                  6. Intellectual Property
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">Your Content</h3>
                    <p className="leading-relaxed">
                      You retain ownership of content you create. However, you grant us necessary licenses to provide
                      our services, including promotion, optimization, and platform management.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">Our Materials</h3>
                    <p className="leading-relaxed">
                      All training materials, strategies, and proprietary information provided by us remain our
                      intellectual property and are confidential.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-6">
                  7. Privacy and Data Protection
                </h2>
                <p className="leading-relaxed">
                  Your privacy is paramount to us. Our collection, use, and protection of your personal information is
                  governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-6">
                  8. Prohibited Activities
                </h2>
                <p className="leading-relaxed">You agree not to:</p>
                <ul className="list-disc list-inside mt-6 space-y-3 text-gray-300">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Create content that is illegal, harmful, or offensive</li>
                  <li>Share confidential information or trade secrets</li>
                  <li>Engage in fraudulent or deceptive practices</li>
                  <li>Interfere with our services or other users' experiences</li>
                  <li>Use our services for unauthorized commercial purposes</li>
                  <li>Attempt to circumvent our security measures</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-6">9. Termination</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">Termination by You</h3>
                    <p className="leading-relaxed">
                      You may terminate your agreement with us at any time by providing written notice. Final payments
                      will be processed according to our standard schedule.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">Termination by Us</h3>
                    <p className="leading-relaxed">
                      We may terminate your agreement for violation of these Terms, failure to meet performance
                      standards, or other material breaches. We will provide reasonable notice when possible.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-6">
                  10. Disclaimers and Limitations
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">Service Availability</h3>
                    <p className="leading-relaxed">
                      While we strive for continuous service availability, we cannot guarantee uninterrupted access to
                      our services or third-party platforms.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">Earnings Disclaimer</h3>
                    <p className="leading-relaxed">
                      Earnings potential varies based on individual effort, market conditions, and other factors. Past
                      performance does not guarantee future results.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">Third-Party Platforms</h3>
                    <p className="leading-relaxed">
                      We are not responsible for changes to third-party platform policies, technical issues, or other
                      factors beyond our control.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-6">11. Indemnification</h2>
                <p className="leading-relaxed">
                  You agree to indemnify and hold harmless Stripechat Agency from any claims, damages, or expenses
                  arising from your use of our services, violation of these Terms, or infringement of third-party
                  rights.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-6">12. Dispute Resolution</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">Informal Resolution</h3>
                    <p className="leading-relaxed">
                      We encourage resolving disputes through direct communication with our support team before pursuing
                      formal legal action.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">Governing Law</h3>
                    <p className="leading-relaxed">
                      These Terms are governed by Indian law, and any disputes will be subject to the jurisdiction of
                      Indian courts.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-6">13. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We may update these Terms from time to time. Material changes will be communicated to you via email or
                  through our platform. Continued use of our services after changes constitutes acceptance of the
                  updated Terms.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-6">
                  14. Contact Information
                </h2>
                <p className="leading-relaxed">For questions about these Terms or our services, please contact us:</p>
                <div className="mt-6 p-8 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-primary/20">
                  <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                    <p>
                      <strong className="text-white">Email:</strong> legal@stripchatagency.in
                    </p>
                    <p>
                      <strong className="text-white">Phone:</strong> +91 8700955207
                    </p>
                    <p>
                      <strong className="text-white">WhatsApp:</strong> +91 8700955207
                    </p>
                    <p>
                      <strong className="text-white">Address:</strong> Stripechat Agency, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-8">
                <p className="text-sm text-gray-400 leading-relaxed">
                  By using our services, you acknowledge that you have read and understood these Terms and Conditions
                  and agree to be bound by them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  )
}
