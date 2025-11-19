import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'wouter';
import whatsappIcon from '@assets/generated_images/Whatsapp_icon.png';

import curtainsblindsImage from '@assets/generated_images/CurtainsBlinds.jpg';

export default function CurtainsBlinds() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50 z-10" />
        <img 
          src={curtainsblindsImage} 
          alt="Curtains and Blinds" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <Badge className="mb-4">Window Treatments</Badge>
            <h1 className="text-5xl font-serif font-bold mb-4 text-foreground" data-testid="text-curtains-heading">
              Curtains & Blinds
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-6">
              Transform your windows with our extensive range of custom curtains and blinds. 
              Professional measurement and installation included.
            </p>
            <Button size="lg" data-testid="button-curtains-quote">
              Get Quick Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Complete Window Solutions</h2>
            <p className="text-muted-foreground text-lg">
              Whether you're looking for elegant curtains to frame your windows or functional blinds 
              for light control, we provide professional solutions tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Curtain Styles</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Alterations</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Eyelet curtains</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Pinch pleat curtains</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Sheer curtains</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Blockout curtains</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Blind Options</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Roman blinds</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Roller blinds</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Venetian blinds</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Vertical blinds</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Sheer blinds</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Premium Features</h3>
                <ul className="space-y-2 text-muted-foreground">

                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Professional measuring and installation</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Energy efficient fabrics</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Custom sizing</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Quality guaranteed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Quick Consultation</h3>
              <p className="text-muted-foreground">We visit your home to assess your windows and discuss your style preferences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Precise Measurement</h3>
              <p className="text-muted-foreground">Professional measurements ensure a perfect fit for every window</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Custom Creation</h3>
              <p className="text-muted-foreground">Expert craftsmanship using your chosen fabrics and styles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Professional Install</h3>
              <p className="text-muted-foreground">Perfect installation with attention to every detail</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Ready to Transform Your Windows?</h2>
              <p className="text-lg mb-6 opacity-90">
                Book your quick consultation today and discover the perfect window treatments for your home
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" data-testid="button-curtains-book">
                  <img 
                    src={whatsappIcon} 
                    alt="WhatsApp" 
                    className="w-7 h-7 mr-2 object-contain"
                  />
                  WhatsApp Us!
                </Button>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="bg-brand-red border-primary-foreground text-primary-foreground hover:bg-brand-light-blue hover:text-white">
                    <Phone className="w-10 h-10 mr-2" />
                    Call Us!
                    
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}