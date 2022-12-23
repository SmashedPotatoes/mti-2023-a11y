import type { PageLoadEvent } from './$types';
import { getProducts } from '../../lib/services/Products';

export function load(event: PageLoadEvent) {
  const q = event.url.searchParams.get('q');
  const manufacturer = event.url.searchParams.getAll('manufacturer');
  const category = event.url.searchParams.getAll('category');
  const maxPrice = event.url.searchParams.get('maxPrice');
  const products = getProducts().filter(
    (product) =>
      product.name.toLowerCase().includes((q ?? '').toLowerCase()) &&
      (manufacturer.length === 0 || manufacturer.includes(product.manufacturer)) &&
      (category.length === 0 || category.some((c) => product.categories.includes(c))) &&
      (maxPrice === null || product.price <= parseInt(maxPrice))
  );

  return {
    manufacturer: manufacturer,
    category: category,
    maxPrice: maxPrice,
    products: products,
  };
}
