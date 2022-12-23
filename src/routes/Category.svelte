<script lang="ts">
  import type { CategoryProps } from '$lib/interfaces/category-props';

  export let category: CategoryProps;
  export let href: string = '/';
</script>

<li class="card position-relative">
  <!-- svelte-ignore a11y-missing-content -->
  <a class="overlap" {href} aria-labelledby="category-name" />
  <img class="picture" src={category.picture} alt="" />
  <strong id="category-name" class="card-info">{category.name}</strong>
</li>
