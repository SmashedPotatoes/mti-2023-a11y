<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import '../styles/styles.scss';
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--color-primary-text-hover);
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 90rem;
    padding: 1rem;
    width: 100%;
    margin: 1rem auto;
    box-sizing: border-box;
  }
</style>
