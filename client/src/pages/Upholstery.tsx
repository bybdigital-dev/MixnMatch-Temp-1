import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Recycle, Award, Users } from 'lucide-react';

import upholsteryImage from '@assets/generated_images/Upholstery_before_after_e6f2b2f5.png';

export default function Upholstery() {
  const processSteps = [
    {
      number: '01',
      title: 'Assessment',
      description: 'We evaluate your furniture\'s condition and discuss fabric options with you'
    },
    {
      number: '02',
      title: 'Fabric Selection',
      description: 'Choose from our extensive collection or bring your own preferred materials'
    },
    {
      number: '03',
      title: 'Professional Work',
      description: 'Expert craftspeople restore your furniture with precision and care'
    },
    {
      number: '04',
      title: 'Quality Check',
      description: 'Thorough inspection ensures perfect results before delivery back to you'
    }
  ];

  const services = [
    'Complete furniture reupholstery',
    'Cushion replacement and refilling',
    'Spring and frame repair',
    'Fabric protection treatments',
    'Antique furniture restoration',
    'Custom furniture modifications'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Professional Restoration</Badge>
              <h1 className="text-5xl font-serif font-bold mb-6" data-testid="text-upholstery-heading">
                Upholstery Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Give your beloved furniture new life with our professional upholstery services. 
                From antique restoration to modern makeovers, we combine traditional craftsmanship 
                with contemporary techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" data-testid="button-upholstery-consultation">
                  Book Free Consultation
                </Button>
                <Button variant="outline" size="lg" data-testid="button-upholstery-portfolio">
                  View Portfolio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={upholsteryImage} 
                alt="Before and After Upholstery" 
                className="rounded-lg shadow-lg w-full"
                data-testid="img-upholstery-hero"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold text-sm">Expert Craftsmen</p>
                    <p className="text-xs text-muted-foreground">25+ Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Restoration Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From assessment to completion, we ensure every step meets our high standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.number} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border -z-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Complete Upholstery Services</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Whether it's a cherished family heirloom or a modern piece that needs refreshing, 
                our comprehensive services cover every aspect of furniture restoration.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button data-testid="button-upholstery-quote">
                  Get Custom Quote
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Recycle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Eco-Friendly Restoration</h3>
                      <p className="text-muted-foreground text-sm">
                        Extend furniture life and reduce waste with our sustainable restoration practices.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Quality Guarantee</h3>
                      <p className="text-muted-foreground text-sm">
                        All work comes with our comprehensive 5-year guarantee on craftsmanship.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Users className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Expert Craftspeople</h3>
                      <p className="text-muted-foreground text-sm">
                        Our team has decades of combined experience in furniture restoration.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Before & After Transformations</h2>
            <p className="text-muted-foreground text-lg">
              See the incredible transformations we've achieved for our customers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover-elevate overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={upholsteryImage} 
                  alt="Upholstery transformation" 
                  className="w-full h-full object-cover"
                  data-testid="img-upholstery-before-after-1"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Victorian Armchair Restoration</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Complete reupholstery in premium velvet with spring repair and frame reinforcement.
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Project Duration: 2 weeks</span>
                  <Button variant="ghost" size="sm">
                    View Details
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={upholsteryImage} 
                  alt="Upholstery transformation" 
                  className="w-full h-full object-cover"
                  data-testid="img-upholstery-before-after-2"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Modern Sofa Makeover</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Contemporary fabric upgrade with new cushions and professional finishing.
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Project Duration: 10 days</span>
                  <Button variant="ghost" size="sm">
                    View Details
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}