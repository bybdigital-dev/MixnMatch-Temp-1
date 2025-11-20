import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'wouter';
import whatsappIcon from '@assets/generated_images/Whatsapp_icon.png';

import fabricsImage from '@assets/generated_images/Fabric_swatches_collection_53280bf0.png';

export default function Fabrics() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50 z-10" />
        <img 
          src={fabricsImage} 
          alt="Premium Fabrics" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <Badge className="mb-4">Luxury Materials</Badge>
            <h1 className="text-5xl font-serif font-bold mb-4 text-foreground" data-testid="text-fabrics-heading">
              Premium Fabrics
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-6">
              Discover our curated collection of luxury fabrics sourced from around the world. 
              Quality materials for every application.
            </p>
            <Button size="lg" data-testid="button-fabrics-quote">
              Browse Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Exceptional Quality Materials</h2>
            <p className="text-white text-lg bg-brand-light-blue px-1 rounded">
              From natural linens to performance outdoor fabrics, our collection offers the perfect 
              material for every project and application.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Natural Fabrics</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Pure linen</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Egyptian cotton</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Silk blends</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Wool textiles</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Organic cotton</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Performance Fabrics</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Outdoor/weather resistant</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Stain resistant</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Blockout lining</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Fire retardant</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> UV protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Our Promise</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Sustainable sourcing</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Expert consultation</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Sample swatches</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Custom orders available</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Quality guarantee</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Perfect For Every Project</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Curtains</h3>
                <p className="text-sm text-muted-foreground">Draping fabrics for elegant window treatments</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Upholstery</h3>
                <p className="text-sm text-muted-foreground">Durable materials for furniture restoration</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Cushions</h3>
                <p className="text-sm text-muted-foreground">Soft textures for comfort and style</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Outdoor</h3>
                <p className="text-sm text-muted-foreground">Weather-resistant fabrics for exterior use</p>
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
              <h2 className="text-3xl font-serif font-bold mb-4">Find Your Perfect Fabric</h2>
              <p className="text-lg mb-6 opacity-90">
                Visit our showroom or book a consultation to explore our complete collection
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