import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import whatsappIcon from '@assets/generated_images/Whatsapp_icon.png';
import heroBackground from '@assets/generated_images/Store_Photo.jpeg';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBackground})`,
          }}
        />

        {/* Mute / Overlay */}
        <div className="absolute inset-0 bg-muted/" />

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
                <p className="text-muted-foreground">012 345 2852 / 083 306 4444</p>
                <p className="text-sm text-muted-foreground mt-2">Call us for assistance</p>
              </CardContent>
            </Card>


            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                <p className="text-muted-foreground">076 786 4444 / 072 473 9201</p>
                <p className="text-sm text-muted-foreground mt-2">We would love to chat to you</p>
              </CardContent>
            </Card>



            
            

            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">ridwan.j@telkomsa.net</p>
                <p className="text-sm text-muted-foreground mt-2"></p>
              </CardContent>
            </Card>

  

            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm">Mon-Thu: 9:00 - 17:30</p>
                <p className="text-muted-foreground text-sm">Sat: 08:45 - 14:30</p>
                <p className="text-muted-foreground text-sm">Fri: Closed Between 12:15 - 14:00</p>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
        <div id="map">
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
                  className="inline-flex items-center text-xl px-8 py-4"
                >
                  <img
                    src={whatsappIcon}
                    alt="WhatsApp"
                    className="w-10 h-10 mr-3 object-contain"
                  />
                  WhatsApp Us!
                </Button>

              </a>

              {/* Call Us Button */}
              

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}