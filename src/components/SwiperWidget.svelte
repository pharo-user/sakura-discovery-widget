<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import "swiper/css";
  import "swiper/css/free-mode";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import "./swiperstyle.css";
  import { Navigation, Keyboard, FreeMode, Pagination, Autoplay } from "swiper";
  import { fetchById } from './FetchItems';
  import { onMount } from "svelte";
  import DiscoverySwiperItem from "./DiscoverySwiperItem.svelte";
  import lazyLoad from "./lazyload";
  import { logEvent } from './LogEvent'
  import { fetchParamsByWidgetKey } from './FetchNetworkInfo'

  onMount(readAll);

  export let widget_id;
  export let widget_title;
  export let base_url;
  export let mode;
  export let urlParams;

  let items = [];
  let title;
  let swiper;
  let widgetShown = false;
  let slideAutoChanged = false;
  let topBorder = false;
  let bottomBorder = false;
  let widget_description = '';
  let network_name = '';

  let configOptions = {
    price: true,
    brand: false,
    marquee: false,
    autoscroll: true,
    productDetail: false,
    networkDetail: false,
    size: 1,
    border: 0,
    networkedlabel: null,
    networkedlink: "https://sakura.eco",
    use_utm: false
  };

  async function readAll() {

    if (swiper)
      swiper.swiper().autoplay.stop();

    [items, title, network_name, widget_description] = await fetchById(base_url, mode, widget_id);

    if (!widget_title)
      widget_title = title;
 
    if (widget_id.length >= 32) {
      let fetchedParams = await fetchParamsByWidgetKey(base_url, widget_id);
      
      (["price", "brand", "marquee", "autoscroll", "productDetail", "networkDetail", "size", "border", "networkedlabel", "networkedlink", "use_utm"]).forEach(
        function (value) {          
          if (fetchedParams)
            if (typeof fetchedParams[value] !== "undefined")
              configOptions[value] = fetchedParams[value];

          if (urlParams.has(value))  // override network's params by URL params
            configOptions[value] = JSON.parse(urlParams.get(value));
        }
      )
    }

    topBorder = (configOptions.border & 1) != 0;
    bottomBorder = (configOptions.border & 2) != 0;

    logEvent("page", base_url, mode, null, widget_id);
  }

  function viewed() {
    if (swiper) {
      swiper.swiper().autoplay.stop();
      swiper.swiper().slideTo(0);
    }

    setTimeout(function() {
      if (configOptions.autoscroll)
        swiper.swiper().autoplay.start();
    }, 10000);

    if (!widgetShown) {
      logEvent("show", base_url, mode, null, widget_id);
      widgetShown = true;
    }
  }

  function slideChangeInteractively() {
    // when autoscroll, not generate the event
    if (!slideAutoChanged)
      logEvent("scroll", base_url, mode, null, widget_id);
    slideAutoChanged = false;
  }
 
</script>

<style>
  .top-container {
    display: grid;
    grid-template-columns: auto auto;
    padding-left: 10px;
    margin-bottom: 10px;
  }

  .heading-item1 {
    font-family: avenir lt w04_85 heavy1475548;
    font-size: 20px;
    text-transform: uppercase;
    margin-left: 0px;
  }

  .heading-item2 {
    margin-left: auto;
    margin-right: 5px;
    font-size: 11px;
  }

  .heading-item3 {
    margin-left: 0px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-family: montserrat;
    font-weight: 300;
    font-style: normal;
    line-height: normal;
    font-size: 13px;
  }

  .sakura-link {
    display: block;
    flex-shrink: 0;
    width: 70px;
    height: 10px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("https://www.sakura.eco/img/logo-2021-1.png");
    margin-left: 5px;
    margin-bottom: 3px;
  }
  .sakura-text-link {
    margin-left: 3px;
    margin-right: 5px;
    color: black;
    font-weight: 500;
    text-transform: uppercase;
  }
  
  .networked-by {
    white-space: nowrap;
    text-transform: none;
    display: flex;
    align-items: flex-end;
  }

  @media (max-width: 900px) {
    .heading-item2 {
      font-size: 12px;
    }
    .sakura-link {
      margin-top: 5px;
      width: 80px;
      height: 10px;
    }
  }

  @media (max-width: 550px) {
    .top-container {
      padding-left: 20px;
    }
    .heading-item2 {
      font-size:10px;
    }
    .sakura-link {
      margin-top: 5px;
      width: 60px;
      height: 8px;
    }
    .heading-item1 {
      font-size: 14px;
      margin-left: -15px;
     }
     .networked-by span { 
      display: none;
    }

    .heading-item3 {
      margin-left: -15px;
    }
  }
</style>

{#if topBorder}
  <hr>
{/if}

<div use:lazyLoad on:viewed={() => viewed()}>
<div class="top-container">
  <div class="heading-item1">
    {widget_title}
  </div>
  <div class="heading-item2">
    <div class="networked-by">
      <span>Networked by</span>
      {#if configOptions.networkedlabel}
        <a class="sakura-text-link" href={configOptions.networkedlink}> {configOptions.networkedlabel} </a>
      {:else}
       <a class="sakura-link" href="https://sakura.eco"></a> 
       {/if}
    </div>
  </div>
  {#if configOptions.networkDetail}
    <div class="heading-item3" title={widget_description}>
      {widget_description}
    </div>
  {/if}
</div>

<section>
  <Swiper
    bind:this={swiper}
    slidesPerView={"auto"}
    keyboard={{
      enabled: true,
    }}
    autoplay={{
     delay: 2000,
     disableOnInteraction: true,
     pauseOnMouseEnter: true
    }}
    freeMode={true}
    navigation={true}
    on:autoplay={function() {slideAutoChanged=true}}
    on:slideChangeTransitionEnd={slideChangeInteractively}
    modules={[Autoplay, Navigation, Keyboard, FreeMode, Pagination]}
   >
   {#each items as item, i}
      <SwiperSlide>
        <DiscoverySwiperItem base_url={base_url} id={item} mode={mode} companyNetworkId={widget_id} configOptions={configOptions} networkName={network_name} widgetTitle={title}></DiscoverySwiperItem>
      </SwiperSlide>
   {/each}
  </Swiper>
</section>
</div>

{#if bottomBorder}
  <hr>
{/if}