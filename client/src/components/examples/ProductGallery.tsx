import ProductGallery from '../ProductGallery';
import fabricsImage from '@assets/generated_images/Fabric_swatches_collection_53280bf0.png';
import yarnImage from '@assets/generated_images/Yarn_collection_display_c9cdaaf9.png';
import beddingImage from '@assets/generated_images/Luxury_bedding_lifestyle_a1d84396.png';

export default function ProductGalleryExample() {
  // TODO: remove mock functionality - replace with real data
  const mockItems = [
    {
      id: '1',
      title: 'Premium Linen Collection',
      category: 'Fabrics',
      image: fabricsImage,
      description: 'High-quality linen in various textures'
    },
    {
      id: '2',
      title: 'Wool Yarn Assortment',
      category: 'Yarns',
      image: yarnImage,
      description: 'Soft merino wool in multiple weights'
    },
    {
      id: '3',
      title: 'Luxury Bedding Set',
      category: 'Bedding',
      image: beddingImage,
      description: 'Egyptian cotton sheets and duvet covers'
    },
  ];

  const categories = ['Fabrics', 'Yarns', 'Bedding'];

  return (
    <ProductGallery
      title="Featured Products"
      items={mockItems}
      categories={categories}
    />
  );
}