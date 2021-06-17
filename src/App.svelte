<script>
  import DiscoveryWidget from './components/DiscoveryWidget.svelte';
  import ComponentWithImage from './components/ComponentWithImage.svelte';

  const id = "3c9988cd1b790d009ea1ecd30fbeedc5";
 
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
    <DiscoveryWidget widget_id={id} widget_title="test"></DiscoveryWidget>
    <!--  
      <ComponentWithImage></ComponentWithImage>
    -->
  </div>
</section>
