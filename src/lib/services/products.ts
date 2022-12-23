import { products, deals, categories } from '$lib/images/data.json';
import type { Category, Deal, Filters, Product } from '../types/product';

export const getProducts: () => Product[] = () => products;

export const getDeals: () => Deal[] = () => deals;

export const getCategories: () => Category[] = () => categories;

export const getManufacturers = () => {
  return [...new Set(products.map((product) => product.manufacturer))];
};

export const getMaxPrice = () => {
  return Math.max(...products.map((product) => product.price));
};

export const getMinPrice = () => {
  return Math.min(...products.map((product) => product.price));
};

export const getFilters: () => Filters = () => {
  return {
    manufacturers: getManufacturers(),
    categories: getCategories(),
    minPrice: getMinPrice(),
    maxPrice: getMaxPrice(),
  };
};
