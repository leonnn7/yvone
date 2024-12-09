export type ProductCategory = 'standard' | 'custom';
export type ProductSize = 'klein' | 'mittel' | 'gross';
export type ProductStyle = 'klassisch' | 'modern' | 'vintage' | 'rustikal' | 'festlich';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  additionalImages: string[];
  isCustomizable: boolean;
  category: ProductCategory;
  size: ProductSize;
  style: ProductStyle;
  tags: string[];
}