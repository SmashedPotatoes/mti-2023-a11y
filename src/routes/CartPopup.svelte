<script lang="ts">
  import trashCan from '$lib/images/trashcan.svg';
  import { clearCart } from '../lib/services/cart';
  function onClearCart() {
    clearCart();
  }
</script>

<div class="popup-header">
  <p class="popup-title">Your cart</p>
  <button class="cart-clear" on:click={onClearCart}>Clear cart<img src={trashCan} alt="trashCan" /></button>
</div>

<style lang="scss">
  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    margin-bottom: 1rem;
  }

  .popup-title {
    margin: 0;
    padding: 1rem;
    font-weight: 700;
    color: var(--color-primary-text);
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
