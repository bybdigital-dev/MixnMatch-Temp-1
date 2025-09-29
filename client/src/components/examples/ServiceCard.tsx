import ServiceCard from '../ServiceCard';
import { Scissors } from 'lucide-react';
import fabricsImage from '@assets/generated_images/Fabric_swatches_collection_53280bf0.png';

export default function ServiceCardExample() {
  return (
    <div className="max-w-sm">
      <ServiceCard
        title="Premium Fabrics"
        description="Choose from our extensive collection of luxury fabrics including linen, cotton, velvet, and outdoor materials."
        features={[
          "High-quality materials sourced globally",
          "Wide range of colors and textures",
          "Sustainable and eco-friendly options",
          "Expert fabric consultation"
        ]}
        image={fabricsImage}
        icon={Scissors}
        href="/fabrics"
      />
    </div>
  );
}