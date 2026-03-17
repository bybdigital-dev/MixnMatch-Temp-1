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
import dressImage from '@assets/generated_images/Dress_fabric.jpg';
import upholsteryImage from '@assets/generated_images/Upholstery_before_after_e6f2b2f5.png';
import curtainsblindsImage from '@assets/generated_images/CurtainsBlinds.jpg';
import cutfoamImage from '@assets/generated_images/cutfoam.jpeg';
import dressfabricsImage from '@assets/generated_images/Dress_fabric.jpg';
import blindsImage from '@assets/generated_images/Blinds_Combined.jpg';
import curtainsImage from '@assets/generated_images/curtains.jpg';
import headboardImage from '@assets/generated_images/headboard.jpeg';
import yarnsImage from '@assets/generated_images/yarns.jpg';
import heroImage from '@assets/generated_images/Hero_living_room_curtains_763d6b70.jpg';
import customcurtainImage from '@assets/generated_images/custom_curtain.jpg';
import romanblindsImage from '@assets/generated_images/Roman_blinds.jpeg';
import sunscreenblindsImage from '@assets/generated_images/Sunscreen_Blockout_blinds.jpeg';
import verticalblindsImage from '@assets/generated_images/vertical_blinds.jpeg';
import blinds2Image from '@assets/generated_images/blinds.jpeg';
import redcouchImage from '@assets/generated_images/red_couch.jpeg';
import leatherwingbackImage from '@assets/generated_images/leather_wingback.jpeg';
import headboard2Image from '@assets/generated_images/headboard_photo.jpeg';
import customwingbackImage from '@assets/generated_images/custom_wingback.jpeg';
import upholstery1Image from '@assets/generated_images/Upholstery_1.jpeg';
import upholstery2Image from '@assets/generated_images/Upholstery_2.jpeg';
import upholstery3Image from '@assets/generated_images/Upholstery_3.jpeg';
import upholstery4Image from '@assets/generated_images/Upholstery_4.jpeg';
import upholstery5Image from '@assets/generated_images/Upholstery_5.jpeg';
import upholstery6Image from '@assets/generated_images/Upholstery_6.jpeg';
import upholstery7Image from '@assets/generated_images/Upholstery_7.jpeg';
import upholstery8Image from '@assets/generated_images/Upholstery_8.jpeg';
import upholstery9Image from '@assets/generated_images/Upholstery_9.jpeg';
import upholstery10Image from '@assets/generated_images/Upholstery_10.jpeg';
import upholstery11Image from '@assets/generated_images/Upholstery_11.jpeg';
import upholstery12Image from '@assets/generated_images/Upholstery_12.jpeg';
import upholstery13Image from '@assets/generated_images/Upholstery_13.jpeg';
import wool1Image from '@assets/generated_images/Wool_1.jpeg';
import wool2Image from '@assets/generated_images/Wool_2.jpeg';
import wool3Image from '@assets/generated_images/Wool_3.jpeg';
import wool4Image from '@assets/generated_images/Wool_4.jpeg';
import wool5Image from '@assets/generated_images/Wool_5.jpeg';
import wool6Image from '@assets/generated_images/Wool_6.jpeg';
import wool7Image from '@assets/generated_images/Wool_7.jpeg';
import wool8Image from '@assets/generated_images/Wool_8.jpeg';
import wool9Image from '@assets/generated_images/Wool_9.jpeg';
import wool10Image from '@assets/generated_images/Wool_10.jpeg';
import blinds3Image from '@assets/generated_images/blinds_1.jpeg';
import blinds4Image from '@assets/generated_images/blinds_2.jpeg';
import blinds5Image from '@assets/generated_images/blinds_3.jpeg';
import blinds6Image from '@assets/generated_images/blinds_4.jpeg';
import blinds7Image from '@assets/generated_images/blinds_5.jpeg';
import blinds8Image from '@assets/generated_images/blinds_6.jpeg';
import blinds9Image from '@assets/generated_images/blinds_7.jpeg';
import blinds10Image from '@assets/generated_images/blinds_8.jpeg';
import curtains1Image from '@assets/generated_images/curtains_1.jpeg';
import curtains2Image from '@assets/generated_images/curtains_2.jpeg';
import curtains3Image from '@assets/generated_images/curtains_3.jpeg';
import curtains4Image from '@assets/generated_images/curtains_4.jpeg';
import curtains5Image from '@assets/generated_images/curtains_5.jpeg';
import upholstery14Image from '@assets/generated_images/Upholstery_14.jpeg';
import upholstery15Image from '@assets/generated_images/Upholstery_15.jpeg';
import upholstery16Image from '@assets/generated_images/Upholstery_16.jpeg';
import upholstery17Image from '@assets/generated_images/Upholstery_17.jpeg';
import upholstery18Image from '@assets/generated_images/Upholstery_18.jpeg';
import wool11Image from '@assets/generated_images/Wool_11.jpeg';
import wool12Image from '@assets/generated_images/Wool_12.jpeg';
import wool13Image from '@assets/generated_images/Wool_13.jpeg';
import wool14Image from '@assets/generated_images/Wool_14.jpeg';
import blinds11Image from '@assets/generated_images/blinds_9.jpeg';
import blinds12Image from '@assets/generated_images/blinds_10.jpeg';
import curtains6Image from '@assets/generated_images/curtains_6.jpeg';
import curtains7Image from '@assets/generated_images/curtains_7.jpeg';
import upholstery19Image from '@assets/generated_images/upholstery_19.jpeg';
import upholstery20Image from '@assets/generated_images/upholstery_20.jpeg';
import upholstery21Image from '@assets/generated_images/upholstery_21.jpeg';
import upholstery22Image from '@assets/generated_images/upholstery_22.jpeg';
import wool15Image from '@assets/generated_images/wool_15.jpeg';



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
      title: 'Modern Living Room Curtains',
      category: 'Curtains & Blinds',
      image: heroImage,
      description: 'Variety of curtains in premium linen with blockout lining'
    },
    {
      id: '2',
      title: 'Dress Fabrics',
      category: 'Fabrics',
      image: dressImage,
      description: 'Dress fabrics in various textures and colors'
    },
    {
      id: '3',
      title: 'Vintage Chair Restoration',
      category: 'Upholstery',
      image: upholsteryImage,
      description: 'Complete furniture restoration with premium materials'
    },
    {
      id: '4',
      title: 'Yarns, Wool, Haberdashery and Accessories',
      category: 'Yarns & Wool',
      image: yarn1Image,
      description: 'Wide selection of quality yarns, wool and accessories'
    },
    {
      id: '5',
      title: 'Egyptian Cotton Bedding',
      category: 'Bedding & Linen',
      image: beddingImage,
      description: 'Luxury bedding set in cream and gold tones'
    },
    {
      id: '6',
      title: 'Roller and wooden blinds',
      category: 'Curtains & Blinds',
      image: blindsImage,
      description: 'Tailored blinds with premium hardware'
    },
    {
      id: '7',
      title: 'Luxury Fabric Selection',
      category: 'Fabrics',
      image: fabricsImage,
      description: 'Premium fabrics in various textures and colors'
    },
    {
      id: '8',
      title: 'Merino Wool Yarns',
      category: 'Yarns & Wool',
      image: yarnImage,
      description: 'Soft merino wool in various weights and colors'
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
    },
    {
      id: '18',
      title: 'Custom wingback chair upholstery',
      category: 'Upholstery',
      image: upholstery1Image,
      description: 'Custom materials'
    },
    {
      id: '19',
      title: 'Custom dining chair upholstery',
      category: 'Upholstery',
      image: upholstery2Image,
      description: 'Custom colours and materials'
    },
    {
      id: '22',
      title: 'Custom dining chair upholstery',
      category: 'Upholstery',
      image: upholstery5Image,
      description: 'Custom colours and materials'
    },
    {
      id: '23',
      title: 'Custom dining chair upholstery',
      category: 'Upholstery',
      image: upholstery6Image,
      description: 'Custom colours and materials'
    },
    {
      id: '25',
      title: 'Dining chair foam replacement',
      category: 'Upholstery',
      image: upholstery8Image,
      description: 'Custome foam replacement'
    },
    {
      id: '21',
      title: 'Custom office chair upholstery',
      category: 'Upholstery',
      image: upholstery4Image,
      description: 'Custom colours and materials'
    },
    {
      id: '20',
      title: 'Custom foam cutting',
      category: 'Upholstery',
      image: upholstery3Image,
      description: 'On site foam cutting'
    },
    {
      id: '24',
      title: 'Custom chair upholstery',
      category: 'Upholstery',
      image: upholstery7Image,
      description: 'Custom colours and materials'
    },
    {
      id: '26',
      title: 'Custom counter chair upholstery',
      category: 'Upholstery',
      image: upholstery9Image,
      description: 'Custom colours and materials'
    },
    {
      id: '27',
      title: 'Custom office chair upholstery',
      category: 'Upholstery',
      image: upholstery10Image,
      description: 'Custom colours and materials'
    },
    {
      id: '30',
      title: 'Custom office chair upholstery',
      category: 'Upholstery',
      image: upholstery13Image,
      description: 'Custom colours and materials'
    },
    {
      id: '28',
      title: 'Custom headboard upholstery',
      category: 'Upholstery',
      image: upholstery11Image,
      description: 'Custom colours and materials'
    },
    {
      id: '29',
      title: 'Custom couch upholstery',
      category: 'Upholstery',
      image: upholstery12Image,
      description: 'Custom colours and materials'
    },
    {
      id: '31',
      title: 'Coffee Cotton',
      category: 'Yarns & Wool',
      image: wool1Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '33',
      title: 'Coffee Cotton',
      category: 'Yarns & Wool',
      image: wool3Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '32',
      title: 'Pure Gold',
      category: 'Yarns & Wool',
      image: wool2Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '34',
      title: 'Pure Gold',
      category: 'Yarns & Wool',
      image: wool8Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '35',
      title: 'Elite Yarns - Cotton Touch',
      category: 'Yarns & Wool',
      image: wool5Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '36',
      title: 'Elite Yarns - T-Shirt',
      category: 'Yarns & Wool',
      image: wool6Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '37',
      title: 'Alexis 3XL',
      category: 'Yarns & Wool',
      image: wool7Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '38',
      title: 'DK Lurex',
      category: 'Yarns & Wool',
      image: wool9Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '39',
      title: 'Chunky XL',
      category: 'Yarns & Wool',
      image: wool10Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '40',
      title: 'Roller blinds',
      category: 'Curtains & Blinds',
      image: blinds3Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '41',
      title: 'Roller blinds',
      category: 'Curtains & Blinds',
      image: blinds4Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '42',
      title: 'Roller blinds',
      category: 'Curtains & Blinds',
      image: blinds5Image,
      description: 'Available in sheer weave'
    },
    {
      id: '43',
      title: 'Roller blinds',
      category: 'Curtains & Blinds',
      image: blinds6Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '44',
      title: 'Roller blinds',
      category: 'Curtains & Blinds',
      image: blinds7Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '45',
      title: 'Roller blinds',
      category: 'Curtains & Blinds',
      image: blinds8Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '46',
      title: 'Roller blinds',
      category: 'Curtains & Blinds',
      image: blinds9Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '47',
      title: 'Measuring of blinds and curtains',
      category: 'Curtains & Blinds',
      image: blinds10Image,
      description: 'We do measurements on site'
    },
    {
      id: '48',
      title: 'Curtains',
      category: 'Curtains & Blinds',
      image: curtains1Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '49',
      title: 'Curtains',
      category: 'Curtains & Blinds',
      image: curtains2Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '50',
      title: 'Curtains',
      category: 'Curtains & Blinds',
      image: curtains3Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '51',
      title: 'Curtains',
      category: 'Curtains & Blinds',
      image: curtains4Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '52',
      title: 'Curtains',
      category: 'Curtains & Blinds',
      image: curtains5Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '53',
      title: 'Beanbag refill',
      category: 'Upholstery',
      image: upholstery14Image,
      description: 'Polystyrene Filling available'
    },
    {
      id: '54',
      title: 'Chair upholstery',
      category: 'Upholstery',
      image: upholstery15Image,
      description: 'Custom chair upholstery'
    },
    {
      id: '55',
      title: 'Outdoor cushions',
      category: 'Upholstery',
      image: upholstery16Image,
      description: 'Chill and relax on our custom outdoor cushions'
    },
    {
      id: '56',
      title: 'Antique chair',
      category: 'Upholstery',
      image: upholstery17Image,
      description: 'We do it all'
    },
    {
      id: '57',
      title: 'Antique chair',
      category: 'Upholstery',
      image: upholstery18Image,
      description: 'Custom upholstery of antique chair'
    },
    {
      id: '58',
      title: 'Charity wools',
      category: 'Yarns & Wool',
      image: wool11Image,
      description: 'Double knit various colours available'
    },
    {
      id: '59',
      title: 'Pure gold',
      category: 'Yarns & Wool',
      image: wool12Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '60',
      title: 'Glitter wools',
      category: 'Yarns & Wool',
      image: wool13Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '61',
      title: 'Pure gold',
      category: 'Yarns & Wool',
      image: wool14Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '62',
      title: 'Custom blinds',
      category: 'Curtains & Blinds',
      image: blinds11Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '63',
      title: 'Custom blinds',
      category: 'Curtains & Blinds',
      image: blinds12Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '64',
      title: 'Custom curtains',
      category: 'Curtains & Blinds',
      image: curtains6Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '65',
      title: 'Custom curtains',
      category: 'Curtains & Blinds',
      image: curtains7Image,
      description: 'Various colours and sizes available'
    },
    {
      id: '66',
      title: 'Headboard',
      category: 'Upholstery',
      image: upholstery19Image,
      description: 'Custom made headboard'
    },
    {
      id: '67',
      title: 'Car seat upholstery',
      category: 'Upholstery',
      image: upholstery20Image,
      description: 'Car seat upholstery'
    },
    {
      id: '68',
      title: 'Headboard',
      category: 'Upholstery',
      image: upholstery21Image,
      description: 'Custom made headboard'
    },
    {
      id: '69',
      title: 'Patio set',
      category: 'Upholstery',
      image: upholstery22Image,
      description: 'Reupholstered patio set'
    },
    {
      id: '70',
      title: 'Charity wool',
      category: 'Yarns & Wool',
      image: wool15Image,
      description: 'Double knit available'
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