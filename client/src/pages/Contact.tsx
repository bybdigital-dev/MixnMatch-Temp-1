import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6" data-testid="text-contact-page-heading">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your home? We'd love to hear about your project. 
            Get in touch for a free consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">(03) 9123 4567</p>
                <p className="text-sm text-muted-foreground mt-2">Call us for immediate assistance</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">hello@textilehaven.com</p>
                <p className="text-sm text-muted-foreground mt-2">We respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground">123 Design Street</p>
                <p className="text-muted-foreground">Melbourne VIC 3000</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm">Mon-Fri: 9AM-6PM</p>
                <p className="text-muted-foreground text-sm">Sat: 10AM-4PM</p>
                <p className="text-muted-foreground text-sm">Sun: Closed</p>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-lg overflow-hidden mb-8 w-full h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1114.094579886283!2d28.258265569646507!3d-25.827012591435327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956722391248ab%3A0xdebc5db50956c613!2sMIX%20N%20MATCH!5e1!3m2!1sen!2sza!4v1761415647088!5m2!1sen!2sza" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* WhatsApp CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Need Quick Answers?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Connect with us on WhatsApp for instant responses to your questions about our services, 
              pricing, or availability.
            </p>
            <button 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium hover-elevate inline-flex items-center space-x-2"
              data-testid="button-whatsapp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 2c-5.511 0-9.977 4.466-9.977 9.977 0 1.763.461 3.416 1.27 4.849l-1.31 4.782 4.901-1.286c1.383.744 2.964 1.155 4.616 1.155 5.511 0 9.977-4.466 9.977-9.977S17.528 2 12.017 2zm5.169 14.157c-.235.66-1.381 1.274-1.908 1.319-.525.045-1.028.084-1.528-.096-.3-.108-.686-.252-1.175-.441-2.056-.796-3.406-2.858-3.509-2.989-.103-.131-.844-1.123-.844-2.142 0-1.019.528-1.518.715-1.728.187-.21.408-.262.544-.262.136 0 .272.001.391.007.125.007.294-.047.459.349.167.4.568 1.387.618 1.488.05.101.083.22.017.355-.067.135-.1.219-.2.336-.101.117-.212.261-.303.351-.101.1-.206.208-.089.408.117.2.52.857 1.116 1.387.766.682 1.413.894 1.613.994.2.1.317.084.434-.05.117-.133.5-.583.633-.783.133-.2.267-.167.45-.1.183.067 1.159.546 1.358.646.2.1.333.15.383.233.05.083.05.483-.185 1.143z"/>
              </svg>
              <span>Message us on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}