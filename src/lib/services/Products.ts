import { products, deals, categories } from '$lib/images/data.json';
import type { Category, Deal, Filters, Product } from '../types/Product';

export const getProducts: () => Product[] = () => products;

export const getDeals: () => Deal[] = () => deals;

export const getCategories: () => Category[] = () => categories;

export const getManufacturers = () => {
  return [...new Set(products.map((product) => product.manufacturer))];
};

export const getFilters: () => Filters = () => {
  return { manufacturers: getManufacturers(), categories: getCategories() };
};
