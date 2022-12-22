<script lang="ts">
  import type { CategoryProps } from '$lib/interfaces/category-props';

  export let category: CategoryProps;
</script>

<div class="card">
  <img class="picture" src={category.picture} alt="" />
  <strong class="category-name">{category.name}</strong>
</div>

<style>
  .category-name {
    padding: 0.75rem;
  }
</style>
