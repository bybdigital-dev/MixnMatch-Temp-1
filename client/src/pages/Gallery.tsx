import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';
import footerBg from "@assets/generated_images/lines.jpg";
import { Blinds, Scissors, Palette, Bed, Zap, ArrowRight, Phone } from 'lucide-react';
import whatsappIcon from '@assets/generated_images/Whatsapp_icon.png';
import { Button } from '@/components/ui/button';

// Import generated images
import heroImage from '@assets/generated_images/Hero_living_room_curtains_763d6b70.jpg';
import fabricsImage from '@assets/generated_images/Fabric_swatches_collection_53280bf0.png';
import yarn1Image from '@assets/generated_images/Yarns_gallery_crop.jpg';
import yarnImage from '@assets/generated_images/Yarn_collection_display_c9cdaaf9.png';
import beddingImage from '@assets/generated_images/Luxury_bedding_lifestyle_a1d84396.png';
import upholsteryImage from '@assets/generated_images/Upholstery_before_after_e6f2b2f5.png';
import blindsImage from '@assets/generated_images/Blinds_Combined.jpg';
import dressImage from '@assets/generated_images/Dress_fabric.jpg';
import romanblindsImage from '@assets/generated_images/Roman_blinds.jpeg';
import sunscreenblindsImage from '@assets/generated_images/Sunscreen_Blockout_blinds.jpeg';
import verticalblindsImage from '@assets/generated_images/vertical_blinds.jpeg';
import blinds2Image from '@assets/generated_images/blinds.jpeg';
import redcouchImage from '@assets/generated_images/red_couch.jpeg';
import leatherwingbackImage from '@assets/generated_images/leather_wingback.jpeg';
import headboard2Image from '@assets/generated_images/headboard_photo.jpeg';
import customwingbackImage from '@assets/generated_images/custom_wingback.jpeg';
import customcurtainImage from '@assets/generated_images/custom_curtain.jpg';
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



export default function Gallery() {
  // TODO: remove mock functionality - replace with real gallery data from API
  const galleryItems = [
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
    }
  ];

  const categories = [
    'Curtains & Blinds',
    'Upholstery',
    'Fabrics',
    'Bedding & Linen',
    'Yarns & Wool'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6" data-testid="text-gallery-heading">
            Project Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our completed projects and premium product collections. 
            Each piece showcases our commitment to quality craftsmanship and beautiful design.
          </p>
        </div>
      </section>

    
      
      {/* Gallery */}
      <ProductGallery 
        title="Our Work" 
        items={galleryItems}
        categories={categories}
      />

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Get inspired by our gallery and let us create something beautiful for your space. 
            Book a quick consultation to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/27767864444"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="secondary" 
                size="lg" 
                data-testid="button-curtains-book"
                className="inline-flex items-center"
              >
                <img 
                  src={whatsappIcon} 
                  alt="WhatsApp" 
                  className="w-7 h-7 mr-2 object-contain"
                />
                WhatsApp Us!
              </Button>
            </a>

            {/* Call Us Button */}
            <a
              href="tel:0724739201"
              className="inline-block"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="bg-brand-red border-primary-foreground text-primary-foreground hover:bg-brand-light-blue hover:text-white inline-flex items-center"
              >
                <Phone className="w-10 h-10 mr-2" />
                Call Us!
              </Button>
            </a>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}