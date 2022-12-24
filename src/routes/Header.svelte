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

  let profileMenuOpen = false;
  function toggleProfileMenu() {
    console.log('toggleProfileMenu');
    profileMenuOpen = !profileMenuOpen;
  }

  function onProfileMenuBlur() {
    setTimeout(() => {
      profileMenuOpen = false;
    }, 200);
  }
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
    <ul role="menu">
      <li role="none">
        <button
          class="haspopup"
          on:click={() => toggleProfileMenu()}
          on:blur={onProfileMenuBlur}
          role="menuitem"
          aria-haspopup="true"
          aria-expanded={profileMenuOpen}><img src={profile} alt="" />Profile</button
        >
        <ul role="menu" aria-label="Profile">
          <li role="none"><a role="menuitem" href="/profile/profile">Profile</a></li>
          <li role="none"><a role="menuitem" href="/profile/orders">My Orders</a></li>
          <li role="none"><a role="menuitem" href="/profile/settings">Settings</a></li>
        </ul>
      </li>
      <li role="none">
        <button role="menuitem" aria-haspopup="true" aria-expanded="false"><img src={cart} alt="" />Cart</button>
      </li>
    </ul>
  </div>
  <nav>
    <ul class="container">
      {#each navLinks as link, index (`${link.name}-${index}}`)}
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
  .logo {
    width: 3em;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 2em;
      height: 2em;
      object-fit: contain;
    }
  }

  button {
    background: none;
    border: none;
    color: var(--color-primary-text);
    margin: 0;
    padding: 1rem;
    img {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
    }
  }

  button:hover {
    background-color: var(--color-accent);
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;
      padding-left: 1rem;
      padding-right: 2rem;
      background: var(--color-primary);

      > a {
        margin: auto;
      }
    }

    form {
      flex: 1;
      display: flex;
      align-items: stretch;
      gap: 0.5rem;
      margin: 1rem;
      input {
        flex: 1;
        padding: 0.5rem;
        border: none;
        border-radius: 0.25rem;
        font-size: 1rem;
      }

      button {
        width: fit-content;
        display: flex;
        justify-items: center;
        align-items: center;
        padding: 0.5rem;
        border-radius: 100%;

        img {
          margin: 0;
        }
      }
    }
  }

  nav {
    background: var(--color-accent);
    ul {
      margin: 0 0 0 2rem;
      > li {
        display: inline-block;
        margin: 0 0.5em;
        a {
          display: flex;
          align-items: center;
          padding: 1rem;
          color: var(--color-primary-text);
          border-bottom: 3px solid transparent;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: color 150ms ease-out;
        }
      }

      > li[aria-current='true'] a {
        border-color: var(--color-primary-text);
      }

      > li:hover a {
        color: var(--color-primary-text-hover);
        border-color: var(--color-primary-text-hover);
      }
    }
  }

  ul {
    margin-bottom: 0;
    > li {
      display: inline-block;
      height: 100%;
      button {
        height: 100%;
      }
    }
  }

  .haspopup {
    position: relative;
    &[aria-expanded='true'] + ul {
      display: flex;
      flex-direction: column;
      position: absolute;
      background: var(--color-primary);
      z-index: 10;
      padding: 0;
      border-radius: 0.5rem 0.5rem;
      margin-top: 0.3rem;

      li {
        display: flex;
        width: 100%;
        height: 100%;
        a {
          width: 100%;
          height: 100%;
          padding: 1rem;
          color: var(--color-primary-text);
          text-decoration: none;
          transition: color 150ms ease-out;
          &:hover {
            background: var(--color-secondary);
          }
        }
      }
      li:first-child a {
        border-radius: 0.5rem 0.5rem 0 0;
      }
      li:last-child a {
        border-radius: 0 0 0.5rem 0.5rem;
      }
    }
    &[aria-expanded='false'] + ul {
      display: none;
    }
  }
</style>
