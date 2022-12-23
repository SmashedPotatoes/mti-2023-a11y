<script lang="ts">
  import type { DealProductProps } from '$lib/interfaces/products/deal-product-props';
  import { priceToText } from '$lib/utils/price-to-text';
  import AddToCartButton from './AddToCartButton.svelte';

  export let index: number;
  export let product: DealProductProps;
  export let href: string = '/';

  const key = `deal-product-${index}`;
  const newPrice = product.price - (product.price * product.deal) / 100;
</script>

<li class="card position-relative">
  <!-- svelte-ignore a11y-missing-content -->
  <a class="overlap" {href} aria-labelledby={key} />
  <img class="picture" src={product.picture} alt="" />
  <div class="card-info">
    <strong id={key}>{product.name}</strong>
    <div class="price">
      <p class="sr-only">Before: {priceToText(product.price)}</p>
      <p class="old-price" aria-hidden={true}>{product.price}</p>
      <p class="sr-only">After: {priceToText(product.price)}</p>
      <p class="new-price" aria-hidden={true}>{newPrice % 1 ? newPrice.toFixed(2) : newPrice}&euro;</p>
    </div>
    <p class="deal-percentage">{product.deal}% off</p>
  </div>
  <AddToCartButton productName={product.name} />
</li>

<style>
  .price {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .old-price {
    color: var(--color-deal);
    text-decoration: line-through;
    margin: 0;
  }

  .new-price {
    margin: 0;
    font-size: x-large;
    font-weight: bold;
  }

  .deal-percentage {
    color: var(--color-deal-complementary);
    background-color: var(--color-deal);
    padding: 0.2rem;
    width: fit-content;
    margin: 0;
  }
</style>
