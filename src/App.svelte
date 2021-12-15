<script>
  import DiscoveryWidget from './components/DiscoveryWidget.svelte';
  import MemberCard from './components/MemberCard.svelte';
  import NetworkCard from './components/NetworkCard.svelte';
  import ComponentWithImage from './components/ComponentWithImage.svelte';

  const urlParams = new URLSearchParams(window.location.search);
  const mode = urlParams.has('mode') ? urlParams.get('mode') : 0
  const id = urlParams.has('id') ? urlParams.get('id') : "3c9988cd1b790d009ea1ecd30fbeedc5";
 
</script>

<style>
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
      <MemberCard></MemberCard>
    {/if}
    {#if mode == 2}
      <NetwordCard></NetwordCard>
    {/if}
    <DiscoveryWidget widget_id={id} widget_title="test"></DiscoveryWidget>
    <!--  
      <ComponentWithImage></ComponentWithImage>
    -->
  </div>
</section>
