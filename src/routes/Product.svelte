<script lang="ts">
  import AddToCartButton from './AddToCartButton.svelte';
  import type { Product } from '../lib/types/Product';

  export let index: number;
  export let product: Product;
  export let onAddToCart: (product: Product) => void;

  const key = `product-${index}`;
</script>

{#if product !== undefined}
  <li class="card position-relative">
    <!-- svelte-ignore a11y-missing-content -->
    <a class="overlap" href="/product/{product.name}" aria-labelledby={key} />
    <img class="picture" src={product.picture} alt="" />
    <div class="card-info">
      <strong id={key}>{product.name}</strong>
      <p>Rating: {product.rating}</p>
      <p class="price">&euro;{product.price}</p>
      <p>Sold by <a href="/manufacturer/{product.manufacturer}">{product.manufacturer}</a></p>
      <p>Estimated delivery: {product['estimated-delivery']}</p>
    </div>
    <AddToCartButton onClick={onAddToCart} />
  </li>
{/if}

<style>
  .price {
    margin: 0;
    font-size: x-large;
    font-weight: bold;
  }
</style>
