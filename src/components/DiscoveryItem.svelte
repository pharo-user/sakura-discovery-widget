<script>
  import ImageLoader from './Image/ImageLoader.svelte';
  import { fetchById } from './FetchProduct';
  import { onMount } from "svelte";

  export let id;
  export let base_url; 

  onMount(readAll);
  
  $: {
    if (id)
      readAll() 
  }

  function decode_i18n(d) {
  if (typeof d == "string")
    return d;
  if (d == [])
    return "";
  if (Array.isArray(d) && d.length > 0)
    return d[0];
  if (typeof d == "object")
    return d.en;
  return "";
  }

  let networkName = "NETWORK NAME";
  let networkLogo = "img/network.png";
  let description = "Duis a eleifend nibh, eu tempor mauris. Etiam a velit pretium, ultrices leo sit amet, tincidunt diam. Vestibulum quis";
  let membersCount = 15;
  let payingRate = 0; 
  let mailAddress = "helloworld@hello.com";
  let widgetKey = null;

	let picture_url;
	let item_url;
	let item_title;
	let name;
	// let brand;
	let price;
	let currency;

  async function readAll() {
    const {msg, data} = await fetchById(base_url, id);
    if (msg == "found") {
      picture_url = (data.photo !== undefined && data.photo !== null) ? "https://www.sakura.eco/media/" + data.photo : null;
      item_url = data.url;
      item_title = decode_i18n(data.title_i18n);
      price = data.price;
      currency = data.currency;
    }
  }
    
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
    width: 200px;
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
  }
  item_url, .item-anchor {
    text-decoration: none;
    text-align: center;
    color: inherit;
  }

  .the-picture {
    width: 70%;
    margin: auto;
    background-color: #d8d8d8;
    margin-bottom: 25px;
  } 
  .the-name {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 5px;
  }
  .the-price {
    font-size: 13px;
  }
  @media (max-width: 1100px) {
    .the-name {
      font-size: 13px;
    }
    .the-price {
      font-size: 11px;
    }
  }
  @media (max-width: 900px) {
    .the-name {
      font-size: 11px;
    }
  }
  @media (max-width: 550px) {
    .the-name {
      font-size: 10px;
      font-weight: 700;
    }
  }
</style>

{#if item_title}
<div class="the-item">
  <a target="_blank" href={item_url} title={item_title} class="item-anchor">
    <div class="the-picture">
      <ImageLoader src={picture_url} alt={name}></ImageLoader>
    </div>
    <div class="the-name" title={item_title}>{item_title}</div>
    <!-- <div class="the-brand" title={brand}>{brand}</div> -->
    {#if price}
      <div class="the-price">{price}&nbsp;{currency}</div>
    {/if}
  </a>
</div>
{/if}