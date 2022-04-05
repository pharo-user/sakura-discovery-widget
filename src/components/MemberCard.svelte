<script>
  import { fetchById as fetchMemberById} from './FetchMembers';
  import {fetchById as fetchItemsById } from './FetchItems';
  import { onMount } from "svelte";

  import DiscoveryWidget from './DiscoveryWidget.svelte';
  import ProfileInfoSection from './ProfileInfoSection.svelte';

  export let base_url;
  export let id;
  
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

  onMount(readAll);
  
  let profileName = "Member Card";
  let profileImage = "member.jpg";
  let profileDetail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt, sem in condimentum scelerisque, mauris massa vehicula diam,";
  let websiteUrl = "member.com";
  let widgetKey = null;

  async function readAll() {
    const {msg, data} = await fetchMemberById(base_url, id);
    if (msg === "found") {
      profileName = decode_i18n(data.name);
      profileImage = (data.logo !== undefined && data.logo !== null) ? "https://www.sakura.eco/media/" + data.logo : "member.jpg";
      profileDetail = (data.description !== undefined && data.description !== null) ? decode_i18n(data.description): "";
      websiteUrl = (data.url !== undefined && data.url !== null) ? data.url: "";
      widgetKey = data.widgetKey;
    }
  }

</script>

<style>
  .member-card {
  }
  .the-name {
  }
  .the-name, .the-brand, .the-price {
  }
  
</style>
<div class="member-card">
  <ProfileInfoSection profileName={profileName} profileImage={profileImage} profileDetail={profileDetail} websiteUrl={websiteUrl}/>
  {#if widgetKey}
    <DiscoveryWidget widget_id={id} mode={1} base_url={base_url} widget_title={""} use_swiper_widget={true}></DiscoveryWidget>
  {/if}
</div>
