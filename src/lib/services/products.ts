import { products, deals, categories } from '$lib/images/data.json';
import type { Product } from '../types/product';
import type { Deal } from '../types/deal';
import type { Category } from '../types/category';
import type { Filters } from '../types/filters';

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
