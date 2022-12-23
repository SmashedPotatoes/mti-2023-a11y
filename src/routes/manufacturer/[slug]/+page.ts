import { getManufacturers } from '../../../lib/services/Products';
import type { PageLoadEvent } from './$types';

export function load(event: PageLoadEvent) {
  const manufacturers = getManufacturers();
  const manufacturer = manufacturers.find((manufacturer) => manufacturer === event.params.slug);
  return {
    manufacturer,
  };
}
