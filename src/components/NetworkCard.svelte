<script>
    import { fetchById } from './FetchNetworks';
    import { onMount } from "svelte";
    import DiscoveryWidget from './DiscoveryWidget.svelte';
    import ProfileInfoSection from './ProfileInfoSection.svelte';
 
    export let base_url;
    export let id;

    onMount(readAll);
  
    function decode_i18n(d) {
    if (typeof d == "string")
      return d;
    if (d == [])
      return "";
    if (Array.isArray(d) && d.length > 0)
      return d[0];
    if (typeof d == "object")
      return d.en;
    return "";
    }

    let networkName = "NETWORK NAME";
    let networkLogo = "img/network.png";
    let description = "Duis a eleifend nibh, eu tempor mauris. Etiam a velit pretium, ultrices leo sit amet, tincidunt diam. Vestibulum quis";
    let membersCount = 15;
    let payingRate = 0; 
    let mailAddress = "helloworld@hello.com";
    let widgetKey = null;
    let membersRates = [["Alfreds Futterkiskte", 234], ["Centro comercial Moctezuma", 80]];

    async function readAll() {
      const {msg, data} = await fetchById(base_url, id);
      if (msg == "found") {
        networkName = (data.name !== undefined) ? decode_i18n(data.name) : "NETWORK NAMEsdoi";
        console.log(networkName);
        networkLogo = (data.logo !== undefined && data.logo !== null) ? "https://www.sakura.eco/media/" + data.logo : "img/network.png";
        description = (data.description !== undefined && data.description !== null) ? decode_i18n(data.description) : "";
        membersCount = data.members;
        mailAddress = (data.email !== undefined && data.email !== null) ? data.email: "";
        widgetKey = data.widgetKey;
        membersRates = (data.shops !== undefined && data.shops !== null) ? data.shops : membersRates;
      }
    }
    
</script>
  
<style>
  .network-card {
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
    membersRates={membersRates}
  />
   {#if widgetKey}
    <DiscoveryWidget base_url={base_url} mode={2} widget_id={id} widget_title={""}></DiscoveryWidget>
   {/if}
</div>
  
  
