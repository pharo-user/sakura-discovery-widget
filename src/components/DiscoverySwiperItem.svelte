<script>
  import ImageLoader from './Image/ImageLoader.svelte';
  import { fetchById } from './FetchProduct';
  import { onMount } from "svelte";
  import { logEvent } from './LogEvent'
  import lazyLoad from "./lazyload";
  import Marquee from "svelte-fast-marquee";

  export let id;
  export let base_url; 
  export let mode;
  export let companyNetworkId;
  export let configOptions;
  export let networkName;
  export let widgetTitle;

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

	let picture_url;
	let item_url;
	let item_title;
  let item_description; 
	let name;
  let brand;
	let price;
	let currency;
  let playMarquee = false;
  let speedMarquee = window.innerWidth < 550 ? 10 : 20;
  let nameDiv;
  let mouseTimeout;

  async function productClick (id) {
      await logEvent("click", base_url, mode, id, companyNetworkId);
  }
  
  function getUtmParams(network, title) {
    return "&utm_source=" + "Sakura" +
      "&utm_medium="+encodeURI(network)+
      "&utm_campaign=" + encodeURI(title);
  }

  async function readAll() {
    const {msg, data} = await fetchById(base_url, id);
    if (msg == "found") {
      picture_url = (data.photo !== undefined && data.photo !== null) ? "https://www.sakura.eco/media/" + data.photo : null;
      item_title = decode_i18n(data.title_i18n);
      item_description = decode_i18n(data.description_i18n);
      price = data.price;
      currency = data.currency;
      brand = decode_i18n(data.brand);
      if (configOptions.use_utm)
        item_url = data.url + getUtmParams(networkName, widgetTitle);
      else
        item_url = data.url;
    }
  }

  function checkOverflow(e) {
      return e.scrollWidth > e.clientWidth
  }

  function startMarquee() {
    if (!configOptions.marquee)
      return;
      
    if (playMarquee)
      return;

    // wait for nameDiv to appear
    while (!nameDiv) {setTimeout(function() {console.log("Waiting for nameDiv render")}), 100};

    if (checkOverflow(nameDiv)) {
      playMarquee = true; 
      setTimeout(function(){
        playMarquee = false;
      }, (nameDiv.clientWidth/speedMarquee)*1000);    
    }
  }

  function mouseStartMarquee() {
    mouseTimeout = setTimeout(function() {
      startMarquee()
    }, 500);
  }

  function mouseStopMarquee() {
    if (mouseTimeout)
      clearInterval(mouseTimeout)
  }

  async function viewed() {
    if (!item_title) {
      await readAll()
      logEvent("view", base_url, mode, id, companyNetworkId);
    }
    setTimeout(function() {
      startMarquee()
    }, 500);
  }
</script>

<style>
  a {
    color: #000;
  }
  div {
    text-transform: uppercase;
  }
  .scrolling {
    width: auto !important;
    text-overflow: none;
  }
  .the-name, .the-brand, .the-price {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 210px;
   }
  .the-description {
    display: -webkit-box;
    max-width: 200px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 210px;
    font-family: montserrat;
    font-weight: 300;
    font-style: normal;
    line-height: normal;
    font-size: 11px;
  }
  .the-item {
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    letter-spacing: .69px;
    line-height: normal;
    text-align: center;
    font-family: avenir lt w04_85 heavy1475548;
    overflow: hidden;
    width: 210px;
  }
  .the-price, .the-brand {
    font-family: montserrat;
    font-size: 15px;
    font-weight: 300;
    font-style: normal;
    letter-spacing: .69px;
    line-height: normal;
  }
  .the-brand {
    margin-bottom: 3px;
  }
  .the-picture {
    width: 210px;
    background-color: white;
    margin-bottom: 20px;
  }
  item_url, .item-anchor {
    text-decoration: none;
    text-align: center;
    color: inherit;
  }

  .the-name {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 5px;
  }
  .the-price {
    font-size: 11x;
  }
  

  /*media (max-width: 900px) {
    .the-name {
      font-size: 11px;
    }
     the-brand, .the-price {
      font-size: 10px;
    }
    .the-picture {      
      width: 140px;
      background-color: white;
      margin-bottom: 10px;
    }
    .the-name, .the-brand, .the-price {
      width: 140px;
      padding-left: 0px;
      padding-right: 0px;
    }
  }*/

  @media (max-width: 550px) {
    .the-name {
      font-size: 11px;
    }
     the-brand, .the-price {
      font-size: 9px;
    }
    .the-picture {      
      width: 120px;
      background-color: white;
      margin-bottom: 4px;
    }
    .the-name, .the-brand, .the-price {
      width: 120px;
      padding-left: 0px;
      padding-right: 0px;
    }
    .the-description {
      width: 120px;
      padding-left: 0px;
      padding-right: 0px;
     }
  }
</style>

<div class="the-item" use:lazyLoad on:viewed={() => viewed()} on:click={(e) => productClick(id)}
   on:mouseover={mouseStartMarquee} on:mouseout={mouseStopMarquee} on:blur={function () {}} on:focus={function () {}}>
  {#if item_title}
    <a target="_blank" href={item_url} title={item_description} class="item-anchor">
      <div class="the-picture">
        <ImageLoader src={picture_url} alt={name}></ImageLoader>
      </div>
      <Marquee pauseOnHover={!playMarquee} play={playMarquee} speed={speedMarquee}>
        <div bind:this={nameDiv} class="the-name" class:scrolling={playMarquee} title={item_title}>{item_title}</div>
        {#if playMarquee}
        <div style="width:100px"></div>
        {/if}
      </Marquee>
      {#if brand && configOptions.brand}
      <div class="the-brand" title={brand}>{brand}</div>
      {/if}
      {#if price && configOptions.price}
        <div class="the-price">{price}&nbsp;{currency}</div>
      {/if}
      {#if item_description && configOptions.productDetail}
        <div title={item_description} class="the-description">{item_description}</div>
      {/if}
    </a>
  {:else}
  <div>
  Loading
  </div>
  {/if}
</div>
