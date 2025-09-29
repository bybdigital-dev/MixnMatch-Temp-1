import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';

export default function FAQ() {
  // TODO: remove mock functionality - replace with real FAQ data
  const faqs = [
    {
      question: "How long does installation take?",
      answer: "Most installations are completed within 2-4 hours, depending on the complexity and number of windows. Larger projects like multiple rooms or complex upholstery work may take a full day. We'll provide an accurate timeframe during your consultation and always work efficiently to minimize disruption to your daily routine."
    },
    {
      question: "Do you provide free measurements and consultations?",
      answer: "Yes! We offer completely free in-home consultations and measurements. Our experts will visit your home, assess your space, discuss your needs and preferences, and provide detailed quotes with no obligation. This service is complimentary because we believe in building relationships with our customers from the very beginning."
    },
    {
      question: "What areas do you service?",
      answer: "We primarily service Melbourne and surrounding metropolitan areas. For regional customers, we can arrange special consultations and installations - please contact us to discuss your specific location. We're always happy to travel for larger projects and have served customers as far as Geelong and the Mornington Peninsula."
    },
    {
      question: "What's included in your 5-year guarantee?",
      answer: "Our comprehensive 5-year guarantee covers manufacturing defects, installation quality, hardware functionality, and fabric durability under normal use. This includes free repairs or replacements for any covered issues. We stand behind our work completely and will address any problems promptly at no cost to you."
    },
    {
      question: "How do I care for my new curtains, blinds, or upholstery?",
      answer: "Care instructions vary by material and we provide detailed, specific care guides with every installation. Generally, most items can be maintained with regular gentle dusting and occasional professional cleaning. We also offer cleaning services and can recommend trusted cleaning professionals in your area."
    },
    {
      question: "Can you match existing fabrics or colors in my home?",
      answer: "Absolutely! We specialize in color matching and can work with existing décor, furniture, or fabric samples you provide. Our fabric consultant will help you choose complementary materials that enhance your current style while meeting your functional needs. We can also source custom colors if needed."
    },
    {
      question: "What payment options do you offer?",
      answer: "We accept cash, all major credit cards, bank transfers, and offer flexible payment plans for larger projects. A small deposit is typically required to begin work, with the balance due upon completion. We're happy to discuss payment arrangements that work best for your budget during your consultation."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking 2-3 weeks in advance for most projects, though we can often accommodate urgent requests. During peak seasons (spring and early summer), booking 4-6 weeks ahead is ideal. For large projects or custom orders, we may need 6-8 weeks. Contact us as early as possible to secure your preferred dates."
    },
    {
      question: "Do you offer eco-friendly and sustainable options?",
      answer: "Yes! We're committed to sustainability and offer a wide range of eco-friendly fabrics, including organic cotton, hemp, bamboo, and recycled materials. We also work with suppliers who follow sustainable manufacturing practices. Our upholstery services extend furniture life, which is inherently environmentally friendly."
    },
    {
      question: "What if I'm not completely satisfied with the final result?",
      answer: "Customer satisfaction is our top priority. If you're not completely happy with any aspect of our work, we'll work with you to make it right at no additional cost. This might involve adjustments, replacements, or modifications until you're 100% satisfied. We've built our reputation on happy customers and word-of-mouth referrals."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6" data-testid="text-faq-page-heading">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, processes, and policies. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} title="" />

      {/* Still have questions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our friendly team is here to help. Get in touch for personalized answers 
            and expert advice for your specific project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover-elevate"
              data-testid="button-faq-contact"
            >
              Contact Us
            </button>
            <button 
              className="border border-border text-foreground px-8 py-4 rounded-lg font-medium hover-elevate"
              data-testid="button-faq-book-consultation"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}