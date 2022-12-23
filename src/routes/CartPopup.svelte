<script lang="ts">
  import trashCan from '$lib/images/trashcan.svg';
  import { clearCart, getProductsInCart, removeFromCart } from '../lib/services/cart';
  import { onMount } from 'svelte';
  import CartProduct from './CartProduct.svelte';
  function onClearCart() {
    clearCart();
  }
  let productsInCart = [];
  onMount(() => {
    productsInCart = getProductsInCart();
  });
  function onRemoveProductFromCart(itemName) {
    productsInCart = productsInCart.filter((product) => product.name !== itemName);
    removeFromCart(itemName);
  }
</script>

<div class="popup-header">
  <p class="popup-title">Your cart ({productsInCart.length} items)</p>
  <button class="cart-clear" on:click={onClearCart}>Clear cart<img src={trashCan} alt="trashCan" /></button>
</div>
<ul class="popup-list">
  {#each productsInCart as product, index (product.name + '-product-' + index)}
    <CartProduct {product} onRemove={() => onRemoveProductFromCart(product.name)} />
  {/each}
</ul>

<style lang="scss">
  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  .popup-title {
    margin: 0;
    padding: 1rem;
    font-weight: 700;
    color: var(--color-primary-text);
  }

  .popup-list {
    list-style: none;
    padding: 0 1rem;
    margin: 0;
    max-height: calc(100vh - 200px);
    overflow-y: auto;
  }

  .cart-clear {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-primary-text);
    &:hover {
      color: var(--color-error);
    }
    img {
      width: 1rem;
      height: 1rem;
    }
  }
</style>
