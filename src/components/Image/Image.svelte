<script>
  export let src
  export let alt

  import { onMount } from 'svelte'

  let loaded = false
  let thisImage

  onMount(() => {
    thisImage.onload = () => {
      loaded = true
    }
  }) 

</script>

<style>
  img {
    height: auto;
    max-width: 100%;
    opacity: 0;
  }
  img.loaded {
    opacity: 1;
  }
</style>

<img {src} {alt} class:loaded bind:this={thisImage} loading="lazy" />