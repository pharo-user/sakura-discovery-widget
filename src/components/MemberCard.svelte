<script>
  import { fetchById as fetchMemberById} from './FetchMembers';
  import {fetchById as fetchItemsById } from './FetchItems';
  import { onMount } from "svelte";

  import DiscoveryWidget from './DiscoveryWidget.svelte';
  import ProfileInfoSection from './ProfileInfoSection.svelte';

    
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

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.has('id') ? urlParams.get('id') : 1;
  const widgetKey = urlParams.get('widgetKey');

  onMount(readAll);
  
  let profileName = "Member Card";
  let profileImage = "img/member.jpg";
  let profileDetail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt, sem in condimentum scelerisque, mauris massa vehicula diam,";
  let websiteUrl = "member.com";

  async function readAll() {
    const {msg, data} = await fetchMemberById(id);
    if (msg === "found") {
      profileName = decode_i18n(data.name);
      profileImage = (data.logo !== undefined && data.logo !== null) ? "https://www.sakura.eco/media/" + data.logo : "img/member.jpg";
      profileDetail = (data.description !== undefined && data.description !== null) ? decode_i18n(data.description): "";
      websiteUrl = (data.url !== undefined && data.url !== null) ? data.url: "";
    }
  }

</script>

<style>
  .member-card {
    padding-bottom: 100px;
  }
  .the-name {
  }
  .the-name, .the-brand, .the-price {
  }
  
</style>
<div class="member-card">
  <ProfileInfoSection profileName={profileName} profileImage={profileImage} profileDetail={profileDetail} websiteUrl={websiteUrl}/>
  <DiscoveryWidget widget_id={widgetKey} widget_title=""></DiscoveryWidget>
</div>
