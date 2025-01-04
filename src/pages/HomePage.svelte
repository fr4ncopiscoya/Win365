<script>
  // @ts-nocheck
  import GameList from "../lib/components/Lists/GameList.svelte";
  import BannerCarrusel from "../lib/BannerCarrusel.svelte";
  import Configuration from "../config";
  import MenuCategoryPage from "../../src/lib/components/Menu/MenuCategoryPage.svelte";
  import util from "../js/util";



  import {
    t,
    ProviderList,
    DigtainWidget,
    Banners
  } from "u-library-sass";

  export let userState;
  export let user;
  export let onOpenGame;
  export let topGames = [];
  export let popGames = [];
  export let newGames = [];
  export let dropGames = [];
  export let otherGames = [];
  export let favGames
  export let active_view
  export let onCategoryChange;
  export let onOpenPromotions;
  export let onOpenProviders;
  export let loginModalOpen;

  const DEFAULT_CATEGORY = "slot";
  const conf = Configuration.getConfiguration();
  let assets = conf.ASSETS + "/Divertriunf/banners/"+"es";
  let imageName = "fuego.svg";
  
  let clientCode = conf.CLIENT_CODE;
  
  let banners = [
    { id: 1, src: `${conf.ASSETS}/Bets365/w_slot.png`, srcmb: `${conf.ASSETS}/Bets365/m_slot.png`, category:"slot"},
   // { id: 2, src: `${conf.ASSETS}/Coliseosport/banner_recharge_4.png`, srcmb: `${conf.ASSETS}/Coliseosport/banner_recharge_4_mb.png`, category:""},
  //  { id: 2, src: `${conf.ASSETS}/Ganawin/banner_ganawin.png`, srcmb: `${conf.ASSETS}/Ganawin/banner_ganawin_mb.png`, category:""},
   { id: 5, src: `${conf.ASSETS}/Bets365/w_horses.png`, srcmb: `${conf.ASSETS}/Bets365/m_horses.png`, category: "horses" },
   { id: 4, src: `${conf.ASSETS}/Bets365/w_sportbook.png`, srcmb: `${conf.ASSETS}/Bets365/m_sportbook.png`, category:"sportbook"},
  //  { id: 4, src: `${conf.ASSETS}/Bets365/w_sportbooklive.png`, srcmb: `${conf.ASSETS}/Bets365/m _sportbooklive.png`, category: "sportbooklive" },
   { id: 1, src: `${conf.ASSETS}/Bets365/w_virtual.png`, srcmb: `${conf.ASSETS}/Bets365/m_virtual.png`, category: "virtual" },
    { id: 5, src: `${conf.ASSETS}/Bets365/w_crash.png`, srcmb: `${conf.ASSETS}/Bets365/m_crash.png`, category:"crash"},
    { id: 6, src: `${conf.ASSETS}/generic_imgs/banners/prom1.png`, srcmb: `${conf.ASSETS}/generic_imgs/banners/prom1_mb.png`, category:"amigo_gaming"},
    { id: 7, src: `${conf.ASSETS}/generic_imgs/banners/prom2.png`, srcmb: `${conf.ASSETS}/generic_imgs/banners/prom2_mb.png`, category:"wild_gaming"},
    // { id: 8, src: `${conf.ASSETS}/Coliseosport/bn_m_slot.png`, srcmb: `${conf.ASSETS}/Coliseosport/bn_w_slot.png`, category:"slot"},
    { id: 9, src: `${conf.ASSETS}/Bets365/w_slotlive.png`, srcmb: `${conf.ASSETS}/Bets365/m_slotlive.png`, category:"slotlive"},
    // { id: 10, src: `${conf.ASSETS}/BetsAmerica/ar/banners/w_cashout.png`, srcmb: `${conf.ASSETS}/Latinsport21/bn_m_cashout.png`, category: "sportbook" },
    // { id: 10, src: `${assets}/w_promo_arg.png`, srcmb: `${assets}/m_promo_arg.png`, category: "slot" },
    // { id: 10, src: `${assets}/w_promo2_arg.png`, srcmb: `${assets}/m_promo2_arg.png`, category: "slot" },
  ];
  let banner_video = true;
  let category = "home";
  category = category=="home"?DEFAULT_CATEGORY:category;

  const openGame = (game) => {
    onOpenGame(game);
  };
  //10136.54
  let topSGames = [
    {  "id": 50726,  "gameid": "7546_ADM",  "provider": "adm",  "name": "Sweet Bonanza",  "description": "",  "type": "DROP",  "urlimage": ".gif",  "mode": "wb",  "brand": "Pragmatic Play",  "status": 1,  "position": 1,  "category": "slot",  "reg_date": "2024-06-22T15:02:11.781+00:00",  "currency": null,  "isNew": 0,  "min_bet": 0,  "max_bet": 0,  "jackpot": 0  },
    {  "id": 50564,"gameid": "7981_ADM","provider": "adm","name": "Joker Dream","description": "","type": "","urlimage": ".png","mode": "wb","brand": "Kajot","status": 1,"position": 1,"category": "slot","reg_date": "2022-11-08T23:21:46.761+00:00","currency": null,"isNew": 0,"min_bet": 0,"max_bet": 0,"jackpot": 0},
    {  "id": 50558,"gameid": "7984_ADM","provider": "adm","name": "Lucky Dragon","description": "","type": "","urlimage": ".png","mode": "wb","brand": "Kajot","status": 1,"position": 1,"category": "slot","reg_date": "2022-11-08T23:21:46.761+00:00","currency": null,"isNew": 0,"min_bet": 0,"max_bet": 0,"jackpot": 0},
    {  "id": 82270,"gameid": "8219_ADM","provider": "adm","name": "Dawn of The Incas","description": "","type": "","urlimage": ".png","mode": "wb","brand": "Rubyplay","status": 1,"position": 1,"category": "slot","reg_date": "2024-05-08T16:41:59.217+00:00","currency": null,"isNew": 0,"min_bet": 0,"max_bet": 0,"jackpot": 0},
    {  "id": 82232,"gameid": "8375_ADM","provider": "adm","name": "Feliz Dia De Los Muertos","description": "","type": "","urlimage": ".png","mode": "wb","brand": "Rubyplay","status": 1,"position": 1,"category": "slot","reg_date": "2024-05-08T16:41:59.217+00:00","currency": null,"isNew": 0,"min_bet": 0,"max_bet": 0,"jackpot": 0},
    {  "id": 52332,"gameid": "395_ADM","provider": "adm","name": "Plenty on Twenty","description": "","type": "","urlimage": ".png","mode": "wb","brand": "Novomatic","status": 1,"position": 1,"category": "slot","reg_date": "2022-11-08T23:31:52.558+00:00","currency": null,"isNew": 0,"min_bet": 0,"max_bet": 0,"jackpot": 0},
    {  "id": 50816,"gameid": "7004_ADM","provider": "adm","name": "Monkey Warrior","description": "","type": "","urlimage": ".png","mode": "wb","brand": "Pragmatic Play","status": 1,"position": 1,"category": "slot","reg_date": "2022-11-08T23:21:46.761+00:00","currency": null,"isNew": 0,"min_bet": 0,"max_bet": 0,"jackpot": 0},
    {  "id": 51528,"gameid": "4262_ADM","provider": "adm","name": "88 Fortunes","description": "","type": "CLAS","urlimage": ".gif","mode": "wb","brand": "Scientific Games","status": 1,"position": 100000,"category": "slot","reg_date": "2023-12-05T20:32:09.260+00:00","currency": null,"isNew": 0,"min_bet": 0,"max_bet": 0,"jackpot": 0},
    {  "id": 50814,"gameid": "7005_ADM","provider": "adm","name": "Happy Prosperous","description": "","type": "","urlimage": ".png","mode": "wb","brand": "Aristocrat","status": 1,"position": 1,"category": "slot","reg_date": "2022-11-08T23:21:46.761+00:00","currency": null,"isNew": 0,"min_bet": 0,"max_bet": 0,"jackpot": 0},
    {  "id": 50844,"gameid": "6986_ADM","provider": "adm","name": "Elephant King","description": "","type": "","urlimage": ".png","mode": "wb","brand": "Igt","status": 1,"position": 1,"category": "slot","reg_date": "2022-11-08T23:21:46.761+00:00","currency": null,"isNew": 0,"min_bet": 0,"max_bet": 0,"jackpot": 0},
    {  "id": 50828,"gameid": "6997_ADM","provider": "adm","name": "Caishens Cash","description": "","type": "","urlimage": ".png","mode": "wb","brand": "Pragmatic Play","status": 1,"position": 1,"category": "slot","reg_date": "2024-02-13T17:58:14.576+00:00","currency": null,"isNew": 0,"min_bet": 0,"max_bet": 0,"jackpot": 0},
    {  "id": 50860,"gameid": "6962_ADM","provider": "adm","name": "Sugar N Spice Hummin","description": "","type": "","urlimage": ".png","mode": "wb","brand": "Ainsworth","status": 1,"position": 1,"category": "slot","reg_date": "2022-11-08T23:21:46.761+00:00","currency": null,"isNew": 0,"min_bet": 0,"max_bet": 0,"jackpot": 0},

  ];
  let topSlotLive = [
    {    "id": 16979,    "gameid": "20749102_OTP",    "provider": "ot",    "name": "Roulette 2",    "description": "",    "type": "RLIV",    "urlimage": ".png",    "mode": "wb",    "brand": "OneTouch",    "status": 1,    "position": 1,    "category": "slot_live",    "reg_date": "2022-02-09T19:38:50.000+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 77021,    "gameid": "500_pokop",    "provider": "pkg",    "name": "Roulette",    "description": "",    "type": "RLIV",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pop Ok Gaming",    "status": 1,    "position": 0,    "category": "slot_live",    "reg_date": "2023-10-30T17:04:56.266+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 77023,    "gameid": "501_pokop",    "provider": "pkg",    "name": "Multi Fruit",    "description": "",    "type": "RLIV",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pop Ok Gaming",    "status": 1,    "position": 0,    "category": "slot_live",    "reg_date": "2024-01-03T21:50:46.941+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 77025,    "gameid": "502_pokop",    "provider": "pkg",    "name": "Diamond Fruits",    "description": "",    "type": "RLIV",    "urlimage": ".gif",    "mode": "wb",    "brand": "Pop Ok Gaming",    "status": 1,    "position": 0,    "category": "slot_live",    "reg_date": "2024-01-03T21:50:53.493+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 36251,    "gameid": "801",    "provider": "pg",    "name": "Mega Wheel",    "description": "",    "type": "MWLIV",    "urlimage": ".png",    "mode": "wb",    "brand": "Pragmatic Play",    "status": 1,    "position": 1,    "category": "slot_live",    "reg_date": "2021-02-04T04:35:18.000+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 36248,    "gameid": "701",    "provider": "pg",    "name": "Mega Sic Bo",    "description": "",    "type": "SICBO",    "urlimage": ".png",    "mode": "wb",    "brand": "Pragmatic Play",    "status": 1,    "position": 1,    "category": "slot_live",    "reg_date": "2021-02-04T04:34:52.000+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
    {    "id": 50521,    "gameid": "launch_auto_rol_01", "provider": "slbt", "name": "Auto Roulette", "description": "", "type": "RLIV", "urlimage": "", "mode": "wb", "brand": "Beter", "status": 1, "position": 0, "category": "slot_live", "reg_date": "2022-09-27T15:44:54.259+00:00", "currency": null, "isNew": 0, "min_bet": 0, "max_bet": 0, "jackpot": 0 },
    {    "id": 36280,    "gameid": "206",    "provider": "pg",    "name": "Roulette Macao",    "description": "",    "type": "RLIV",    "urlimage": ".png",    "mode": "wb",    "brand": "Pragmatic Play",    "status": 1,    "position": 1,    "category": "slot_live",    "reg_date": "2021-02-04T04:34:38.000+00:00",    "currency": null,    "isNew": 0,    "min_bet": 0,    "max_bet": 0,    "jackpot": 0},
  ];

  let topCrashgames = [
    {  "id": 76893,  "gameid": "1320",  "provider": "pg",  "name": "Big Bass Crash",  "description": "New game",  "type": "FAST",  "urlimage": null,  "mode": "wb",  "brand": "Pragmatic Play",  "status": 1,  "position": 1,  "category": "crash",  "reg_date": "2023-11-11T01:00:25.615+00:00",  "currency": null,  "isNew": 0,  "min_bet": 0,  "max_bet": 0,  "jackpot": 0},
    { "id": 77029, "gameid": "601_pokop", "provider": "pkg", "name": "Plinko", "description": "", "type": "CLAS", "urlimage": "https://st.pokgaming.com/gameThumbnails/601.jpg", "mode": "wb", "brand": "Pop Ok Gaming", "status": 1, "position": 0, "category": "slot", "reg_date": "2023-10-30T17:08:56.453+00:00", "currency": null, "isNew": 0, "min_bet": 0, "max_bet": 0, "jackpot": 0 },
    { "id": 50474, "gameid": "1301", "provider": "pg", "name": "Spaceman", "description": "", "type": "FAST", "urlimage": "img/pg/pg_401.png", "mode": "wb", "brand": "Pragmatic Play", "status": 1, "position": 200010, "category": "crash", "reg_date": "2023-11-11T00:56:59.848+00:00", "currency": null, "isNew": 0, "min_bet": 0, "max_bet": 0, "jackpot": 0 },
    { "id": 77620, "gameid": "614_pokop", "provider": "pkg", "name": "Ninja Fruit Cubes", "description": "New game", "type": "CLAS", "urlimage": null, "mode": "wb", "brand": "Pop Ok Gaming", "status": 1, "position": 1, "category": "slot", "reg_date": "2024-01-13T19:31:48.135+00:00", "currency": null, "isNew": 0, "min_bet": 0, "max_bet": 0, "jackpot": 0 },

  ];
  const topProviders = ["Habanero","Rubyplay","Pragmatic Play","Endorphina","tvBet"];


  let mobile = window.innerWidth <= 1023;

  let olympus = {  "id": 50626,  "gameid": "7760_ADM",  "provider": "adm",  "name": "Gates of Olympus",  "description": "",  "type": "",  "urlimage": ".png",  "mode": "wb",  "brand": "Pragmatic Play",  "status": 1,  "position": 1,  "category": "slot",  "reg_date": "2024-02-13T18:24:49.018+00:00",  "currency": null,  "isNew": 0,  "min_bet": 0,  "max_bet": 0,  "jackpot": 0};
 let aviatrix = {  "id": 54005,  "gameid": "5213_DW",  "provider": "dw",  "name": "American Roulette 3D",  "description": "",  "type": "CLAS",  "urlimage": "",  "mode": "wb",  "brand": "Evo Play",  "status": 1,  "position": 0,  "category": "slot",  "reg_date": "2023-05-29T10:22:02.246+00:00",  "currency": null,  "isNew": 0,  "min_bet": 0,  "max_bet": 0,  "jackpot": 0}
  let potgold = {  "id": 50742,  "gameid": "7057_ADM",  "provider": "adm",  "name": "9 Pots of Gold",  "description": "",  "type": "CLAS",  "urlimage": "",  "mode": "wb",  "brand": "Microgaming",  "status": 1,  "position": 100000,  "category": "slot",  "reg_date": "2022-11-08T23:21:46.761+00:00",  "currency": null,  "isNew": 0,  "min_bet": 0,  "max_bet": 0,  "jackpot": 0};
  
  
  let virtual1 = {  "id": 34628,  "gameid": "10189",  "provider": "gr",  "name": "Champions - ondemand",  "description": "",  "type": "VIRT",  "urlimage": "img/xpressgaming/10189.jpg",  "mode": "wb",  "brand": "GoldenRace",  "status": 1,  "position": 3,  "category": "virtual",  "reg_date": null,  "currency": null,  "isNew": 0,  "min_bet": 0,  "max_bet": 0,  "jackpot": 0};
let virtual2 = {  "id": 34637,  "gameid": "10174",  "provider": "gr",  "name": "Greyhounds",  "description": "",  "type": "VIRT",  "urlimage": "img/xpressgaming/10174.jpg",  "mode": "wb",  "brand": "GoldenRace",  "status": 1,  "position": 3,  "category": "virtual",  "reg_date": null,  "currency": null,  "isNew": 0,  "min_bet": 0,  "max_bet": 0,  "jackpot": 0};
let virtual3 = {  "id": 34623,  "gameid": "10206",  "provider": "gr",  "name": "Horse 6 - ondemand",  "description": "",  "type": "VIRT",  "urlimage": "img/xpressgaming/10206.jpg",  "mode": "wb",  "brand": "GoldenRace",  "status": 1,  "position": 3,  "category": "virtual",  "reg_date": null,  "currency": null,  "isNew": 0,  "min_bet": 0,  "max_bet": 0,  "jackpot": 0};
let virtual4 = {  "id": 34707,  "gameid": "10193",  "provider": "gr",  "name": "Spin2Win (Am) - ondemand",  "description": "",  "type": "VIRT",  "urlimage": "img/xpressgaming/10286.jpg",  "mode": "wb",  "brand": "GoldenRace",  "status": 1,  "position": 3,  "category": "virtual",  "reg_date": "2020-10-27T20:49:37.000+00:00",  "currency": null,  "isNew": 0,  "min_bet": 0,  "max_bet": 0,  "jackpot": 0};
let virtual5 = {  "id": 34640,  "gameid": "10163",  "provider": "gr",  "name": "World Cup",  "description": "",  "type": "VIRT",  "urlimage": "img/xpressgaming/10163.jpg",  "mode": "wb",  "brand": "GoldenRace",  "status": 1,  "position": 3,  "category": "virtual",  "reg_date": null,  "currency": null,  "isNew": 0,  "min_bet": 0,  "max_bet": 0,  "jackpot": 0};

let platform = "Win365";
</script>

<div class="home-page">
  <div class="Ganawin">
    <Banners bind:platform {onCategoryChange}/>
   </div>
  <!-- <BannerCarrusel bind:banners bind:banner_video bind:onCategoryChange/> -->
  <MenuCategoryPage bind:active_view bind:onCategoryChange   {onOpenPromotions} />
     
  <div class="cat-top-games">
  <div class="Ganawin" style="
  background: transparent;
">
    <ProviderList {onOpenProviders} {topProviders} t={$t}/>
  </div>
  <DigtainWidget
  {user}
  bind:loginModalOpen
  {clientCode}
  {onCategoryChange}
/>

   <div style="position:relative;cursor:pointer;">
      {#if mobile}
      <div class="no-btn" on:click={() => onOpenProviders({code:"DROPS & WINS",name:"DROPS & WINS"})}>
        <img style="width: 100%;padding: 0 1rem;" src="https://assets.apiusoft.com/Ganawin/dp_mb.webp" alt="" loading="lazy" />
      </div>
      {:else}
      <div class="no-btn" on:click={() => onOpenProviders({code:"DROPS & WINS",name:"DROPS & WINS"})}>
        <img style="width: 100%;" src="https://assets.apiusoft.com/Ganawin/dp_pc.webp" alt="" loading="lazy" />
      </div>
    {/if}
   </div>
   <div class="Ganawin">
      <div class="providerlist">
        <div class="providerlist__provider">
                <button class="providerlist__slide" on:click={onOpenGame(potgold)}>
                    <img class="providerlist__img" src="https://assets.apiusoft.com/Ganawin/game_5.webp">
                    <div class="providerlist__parallax">
                        <div class="providerlist__playnow">Juega ahora</div>
                    </div>
                </button>
                <button class="providerlist__slide"  on:click={onOpenGame(aviatrix)} >
                    <img class="providerlist__img" src="https://assets.apiusoft.com/BetsAmerica/game_6.webp">
                    <div class="providerlist__parallax">
                        <div class="providerlist__playnow">Juega ahora</div>
                    </div>
                </button>
                <button class="providerlist__slide" on:click={() => onOpenProviders({code:"JUEGOS POPULARES",name:"JUEGOS POPULARES"})}>
                    <img class="providerlist__img" src="https://assets.apiusoft.com/Ganawin/game_pop.webp">
                    <div class="providerlist__parallax">
                        <div class="providerlist__playnow">Juega ahora</div>
                    </div>
                </button>
                <button class="providerlist__slide" on:click={onOpenGame(olympus)}  >
                    <img class="providerlist__img" src="https://assets.apiusoft.com/Ganawin/game_3.webp">
                    <div class="providerlist__parallax">
                        <div class="providerlist__playnow">Juega ahora</div>
                    </div>
                </button>
                <button class="providerlist__slide" on:click={onCategoryChange("horses")} >
                    <img class="providerlist__img" src="https://assets.apiusoft.com/Ganawin/game_4.webp">
                    <div class="providerlist__parallax">
                        <div class="providerlist__playnow">Juega ahora</div>
                    </div>
                </button>
        </div>
    </div>
   </div>
  <div class="helppe_2">
    <img on:click={() => onOpenProviders({code:"Amigo Gaming",name:"Amigo Gaming"})} width="100%" src="https://assets.apiusoft.com/us_img_brands/Amigo Gaming.png" alt="">
    <img on:click={() => onOpenProviders({code:"Wazdan",name:"Wazdan"})} width="100%" src="https://assets.apiusoft.com/us_img_brands/Wazdan.png" alt="">
    <img on:click={() => onOpenProviders({code:"Pop Ok Gaming",name:"Pop Ok Gaming"})} width="100%" src="https://assets.apiusoft.com/us_img_brands/Pop Ok Gaming.png" alt="">
    <img on:click={() => onOpenProviders({code:"Rubyplay",name:"Rubyplay"})} width="100%" src="https://assets.apiusoft.com/us_img_brands/Ruby Play.png" alt="">
    <img on:click={() => onOpenProviders({code:"Playngo",name:"Playngo"})} width="100%" src="https://assets.apiusoft.com/us_img_brands/Playngo.png" alt="">
    <img on:click={() => onOpenProviders({code:"Tom Horn Gaming",name:"Tom Horn Gaming"})} width="100%" src="https://assets.apiusoft.com/us_img_brands/Tom Horn Gaming.png" alt="">
  </div>
  <div class="Ganawin">
    <div class="providerlist">
      <div class="providerlist__provider">
              <button class="providerlist__slide" on:click={onOpenGame(virtual1)}>
                  <img class="providerlist__img" src="https://assets.apiusoft.com/generic_imgs/virtuals/Champions - ondemand.webp">
                  <div class="providerlist__parallax">
                      <div class="providerlist__playnow">Juega ahora</div>
                  </div>
              </button>
              <button class="providerlist__slide"  on:click={onOpenGame(virtual2)} >
                  <img class="providerlist__img" src="https://assets.apiusoft.com/generic_imgs/virtuals/Greyhounds.webp">
                  <div class="providerlist__parallax">
                      <div class="providerlist__playnow">Juega ahora</div>
                  </div>
              </button>
              <button class="providerlist__slide" on:click={onOpenGame(virtual3)}>
                  <img class="providerlist__img" src="https://assets.apiusoft.com/generic_imgs/virtuals/Horse 6 - ondemand.webp">
                  <div class="providerlist__parallax">
                      <div class="providerlist__playnow">Juega ahora</div>
                  </div>
              </button>
              <button class="providerlist__slide" on:click={onOpenGame(virtual4)}  >
                  <img class="providerlist__img" src="https://assets.apiusoft.com/generic_imgs/virtuals/Spin2Win (Am) - ondemand.webp">
                  <div class="providerlist__parallax">
                      <div class="providerlist__playnow">Juega ahora</div>
                  </div>
              </button>
              <button class="providerlist__slide" on:click={onOpenGame(virtual5)} >
                  <img class="providerlist__img" src="https://assets.apiusoft.com/generic_imgs/virtuals/World Cup.webp">
                  <div class="providerlist__parallax">
                      <div class="providerlist__playnow">Juega ahora</div>
                  </div>
              </button>
      </div>
    </div>
  </div>
</div>
    {#if userState !== "logout"}
      <GameList id="favs"
        bind:category
        bind:userState
        title= "FAVORITOS"
        games={favGames}
        bind:favGames
        onOpenGame={(game) => openGame(game)}
        bind:user
      />
    {/if}
    
    <GameList
      bind:category
      section="TOP"
      bind:userState
      bind:user
      prefix="Casino"
      title=""
      games={topSGames}
      bind:favGames
      onOpenGame={(game) => openGame(game)}
    />


    <!-- <GameList
    bind:category
    section="TOP"
    bind:userState
    bind:user
    prefix="Crash Games"
    title=""
    games={topCrashgames}
    bind:favGames
    onOpenGame={(game) => openGame(game)}
  /> -->
    <GameList
    bind:category
    section="TOP"
    bind:userState
    bind:user
    prefix="Casino en Vivo"
    title=""
    games={topSlotLive}
    bind:favGames
    onOpenGame={(game) => openGame(game)}
  />
  <!--div style="padding-bottom: 5rem;"></div-->
    <!--GameList
      bind:category
      section="POP"
      bind:userState
      bind:user
      prefix="Juegos"
      title="Populares"
      games={popGames}
      bind:favGames
      onOpenGame={(game) => openGame(game)}
    />
    <GameList
      bind:category
      section="NEW"
      bind:userState
      bind:user
      prefix="Juegos"
      title="Nuevos"
      games={newGames}
      bind:favGames
      onOpenGame={(game) => openGame(game)}
    />
    <GameList
      bind:category
      section="DROP"
      bind:userState
      bind:user
      prefix="Drops"
      title="& Wins"
      games={dropGames}
      bind:favGames
      onOpenGame={(game) => openGame(game)}
    />
    <GameList
      bind:category
      section="CLAS"
      bind:userState
      bind:user
      prefix="Otros"
      title="Juegos"
      games={otherGames}
      bind:favGames
      onOpenGame={(game) => openGame(game)}
    /-->
  </div>

<style>

  .helppe_2{
    position: relative;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    padding: 2rem 0;
    gap: 1.5rem;
  }
  @media (max-width: 1023px){
    .helppe_2{
      
      grid-template-columns: repeat(2,1fr);
      padding: 2rem;
    }
  }
  .helppe_2 img{
    cursor: pointer;
    background: #414141;
    padding: 1rem;
    border-radius: 0.5rem;
  }

.cat-top-games {
    padding-left: 20px;
    padding-right: 20px;
}

  @media only screen and (min-width: 1800px) {

.cat-top-games{
  padding-left: 12rem;
  padding-right: 12rem;
  }
}

@media only screen and (max-width: 1023px) {
  .cat-top-games {
    padding-left: 0px;
    padding-right: 0px;
}
}
  .container_top{
    
  }
  .number_top{
    /*position: absolute;*/
  }
  .slideddd{
    position: relative;
    width: 90%;
    overflow: auto;
    margin: 0 auto;
  }
  .test_ing{
    width: 350%;
    margin: 2rem auto;
    height: 250px;
    display: flex;
  }
  .test_ing img{
    width: 0px;
    flex-grow: 1;
    object-fit: cover;
    opacity: 0.8;
    /*transition: .5s ease;*/
    
    animation: slideBack .5s linear normal forwards;
  }
  .test_ing img:hover{
    cursor: pointer;
    /*width: 300px;*/
    opacity: 1;
    filter: contrast(120%);
  }

 
    @keyframes slideOut {
        0% {
            transform:perspective(100rem) rotateY(-40deg) translateZ(0);
            z-index: var(--z)
        }

        30% {
            transform: perspective(100rem) rotateY(-40deg) translate3d(5rem,0,0);
            z-index: var(--z)
        }

        to {
            transform: perspective(100rem) rotateY(0deg) translate3d(-5rem,0,10rem);
            z-index: 100
        }
    }

    @keyframes slideBack {
        0% {
            transform: perspective(100rem) rotateY(0deg) translate3d(-5rem,0,10rem);
            z-index: 100
        }

        60% {
            transform: perspective(100rem) rotateY(-40deg) translate3d(5rem,0,0);
            z-index: var(--z)
        }

        to {
            transform: perspective(100rem) rotateY(-40deg) translateZ(0);
            z-index: var(--z)
        }
    }

    .TrendingListWrapper.GamesList.MsnRow .SlideOut {
        animation: slideOut .5s linear normal forwards
    }

    .TrendingListWrapper.GamesList.MsnRow .SlideBack {
        /* animation:slideBack .5s linear normal forwards; */
    }
    .cat-top-games {
      position: relative;
    z-index: 2;
    }


</style>
