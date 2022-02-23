<script>
    import { fetchById } from './FetchNetworks';
    import { onMount } from "svelte";
    import DiscoveryWidget from './DiscoveryWidget.svelte';
    import ProfileInfoSection from './ProfileInfoSection.svelte';
 
    const urlParams = new URLSearchParams(window.location.search);
    const networkId = urlParams.get('id');

    export let base_url;

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

    async function readAll() {
      const {msg, data} = await fetchById(base_url, networkId);
      if (msg == "found") {
        networkName = (data.name !== undefined) ? decode_i18n(data.name) : "NETWORK NAMEsdoi";
        console.log(networkName);
        networkLogo = (data.logo !== undefined && data.logo !== null) ? "https://www.sakura.eco/media/" + data.logo : "img/network.png";
        description = (data.description !== undefined && data.description !== null) ? decode_i18n(data.description) : "";
        membersCount = data.members;
        mailAddress = (data.email !== undefined && data.email !== null) ? data.email: "";
        widgetKey = data.widgetKey;
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
   {#if widgetKey}
    <DiscoveryWidget widget_id={widgetKey + "/" + networkId} widget_title={""}></DiscoveryWidget>
   {/if}
</div>
  
  
