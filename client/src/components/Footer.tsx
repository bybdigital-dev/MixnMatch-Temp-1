import { Link } from 'wouter';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-foreground">Textile Haven</h3>
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
            <h4 className="font-semibold text-foreground">Services</h4>
            <div className="space-y-2">
              <Link href="/curtains-blinds" data-testid="footer-link-curtains-blinds">
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Curtains & Blinds
                </span>
              </Link>
              <Link href="/upholstery" data-testid="footer-link-upholstery">
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer block">
                  Upholstery
                </span>
              </Link>
              <Link href="/fabrics" data-testid="footer-link-fabrics">
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer block">
                  Premium Fabrics
                </span>
              </Link>
              <Link href="/bedding-linen" data-testid="footer-link-bedding-linen">
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer block">
                  Bedding & Linen
                </span>
              </Link>
              <Link href="/yarns-wool" data-testid="footer-link-yarns-wool">
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer block">
                  Yarns & Wool
                </span>
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <div className="space-y-2">
              <Link href="/about" data-testid="footer-link-about">
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer block">
                  About Us
                </span>
              </Link>
              <Link href="/gallery" data-testid="footer-link-gallery">
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer block">
                  Gallery
                </span>
              </Link>
              <Link href="/faq" data-testid="footer-link-faq">
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer block">
                  FAQ
                </span>
              </Link>
              <Link href="/contact" data-testid="footer-link-contact">
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer block">
                  Contact
                </span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">(03) 9123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">hello@textilehaven.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  123 Design Street<br />
                  Melbourne VIC 3000
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <div className="text-muted-foreground text-sm">
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 10:00 AM - 4:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Textile Haven. All rights reserved. | Professional textile services in Melbourne and surrounding areas.
          </p>
        </div>
      </div>
    </footer>
  );
}