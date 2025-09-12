import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, DollarSign, Clock, Users, ArrowRight, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=800&width=1920"
            alt="FAQ"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading font-black text-4xl md:text-6xl text-white mb-6 text-balance">
              Frequently Asked{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-pretty">
              Get answers to common questions about joining our creator community and building your career
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors text-center">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-white">Safety & Privacy</h3>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors text-center">
              <CardContent className="p-6">
                <DollarSign className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-white">Payments & Earnings</h3>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors text-center">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-white">Training & Support</h3>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-white">Getting Started</h3>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {/* Safety & Privacy */}
              <AccordionItem value="safety-1" className="bg-card border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-primary">
                  Is my personal information and privacy protected?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Absolutely. We take privacy and data protection very seriously. All personal information is encrypted
                  and stored securely. We comply with all data protection regulations and never share your personal
                  details with third parties without your explicit consent. Your safety and privacy are our top
                  priorities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="safety-2" className="bg-card border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-primary">
                  What safety measures are in place for content creators?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  We have comprehensive safety protocols including 24/7 moderation, secure payment systems, legal
                  contract protection, and immediate support for any safety concerns. All creators receive safety
                  training and have access to our support team at any time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="safety-3" className="bg-card border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-primary">
                  Can I remain anonymous while creating content?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  While we require valid ID for verification and legal compliance, you can use a stage name or persona
                  for your content creation. Your real identity is kept confidential and only used for legal and payment
                  purposes.
                </AccordionContent>
              </AccordionItem>

              {/* Payments & Earnings */}
              <AccordionItem value="payment-1" className="bg-card border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-primary">
                  How much can I earn as a content creator?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Earnings vary based on your dedication, audience size, and engagement. Our successful creators earn
                  between ₹30,000 to ₹1,50,000+ per month. With our training and support, most creators see significant
                  income growth within 3-6 months of consistent work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment-2" className="bg-card border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-primary">
                  How and when do I get paid?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Payments are processed weekly or bi-weekly depending on the platform. We ensure transparent payment
                  tracking and provide detailed earnings reports. All payments are made directly to your bank account
                  with proper documentation for tax purposes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment-3" className="bg-card border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-primary">
                  Are there any hidden fees or charges?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  No hidden fees. Our revenue-sharing model is completely transparent. We only succeed when you succeed.
                  All fee structures are clearly explained upfront, and there are no surprise deductions or charges.
                </AccordionContent>
              </AccordionItem>

              {/* Training & Support */}
              <AccordionItem value="training-1" className="bg-card border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-primary">
                  What kind of training do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  We provide comprehensive training covering technical setup (camera, lighting, audio), content
                  strategy, audience engagement, platform optimization, and income maximization. Training includes
                  one-on-one sessions, group workshops, and ongoing support materials.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="training-2" className="bg-card border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-primary">
                  Is support available 24/7?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Yes, we provide 24/7 support through multiple channels including WhatsApp, email, and phone. Our
                  support team is always available to help with technical issues, questions, or any concerns you might
                  have.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="training-3" className="bg-card border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-primary">
                  Do I need prior experience in content creation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  No prior experience is required. Our training program is designed for complete beginners. We'll teach
                  you everything from basic technical setup to advanced audience engagement strategies. Your willingness
                  to learn is more important than previous experience.
                </AccordionContent>
              </AccordionItem>

              {/* Getting Started */}
              <AccordionItem value="start-1" className="bg-card border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-primary">
                  How long does the application process take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  The application process typically takes 24-48 hours. This includes initial consultation, document
                  verification, and account setup. Once approved, you can start training immediately and begin creating
                  content within a week.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="start-2" className="bg-card border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-primary">
                  What equipment do I need to get started?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  You need either a laptop or a 5G smartphone with good camera quality, stable internet connection (min
                  10 Mbps upload), and a quiet space for content creation. We'll help you optimize your setup during
                  training, and additional equipment recommendations are provided based on your goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="start-3" className="bg-card border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-primary">
                  Can I work part-time or do I need to commit full-time?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  While we recommend 7-8 hours daily for optimal audience building and income growth, we offer flexible
                  scheduling. Part-time creators can still be successful, though income growth may be slower. We'll work
                  with you to create a schedule that fits your lifestyle.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="start-4" className="bg-card border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-primary">
                  What platforms will I be creating content for?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  We work with various mainstream live-streaming and social platforms. The specific platforms depend on
                  your preferences, skills, and target audience. During consultation, we'll help you choose the best
                  platforms for your goals and provide training for each platform's requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="legal-1" className="bg-card border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-primary">
                  Is this work legally compliant in India?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Yes, all our operations are fully compliant with Indian laws and regulations. We provide proper
                  contracts, tax documentation, and ensure all activities meet legal requirements. Our legal team
                  ensures ongoing compliance with all applicable laws.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support-1" className="bg-card border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-primary">
                  What if I'm not satisfied with the program?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  We're committed to your success and satisfaction. If you're not satisfied with our program within the
                  first 30 days, we'll work with you to address any concerns. Our goal is to ensure every creator has
                  the support and tools they need to succeed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-red-600/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help! Contact us directly for personalized answers to your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold"
            >
              <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/contact">Send Email</Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  )
}
