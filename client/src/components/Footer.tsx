import { Link } from 'wouter';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import footerBg from "@assets/generated_images/lines.jpg";


export default function Footer() {
  return (
    <footer className="bg-card border-t">

      
      {/* FIXED BACKGROUND IMAGE 
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${footerBg})` }}
      />*/}


      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-foreground">MIX N MATCH</h3>
            <p className="text-muted-foreground">
              Transform your home with beautiful textiles. Quality craftsmanship and professional service since 2010.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-social-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/services" data-testid="footer-link-services">
                <span className="text-muted-foreground hover:text-brand-red transition-colors cursor-pointer block">
                  Services
                </span>
              </Link>
              <Link href="/gallery" data-testid="footer-link-gallery">
                <span className="text-muted-foreground hover:text-brand-green transition-colors cursor-pointer block">
                  Gallery
                </span>
              </Link>
              <Link href="/about" data-testid="footer-link-about">
                <span className="text-muted-foreground hover:text-brand-light-blue transition-colors cursor-pointer block">
                  About Us
                </span>
              </Link>
              <Link href="/contact" data-testid="footer-link-contact">
                <span className="text-muted-foreground hover:text-brand-red transition-colors cursor-pointer block">
                  Contact
                </span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Services</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>• Curtains & Blinds</p>
              <p>• Upholstery Services</p>
              <p>• Premium Fabrics</p>
              <p>• Bedding & Linen</p>
              <p>• Yarns & Wool</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              
              
              <div className="flex items-center space-x-2">

                <a
                  href="tel:0123452852"
                  className="flex-shrink-0 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                </a>

                <a
                  href="tel:0123452852"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  012 345 2852
                </a>

              </div>


              <div className="flex items-center space-x-2">

                <a
                  href="https://wa.me/27767864444"
                  className="flex-shrink-0 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-primary" />
                </a>

                <a
                  href="https://wa.me/27767864444"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  076 786 4444
                </a>

              </div>


              

              


              <div className="flex items-center space-x-2">

                <a
                  href="mailto:ridwan.j@telkomsa.net"
                  className="flex-shrink-0 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                </a>

                <a
                  href="mailto:ridwan.j@telkomsa.net"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ridwan.j@telkomsa.net
                </a>

              </div>


              
              <div className="flex items-start space-x-2">

                <a
                  href="#/contact"
                  className="flex-shrink-0 hover:text-primary transition-colors"
                >
                  <MapPin className="w-4 h-4 text-primary mt-1" />
                </a>

                <a
                  href="#/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  5, Elardus Park Centre<br />
                  Barnard St, Elardus Park<br />
                  Pretoria
                </a>

              </div>

              
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <div className="text-muted-foreground">
                  <p>Mon-Thu: 9:00 - 17:30</p>
                  <p>Sat: 08:45 - 14:30</p>
                  <p>Fri: Closed Between 12:15 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 MIX N MATCH. All rights reserved. | Professional textile services in Pretoria East.
          </p>
          
          <p>
            Developed by{" "}
            <a
              href="https://buildyourbrand.web.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              BYB Digital
            </a>
          </p>
          
        </div>
      </div>
    </footer>
  );
}