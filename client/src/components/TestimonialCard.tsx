import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  testimonial: string;
  avatar?: string;
  service: string;
}

export default function TestimonialCard({ name, location, rating, testimonial, avatar, service }: TestimonialCardProps) {
  return (
    <Card className="hover-elevate">
      <CardContent className="p-6">
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < rating ? 'fill-primary text-primary' : 'text-muted'}`}
            />
          ))}
        </div>
        
        <blockquote className="text-foreground mb-4 italic font-medium" data-testid={`text-testimonial-${name.toLowerCase().replace(/ /g, '-')}`}>
          "{testimonial}"
        </blockquote>
        
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-muted text-muted-foreground">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <p className="font-semibold text-foreground" data-testid={`text-testimonial-name-${name.toLowerCase().replace(/ /g, '-')}`}>
              {name}
            </p>
            <p className="text-sm text-muted-foreground">
              {location} • {service}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}