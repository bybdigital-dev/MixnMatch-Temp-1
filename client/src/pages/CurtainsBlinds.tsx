import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Palette, Ruler } from 'lucide-react';

import heroImage from '@assets/generated_images/Hero_living_room_curtains_763d6b70.png';

export default function CurtainsBlinds() {
  const curtainTypes = [
    {
      name: 'S-Fold Curtains',
      description: 'Contemporary wave-like folds that create an elegant, flowing appearance',
      features: ['Modern aesthetic', 'Easy operation', 'Even light distribution']
    },
    {
      name: 'Eyelet Curtains',
      description: 'Casual style with metal rings for smooth operation and contemporary look',
      features: ['Simple installation', 'Smooth operation', 'Versatile styling']
    },
    {
      name: 'Roman Blinds',
      description: 'Classic horizontal folds that stack neatly when raised, perfect for any room',
      features: ['Space-saving design', 'Light control', 'Traditional elegance']
    },
    {
      name: 'Roller Blinds',
      description: 'Sleek and minimal window treatment that rolls up compactly when not in use',
      features: ['Minimal design', 'Easy maintenance', 'Perfect fit']
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Complete privacy control while maintaining style and elegance'
    },
    {
      icon: Palette,
      title: 'Style Enhancement',
      description: 'Transform your space with colors and patterns that complement your décor'
    },
    {
      icon: CheckCircle,
      title: 'Insulation',
      description: 'Improve energy efficiency with proper insulation and temperature control'
    },
    {
      icon: Ruler,
      title: 'Perfect Fit',
      description: 'Custom measurement and installation for every window size and shape'
    }
  ];

  // TODO: remove mock functionality - replace with real gallery data
  const galleryItems = [
    {
      id: '1',
      title: 'Modern S-Fold Curtains',
      category: 'S-Fold',
      image: heroImage,
      description: 'Contemporary living room transformation'
    },
    {
      id: '2',
      title: 'Roman Blinds Installation',
      category: 'Roman',
      image: heroImage,
      description: 'Classic bedroom window treatment'
    },
    {
      id: '3',
      title: 'Blackout Roller Blinds',
      category: 'Roller',
      image: heroImage,
      description: 'Complete light control solution'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Premium Window Treatments</Badge>
              <h1 className="text-5xl font-serif font-bold mb-6" data-testid="text-curtains-blinds-heading">
                Curtains & Blinds
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your windows with our extensive range of curtains and blinds. 
                From modern S-fold curtains to classic Roman blinds, we have the perfect 
                solution for every room and style preference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover-elevate"
                  data-testid="button-curtains-book-quote"
                >
                  Book Free Quote
                </button>
                <button 
                  className="border border-border text-foreground px-8 py-4 rounded-lg font-medium hover-elevate"
                  data-testid="button-curtains-view-gallery"
                >
                  View Gallery
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Curtains and Blinds" 
                className="rounded-lg shadow-lg w-full"
                data-testid="img-curtains-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Curtains & Blinds */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Types We Offer</h2>
            <p className="text-muted-foreground text-lg">
              Choose from our comprehensive range of window treatment styles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curtainTypes.map((type) => (
              <Card key={type.name} className="hover-elevate">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">{type.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Why Choose Our Window Treatments?</h2>
            <p className="text-muted-foreground text-lg">
              More than just window coverings – comprehensive solutions for your home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Special Options Available</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-elevate">
              <CardContent className="p-8">
                <div className="bg-card w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-foreground rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Blackout Options</h3>
                <p className="text-muted-foreground">
                  Complete light blocking for bedrooms, nurseries, and media rooms. 
                  Perfect for shift workers and better sleep quality.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="p-8">
                <div className="bg-card w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary/50 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Light Filtering</h3>
                <p className="text-muted-foreground">
                  Gentle light diffusion that maintains privacy while allowing 
                  natural light to enhance your living space.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="p-8">
                <div className="bg-card w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-accent/70 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Motorized Control</h3>
                <p className="text-muted-foreground">
                  Smart home integration with remote control and scheduled 
                  operation for ultimate convenience and luxury.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Gallery */}
      <ProductGallery 
        title="Installation Gallery" 
        items={galleryItems}
        categories={['S-Fold', 'Roman', 'Roller', 'Venetian']}
      />

      <ContactForm />
      <Footer />
    </div>
  );
}