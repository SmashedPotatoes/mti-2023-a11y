<script lang="ts">
  import { getFilters, getProducts } from '../../lib/services/Products';

  const { manufacturers, categories } = getFilters();
  const products = getProducts();
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
      <button>Filter</button>
    </form>
  </div>
  <div class="col-9">
    <div class="row">
      {#each products as product, index (index)}
        <div class="col-4">
          {product.name}
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
</style>
