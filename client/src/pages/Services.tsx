import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Blinds, Scissors, Palette, Bed, Zap, ArrowRight } from 'lucide-react';

// Import generated images
import heroImage from '@assets/generated_images/Hero_living_room_curtains_763d6b70.png';
import fabricsImage from '@assets/generated_images/Fabric_swatches_collection_53280bf0.png';
import yarnImage from '@assets/generated_images/Yarn_collection_display_c9cdaaf9.png';
import beddingImage from '@assets/generated_images/Luxury_bedding_lifestyle_a1d84396.png';
import upholsteryImage from '@assets/generated_images/Upholstery_before_after_e6f2b2f5.png';

export default function Services() {
  // TODO: remove mock functionality - replace with real data from API
  const services = [
    {
      title: "Curtains & Blinds",
      description: "Transform your windows with our extensive range of curtains and blinds. From roller and Roman to Venetian and blackout options, we provide professional measurement and installation.",
      features: [
        "S-fold, eyelet, and Roman blind styles",
        "Professional measurement and installation", 
        "Blackout and light-filtering options",
        "Custom sizing for any window",
        "Motorized and smart home integration",
        "Wide range of premium fabrics"
      ],
      image: heroImage,
      icon: Blinds,
      href: "#curtains-blinds"
    },
    {
      title: "Upholstery Services", 
      description: "Give your furniture new life with our professional reupholstery services. Expert craftsmanship meets beautiful fabrics to restore and refresh your cherished pieces.",
      features: [
        "Complete furniture restoration",
        "Spring and frame repair services",
        "Wide fabric selection available",
        "Expert pattern matching",
        "Antique and modern furniture",
        "Before and after consultation"
      ],
      image: upholsteryImage,
      icon: Scissors,
      href: "#upholstery"
    },
    {
      title: "Premium Fabrics",
      description: "Choose from our curated collection of luxury fabrics including linen, cotton, outdoor materials, and specialized textiles for any application.",
      features: [
        "High-quality materials sourced globally",
        "Sustainable and eco-friendly options", 
        "Indoor and outdoor fabric varieties",
        "Blackout lining and specialty fabrics",
        "Expert fabric consultation",
        "Custom fabric sourcing available"
      ],
      image: fabricsImage,
      icon: Palette,
      href: "#fabrics"
    },
    {
      title: "Bedding & Linen",
      description: "Create the perfect sleeping environment with our luxury bedding collection. Premium sheets, duvet covers, and pillowcases in beautiful materials.",
      features: [
        "Egyptian cotton and linen options",
        "Complete size chart available",
        "Thread count guarantee",
        "Care instructions included",
        "Custom sizing available",
        "Matching pillowcase sets"
      ],
      image: beddingImage,
      icon: Bed,
      href: "#bedding"
    },
    {
      title: "Yarns & Wool",
      description: "Discover our extensive collection of knitting and crochet yarns. From cotton and wool to acrylic blends, we have materials for every project and skill level.",
      features: [
        "Cotton, wool, and acrylic varieties",
        "Multiple weights and textures",
        "Yarn color gallery display",
        "Hook and needle size guidance",
        "Project consultation available",
        "Bulk pricing for large projects"
      ],
      image: yarnImage,
      icon: Zap,
      href: "#yarns"
    }
  ];

  const handleViewAllWork = () => {
    console.log('View all work clicked');
    // TODO: remove mock functionality - replace with navigation to gallery
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4">Premium Textile Services</Badge>
          <h1 className="text-5xl font-serif font-bold mb-6" data-testid="text-services-heading">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            From window treatments to furniture restoration, we provide comprehensive textile solutions 
            for your home. Each service combines quality craftsmanship with premium materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-testid="button-services-quote">
              Get Free Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleViewAllWork}
              data-testid="button-services-gallery"
            >
              View Our Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional textile services designed to transform your home with quality, 
              style, and expert craftsmanship
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From initial consultation to final installation, we ensure every step exceeds your expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Consultation</h3>
              <p className="text-muted-foreground">We visit your home to assess your needs and discuss your vision</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Design & Quote</h3>
              <p className="text-muted-foreground">Detailed measurements, material selection, and comprehensive pricing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Craftsmanship</h3>
              <p className="text-muted-foreground">Professional creation using premium materials and techniques</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Installation</h3>
              <p className="text-muted-foreground">Perfect fit and finish with our 5-year quality guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Why Choose Textile Haven?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">14+ Years of Experience</h3>
                    <p className="text-muted-foreground">Trusted expertise in home textile solutions across Melbourne</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Quality Guarantee</h3>
                    <p className="text-muted-foreground">5-year comprehensive warranty on all workmanship and materials</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Premium Materials</h3>
                    <p className="text-muted-foreground">Only the finest fabrics and materials sourced from trusted suppliers</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Customer Satisfaction</h3>
                    <p className="text-muted-foreground">Over 500 happy customers with 4.9-star average rating</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-2xl font-serif font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Transform your home with our professional textile services. 
                Contact us today for your free consultation and quote.
              </p>
              <div className="space-y-4">
                <Button className="w-full" size="lg" data-testid="button-services-contact">
                  Book Free Consultation
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  <p>📞 (03) 9123 4567</p>
                  <p>✉️ hello@textilehaven.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}