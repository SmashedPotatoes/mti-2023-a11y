<script lang="ts">
  import AddToCartButton from './AddToCartButton.svelte';
  import type { Product } from '../lib/types/product';

  export let product: Product;
</script>

{#if product !== undefined}
  <li class="card position-relative">
    <!-- svelte-ignore a11y-missing-content -->
    <a class="overlap" href="/product/{product.name}" aria-label="Go to {product.name} page" />
    <img class="picture" src={product.picture} alt="" />
    <div class="card-info">
      <strong>{product.name}</strong>
      <p>Rating: <span class="rating">{product.rating.toFixed(1)}<sub>/5</sub></span></p>
      <p class="price">{product.price}<sup>&euro;</sup></p>
      <small>
        Sold by
        <a href="/manufacturer/{product.manufacturer}" class="manufacturer">{product.manufacturer}</a>
      </small>
      <p>Estimated delivery: {product['estimated-delivery']}</p>
    </div>
    <AddToCartButton productName={product.name} />
  </li>
{/if}

<style>
  .rating {
    background-color: var(--color-call-to-action-hover);
    padding: 0.2rem;
    font-weight: bold;
  }
  .price {
    margin: 0;
    font-size: x-large;
    font-weight: bold;
  }
  small {
    padding-bottom: 1rem;
  }
  .manufacturer {
    position: relative;
    z-index: 2;
  }
</style>
