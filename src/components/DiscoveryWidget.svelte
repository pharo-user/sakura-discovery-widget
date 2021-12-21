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
	/* p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
  input {
    width: 100%;
    margin-top: 15px;
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
  } */
  .top-container {
    display: grid;
    grid-template-columns: auto auto;
    margin-bottom: 35px;
    padding-left: 45px;
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
  .discovery-container {
    display: grid;
    grid-template-columns: 35px auto 35px;
  }
  .discovery-content {
    display: flex;
  }
  .arrow-left {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -100px;
  }
  .arrow-right {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -100px;
  }


  /* .the-item {
    width: 300px;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
  }
  .item-anchor {
    text-decoration: none;
    text-align: center;
    color: inherit;
  } */
</style>

<div class="top-container">
  <div class="heading-item1">
    <span  class="title-itself">
      <h1 class="title is-4">{widget_title}</h1>
    </span>
  </div>
  <div class="heading-item2">
    <div class="networked-by">
      <span>Networked by</span>
      <a class="sakura-link" href="http://sakura.eco"></a>
    </div>
  </div>
</div>
<div class="discovery-container">
  <div class="arrow-left">
    <a href="#" class="left-arrow-link" on:click={leftClick}>
      <img alt="left arrow" src="/img/press-left.svg" class="">
    </a> 
  </div>
  <div class="discovery-content">
    {#each items.slice(first_item, first_item+num_items) as item, i}
      <DiscoveryItem  {...item}></DiscoveryItem>
    {/each}
  </div>
  <div class="arrow-right">
    <a href="#" class="right-arrow-link" on:click={rightClick}>
      <img alt="" src="/img/press-right.svg" class="">
    </a> 
  </div>
</div>

