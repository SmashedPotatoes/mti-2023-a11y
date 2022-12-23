<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import '../styles/styles.scss';
</script>

<div class="app">
  <Header />

  <main class="container">
    <slot />
  </main>

  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: aliceblue;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
