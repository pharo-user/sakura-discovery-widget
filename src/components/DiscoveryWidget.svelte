<script>
  import DiscoveryItem from './DiscoveryItem.svelte';
  import items from './FetchItems';
  export let widget_id;
  export let widget_title;
  const num_items = 4;
  let first_item = 0;

  let items2=items.slice(0,4)

  function leftClick() {
    if (first_item >= num_items)  
      first_item -= num_items
    else if (first_item > 0)
      first_item = 0
	}

  function rightClick() {
    if (first_item + num_items < items.length)
      first_item += num_items
	}

</script>

<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>

<div class="landing-discovery-bridge">
  <div class="the-title">
    <span  class="title-itself">
    {widget_title}
    <div class="networked-by">
      <span>Networked by</span>
      <a class="sakura-link" href="http://sakura.eco"></a>
    </div>
    {widget_id}
  </div>

  <div class="columns">
    <div class="column is-1">
      <span class="icon" on:click={leftClick}>
        <i class="fas fa-arrow-left"></i>
      </span>
    </div>

    <div class="column is-10">
      <div class="columns">
        {#each items.slice(first_item, first_item+num_items) as item, i}
          <div class="column is-3">
            <DiscoveryItem  {...item}></DiscoveryItem>
          </div>
        {/each}
      </div>
    </div>

    <div class="column is-1">
      <span class="icon" on:click={rightClick}>
        <i class="fas fa-arrow-right"></i>
      </span>
    </div>
  </div>
</div>
