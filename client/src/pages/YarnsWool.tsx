import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'wouter';
import whatsappIcon from '@assets/generated_images/Whatsapp_icon.png';

import yarnImage from '@assets/generated_images/Yarn_collection_display_c9cdaaf9.png';

export default function YarnsWool() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50 z-10" />
        <img 
          src={yarnImage} 
          alt="Yarns and Wool" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <Badge className="mb-4">Craft & Create</Badge>
            <h1 className="text-5xl font-serif font-bold mb-4 text-foreground" data-testid="text-yarns-heading">
              Yarns & Wool
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-6">
              Discover our extensive collection of premium yarns for knitting and crochet. 
              From cotton to wool, everything you need for your next project.
            </p>
            <Button size="lg" data-testid="button-yarns-shop">
              Browse Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Premium Yarn Selection</h2>
            <p className="text-muted-foreground text-lg">
              Whether you're a beginner or experienced crafter, our carefully curated yarn collection 
              offers the perfect materials for every skill level and project type.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Yarn Types</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Merino wool</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Cotton yarns</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Acrylic blends</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Alpaca wool</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Bamboo yarns</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Weights Available</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Lace weight</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Sport weight</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> DK weight</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Worsted weight</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Chunky/Bulky</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Services & Support</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Friendly advice</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Pattern recommendations</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Bulk discounts</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Color matching service</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Perfect For Your Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Sweaters & Cardigans</h3>
                <p className="text-sm text-muted-foreground">Soft wools perfect for cozy garments</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Blankets & Throws</h3>
                <p className="text-sm text-muted-foreground">Chunky yarns for warm home textiles</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Baby Items</h3>
                <p className="text-sm text-muted-foreground">Soft, hypoallergenic options</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Accessories</h3>
                <p className="text-sm text-muted-foreground">Fine yarns for hats, scarves, and more</p>
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
              <h2 className="text-3xl font-serif font-bold mb-4">Start Your Next Project</h2>
              <p className="text-lg mb-6 opacity-90">
                Visit our store to explore our full yarn collection and get friendly advice
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