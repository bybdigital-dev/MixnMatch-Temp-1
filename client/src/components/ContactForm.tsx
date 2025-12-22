import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact-form" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4" data-testid="text-contact-heading">
                Get Your Quick Quote
              </h2>
              <p className="text-muted-foreground text-lg">
                Ready to transform your home? Contact us for a quick consultation and quote. 
                Our experts are here to help bring your vision to life.
              </p>
            </div>

            <div className="space-y-4">

              {/* PHONE */}
              <div className="flex items-start space-x-3">

                {/* Icon */}
                <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <p className="font-semibold">Phone</p>

                  <div className="flex items-center space-x-2">
                    <a
                      href="tel:0123452852"
                      className="text-muted-foreground hover:text-brand-green"
                    >
                      012 345 2852
                    </a>

                    <span className="text-muted-foreground">/</span>

                    <a
                      href="tel:0833064444"
                      className="text-muted-foreground hover:text-brand-red"
                    >
                      083 306 4444
                    </a>
                  </div>
                </div>

              </div>


              {/* EMAIL */}
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>

                <a
                  href="mailto:ridwan.j@telkomsa.net"
                  className="block"
                >
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground hover:text-brand-red"
                    >ridwan.j@telkomsa.net</p>
                </a>
              </div>

            
              {/* WHATSAPP */}
              <div className="flex items-start space-x-3">

                {/* Icon (not a link) */}
                <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <p className="font-semibold">WhatsApp</p>

                  <div className="flex items-center space-x-2">
                    <a
                      href="https://wa.me/27767864444"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-brand-green"
                    >
                      076 786 4444
                    </a>

                    <span className="text-muted-foreground">/</span>

                    <a
                      href="https://wa.me/27724739201"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-brand-red"
                    >
                      072 473 9201
                    </a>
                  </div>
                </div>

              </div>


                
            </div>
              
              


            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">Why Choose Us?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Professional consultation and measurement</li>
                <li>• Quality installation</li>
                <li>• Quality materials guaranteed</li>
                <li>• Over 500 happy customers</li>
              </ul>
            </div>
          </div>

          
          {/* Contact Form */}
          {/*
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-serif">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {/* IMPORTANT: FormSubmit integration (native POST) */}
          {/*
              <form
                action="https://formsubmit.co/YOUR_EMAIL@example.com"
                method="POST"
                className="space-y-6"
              >
                {/* FormSubmit options */}
          {/*}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                {/* redirect after success (optional) */}
          {/*}
                <input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html" />
                {/* honeypot (spam trap) */}
          {/*}
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                {/* Because Radix Select isn't a native <select>, mirror the value in a hidden input */}
          {/*}
                <input type="hidden" name="service" value={formData.service} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      data-testid="input-contact-name"
                      placeholder="Enter your name"
                      autoComplete="name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      data-testid="input-contact-phone"
                      placeholder="Enter your phone"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    data-testid="input-contact-email"
                    placeholder="Enter your email"
                    autoComplete="email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleInputChange('service', value)}
                  >
                    <SelectTrigger id="service" data-testid="select-contact-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Curtains & Blinds">Curtains & Blinds</SelectItem>
                      <SelectItem value="Upholstery">Upholstery</SelectItem>
                      <SelectItem value="Fabrics">Premium Fabrics</SelectItem>
                      <SelectItem value="Bedding & Linen">Bedding & Linen</SelectItem>
                      <SelectItem value="Yarns & Wool">Yarns & Wool</SelectItem>
                      <SelectItem value="General Consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    data-testid="input-contact-message"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  data-testid="button-contact-submit"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
      */}
        </div>
      </div>
    </section>
  );
}
