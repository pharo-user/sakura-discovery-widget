
<script>
  import lazyLoad from "./lazyload";
  const urlBase = "https://picsum.photos/seed/";
  const urlSuffix = "/800/800/";
  let imageSrcs = [...Array(50).keys()].map(num => urlBase + num.toString() + urlSuffix);
</script>

<style>
  main {
    width: 400px;
    margin: 0 auto;
  }

  img {
    margin-bottom: 10px;
    width: 100%;
    display: block;
    height: 500px;
  }
</style>

<main>
  {#each imageSrcs as src, i}
    <img use:lazyLoad={src} alt="picture number{i}" />
  {/each}
</main>
