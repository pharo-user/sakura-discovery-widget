<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import "swiper/css";
  import "swiper/css/free-mode";
  import "swiper/css/pagination";
  import "./swiperstyle.css";
  import { FreeMode, Pagination } from "swiper";
  import { fetchById } from './FetchItems';
  import { onMount } from "svelte";

  onMount(readAll);

  export let widget_id;
  export let widget_title;
  export let base_url;
  export let mode;

  let items = [];

  async function readAll() {
    [items, widget_title] = await fetchById(base_url, mode, widget_id);
  }
</script>

<section>
  <Swiper
    slidesPerView={3}
    spaceBetween={30}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    class="mySwiper"
  >
   {#each items as item, i}
         <SwiperSlide>
            {item}
         </SwiperSlide>
   {/each}
  </Swiper>
</section>