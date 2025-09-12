import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=800&width=1920"
            alt="Privacy Policy"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-black text-4xl md:text-6xl text-white mb-6 text-balance">
              Privacy{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-pretty">
              Your privacy and data security are our top priorities. Learn how we protect and handle your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-card border-primary/20 text-center">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-white">Data Protection</h3>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 text-center">
              <CardContent className="p-6">
                <Lock className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-white">Secure Storage</h3>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 text-center">
              <CardContent className="p-6">
                <Eye className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-white">Transparency</h3>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 text-center">
              <CardContent className="p-6">
                <FileText className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-white">Compliance</h3>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto prose prose-invert">
            <div className="text-gray-300 space-y-8">
              <div>
                <p className="text-sm text-gray-400 mb-4">Last updated: December 2024</p>
                <p className="text-lg leading-relaxed">
                  Stripechat Agency ("we," "our," or "us") is committed to protecting your privacy and ensuring the
                  security of your personal information. This Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you use our services.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">Personal Information</h3>
                    <p>
                      We collect personal information that you voluntarily provide to us, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Full name and contact information (email, phone number)</li>
                      <li>Government-issued identification for age verification</li>
                      <li>Banking and payment information for earnings distribution</li>
                      <li>Profile information and content creation preferences</li>
                      <li>Communication records and support interactions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">Technical Information</h3>
                    <p>We automatically collect certain technical information, including:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Device information and browser type</li>
                      <li>IP address and location data</li>
                      <li>Usage patterns and platform interactions</li>
                      <li>Performance metrics and analytics data</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Account creation, verification, and management</li>
                  <li>Providing training, support, and creator development services</li>
                  <li>Processing payments and maintaining financial records</li>
                  <li>Communicating about services, updates, and opportunities</li>
                  <li>Ensuring platform safety and preventing fraud</li>
                  <li>Complying with legal obligations and regulatory requirements</li>
                  <li>Improving our services and user experience</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  3. Information Sharing and Disclosure
                </h2>
                <div className="space-y-4">
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your
                    information only in the following circumstances:
                  </p>

                  <div>
                    <h3 className="font-semibold text-white mb-2">Service Providers</h3>
                    <p>
                      We may share information with trusted third-party service providers who assist us in operating our
                      business, such as payment processors, cloud storage providers, and analytics services. These
                      providers are bound by confidentiality agreements.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">Legal Requirements</h3>
                    <p>
                      We may disclose information when required by law, court order, or government regulation, or to
                      protect our rights, property, or safety.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">Platform Partners</h3>
                    <p>
                      Necessary information may be shared with content platforms for account setup and compliance
                      purposes, always in accordance with their privacy policies.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">4. Data Security</h2>
                <p>We implement comprehensive security measures to protect your information:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>End-to-end encryption for sensitive data transmission</li>
                  <li>Secure cloud storage with regular security audits</li>
                  <li>Multi-factor authentication for account access</li>
                  <li>Regular security training for all team members</li>
                  <li>Incident response procedures for potential breaches</li>
                  <li>Compliance with industry-standard security protocols</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">5. Your Privacy Rights</h2>
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal information we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal information (subject to legal
                    requirements)
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data to another service provider
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to certain processing of your information
                  </li>
                  <li>
                    <strong>Withdrawal:</strong> Withdraw consent for data processing where applicable
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">6. Data Retention</h2>
                <p>
                  We retain your personal information only as long as necessary to fulfill the purposes outlined in this
                  policy, comply with legal obligations, resolve disputes, and enforce our agreements. Financial records
                  are retained for tax and regulatory compliance purposes as required by law.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">7. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your country of
                  residence. We ensure that such transfers comply with applicable data protection laws and implement
                  appropriate safeguards to protect your information.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">8. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns,
                  and improve our services. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
                <p>
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect
                  personal information from children under 18. If we become aware that we have collected such
                  information, we will take steps to delete it promptly.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                  requirements. We will notify you of any material changes by posting the updated policy on our website
                  and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">11. Contact Information</h2>
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us:
                </p>
                <div className="mt-4 p-4 bg-card rounded-lg border border-primary/20">
                  <p>
                    <strong>Email:</strong> privacy@stripchatagency.in
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 8700955207
                  </p>
                  <p>
                    <strong>WhatsApp:</strong> +91 8700955207
                  </p>
                  <p>
                    <strong>Response Time:</strong> Within 48 hours
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">12. Governing Law</h2>
                <p>
                  This Privacy Policy is governed by and construed in accordance with the laws of India. Any disputes
                  arising from this policy will be subject to the jurisdiction of Indian courts.
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
