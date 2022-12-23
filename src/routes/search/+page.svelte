<script lang="ts">
  import { page } from '$app/stores';
  import { getFilters } from '../../lib/services/Products';

  const { manufacturers, categories } = getFilters();
</script>

<div class="row">
  <div class="col-3">
    <form>
      <fieldset class="form-group">
        <legend>Manufacturer</legend>
        {#each manufacturers as manufacturer (manufacturer)}
          <div class="form-check">
            <label>
              <input type="checkbox" name="manufacturer" value={manufacturer} />
              {manufacturer}
            </label>
          </div>
        {/each}
      </fieldset>
      <label>
        Max price
        <input type="range" class="form-control-range" />
      </label>
      <fieldset class="form-group">
        <legend>Category</legend>
        {#each categories as category (category.name)}
          <div class="form-check">
            <label>
              <input type="checkbox" name="category" value={category} />
              {category.name}
            </label>
          </div>
        {/each}
      </fieldset>
      <div class="float-end">
        <button type="submit">Filter</button>
      </div>
    </form>
  </div>
  <div class="col-9">
    <div class="row">
      {#each $page.data.products as product, index (index)}
        <div class="col-4">
          {product.name}
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  form {
    fieldset {
      margin-bottom: 1em !important;
      border: 1px solid #666 !important;
      border-radius: 0.2rem;
      padding: 0 1rem 1rem 1rem !important;
    }

    legend {
      padding: 1px 10px !important;
      float: none;
      width: auto;
    }

    label {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    button {
      color: var(--color-call-to-action-complementary);
      background: var(--color-call-to-action);
      border-radius: 2rem;
      padding: 0.5rem 3rem;
    }
  }
</style>
