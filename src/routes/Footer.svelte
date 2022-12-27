<script lang="ts">
  import type { FooterCategory } from '../lib/types/footer';

  const getToKnowUs: FooterCategory = {
    title: 'Get to Know Us',
    links: [
      {
        title: 'About Us',
        url: '/about-us',
      },
      {
        title: 'Careers',
        url: '/careers',
      },
      {
        title: 'Blog',
        url: '/blog',
      },
      {
        title: 'Research & Development',
        url: '/research-and-development',
      },
    ],
  };

  const makeMoneyWithUs: FooterCategory = {
    title: 'Make Money with Us',
    links: [
      {
        title: 'Sell on Nile',
        url: '/sell-on-nile',
      },
      {
        title: 'Become affiliate',
        url: '/become-an-affiliate',
      },
      {
        title: 'For developers',
        url: '/for-developers',
      },
      {
        title: 'For authors',
        url: '/for-authors',
      },
      {
        title: 'Advertise',
        url: '/advertise',
      },
    ],
  };

  const letUsHelpYou: FooterCategory = {
    title: 'Let Us Help You',
    links: [
      {
        title: 'Accessibility',
        url: '/accessibility',
      },
      {
        title: 'Support',
        url: '/support',
      },
      {
        title: 'Your Account',
        url: '/your-account',
      },
      {
        title: 'Your Data',
        url: '/your-data',
      },
      {
        title: 'Policy',
        url: '/policy',
      },
    ],
  };

  const footerCategories: FooterCategory[] = [getToKnowUs, makeMoneyWithUs, letUsHelpYou];
</script>

<footer>
  <div class="categories container">
    {#each footerCategories as category, index (`footer-category-${index}`)}
      <section>
        <h2>{category.title}</h2>
        <ul>
          {#each category.links as link, linkIndex (`footer-category-link-${index}.${linkIndex}`)}
            <li><a href={link.url}>{link.title}</a></li>
          {/each}
        </ul>
      </section>
    {/each}
  </div>
  <small>©2022-2023, Nile, Incorporated</small>
</footer>

<style lang="scss">
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-primary);
    color: var(--color-primary-text);
    padding: 1rem;
    gap: 2rem;

    .categories {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1rem;

      h2 {
        font-size: 1.25rem;
        font-weight: bold;
        margin: 1rem 0;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin: 0;
          padding: 0;

          a {
            color: var(--color-primary-text);
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
</style>
