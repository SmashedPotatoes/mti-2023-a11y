<script>
  import { page } from '$app/stores';
  import logo from '$lib/images/nile.svg';
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Deals', href: '/deals' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Categories', href: '/categories' },
    { name: 'Sell', href: '/sell' },
  ];
</script>

<header class="d-flex flex-column gap-1">
  <div class="d-flex flex-row justify-content-between p-2">
    <a href="/" class="corner">
      <img src={logo} alt="SvelteKit" />
    </a>
    <form>
      <input type="search" />
      <button type="submit">Search</button>
    </form>
    <ul>
      <li>
        <button>Profile</button>
      </li>
      <li>
        <button>Cart</button>
      </li>
    </ul>
  </div>
  <nav>
    <ul class="container">
      {#each navLinks as link}
        <li aria-current={$page.url.pathname === link.href}>
          <a href={link.href}>
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
  }

  .corner {
    width: 3em;
    height: 3em;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .corner img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav {
    background: var(--color-accent);
  }

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  }

  ul {
    margin-top: 1rem;
    list-style: none;
  }

  ul > li {
    display: inline-block;
    margin: 0 0.5em;
  }

  li[aria-current='true'] a {
    text-decoration: underline var(--color-primary-text);
    &:hover {
      text-decoration: underline var(--color-primary-text-hover);
    }
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-primary-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-primary-text-hover);
    text-decoration: underline var(--color-primary-text-hover);
  }
</style>
