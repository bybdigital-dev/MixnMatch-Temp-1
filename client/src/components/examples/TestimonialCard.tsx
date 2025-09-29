import TestimonialCard from '../TestimonialCard';

export default function TestimonialCardExample() {
  return (
    <div className="max-w-md">
      <TestimonialCard
        name="Sarah Johnson"
        location="Melbourne"
        rating={5}
        testimonial="Absolutely stunning work! The curtains transformed our living room completely. The team was professional and the quality exceeded our expectations."
        service="Curtains & Blinds"
      />
    </div>
  );
}