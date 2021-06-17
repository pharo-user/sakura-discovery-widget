<script>
  import DiscoveryItem from './DiscoveryItem.svelte';
  import { fetchById } from './FetchItems';
  import { onMount } from "svelte";

  onMount(readAll);

  export let widget_id;
  export let widget_title;
  let num_items = 6;
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
  input {
    width: 100%;
    margin-top: 15px;
  }
  .sakura-link {
    display: block;
    flex-shrink: 0;
    width: 100px;
    height: 15px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("http://www.sakura.eco/img/logo-2021-1.png");
    margin-left: 5px;
    margin-bottom: 4px;
  }
  .networked-by {
    white-space: nowrap;
    text-transform: none;
    display: flex;
    align-items: flex-end;
  }
  .the-title {
    font-family: avenir lt w04_85 heavy1475548 !important;
    font-style: normal;
    letter-spacing: .96px;
    line-height: normal;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .title-itself {
    font-size: 20px;
    font-weight: 300;
    font-style: normal;
    letter-spacing: .69px;
    line-height: normal;
    text-transform: uppercase
  }
  .press-left, .press-right {
    width: 16px;
    margin-right: 15px;
    margin-left: 15px;
  }
  .columns {
    margin: 0px 0px;
  }
  .column {
    display: grid;
    align-content: center;
    padding: 0px 0px;
  }
  .column .is-3 {
    width: 208px;
    margin-right: 10px;
  }
</style>

<div class="landing-discovery-bridge">

  <div class="columns">
    <div class="column is-narrow">
      <a href="#" class="column is-1 press-left" on:click={leftClick}>
        <img alt="" src="/img/press-left.svg">
      </a> 
    </div>

    <div class="column is-narrow">
      <div class="the-title">
        <span  class="title-itself">
          {widget_title}
        </span>
        <div class="networked-by">
          <span>Networked by</span>
          <a class="sakura-link" href="http://sakura.eco"></a>
        </div>
    </div>
      <div class="columns">
        {#each items.slice(first_item, first_item+num_items) as item, i}
          <div class="column is-3">
            <DiscoveryItem  {...item}></DiscoveryItem>
          </div>
        {/each}
      </div>
      <div class="columns">
        <div class="column">
          <input type=range bind:value={first_item} max={items.length}>
        </div>
      </div>
    </div>

    <div class="column is-narrow">
      <a href="#" class="column is-1 press-right" on:click={rightClick}>
        <img alt="" src="/img/press-right.svg">
      </a> 
    </div>
  </div>
</div>
