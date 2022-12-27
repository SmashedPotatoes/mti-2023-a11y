<script lang="ts">
  import type { Product } from '../lib/types/product';
  import trashCan from '$lib/images/trashcan.svg';

  export let product: Product;
  export let onRemove: () => void;
</script>

<li>
  <!-- svelte-ignore a11y-missing-content -->
  <a class="overlap" href="/product/{product.name}" aria-label="Go to {product.name} page" />
  <div>
    <img class="cart-product-picture" src={product.picture} alt="" />
    <div class="product-info">
      <strong class="cart-product-title">{product.name}</strong>
      <p>{product.price}<sup>&euro;</sup></p>
    </div>
  </div>
  <button class="cart-product-action" on:click={onRemove} aria-label="Remove {product.name} from cart">
    <img src={trashCan} alt="" />
  </button>
</li>

<style lang="scss">
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    position: relative;
    padding: 0.5rem 0;
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

    > div {
      display: flex;

      .product-info {
        display: flex;
        flex-direction: column;
        padding-top: 0.5rem;
        .cart-product-title {
          font-size: 1.2rem;
        }
      }
    }

    .cart-product-action {
      align-self: stretch;
      padding: 1rem;
      padding-left: 2rem;
      z-index: 2;
      position: relative;
      transition: scale 100ms ease-in-out;

      img {
        width: 1rem;
        height: 1rem;
      }

      &:hover {
        scale: 1.25;
      }
    }
  }
</style>
