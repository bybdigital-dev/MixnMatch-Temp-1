import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Star } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '500+' },
    { icon: Clock, label: 'Years Experience', value: '14+' },
    { icon: Award, label: 'Projects Completed', value: '1200+' },
    { icon: Star, label: 'Average Rating', value: '4.9' }
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & Lead Designer',
      bio: 'With over 15 years in textile design, Sarah founded Textile Haven to bring premium home textiles to every Australian home.',
      image: '' // TODO: add team member images
    },
    {
      name: 'James Cooper',
      role: 'Installation Specialist',
      bio: 'Expert in precision installation with 10+ years of experience ensuring perfect fits for every window and piece of furniture.',
      image: ''
    },
    {
      name: 'Lisa Chen',
      role: 'Fabric Consultant',
      bio: 'Our fabric expert helps customers choose the perfect materials for their projects, with extensive knowledge of textures and care.',
      image: ''
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6" data-testid="text-about-heading">
            About Textile Haven
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 2010, we've been transforming Australian homes with beautiful textiles. 
            Our passion for quality craftsmanship and exceptional service has made us a trusted name in home textiles.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.label} className="text-center hover-elevate">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2" data-testid={`text-stat-${stat.label.toLowerCase().replace(/ /g, '-')}`}>
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Textile Haven began as a small family business with a simple mission: to bring beautiful, 
                  high-quality textiles to every Australian home. What started in a small workshop has grown 
                  into a trusted name in home textiles, serving customers across Melbourne and beyond.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  We believe that the right textiles can completely transform a space. Whether it's elegant 
                  curtains that frame your windows perfectly, luxurious bedding that ensures restful sleep, 
                  or expert upholstery that gives new life to cherished furniture, we're here to help you 
                  create the home of your dreams.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our commitment to quality, craftsmanship, and customer satisfaction has earned us over 500 
                  happy customers and countless referrals. We source the finest materials, employ skilled 
                  artisans, and provide personalized service that ensures every project exceeds expectations.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg border">
                <h3 className="text-2xl font-serif font-bold mb-6 text-center">Our Values</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Quality First</h4>
                    <p className="text-sm text-muted-foreground">
                      We never compromise on materials or craftsmanship, ensuring every product meets our high standards.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Customer Care</h4>
                    <p className="text-sm text-muted-foreground">
                      From consultation to installation, we provide personalized service that exceeds expectations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Sustainability</h4>
                    <p className="text-sm text-muted-foreground">
                      We offer eco-friendly options and promote sustainable practices in all our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg">
              The skilled professionals behind every beautiful transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="hover-elevate">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`text-team-name-${member.name.toLowerCase().replace(/ /g, '-')}`}>
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}