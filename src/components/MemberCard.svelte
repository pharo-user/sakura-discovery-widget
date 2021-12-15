<script>
  import { fetchById } from './FetchMembers';
  import { onMount } from "svelte";

  onMount(readAll);

  export let member_id;
  let name = "";
  let photo = "";
  let detail = "";
  let site_url = "";

  async function readAll() {
    [name, photo, detail, site_url ] = await fetchById(member_id);
  }

</script>

<style>
  .the-name {
  }
  .the-name, .the-brand, .the-price {
  }
</style>


<div class="the-item">
  <a target="_blank" href={item_url} title={item_title}>
    <div class="the-picture">
      <ImageLoader src={picture_url} alt={name}></ImageLoader>
    </div>
    <div class="the-name" title={name}>{name}</div>
    <div class="the-brand" title={brand}>{brand}</div>
    <div class="the-price">{price}&nbsp;{currency}</div>
  </a>
</div>
