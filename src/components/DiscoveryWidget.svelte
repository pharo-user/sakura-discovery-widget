<script>
  import DiscoveryItem from './DiscoveryItem.svelte';
  import { fetchById } from './FetchItems';
  import { onMount } from "svelte";

  onMount(readAll);

  export let widget_id;
  export let widget_title;
  export let base_url;

  let num_items = 6;
  let first_item = 0;
  let items = [];
  let presentItems = [];

  async function readAll() {
    [items, widget_title] = await fetchById(widget_id);
    presentItems = items.slice(first_item, num_items);
  }
  
  function leftClick() {
    if (first_item >= num_items){
      first_item -= num_items;
      presentItems = items.slice(first_item, first_item+num_items);
    }
    else if (first_item > 0)
      first_item = 0
      presentItems = items.slice(first_item, first_item+num_items);
	}

  function rightClick() {
    if (first_item + num_items < items.length)
      first_item += num_items;
      presentItems = items.slice(first_item, first_item+num_items);
	}
</script>


<style>
  .top-container {
    display: grid;
    grid-template-columns: auto auto;
    margin-bottom: 25px;
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
    grid-template-columns: 5vw auto 5vw;
    align-item: center;
  } 

  .discovery-content {
    display: flex;
  }

  .arrow-left {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    position: absolute;
  }

  .arrow-right {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    right: 0;
    position: absolute;
  }

  .discovery-grid {
    display: flex;
    padding-right: 5vw;
    padding-left: 4vw;
  } 

  .discovery-grid-item{
    width: 15vw;
  }

  @media only screen and (max-width: 900px) {
    .discovery-grid-item{
      width: 22vw;
    }
    .last-item {
      display: none;
    }
  }
</style>

<div class="top-container">
  <div class="heading-item1">
    <span  class="title-itself">
      <h1 class="title is-4">{""}</h1>
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
    <a href="#/" class="left-arrow-link" on:click={leftClick}>
      <img alt="left arrow" src="/img/press-left.svg" class="">
    </a>
  </div>
  <div class="discovery-content">
    <!-- {#each items.slice(first_item, first_item+num_items) as item, i}
      <DiscoveryItem  {...item}></DiscoveryItem>
    {/each} -->
    <div class="discovery-grid">
      <div class="discovery-grid-item">
        {#if presentItems[0]}
          <DiscoveryItem {...presentItems[0]}></DiscoveryItem>
        {/if}
      </div>
      <div class="discovery-grid-item">
        {#if presentItems[1]}
          <DiscoveryItem {...presentItems[1]}></DiscoveryItem>
        {/if}
      </div>
      <div class="discovery-grid-item">
        {#if presentItems[2]}
          <DiscoveryItem {...presentItems[2]}></DiscoveryItem>
        {/if}
      </div>
      <div class="discovery-grid-item">
        {#if presentItems[3]}
          <DiscoveryItem {...presentItems[3]}></DiscoveryItem>
        {/if}
      </div>
      <div class="discovery-grid-item last-item">
        {#if presentItems[4]}
          <DiscoveryItem {...presentItems[4]}></DiscoveryItem>
        {/if}
      </div>
      <div class="discovery-grid-item last-item">
        {#if presentItems[5]}
          <DiscoveryItem {...presentItems[5]}></DiscoveryItem>
        {/if}
      </div>
    </div>
  </div>
  <div class="arrow-right">
    <a href="#/" class="right-arrow-link" on:click={rightClick}>
      <img alt="" src="/img/press-right.svg" class="">
    </a> 
  </div>
</div>

