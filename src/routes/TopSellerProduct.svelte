<script lang="ts">
  import type { TopSellerProductProps } from '$lib/interfaces/products/top-seller-product-props';
  import { priceToText } from '$lib/utils/price-to-text';
  import AddToCartButton from './AddToCartButton.svelte';

  export let index: number;
  export let product: TopSellerProductProps;
  export let href: string = '/';

  const key = `top-seller-product-${index}`;
</script>

<li class="card position-relative">
  <!-- svelte-ignore a11y-missing-content -->
  <a class="overlap" {href} aria-labelledby={key} />
  <img class="picture" src={product.picture} alt="" />
  <div class="card-info">
    <strong id={key}>{product.name}</strong>
    <p class="sr-only">{priceToText(product.price)}</p>
    <p class="price" aria-hidden={true}>{product.price}</p>
  </div>
  <AddToCartButton onClick={product.onAddToCart} />
</li>

<style>
  .price {
    margin: 0;
    font-size: x-large;
    font-weight: bold;
  }
</style>
