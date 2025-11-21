import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'wouter';
import whatsappIcon from '@assets/generated_images/Whatsapp_icon.png';

import beddingImage from '@assets/generated_images/Luxury_bedding_lifestyle_a1d84396.png';

export default function BeddingLinen() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50 z-10" />
        <img 
          src={beddingImage} 
          alt="Bedding and Linen" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <Badge className="mb-4">Sleep in Luxury</Badge>
            <h1 className="text-5xl font-serif font-bold mb-4 text-foreground" data-testid="text-bedding-heading">
              Bedding & Linen
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-6">
              Transform your bedroom with our luxury bedding collection. 
              Premium sheets, duvet covers, and pillowcases in the finest materials.
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
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Experience Ultimate Comfort</h2>
            <p className="text-white text-lg bg-brand-light-blue px-1 rounded">
              Discover bedding that elevates your sleep experience. From crisp Egyptian cotton to 
              soft linen, we offer the finest materials for a perfect night's rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Premium Materials</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Egyptian cotton</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Pure linen</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Bamboo blends</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Silk options</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Organic cotton</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Complete Sets</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Fitted sheets</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Flat sheets</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Duvet covers</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Pillowcases</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Quilt covers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Quality Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> 400+ thread count</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> All standard sizes</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Machine washable</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Hypoallergenic options</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Custom sizing available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Size Guide */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Available Sizes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Single</h3>
                <p className="text-sm text-muted-foreground">92 × 188 cm</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold mb-2">King Single</h3>
                <p className="text-sm text-muted-foreground">107 × 203 cm</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Double</h3>
                <p className="text-sm text-muted-foreground">138 × 188 cm</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Queen</h3>
                <p className="text-sm text-muted-foreground">153 × 203 cm</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold mb-2">King</h3>
                <p className="text-sm text-muted-foreground">183 × 203 cm</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Sleep in Ultimate Comfort</h2>
              <p className="text-lg mb-6 opacity-90">
                Explore our luxury bedding collection and transform your sleep experience
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

            </CardContent>
          </Card>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}