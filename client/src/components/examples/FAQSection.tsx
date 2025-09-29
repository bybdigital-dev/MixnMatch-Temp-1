import FAQSection from '../FAQSection';

export default function FAQSectionExample() {
  // TODO: remove mock functionality - replace with real FAQs
  const mockFaqs = [
    {
      question: "How long does installation take?",
      answer: "Most installations are completed within 2-4 hours, depending on the complexity and number of windows. We'll provide an accurate timeframe during your consultation."
    },
    {
      question: "Do you provide free measurements?",
      answer: "Yes! We offer free in-home consultations and measurements. Our experts will assess your space and provide detailed quotes with no obligation."
    },
    {
      question: "What's included in the 5-year guarantee?",
      answer: "Our guarantee covers manufacturing defects, installation quality, and hardware functionality. We stand behind our work and will address any covered issues promptly."
    },
    {
      question: "How do I care for my new curtains or blinds?",
      answer: "Care instructions vary by material. We provide detailed care guides with every installation, and most items can be maintained with regular dusting and occasional professional cleaning."
    }
  ];

  return <FAQSection faqs={mockFaqs} />;
}