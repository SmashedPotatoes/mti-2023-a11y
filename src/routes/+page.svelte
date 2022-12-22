<script>
  import { products, deals, categories } from '$lib/images/data.json';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<h1 class="sr-only">Home</h1>
<section>
  <h2 class="sr-only">Deals</h2>
  {#each deals as deal, index}
    <p>{deal.product}</p>
  {/each}
</section>
<hr />
<section>
  <h2 class="sr-only">Categories</h2>
  {#each categories as category, index}
    <p>{category.name}</p>
  {/each}
</section>
<hr />
<section>
  <h2>Top Sellers</h2>
  {#each products as product, index}
    {#if product.categories.includes('Books')}<p>{product.name}</p>{/if}
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
  }
</style>
