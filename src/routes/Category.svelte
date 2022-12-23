<script lang="ts">
  import type { CategoryProps } from '$lib/interfaces/category-props';

  export let index: number;
  export let category: CategoryProps;

  const key = `category-${index}`;
  const href = `/search?category=${category.name}`;
</script>

<li class="card position-relative">
  <!-- svelte-ignore a11y-missing-content -->
  <a class="overlap" {href} aria-labelledby={key} />
  <img class="picture" src={category.picture} alt="" />
  <strong id={key} class="card-info">{category.name}</strong>
</li>
