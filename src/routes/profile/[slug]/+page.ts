import type { PageLoadEvent } from './$types';

export function load(event: PageLoadEvent) {
  return {
    title: event.params.slug,
  };
}
