<script lang="ts">
  import { categories, deals, products } from '$lib/images/data.json';
  import type { DealProductProps } from '$lib/interfaces/products/deal-product-props';
  import type { TopSellerProductProps } from '$lib/interfaces/products/top-seller-product-props';
  import Category from './Category.svelte';
  import DealProduct from './DealProduct.svelte';
  import TopSellerProduct from './TopSellerProduct.svelte';
  import { addToCart } from '../lib/services/cart';

  const dealProducts: DealProductProps[] = deals.reduce((previous, deal) => {
    const product = products.find((product) => product.name === deal.product);
    if (product) previous.push({ ...product, ...deal });
    return previous;
  }, [] as DealProductProps[]);

  const topSellers: TopSellerProductProps[] = products.reduce((previous, product) => {
    if (product.categories.includes('Books')) previous.push(product);
    return previous;
  }, [] as TopSellerProductProps[]);
</script>

<svelte:head>
  <title>Nile - Home</title>
  <meta name="description" content="Nile home page" />
</svelte:head>

<h1 class="sr-only">Home</h1>
<section>
  <h2 class="sr-only">Deals</h2>
  <ul class="grid product-grid">
    {#each dealProducts as dealProduct, index (`deal-product-${index}`)}
      <DealProduct {index} product={dealProduct} />
    {/each}
  </ul>
</section>
<hr />
<section>
  <h2 class="sr-only">Categories</h2>
  <ul class="grid category-grid">
    {#each categories as category, index (`category-${index}`)}
      <Category {index} {category} />
    {/each}
  </ul>
</section>
<hr />
<section>
  <h2>Top Sellers</h2>
  <ul class="grid product-grid">
    {#each topSellers as topSeller, index (`top-seller-product-${index}`)}
      <TopSellerProduct {index} product={topSeller} />
    {/each}
  </ul>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  h2:not(.sr-only) {
    padding: 1rem;
    font-weight: bold;
  }
</style>
