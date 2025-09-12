import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Scale, Shield, AlertTriangle } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=800&width=1920"
            alt="Terms and Conditions"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-black text-4xl md:text-6xl text-white mb-6 text-balance">
              Terms &{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-pretty">
              Please read these terms carefully before using our services. They govern your relationship with Stripechat
              Agency.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-card border-primary/20 text-center">
              <CardContent className="p-6">
                <FileText className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-white">Service Agreement</h3>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 text-center">
              <CardContent className="p-6">
                <Scale className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-white">Legal Framework</h3>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 text-center">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-white">Rights & Responsibilities</h3>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 text-center">
              <CardContent className="p-6">
                <AlertTriangle className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-white">Important Notices</h3>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto prose prose-invert">
            <div className="text-gray-300 space-y-8">
              <div>
                <p className="text-sm text-gray-400 mb-4">Last updated: December 2024</p>
                <p className="text-lg leading-relaxed">
                  These Terms and Conditions ("Terms") govern your use of services provided by Stripechat Agency
                  ("Company," "we," "our," or "us"). By accessing or using our services, you agree to be bound by these
                  Terms.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By registering for our services, participating in our training programs, or engaging with our
                  platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and our
                  Privacy Policy. If you do not agree to these Terms, you may not use our services.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">2. Eligibility Requirements</h2>
                <p>To use our services, you must:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Be at least 18 years of age</li>
                  <li>Provide valid government-issued identification</li>
                  <li>Have the legal capacity to enter into binding agreements</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Meet our technical and equipment requirements</li>
                  <li>Demonstrate commitment to professional content creation</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">3. Services Provided</h2>
                <div className="space-y-4">
                  <p>Stripechat Agency provides digital content creator management services, including:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
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
                <h2 className="font-heading text-2xl font-bold text-white mb-4">4. Creator Responsibilities</h2>
                <p>As a creator in our program, you agree to:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
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
                <h2 className="font-heading text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">Revenue Sharing</h3>
                    <p>
                      Our revenue-sharing model is based on transparent agreements outlined in your individual creator
                      contract. All payment terms, percentages, and schedules are clearly defined before you begin
                      creating content.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">Payment Processing</h3>
                    <p>
                      Payments are processed according to the schedule outlined in your agreement. We provide detailed
                      earnings reports and ensure all payments comply with tax and regulatory requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">Taxes and Compliance</h3>
                    <p>
                      You are responsible for reporting and paying all applicable taxes on your earnings. We provide
                      necessary documentation to assist with tax compliance.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">Your Content</h3>
                    <p>
                      You retain ownership of content you create. However, you grant us necessary licenses to provide
                      our services, including promotion, optimization, and platform management.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">Our Materials</h3>
                    <p>
                      All training materials, strategies, and proprietary information provided by us remain our
                      intellectual property and are confidential.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">7. Privacy and Data Protection</h2>
                <p>
                  Your privacy is paramount to us. Our collection, use, and protection of your personal information is
                  governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">8. Prohibited Activities</h2>
                <p>You agree not to:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
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
                <h2 className="font-heading text-2xl font-bold text-white mb-4">9. Termination</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">Termination by You</h3>
                    <p>
                      You may terminate your agreement with us at any time by providing written notice. Final payments
                      will be processed according to our standard schedule.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">Termination by Us</h3>
                    <p>
                      We may terminate your agreement for violation of these Terms, failure to meet performance
                      standards, or other material breaches. We will provide reasonable notice when possible.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">10. Disclaimers and Limitations</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">Service Availability</h3>
                    <p>
                      While we strive for continuous service availability, we cannot guarantee uninterrupted access to
                      our services or third-party platforms.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">Earnings Disclaimer</h3>
                    <p>
                      Earnings potential varies based on individual effort, market conditions, and other factors. Past
                      performance does not guarantee future results.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">Third-Party Platforms</h3>
                    <p>
                      We are not responsible for changes to third-party platform policies, technical issues, or other
                      factors beyond our control.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">11. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless Stripechat Agency from any claims, damages, or expenses
                  arising from your use of our services, violation of these Terms, or infringement of third-party
                  rights.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">12. Dispute Resolution</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">Informal Resolution</h3>
                    <p>
                      We encourage resolving disputes through direct communication with our support team before pursuing
                      formal legal action.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">Governing Law</h3>
                    <p>
                      These Terms are governed by Indian law, and any disputes will be subject to the jurisdiction of
                      Indian courts.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">13. Changes to Terms</h2>
                <p>
                  We may update these Terms from time to time. Material changes will be communicated to you via email or
                  through our platform. Continued use of our services after changes constitutes acceptance of the
                  updated Terms.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">14. Contact Information</h2>
                <p>For questions about these Terms or our services, please contact us:</p>
                <div className="mt-4 p-4 bg-card rounded-lg border border-primary/20">
                  <p>
                    <strong>Email:</strong> legal@stripchatagency.in
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 8700955207
                  </p>
                  <p>
                    <strong>WhatsApp:</strong> +91 8700955207
                  </p>
                  <p>
                    <strong>Address:</strong> Stripechat Agency, India
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-8">
                <p className="text-sm text-gray-400">
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
