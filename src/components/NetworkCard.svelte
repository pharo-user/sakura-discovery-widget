<script>
    import { fetchById } from './FetchNetworks';
    import { onMount } from "svelte";
    import DiscoveryWidget from './DiscoveryWidget.svelte';
    import ProfileInfoSection from './ProfileInfoSection.svelte';
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.has('id') ? urlParams.get('id') : "3c9988cd1b790d009ea1ecd30fbeedc5";
  
    onMount(readAll);
  
    export let company_id = 1;
    let networkName = "NETWORK NAME";
    let networkLogo = "img/network.png";
    let description = "Duis a eleifend nibh, eu tempor mauris. Etiam a velit pretium, ultrices leo sit amet, tincidunt diam. Vestibulum quis";
    let membersCount = 15;
    let payingRate = 0;
    let mailAddress = "helloworld@hello.com";
  
    async function readAll() {
      const {msg, data} = await fetchById(company_id);
      if (msg === "found") {
        networkName = (data.name !== undefined) ? data.name[Object.keys(data.name)[0]].toUpperCase() : "NETWORK NAME";
        networkLogo = (data.logo !== undefined && data.logo !== null) ? data.logo[Object.keys(data.logo)[0]] : "img/network.png";
        description = (data.description !== undefined && data.description !== null) ? data.description[Object.keys(data.description)[0]] : "";
        membersCount = 15;
        mailAddress = (data.email !== undefined && data.email !== null) ? data.email: "";
      }
    }
  
</script>
  
<style>
  .network-card {
    padding-bottom: 100px;
  }
  .the-name {
  }
  .the-name, .the-brand, .the-price {
  }
</style>

<div class="network-card">
  <ProfileInfoSection
    profileName={networkName} 
    profileImage={networkLogo} 
    profileDetail={description} 
    membersCount={membersCount}
    payingRate={payingRate}
    mailAddress={mailAddress}
  />
  <DiscoveryWidget widget_id={id} widget_title="test"></DiscoveryWidget>
</div>
  
  