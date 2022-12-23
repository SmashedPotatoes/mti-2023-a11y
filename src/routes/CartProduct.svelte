<script lang="ts">
  import type { Product } from '../lib/types/product';
  import trashCan from '$lib/images/trashcan.svg';

  export let product: Product;
  export let onRemove: () => void;
</script>

<li>
  <!-- svelte-ignore a11y-missing-content -->
  <a class="overlap" href="/product/{product.name}" />
  <img class="cart-product-picture" src={product.picture} alt={product.name} />
  <h3 class="cart-product-title"><strong>{product.name}</strong></h3>
  <button class="cart-product-action" on:click={onRemove} aria-labelledby="remove-{product.name}-from-cart">
    <img src={trashCan} alt="remove {product.name} from cart" />
  </button>
  <p id="remove-{product.name}-from-cart" class="sr-only">remove {product.name} from cart</p>
</li>

<style lang="scss">
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    position: relative;
    gap: 1rem;
    padding: 0.7rem 1.4rem;
    color: var(--color-primary-text);
    background: var(--color-secondary);
    border-radius: 0.5rem;

    &:hover {
      background: var(--color-accent);
    }

    .cart-product-picture {
      width: 10rem;
      height: 5rem;
      object-fit: scale-down;
      border-radius: 0.5rem;
    }

    .cart-product-title {
      font-size: 1.2rem;
    }

    .cart-product-action {
      width: 1.5rem;
      height: 1.5rem;
      z-index: 2;
      position: relative;
      transition: scale 100ms ease-in-out;
      &:hover {
        scale: 1.25;
      }
    }
  }
</style>
