<script lang="ts">
  import { products, deals, categories } from '$lib/images/data.json';
  import type { DealProductProps } from '$lib/interfaces/products/deal-product-props';
  import Category from './Category.svelte';
  import DealProduct from './DealProduct.svelte';

  const dealProducts: DealProductProps[] = deals.reduce((previous, deal) => {
    const product = products.find((product) => product.name === deal.product);
    if (product) previous.push({ ...product, ...deal });
    return previous;
  }, [] as DealProductProps[]);
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<h1 class="sr-only">Home</h1>
<section>
  <h2 class="sr-only">Deals</h2>
  <div class="grid">
    {#each dealProducts as dealProduct}
      <DealProduct product={dealProduct} />
    {/each}
  </div>
</section>
<hr />
<section>
  <h2 class="sr-only">Categories</h2>
  <div class="grid">
    {#each categories as category}
      <Category {category} />
    {/each}
  </div>
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
