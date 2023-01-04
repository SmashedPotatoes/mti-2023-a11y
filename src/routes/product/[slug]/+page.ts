import { getProducts } from '../../../lib/services/products';
import type { PageLoadEvent } from './$types';

export function load(event: PageLoadEvent) {
  const products = getProducts();
  const product = products.find((product) => product.name === event.params.slug);
  return {
    product,
  };
}
