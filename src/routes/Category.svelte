<script lang="ts">
  import type { CategoryProps } from '$lib/interfaces/category-props';

  export let category: CategoryProps;

  const href = `/search?category=${category.name}`;
</script>

<li class="card position-relative">
  <!-- svelte-ignore a11y-missing-content -->
  <a class="overlap" {href} aria-label="Filter products by category {category.name}" />
  <img class="picture" src={category.picture} alt="" />
  <strong class="card-info">{category.name}</strong>
</li>
