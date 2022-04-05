<script>
  import DiscoveryWidget from './components/DiscoveryWidget.svelte';
  import SwiperWidget from './components/SwiperWidget.svelte';
  import MemberCard from './components/MemberCard.svelte';
  import NetworkCard from './components/NetworkCard.svelte';
  
  const urlParams = new URLSearchParams(window.location.search);
  const mode = urlParams.has('mode') ? urlParams.get('mode') : 0;
  console.log("mode", mode);
  const id = urlParams.has('id') ? urlParams.get('id') : 1;
  const widetKey = urlParams.has('widgetKey') ? urlParams.get('widgetKey') : "3c9988cd1b790d009ea1ecd30fbeedc5";
  const title = urlParams.has('title') ? urlParams.get('title') : "";

  import env from './components/env.js';

	let sakura_url = env.flag_test ? env.sakura_test_url : env.sakura_prod_url;
</script>

<style>
div {
  height: 100%;
}
.container {
  margin: 0px 0px;
}
.section {
  padding: 0px 0px;
}

</style>

<section>
  <div>
    {#if mode == 1}
      <MemberCard id={id} base_url= {sakura_url}></MemberCard>
    {/if}
    {#if mode == 2}
      <NetworkCard id={id} base_url= {sakura_url}></NetworkCard>
    {/if}
    {#if mode == 3}
      <DiscoveryWidget base_url={sakura_url} mode={2} widget_id={id} widget_title={title} use_swiper_widget={env.use_swiper_widget}></DiscoveryWidget>
    {/if}
  </div>
</section>
