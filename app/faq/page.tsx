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
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Frequently Asked Questions</span>
            </div>

            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white mb-8 text-balance leading-tight">
              Frequently Asked{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary via-red-500 to-red-600 bg-clip-text text-transparent">
                  Questions
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-red-600 rounded-full" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto text-pretty leading-relaxed">
              Get answers to common questions about joining our{" "}
              <span className="text-primary font-semibold">creator community</span> and building your career
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
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">Safety & Privacy</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">Payments & Earnings</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">Training & Support</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">Getting Started</h3>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem
                value="safety-1"
                className="bg-gradient-to-br from-card to-card/50 border-primary/20 rounded-xl px-8 py-2 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-primary text-lg font-semibold">
                  Is my personal information and privacy protected?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                  Absolutely. We take privacy and data protection very seriously. All personal information is encrypted
                  and stored securely. We comply with all data protection regulations and never share your personal
                  details with third parties without your explicit consent. Your safety and privacy are our top
                  priorities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="safety-2"
                className="bg-gradient-to-br from-card to-card/50 border-primary/20 rounded-xl px-8 py-2 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-primary text-lg font-semibold">
                  What safety measures are in place for content creators?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                  We have comprehensive safety protocols including 24/7 moderation, secure payment systems, legal
                  contract protection, and immediate support for any safety concerns. All creators receive safety
                  training and have access to our support team at any time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="safety-3"
                className="bg-gradient-to-br from-card to-card/50 border-primary/20 rounded-xl px-8 py-2 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-primary text-lg font-semibold">
                  Can I remain anonymous while creating content?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                  While we require valid ID for verification and legal compliance, you can use a stage name or persona
                  for your content creation. Your real identity is kept confidential and only used for legal and payment
                  purposes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="payment-1"
                className="bg-gradient-to-br from-card to-card/50 border-primary/20 rounded-xl px-8 py-2 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-primary text-lg font-semibold">
                  How much can I earn as a content creator?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                  Earnings vary based on your dedication, audience size, and engagement. Our successful creators earn
                  between ₹30,000 to ₹1,50,000+ per month. With our training and support, most creators see significant
                  income growth within 3-6 months of consistent work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="payment-2"
                className="bg-gradient-to-br from-card to-card/50 border-primary/20 rounded-xl px-8 py-2 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-primary text-lg font-semibold">
                  How and when do I get paid?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                  Payments are processed weekly or bi-weekly depending on the platform. We ensure transparent payment
                  tracking and provide detailed earnings reports. All payments are made directly to your bank account
                  with proper documentation for tax purposes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="payment-3"
                className="bg-gradient-to-br from-card to-card/50 border-primary/20 rounded-xl px-8 py-2 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-primary text-lg font-semibold">
                  Are there any hidden fees or charges?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                  No hidden fees. Our revenue-sharing model is completely transparent. We only succeed when you succeed.
                  All fee structures are clearly explained upfront, and there are no surprise deductions or charges.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="training-1"
                className="bg-gradient-to-br from-card to-card/50 border-primary/20 rounded-xl px-8 py-2 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-primary text-lg font-semibold">
                  What kind of training do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                  We provide comprehensive training covering technical setup (camera, lighting, audio), content
                  strategy, audience engagement, platform optimization, and income maximization. Training includes
                  one-on-one sessions, group workshops, and ongoing support materials.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="training-2"
                className="bg-gradient-to-br from-card to-card/50 border-primary/20 rounded-xl px-8 py-2 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-primary text-lg font-semibold">
                  Is support available 24/7?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                  Yes, we provide 24/7 support through multiple channels including WhatsApp, email, and phone. Our
                  support team is always available to help with technical issues, questions, or any concerns you might
                  have.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="training-3"
                className="bg-gradient-to-br from-card to-card/50 border-primary/20 rounded-xl px-8 py-2 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-primary text-lg font-semibold">
                  Do I need prior experience in content creation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                  No prior experience is required. Our training program is designed for complete beginners. We'll teach
                  you everything from basic technical setup to advanced audience engagement strategies. Your willingness
                  to learn is more important than previous experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="start-1"
                className="bg-gradient-to-br from-card to-card/50 border-primary/20 rounded-xl px-8 py-2 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-primary text-lg font-semibold">
                  How long does the application process take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                  The application process typically takes 24-48 hours. This includes initial consultation, document
                  verification, and account setup. Once approved, you can start training immediately and begin creating
                  content within a week.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="start-2"
                className="bg-gradient-to-br from-card to-card/50 border-primary/20 rounded-xl px-8 py-2 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-primary text-lg font-semibold">
                  What equipment do I need to get started?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                  You need either a laptop or a 5G smartphone with good camera quality, stable internet connection (min
                  10 Mbps upload), and a quiet space for content creation. We'll help you optimize your setup during
                  training, and additional equipment recommendations are provided based on your goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="start-3"
                className="bg-gradient-to-br from-card to-card/50 border-primary/20 rounded-xl px-8 py-2 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-primary text-lg font-semibold">
                  Can I work part-time or do I need to commit full-time?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                  While we recommend 7-8 hours daily for optimal audience building and income growth, we offer flexible
                  scheduling. Part-time creators can still be successful, though income growth may be slower. We'll work
                  with you to create a schedule that fits your lifestyle.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="start-4"
                className="bg-gradient-to-br from-card to-card/50 border-primary/20 rounded-xl px-8 py-2 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-primary text-lg font-semibold">
                  What platforms will I be creating content for?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                  We work with various mainstream live-streaming and social platforms. The specific platforms depend on
                  your preferences, skills, and target audience. During consultation, we'll help you choose the best
                  platforms for your goals and provide training for each platform's requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="legal-1"
                className="bg-gradient-to-br from-card to-card/50 border-primary/20 rounded-xl px-8 py-2 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-primary text-lg font-semibold">
                  Is this work legally compliant in India?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                  Yes, all our operations are fully compliant with Indian laws and regulations. We provide proper
                  contracts, tax documentation, and ensure all activities meet legal requirements. Our legal team
                  ensures ongoing compliance with all applicable laws.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="support-1"
                className="bg-gradient-to-br from-card to-card/50 border-primary/20 rounded-xl px-8 py-2 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-primary text-lg font-semibold">
                  What if I'm not satisfied with the program?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                  We're committed to your success and satisfaction. If you're not satisfied with our program within the
                  first 30 days, we'll work with you to address any concerns. Our goal is to ensure every creator has
                  the support and tools they need to succeed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary/10 via-red-600/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-full mx-auto flex items-center justify-center mb-6">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
          </div>

          <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">Still Have Questions?</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Our team is here to help! Contact us directly for personalized answers to your questions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 text-white px-10 py-6 text-xl font-bold rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://wa.me/918700955207" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp <ArrowRight className="ml-3 w-6 h-6" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 text-white hover:bg-primary/10 hover:border-primary px-10 py-6 text-xl font-semibold bg-transparent rounded-full backdrop-blur-sm"
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
