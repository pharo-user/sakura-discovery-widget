<script>
  import DiscoveryItem from './DiscoveryItem.svelte';
  import { fetchById } from './FetchItems';
  import { onMount } from "svelte";

  onMount(readAll);

  export let widget_id;
  export let widget_title;
  let num_items = 4;
  let first_item = 0;
  let items = [];

  async function readAll() {
    [items, widget_title] = await fetchById(widget_id);
  }

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
      <a class="sakura-link" href="http://sakura.eco">Sakura.eco</a>
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
  <div class="columns">
    <div class="column">
      <input type=range bind:value={first_item} max={items.length}>
    </div>
  </div>
</div>
