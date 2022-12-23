<script lang="ts">
  import addToCartIcon from '$lib/images/add-to-cart.svg';

  export let onClick: () => void = () => {};
</script>

<button class="overlap add-to-cart-btn" on:click={onClick}>
  <img src={addToCartIcon} alt="add to cart" />
</button>

<style>
  .add-to-cart-btn {
    background-color: var(--color-call-to-action);
    border: none;
    border-radius: 100%;
    padding: 0.5rem;
    width: 3rem;
    height: 3rem;
    top: -0.6rem;
    right: -0.6rem;
    left: auto;
    transition: scale 100ms ease-in-out;
  }

  .add-to-cart-btn:hover {
    background-color: var(--color-call-to-action-hover);
    scale: 1.25;
    z-index: 1;
  }
</style>
