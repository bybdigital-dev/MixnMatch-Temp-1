import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';
import footerBg from "@assets/generated_images/lines.jpg";

// Import generated images
import heroImage from '@assets/generated_images/Hero_living_room_curtains_763d6b70.png';
import fabricsImage from '@assets/generated_images/Fabric_swatches_collection_53280bf0.png';
import yarnImage from '@assets/generated_images/Yarn_collection_display_c9cdaaf9.png';
import beddingImage from '@assets/generated_images/Luxury_bedding_lifestyle_a1d84396.png';
import upholsteryImage from '@assets/generated_images/Upholstery_before_after_e6f2b2f5.png';

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
      title: 'Luxury Fabric Collection',
      category: 'Fabrics',
      image: fabricsImage,
      description: 'Premium fabrics in various textures and colors'
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
      title: 'Artisan Yarn Collection',
      category: 'Yarns & Wool',
      image: yarnImage,
      description: 'Hand-selected yarns in beautiful natural colors'
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
      title: 'Custom Roman Blinds',
      category: 'Curtains & Blinds',
      image: heroImage,
      description: 'Tailored Roman blinds with premium hardware'
    },
    {
      id: '7',
      title: 'Outdoor Fabric Selection',
      category: 'Fabrics',
      image: fabricsImage,
      description: 'Weather-resistant fabrics for outdoor furniture'
    },
    {
      id: '8',
      title: 'Merino Wool Yarns',
      category: 'Yarns & Wool',
      image: yarnImage,
      description: 'Soft merino wool in various weights and colors'
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
            <button 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover-elevate"
              data-testid="button-gallery-book-quote"
            >
              Book Quick Quote
            </button>
            <button 
              className="border border-border text-foreground px-8 py-4 rounded-lg font-medium hover-elevate"
              data-testid="button-gallery-contact"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}