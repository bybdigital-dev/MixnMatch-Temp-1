import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ProductGallery from '@/components/ProductGallery';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Blinds, Scissors, Palette, Bed, Volleyball, ArrowRight, Zap } from 'lucide-react';
import FeaturedProductsGridCarousel from "@/components/FeaturedProductsGridCarousel";


// Import generated images
import fabricsImage from '@assets/generated_images/Fabric_swatches_collection_53280bf0.png';
import yarnImage from '@assets/generated_images/Yarn_collection_display_c9cdaaf9.png';
import yarn1Image from '@assets/generated_images/Yarns_gallery_crop.jpg';
import beddingImage from '@assets/generated_images/Luxury_bedding_lifestyle_a1d84396.png';
import upholsteryImage from '@assets/generated_images/Upholstery_before_after_e6f2b2f5.png';
import curtainsblindsImage from '@assets/generated_images/CurtainsBlinds.jpg';
import cutfoamImage from '@assets/generated_images/cutfoam.jpeg';
import dressfabricsImage from '@assets/generated_images/Dress_fabric.jpg';
import blindsImage from '@assets/generated_images/Blinds_Combined.jpg';
import curtainsImage from '@assets/generated_images/curtains.jpg';
import headboardImage from '@assets/generated_images/headboard.jpeg';
import yarnsImage from '@assets/generated_images/yarns.jpg';
import customcurtainImage from '@assets/generated_images/custom_curtain.jpg';
import romanblindsImage from '@assets/generated_images/Roman_blinds.jpeg';
import sunscreenblindsImage from '@assets/generated_images/Sunscreen_Blockout_blinds.jpeg';
import verticalblindsImage from '@assets/generated_images/vertical_blinds.jpeg';
import blinds2Image from '@assets/generated_images/blinds.jpeg';
import redcouchImage from '@assets/generated_images/red_couch.jpeg';
import leatherwingbackImage from '@assets/generated_images/leather_wingback.jpeg';
import headboard2Image from '@assets/generated_images/headboard_photo.jpeg';
import customwingbackImage from '@assets/generated_images/custom_wingback.jpeg';



export default function Home() {
  // TODO: remove mock functionality - replace with real data from API
  const services = [
    {
      title: "Curtains & Blinds",
      description: "Transform your windows with our extensive range of curtains and blinds. From roller and Roman to Venetian and blockout options.",
      features: [
        "Professional measurement and installation",
        "Wide range of styles and materials",
        "Blockout and light-filtering options",
        "Custom sizing for any window"
      ],
      image: curtainsblindsImage,
      icon: Blinds,
      href: "/curtains-blinds"
    },
    {
      title: "Upholstery Services",
      description: "Give your furniture new life with our professional reupholstery services. Expert craftsmanship meets beautiful fabrics.",
      features: [
        "Complete furniture restoration",
        "Wide fabric selection",
        "Expert pattern matching",
        "Before and after consultation"
      ],
      image: upholsteryImage,
      icon: Scissors,
      href: "/upholstery"
    },
    {
      title: "Premium Fabrics",
      description: "Choose from our curated collection of luxury fabrics including linen, cotton, outdoor materials, and blockout lining.",
      features: [
        "High-quality materials",
        "Sustainable and eco-friendly options",
        "Indoor and outdoor varieties",
        "Expert fabric consultation"
      ],
      image: fabricsImage,
      icon: Palette,
      href: "/fabrics"
    },
    {
      title: "Bedding & Linen",
      description: "Create the perfect sleeping environment with our luxury bedding collection. Premium sheets, duvet covers, and pillowcases.",
      features: [
        "Egyptian cotton options",
        "Complete size chart available",
        "Care instructions",
        "Thread count guarantee"
      ],
      image: beddingImage,
      icon: Bed,
      href: "/bedding-linen"
    },
    {
      title: "Yarns & Wool",
      description: "Discover our extensive collection of knitting and crochet yarns. From cotton and wool to acrylic blends, we have materials for every project and skill level.",
      features: [
        "Cotton, wool, and acrylic varieties available in-store",
        "Multiple weights and textures",
        "Yarn color gallery display",
        "Hook and needle size guidance"
      ],
      image: yarn1Image,
      icon: Zap,
      href: "/yarns-wool",
      whatsappNumber: "27724739201"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Melbourne",
      rating: 5,
      testimonial: "Absolutely stunning work! The curtains transformed our living room completely. The team was professional and the quality exceeded our expectations.",
      service: "Curtains & Blinds"
    },
    {
      name: "Michael Chen",
      location: "Sydney",
      rating: 5,
      testimonial: "Our old couch looks brand new after the reupholstery. Amazing attention to detail and the fabric quality is outstanding.",
      service: "Upholstery"
    },
    {
      name: "Emma Wilson",
      location: "Brisbane",
      rating: 5,
      testimonial: "The yarn collection is incredible! Found everything I needed for my projects. Staff were so helpful with recommendations.",
      service: "Yarns & Wool"
    }
  ];

  const featuredProducts = [
    {
      id: '1',
      title: 'Dress fabrics',
      category: 'Fabrics',
      image: dressfabricsImage,
      description: 'High-quality fabrics in various textures'
    },
    {
      id: '2',
      title: 'Merino Wool Yarns',
      category: 'Yarns',
      image: yarnImage,
      description: 'Soft merino wool in multiple weights'
    },
    {
      id: '3',
      title: 'Egyptian Cotton Bedding',
      category: 'Bedding',
      image: beddingImage,
      description: 'Luxury sheets and duvet covers'
    },
    {
      id: '4',
      title: 'Foam',
      category: 'Upholstery',
      image: cutfoamImage,
      description: 'Foam cut to size'
    },
    {
      id: '5',
      title: 'Blinds',
      category: 'Curtains & Blinds',
      image: blindsImage,
      description: 'Variety blinds'
    },
    {
      id: '6',
      title: 'Ready made curtains',
      category: 'Curtains & Blinds',
      image: curtainsImage,
      description: 'Various colours and styles'
    },
    {
      id: '7',
      title: 'Custom made headboards',
      category: 'Bedding & Linen',
      image: headboardImage,
      description: 'Custom size headboards'
    },
    {
      id: '8',
      title: 'Yarns',
      category: 'Yarns',
      image: yarnsImage,
      description: 'Various yarns'
    },
    {
      id: '9',
      title: 'Custom made curtains',
      category: 'Curtains & Blinds',
      image: customcurtainImage,
      description: 'Made according to specification'
    },
    {
      id: '10',
      title: 'Roman blinds',
      category: 'Curtains & Blinds',
      image: romanblindsImage,
      description: 'Available in any material'
    },
    {
      id: '11',
      title: 'Sunscreen & Blockout blinds',
      category: 'Curtains & Blinds',
      image: sunscreenblindsImage,
      description: 'Custom made blinds'
    },
    {
      id: '12',
      title: 'Vertical blinds',
      category: 'Curtains & Blinds',
      image: verticalblindsImage,
      description: 'Custom made blinds'
    },
    {
      id: '13',
      title: 'Blinds',
      category: 'Curtains & Blinds',
      image: blinds2Image,
      description: 'Custom made blinds'
    },
    {
      id: '14',
      title: 'Couch upholstery',
      category: 'Upholstery',
      image: redcouchImage,
      description: 'Custom colours available'
    },
    {
      id: '15',
      title: 'Wingback chair upholstery',
      category: 'Upholstery',
      image: leatherwingbackImage,
      description: 'Custom leathers'
    },
    {
      id: '16',
      title: 'Custom headboard',
      category: 'Bedding & Linen',
      image: headboard2Image,
      description: 'Custom made accord to specification'
    },
    {
      id: '17',
      title: 'Custom wingback chair upholstery',
      category: 'Upholstery',
      image: customwingbackImage,
      description: 'Custom colours and materials'
    }
  ];



  const handleViewAllServices = () => {
    window.location.hash = '/services';
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* Quick Service Links */}
      <section id="services-section" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From window treatments to furniture restoration, we provide comprehensive textile solutions for your home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleViewAllServices}
              data-testid="button-view-all-services"
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProductsGridCarousel
        title="Featured Products"
        products={featuredProducts}
        itemsPerPage={4}
      />



      {/*
      {/* Testimonials 
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground text-lg">
              Over 500 happy customers trust us with their home textile needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      */}

      {/* Contact Form */}
      <ContactForm />
      
      <Footer />
    </div>
  );
}