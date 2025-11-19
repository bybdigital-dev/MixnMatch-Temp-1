import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Star } from 'lucide-react';
import heroImage from '@assets/generated_images/Hero_living_room_curtains_763d6b70.jpg';
import whatsappIcon from '@assets/generated_images/Whatsapp_icon.png';

export default function Hero() {
  const handleBookQuote = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLearnMore = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          {/* Trust Indicators */}
           <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-1">
              {/*{[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))} */}
            </div>
            <span className="text-white/90 text-sm font-medium">Trusted by 500+ happy customers</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight" data-testid="text-hero-heading">
            
            <span className="text-brand-green">B</span>
            eaut
            <span className="text-brand-red">i</span>
            ful Te
            <span className="text-brand-green">x</span>
            t
            <span className="text-brand-red">i</span>
            les 
            f
            <span className="text-brand-green">o</span>
            r Eve
            <span className="text-brand-red">r</span>
            y Ho
            <span className="text-brand-green">m</span>
            e
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Transform your space with our premium curtains, blinds, upholstery, and luxury fabrics. 
            Professional installation and expert craftsmanship guaranteed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-brand-green hover:bg-brand-light-blue text-brand-blue"
              onClick={handleBookQuote}
              data-testid="button-hero-book-quote"
            >
              <img 
                src={whatsappIcon} 
                alt="WhatsApp" 
                className="w-10 h-10 mr-2 object-contain"
              />
              WhatsApp Us!
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 bg-brand-red text-white border-brand-green hover:bg-brand-light-blue backdrop-blur-sm"
              onClick={handleLearnMore}
              data-testid="button-hero-learn-more"
            >
              <Phone className="w-10 h-10 mr-2" />
              Call Us!
            </Button>
          </div>

          {/* Key Services */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {['Curtains & Blinds', 'Upholstery', 'Premium Fabrics', 'Bedding & Linen'].map((service) => (
              <div key={service} className="text-center">
                <div className="bg-brand-light-blue/80 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-white font-medium text-sm">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}