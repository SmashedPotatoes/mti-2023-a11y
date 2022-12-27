<script lang="ts">
  import type { TopSellerProductProps } from '$lib/interfaces/products/top-seller-product-props';
  import { priceToText } from '$lib/utils/price-to-text';
  import AddToCartButton from './AddToCartButton.svelte';

  export let product: TopSellerProductProps;
  export let href: string = '/product/' + product.name;
</script>

<li class="card position-relative">
  <!-- svelte-ignore a11y-missing-content -->
  <a class="overlap" {href} aria-label="Go to {product.name} page" />
  <img class="picture" src={product.picture} alt="" />
  <div class="card-info">
    <strong>{product.name}</strong>
    <p class="sr-only">{priceToText(product.price)}</p>
    <p class="price" aria-hidden={true}>{product.price}&euro;</p>
  </div>
  <AddToCartButton productName={product.name} />
</li>

<style>
  .price {
    margin: 0;
    font-size: x-large;
    font-weight: bold;
  }
</style>
