import type { Category } from './category';

export interface Filters {
  manufacturers: string[];
  categories: Category[];
}
