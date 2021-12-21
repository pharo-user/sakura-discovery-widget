<script>
export let profileName;
export let profileImage;
export let profileDetail;
export let websiteUrl;
export let membersCount;
export let payingRate;
export let mailAddress;
</script>

<style>
  .profile-container {
    padding-left: 45px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .profile-data-container {
    display: flex;
    flex-direction: row;
  }
  .profile-image {
    width: 155px;
    height: 165px;
    margin-left: 20px;
  }
  .profile-data {
    padding-top: 15px;
    padding-left: 30px;
    line-height: 32px;
  }
  .site-link {
    text-decoration: none;
  }
  .site-link:hover {
    color: #111;
    font-weight: 500;
  }
  .mail {
    text-decoration: none;
    font-size: 30px;
    color: inherit;
    margin-left: 8px;
  }
  @media (max-width: 900px) {
    .profile-data-container {
      flex-direction: column;
    }
    .profile-data {
      text-align: center;
      padding-left: 0px;
    }
    .profile-image {
      margin: auto;
    }
    .profile-name {
      text-align: center;
      font-size: 1.7rem;
    }
    .mail {
      margin-left: 0px;
    }
    .profile-container {
      padding-left: 0px;
    }
  }
</style>

<div class="profile-container">
   <h1 class="title is-4 profile-name">{profileName}</h1>
   <div class="profile-data-container">
     <img src={profileImage} alt={profileName} class="profile-image"/>
     <div class="profile-data">
       <h2>{profileDetail}</h2>
       {#if websiteUrl}
         <a href={"https://"+websiteUrl} class="site-link" target="_blank">{websiteUrl}</a>
       {/if}
       {#if membersCount}
         <h2>MEMBERS: {membersCount}</h2>
       {/if}
       {#if payingRate}
         <h2>RATE: {payingRate}</h2>
       {/if}
       {#if mailAddress}
         <a href={"mailto:"+mailAddress} class="mail"><i class="fa fa-envelope" aria-hidden="true"></i></a>
       {/if}
     </div>
   </div>
</div>