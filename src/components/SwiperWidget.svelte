<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import "swiper/css";
  import "swiper/css/free-mode";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import "./swiperstyle.css";
  import { Navigation, Keyboard, FreeMode, Pagination } from "swiper";
  import { fetchById } from './FetchItems';
  import { onMount } from "svelte";
  import DiscoverySwiperItem from "./DiscoverySwiperItem.svelte";

  onMount(readAll);

  export let widget_id;
  export let widget_title;
  export let base_url;
  export let mode;

  let items = [];

  let title;

  async function readAll() {
    [items, title] = await fetchById(base_url, mode, widget_id);
    if (!widget_title)
      widget_title = title;
  }
</script>

<style>
  .top-container {
    display: grid;
    grid-template-columns: auto auto;
    padding-left: 45px;
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
    margin-right: 0;
  }

  .sakura-link {
    display: block;
    flex-shrink: 0;
    width: 100px;
    height: 15px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("https://www.sakura.eco/img/logo-2021-1.png");
    margin-left: 5px;
    margin-bottom: 4px;
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
  }
</style>

<div>
<div class="top-container">
  <div class="heading-item1">
    {widget_title}
  </div>
  <div class="heading-item2">
    <div class="networked-by">
      <span>Networked by</span>
       <a class="sakura-link" href="http://sakura.eco"></a> 
    </div>
  </div>
</div>
<section>
  <Swiper
    slidesPerView={"auto"}
    keyboard={{
      enabled: true,
    }}
    freeMode={true}
    navigation={true}
    modules={[Navigation, Keyboard, FreeMode, Pagination]}
   >
   {#each items as item, i}
      <SwiperSlide>
        <DiscoverySwiperItem base_url={base_url} id={item} mode={mode} companyNetworkId={widget_id}></DiscoverySwiperItem>
      </SwiperSlide>
   {/each}
  </Swiper>
</section>
</div>