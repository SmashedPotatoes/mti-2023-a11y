import type { PageLoadEvent } from './$types';
import { getProducts } from '../../lib/services/Products';

export function load(event: PageLoadEvent) {
  const q = event.url.searchParams.get('q');
  const manufacturer = event.url.searchParams.get('manufacturer');
  const category = event.url.searchParams.get('category');
  const products = getProducts().filter(
    (product) =>
      product.name.toLowerCase().includes((q ?? '').toLowerCase()) &&
      product.manufacturer.includes(manufacturer ?? '') &&
      product.categories.some((c) => c.includes(category ?? ''))
  );

  return {
    manufacturer: manufacturer || '',
    category: category || '',
    products: products,
  };
}
