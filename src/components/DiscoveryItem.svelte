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

<style>
  a {
    color: #000;
  }
  .the-name {
    text-transform: uppercase;
  }
  .the-name, .the-brand, .the-price {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .the-item {
    font-size: 14.4px;
    font-weight: 300;
    font-style: normal;
    letter-spacing: .69px;
    line-height: normal;
    text-align: center;
    font-family: avenir lt w04_85 heavy1475548;
    overflow: hidden;
  }
  .the-price, .the-brand {
    font-family: montserrat;
    font-size: 12.8px;
    font-weight: 300;
    font-style: normal;
    letter-spacing: .69px;
    line-height: normal;
  }
  .the-picture {
    width: 208px;
    height: 264px;
    background-color: #d8d8d8;
    margin-bottom: 32px;
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
