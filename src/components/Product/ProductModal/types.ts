import { Product, ProductList } from '@/core/domains/products/product.types';

export interface ProductModalProps {
  open: boolean;
  onClose: VoidFunction;
  product: Product;
  products: ProductList;
}
