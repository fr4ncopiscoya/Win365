<script>
  // @ts-nocheck
  import GameList from "../lib/components/Lists/GameList.svelte";
  import BannerCarrusel from "../lib/BannerCarrusel.svelte";
  import backend from "../server.js";
  import Configuration from "../config";
  import MenuCategoryPage from "../lib/components/Menu/MenuCategoryPage.svelte";
  import util from "../js/util";
  import { onMount } from "svelte";

  export let userState;
  export let user;
  export let onOpenGame;
  export let active_view
  export let favGames;
  export let autoSelected;
  export let showLoginModal;

  let brandSelected;
  let brandGames;
  let sectionActive = "";
  let brandFilter;
  let crashGames = [];
  let category = 'crash'
  const conf = Configuration.getConfiguration();
  let banners = [
    { id: 1, src: `${conf.ASSETS}/Win365/banners/w_crash.png`, srcmb: `${conf.ASSETS}/Win365/banners/mb_crash.png`}
  ];
  

  onMount(()=>{
    if (autoSelected && autoSelected.filter == "brand") {
      brandSelected = autoSelected.brand;
      activeSection(autoSelected.brand);
    }
  });

  

  const activeSection = async (brand)=>{
    if (!brand) {
      return;
    }
    if (brand.code == "brands") {
      sectionActive = "";
      return;
    }
    brandSelected = brand;
    brandFilter = { brand: brand.code };
    const data = await backend.getGameList(category, brandFilter);
    brandGames = data;
    sectionActive = "brand";
  } 
  const getCrashGames = async () => {
    let data = await backend.getGameList("crash", "FAST");
    crashGames = data;
  };

  getCrashGames();

  const onCategoryChange=(cat)=>{
    if(util.categoryAllowedChange(cat, userState)) {showLoginModal = true; return;}
    active_view=cat
    util.setUrlPage(active_view)
  }

</script>

<div class="chash-page">
  <BannerCarrusel bind:banners/>
  <MenuCategoryPage bind:active_view onCategoryChange={onCategoryChange} />

  {#if sectionActive == ""}
    <GameList
      bind:category
      section="FAST"
      bind:userState
      bind:user
      prefix="Crash"
      title="Games"
      games={crashGames}
      bind:favGames
      onOpenGame={(game) => onOpenGame(game)}
    />
    {:else if sectionActive == "brand"}
    <GameList
      bind:category
      bind:section={brandFilter}
      bind:userState
      title={brandSelected.name.toUpperCase()}
      games={brandGames}
      bind:favGames
       {onOpenGame}          
      bind:user
    />
  {/if}

</div>

<style>
  @media only screen and (max-width: 1200px)  {
    *{
      background: #181824;
    }
  }
  @media only screen and (max-width: 1200px) and (orientation: landscape) {
    *{
      background: #181824;
    }
  }
  @media only screen and (min-width: 1200px) {
    
  }
</style>
