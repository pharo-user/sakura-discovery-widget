<script>
  import ImageLoader from './Image/ImageLoader.svelte';
	export let picture_url;
	export let item_url;
	export let item_title;
	export let name;
	export let brand;
	export let price;
	export let currency;
</script>

<div class="the-item">
  <a target="_blank" href={item_url} title={item_title}>>
    <div class="the-picture">
      <ImageLoader src={picture_url} alt={name}></ImageLoader>
    <div class="the-name" title={name}>{name}</div>
    <div class="the-brand" title={brand}></div>
    <div class="the-price">{price}&nbsp;{currency}</div>
  </a>
</div>
