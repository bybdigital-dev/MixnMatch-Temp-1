import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

import upholsteryImage from '@assets/generated_images/Upholstery_before_after_e6f2b2f5.png';

export default function Upholstery() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50 z-10" />
        <img 
          src={upholsteryImage} 
          alt="Upholstery Services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <Badge className="mb-4">Furniture Restoration</Badge>
            <h1 className="text-5xl font-serif font-bold mb-4 text-foreground" data-testid="text-upholstery-heading">
              Upholstery Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-6">
              Give your cherished furniture new life with professional reupholstery. 
              Expert craftsmanship meets beautiful fabrics.
            </p>
            <Button size="lg" data-testid="button-upholstery-quote">
              Get Quick Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Expert Furniture Restoration</h2>
            <p className="text-muted-foreground text-lg">
              From treasured antiques to modern favorites, our skilled craftspeople restore and 
              refresh your furniture with care and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">What We Restore</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Sofas and couches</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Dining chairs</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Armchairs and recliners</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Ottomans and footstools</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Antique furniture</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Services Included</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Complete reupholstery</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Spring repair/replacement</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Frame reinforcement</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Foam replacement</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Pattern matching</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Why Choose Us</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> 14+ years experience</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Premium fabric selection</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Quick pickup & delivery</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Before/after photos</li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" /> Quality guarantee</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Restoration Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Assessment</h3>
              <p className="text-muted-foreground">We evaluate your furniture's condition and discuss fabric options</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Pickup</h3>
              <p className="text-muted-foreground">Quick collection from your home at a convenient time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Restoration</h3>
              <p className="text-muted-foreground">Expert craftsmanship and attention to detail throughout</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-muted-foreground">Your beautifully restored furniture returned to you</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Ready to Restore Your Furniture?</h2>
              <p className="text-lg mb-6 opacity-90">
                Get a quick quote for professional upholstery services today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" data-testid="button-upholstery-book">
                  Book Quick Consultation
                </Button>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    View All Services
                    <ArrowRight className="w-4 h-4 ml-2" />
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