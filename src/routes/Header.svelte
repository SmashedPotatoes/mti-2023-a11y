<script>
  import { page } from '$app/stores';
  import cart from '$lib/images/cart.svg';
  import logo from '$lib/images/nile-light.svg';
  import logoFallback from '$lib/images/nile.svg';
  import profile from '$lib/images/profile.svg';
  import search from '$lib/images/search.svg';
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Deals', href: '/deals' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Categories', href: '/categories' },
    { name: 'Sell', href: '/sell' },
  ];
</script>

<header>
  <div>
    <a href="/" class="logo">
      <picture>
        <source srcset={logo} type="image/svg+xml" />
        <img src={logoFallback} alt="Nile logo" />
      </picture>
    </a>
    <form action="/search">
      <input
        name="q"
        type="search"
        placeholder="Navigate the nile..."
        aria-placeholder="Navigate the nile..."
        aria-describedby="search-hint"
      />
      <p id="search-hint" class="sr-only">Enter the query to search for a product.</p>
      <button type="submit" aria-label="Search"><img src={search} alt="search button" /></button>
    </form>
    <button><img src={profile} alt="" />Profile</button>
    <button><img src={cart} alt="" />Cart</button>
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
    flex-direction: column;
    justify-content: space-between;
    > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: var(--color-primary);
    }

    form {
      flex: 1;
      display: flex;
      gap: 1rem;
      input {
        flex: 1;
        padding: 0.5rem;
        border: none;
        border-radius: 0.25rem;
        font-size: 1rem;
      }
    }
    ul li {
      button {
        transition: color 150ms ease-out;
        &:hover {
          color: var(--color-primary-text-hover);
        }
      }
    }
  }

  button {
    img {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
    }
  }

  .logo {
    width: 3em;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav {
    background: var(--color-accent);
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
    transition: color 150ms ease-out;
  }

  a:hover {
    color: var(--color-primary-text-hover);
    text-decoration: underline var(--color-primary-text-hover);
  }
</style>
