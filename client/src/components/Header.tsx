import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  const handleBookQuote = () => {
    if (location === '/') {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/contact');
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary backdrop-blur supports-[backdrop-filter]:bg-primary border-b border-[#102456]">

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <h1 className="text-4xl font-serif font-bold text-white hover-elevate">
              M
              <span className="text-brand-red">I</span>
              <span className="text-brand-green">X </span>
              N MATCH
            </h1>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                data-testid={`link-${item.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              >
                <span className={`text-lg font-medium transition-colors hover:text-brand-red ${
                  location === item.path ? 'text-white' : 'text-brand-green'
                }`}>
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="secondary" 
              className="hidden md:flex items-center space-x-2"
              onClick={handleBookQuote}
              data-testid="button-book-quote"
            >
              <Phone className="w-4 h-4" />
              <span>Book Quick Quote</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t mt-4">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`mobile-link-${item.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                >
                  <span className={`block text-sm font-medium transition-colors hover:text-brand-red ${
                    location === item.path ? 'text-white' : 'text-brand-green'
                  }`}>
                    {item.name}
                  </span>
                </Link>
              ))}
              <Button 
                variant="secondary" 
                className="flex items-center justify-center space-x-2 mt-4"
                onClick={handleBookQuote}
                data-testid="mobile-button-book-quote"
              >
                <Phone className="w-4 h-4" />
                <span>Book Quick Quote</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}