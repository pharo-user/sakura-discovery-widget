<script>
  import { fetchById } from './FetchMembers';
  import { onMount } from "svelte";

  import DiscoveryWidget from './DiscoveryWidget.svelte';
  import ProfileInfoSection from './ProfileInfoSection.svelte';
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.has('id') ? urlParams.get('id') : "3c9988cd1b790d009ea1ecd30fbeedc5";

  onMount(readAll);

  export let member_id;
  let profileName = "Member Card";
  let profileImage = "img/member.jpg";
  let profileDetail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt, sem in condimentum scelerisque, mauris massa vehicula diam,";
  let websiteUrl = "member.com";

  async function readAll() {
    [name, photo, detail, site_url ] = await fetchById(member_id);
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
  <DiscoveryWidget widget_id={id} widget_title="test"></DiscoveryWidget>
</div>
