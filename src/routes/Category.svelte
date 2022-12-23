<script lang="ts">
  import type { CategoryProps } from '$lib/interfaces/category-props';

  export let category: CategoryProps;
  export let href: string = '/';
</script>

<a class="card" {href}>
  <img class="picture" src={category.picture} alt="" />
  <strong class="category-name">{category.name}</strong>
</a>

<style>
  .category-name {
    padding: 0.75rem;
  }
</style>
