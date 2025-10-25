import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Link } from 'wouter';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: LucideIcon;
  href?: string;
}

export default function ServiceCard({ title, description, features, image, icon: Icon, href = '#' }: ServiceCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300 group overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          data-testid={`img-service-${title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-serif text-foreground group-hover:text-primary transition-colors" data-testid={`text-service-title-${title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground" data-testid={`text-service-description-${title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
          {description}
        </p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link href={href}>
          <Button 
            variant="ghost" 
            className="w-full justify-between p-0 h-auto text-primary hover:text-primary"
            data-testid={`button-service-learn-more-${title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
          >
            <span className="font-medium">Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}