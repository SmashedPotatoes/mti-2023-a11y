<script lang="ts">
  import addToCartIcon from '$lib/images/add-to-cart.svg';
  import type { DealProductProps } from '$lib/interfaces/products/deal-product-props';
  import { priceToText } from '$lib/utils/price-to-text';

  export let product: DealProductProps;
  export let href: string = '/';
  const newPrice = product.price - (product.price * product.deal) / 100;
</script>

<li class="card position-relative">
  <!-- svelte-ignore a11y-missing-content -->
  <a class="overlap" {href} aria-labelledby="product-name" />
  <img class="picture" src={product.picture} alt="" />
  <div class="product-info">
    <strong id="product-name">{product.name}</strong>
    <div class="price">
      <p class="sr-only">Before: {priceToText(product.price)}</p>
      <p class="old-price" aria-hidden={true}>{product.price}</p>
      <p class="sr-only">After: {priceToText(product.price)}</p>
      <p class="new-price" aria-hidden={true}>{newPrice % 1 ? newPrice.toFixed(2) : newPrice}&euro;</p>
    </div>
    <p class="deal-percentage">{product.deal}% off</p>
  </div>
  <button class="overlap add-to-cart-btn" on:click={product.onAddToCart}>
    <img src={addToCartIcon} alt="add to cart" />
  </button>
</li>

<style>
  .product-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 1rem;
  }

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

  .add-to-cart-btn {
    background-color: var(--color-call-to-action);
    border: none;
    border-radius: 100%;
    padding: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    top: -0.4rem;
    right: -0.4rem;
    left: auto;
  }
</style>
