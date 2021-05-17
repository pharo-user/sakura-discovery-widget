<script>
  import DiscoveryItem from './DiscoveryItem.svelte';
  export let widget_id;

  let items=[
    {
      picture_url: '/media/discovery-products/c1cc96b7-f67d-0d00-bd7d-da3103970a22..jpg',
      item_url: 'https://confettibird.no/product/confetti-mama-icy-blue/',
      item_title: 'Made for you, inspired by confettibirds.',
      price: '2200',
      name: 'Confetti Mama -  Icy Blue',
      brand: 'Confettibird',
      currency: 'NOK'
    },
    {
      picture_url: '',
      item_url: '/media/discovery-products/40ce0b28-ce7a-0d00-b0d7-fb940e6fa363.png',
      item_title: 'Confettibird is a Norwegian clothing brand inspired by the simple nordic expression and the chilled bohemian look. The first collection launched 12th of April 2018, and was a tribute to nine beautiful souls – these are, and will always be confettibirds. And so the journey continues…..',
      price: '',
      name: 'CAMILLA VOLDEN',
      brand: 'Confettibird',
      currency: ''
    }, {
      picture_url: '',
      item_url: '',
      item_title: '',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url: '',
      item_url: '',
      item_title: '',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }, {
      picture_url: '',
      item_url: '',
      item_title: '',
      price: '',
      name: '',
      brand: '',
      currency: ''
    }
  ];
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
    <div class="networked-by">
      <span>Networked by</span>
      <a class="sakura-link" href="http://sakura.eco"></a>
    </div>
  </div>
  <div class="the-pre-wrapper">
    <a class="press-left"></a>
    <div class="wrapper">
      <div class="the-items">
        {#each items as item, i}
          <DiscoveryItem  {...item}></DiscoveryItem>
        {/each}
      </div>
    </div>
    <a class="press-right"></a>
  </div>
</div>
