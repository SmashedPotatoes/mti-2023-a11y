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
    width: 2.5rem;
    height: 2.5rem;
    top: -0.4rem;
    right: -0.4rem;
    left: auto;
  }
</style>
