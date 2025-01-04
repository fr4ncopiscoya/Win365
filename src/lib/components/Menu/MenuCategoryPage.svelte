<script>
  import PromotionsPage from "../../../pages/PromotionsPage.svelte";
  import Configuration from "../../../config";
  import ModalPromotions from "../Modal/ModalPromotions.svelte";

  export let onCategoryChange;
  export let active_view;
  export let onOpenPromotions;
  export let showSportbookOptions;

  let showModalPromotion=false;

  // @ts-ignore
  const onShowModalPromotion = () => {
    showModalPromotion = true;
  };

  const conf = Configuration.getConfiguration();
  let modfBtn = false;
  if(active_view == 'sportbook' || active_view == 'horses' || active_view == 'esports' || active_view == 'sportbooklive' || active_view == 'conditions'){
    modfBtn = true;
  }
  function selectOption(option) {
    showSportbookOptions = option;
    onCategoryChange("sportbook",option);
 
  }
  function selectOption2(option) {
    showSportbookOptions = option;
    onCategoryChange("sportbooklive",option);
  
  }

  const url = window.location.hostname;
  const subdomain = url.split('.').slice(0, -2).join('.');

</script>

<div class="container {modfBtn== true?'c-btn':''}" id="navbar-container">
  <button class="li-game {active_view=='home'?'u-category-select':''}" on:click={  ()=>onCategoryChange("home") }>
    <img src="https://assets.apiusoft.com/Bets365/home.png" alt="">
  </button>
 
    
    <!-- {#if conf.CLIENT_CODE != 'BPEN'} -->
     

      {#if conf.country == "PE"}
      <button  on:click={() => selectOption({gameid: conf.CLIENT_CODE == 'BPEN' ? "betsw3_2024": "8042022_digitain"})} class="li-game {active_view=='sportbook'?'u-category-select':''}" >
        <img src="https://assets.apiusoft.com/Bets365/sportbook.png" alt="">
      </button>
      <button on:click={() => selectOption2({gameid:conf.CLIENT_CODE == 'BPEN' ? "betsw3_2024": "8042022_digitain"})}  class="li-game in-d {active_view=='sportbooklive'?'u-category-select':''}">
          <img src="https://assets.apiusoft.com/Bets365/sportbooklive.png" alt="">
        </button>
        {:else}
        <button on:click={() => selectOption2({gameid:conf.CLIENT_CODE == 'BPEN' ? "betsw3_2024": "8042022_digitain"})}  class="li-game in-d {active_view=='sportbooklive'?'u-category-select':''}">
          <img src="https://assets.apiusoft.com/Bets365/sportbook.png" alt="">
        </button>
        {/if}
    <!-- {/if} -->

  <button on:click={onCategoryChange("horses")} class="li-game {active_view=='horses'?'u-category-select':''}"> 
    <img src="https://assets.apiusoft.com/Bets365/horses.png" alt="">
  </button>
  <!--button on:click={onCategoryChange("esports")} class="li-game {active_view=='esports'?'u-category-select':''}"> 
    <img class="u-menubar-icon" src="{conf.ASSETS}/golden/Esports.svg" alt="">
    <span  class="u-span-li-games u-span-sport" >E-Sports</span> 
  </button-->
  <button on:click={onCategoryChange("slot")} class="li-game {active_view=='slot'?'u-category-select':''}"> 
    <img src="https://assets.apiusoft.com/Bets365/slot.png" alt="">
  </button>
  <button on:click={onCategoryChange("slotlive")} class="li-game {active_view=='slotlive'?'u-category-select':''}">
    <img src="https://assets.apiusoft.com/Bets365/slotlive.png" alt="">
  </button>
  <button on:click={onCategoryChange("crash")} class= "li-game {active_view=='crash'?'u-category-select':''}">
    <img src="https://assets.apiusoft.com/Bets365/crash.png" alt="">
  </button>
  <button on:click={onCategoryChange("scratch")} class="li-game {active_view=='scratch'?'u-category-select':''}">
    <img src="https://assets.apiusoft.com/Bets365/scratch.png" alt="">
  </button>
  <button on:click={onCategoryChange("virtual")} class="li-game {active_view=='virtual'?'u-category-select':''}">
    <img src="https://assets.apiusoft.com/Bets365/virtual.png" alt="">
  </button>
  <button on:click={onCategoryChange("providers")} class="li-game {active_view=='providers'?'u-category-select':''}"> 
    <img src="https://assets.apiusoft.com/Bets365/providers.png" alt="">
  </button>
  <!-- 
 

  button class="{active_view=='promotions'?'u-category-select':''}"  on:click={onShowModalPromotion}>
    <img class="u-menubar-icon" src="{conf.ASSETS}/golden/Promociones.svg" alt=""> 
    <span >Promociones </span> 
  </button-->
</div>

{#if modfBtn == false}
<div class="hero"> 
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
</div>
  <!--div class="container__balls">
    <div class="animation-wrapper">
      <div class="sphere-animation">
        <svg class="sphere" viewBox="0 0 440 440" stroke="rgba(80,80,80,.35)">
          <defs>
            <linearGradient id="sphereGradient" x1="5%" x2="5%" y1="0%" y2="15%">
              <stop stop-color="#373734" offset="0%"/>
              <stop stop-color="#242423" offset="50%"/>
              <stop stop-color="#0D0D0C" offset="100%"/>
            </linearGradient>
          </defs>
          <path d="M361.604 361.238c-24.407 24.408-51.119 37.27-59.662 28.727-8.542-8.543 4.319-35.255 28.726-59.663 24.408-24.407 51.12-37.269 59.663-28.726 8.542 8.543-4.319 35.255-28.727 59.662z"/>
          <path d="M360.72 360.354c-35.879 35.88-75.254 54.677-87.946 41.985-12.692-12.692 6.105-52.067 41.985-87.947 35.879-35.879 75.254-54.676 87.946-41.984 12.692 12.692-6.105 52.067-41.984 87.946z"/>
          <path d="M357.185 356.819c-44.91 44.91-94.376 68.258-110.485 52.149-16.11-16.11 7.238-65.575 52.149-110.485 44.91-44.91 94.376-68.259 110.485-52.15 16.11 16.11-7.239 65.576-52.149 110.486z"/>
          <path d="M350.998 350.632c-53.21 53.209-111.579 81.107-130.373 62.313-18.794-18.793 9.105-77.163 62.314-130.372 53.209-53.21 111.579-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z"/>
          <path d="M343.043 342.677c-59.8 59.799-125.292 91.26-146.283 70.268-20.99-20.99 10.47-86.483 70.269-146.282 59.799-59.8 125.292-91.26 146.283-70.269 20.99 20.99-10.47 86.484-70.27 146.283z"/>
          <path d="M334.646 334.28c-65.169 65.169-136.697 99.3-159.762 76.235-23.065-23.066 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z"/>
          <path d="M324.923 324.557c-69.806 69.806-146.38 106.411-171.031 81.76-24.652-24.652 11.953-101.226 81.759-171.032 69.806-69.806 146.38-106.411 171.031-81.76 24.652 24.653-11.953 101.226-81.759 171.032z"/>
          <path d="M312.99 312.625c-73.222 73.223-153.555 111.609-179.428 85.736-25.872-25.872 12.514-106.205 85.737-179.428s153.556-111.609 179.429-85.737c25.872 25.873-12.514 106.205-85.737 179.429z"/>
          <path d="M300.175 299.808c-75.909 75.909-159.11 115.778-185.837 89.052-26.726-26.727 13.143-109.929 89.051-185.837 75.908-75.908 159.11-115.778 185.837-89.051 26.726 26.726-13.143 109.928-89.051 185.836z"/>
          <path d="M284.707 284.34c-77.617 77.617-162.303 118.773-189.152 91.924-26.848-26.848 14.308-111.534 91.924-189.15C265.096 109.496 349.782 68.34 376.63 95.188c26.849 26.849-14.307 111.535-91.923 189.151z"/>
          <path d="M269.239 267.989c-78.105 78.104-163.187 119.656-190.035 92.807-26.849-26.848 14.703-111.93 92.807-190.035 78.105-78.104 163.187-119.656 190.035-92.807 26.849 26.848-14.703 111.93-92.807 190.035z"/>
          <path d="M252.887 252.52C175.27 330.138 90.584 371.294 63.736 344.446 36.887 317.596 78.043 232.91 155.66 155.293 233.276 77.677 317.962 36.521 344.81 63.37c26.85 26.848-14.307 111.534-91.923 189.15z"/>
          <path d="M236.977 236.61C161.069 312.52 77.867 352.389 51.14 325.663c-26.726-26.727 13.143-109.928 89.052-185.837 75.908-75.908 159.11-115.777 185.836-89.05 26.727 26.726-13.143 109.928-89.051 185.836z"/>
          <path d="M221.067 220.7C147.844 293.925 67.51 332.31 41.639 306.439c-25.873-25.873 12.513-106.206 85.736-179.429C200.6 53.786 280.931 15.4 306.804 41.272c25.872 25.873-12.514 106.206-85.737 179.429z"/>
          <path d="M205.157 204.79c-69.806 69.807-146.38 106.412-171.031 81.76-24.652-24.652 11.953-101.225 81.759-171.031 69.806-69.807 146.38-106.411 171.031-81.76 24.652 24.652-11.953 101.226-81.759 171.032z"/>
          <path d="M189.247 188.881c-65.169 65.169-136.696 99.3-159.762 76.235-23.065-23.065 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z"/>
          <path d="M173.337 172.971c-59.799 59.8-125.292 91.26-146.282 70.269-20.991-20.99 10.47-86.484 70.268-146.283 59.8-59.799 125.292-91.26 146.283-70.269 20.99 20.991-10.47 86.484-70.269 146.283z"/>
          <path d="M157.427 157.061c-53.209 53.21-111.578 81.108-130.372 62.314-18.794-18.794 9.104-77.164 62.313-130.373 53.21-53.209 111.58-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z"/>
          <path d="M141.517 141.151c-44.91 44.91-94.376 68.259-110.485 52.15-16.11-16.11 7.239-65.576 52.15-110.486 44.91-44.91 94.375-68.258 110.485-52.15 16.109 16.11-7.24 65.576-52.15 110.486z"/>
          <path d="M125.608 125.241c-35.88 35.88-75.255 54.677-87.947 41.985-12.692-12.692 6.105-52.067 41.985-87.947C115.525 43.4 154.9 24.603 167.592 37.295c12.692 12.692-6.105 52.067-41.984 87.946z"/>
          <path d="M109.698 109.332c-24.408 24.407-51.12 37.268-59.663 28.726-8.542-8.543 4.319-35.255 28.727-59.662 24.407-24.408 51.12-37.27 59.662-28.727 8.543 8.543-4.319 35.255-28.726 59.663z"/>
        </svg>
      </div>
    </div>
  </div-->

{/if}
<ModalPromotions bind:open={showModalPromotion}>
           <PromotionsPage>
           </PromotionsPage>
         </ModalPromotions>
<style>

    button:hover{
      background: #87d4ba5e;
    }
   
   .li-game.u-category-select{
      background: linear-gradient(180deg, transparent, transparent, transparent, transparent, transparent, transparent, transparent, #00b07d);
    background-color: #00df9e40  !important;
    transform: inherit;
    }
    
  .u-span-li-games{
    text-align: center;
    overflow: hidden;
    font-size: 14px;
    line-height: 1;
    width: 100%;

  }
  .li-game {
    height: 14vh;
    background-color: rgba(32, 37, 44, 0.7);
    color: #fff;
    position: relative;
    border-radius: 8px;
    flex-grow: 1;
    flex-basis: 260px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    min-width: 6rem;
    transition: 0.5s;
    }
    .li-game img{
      width: 100%;
      /* height: 2rem; */
    }
    
    .li-game.u-category-select span{
      animation: neonGlow 2s infinite alternate cubic-bezier(0.455, 0.030, 0.515, 0.955);
    }

    @keyframes neonGlow {
  0% {
    text-shadow: 0 0 10px rgba(255,255,255,.5),
                 0 0 20px rgba(255,255,255,.5),
                 0 0 22px  rgba(255,255,255,.5),
                 0 0 40px  rgba(66,220,219,.0),
                 0 0 60px  rgba(66,220,219,.0),
                 0 0 80px  rgba(66,220,219,.0),
                 0 0 100px rgba(66,220,219,.0),
                 0 0 140px rgba(66,220,219,.0),
                 0 0 200px rgba(66, 220, 220, 0);
  }
  100% {
    text-shadow: 0 0 2px rgba(255,255,255,.5),
                 0 0 8px rgba(255,255,255,.5),
                 0 0 10px rgba(255,255,255,0),
                 0 0 20px rgba(66, 220, 220, 0),
                 0 0 30px rgba(66, 220, 220, 0),
                
               
                
  }
}
.li_img{
    height: 28vh;
    padding: 0;
    display: flex !important;
  }
  .img_game{
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }


  @media only screen and (max-width: 1023px) {
    .li_img{
     height: 10rem;
    }

    .container{
      display: flex;
      flex-direction: row;
      background-color: transparent;
      align-items: center;
      justify-content: start;
      padding: 0.5rem;
      margin-top: 0rem;
      gap: 0.5rem;
      width: auto;
      overflow: auto;
      position: relative;
      z-index: 5;
    }

    button{
      border: none;
      background-color: transparent;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      height: 100%;
      padding-bottom: 0.5rem;
      width: 5rem;
    }



    .u-menubar-icon{
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      /* filter: invert(81%) sepia(223%) saturate(3227%) hue-rotate(-103deg) brightness(97%) contrast(158%)*/
      filter: invert(50%) sepia(39%) saturate(4219%) hue-rotate(8deg) brightness(101%) contrast(104%);
    }
   
  }
  @media only screen and (min-width: 1024px) {


    .u-span-li-games{
    text-transform: uppercase;
  }

  .container{
      display: flex;
      gap: 0.25rem;
      flex-direction: row;
      background-color: transparent;
      align-items: center;
      justify-content: start;
      padding: 0.25rem 1rem;
      position: relative;
      z-index: 3;
      overflow: hidden;
    }


    button{
      border: none;
      background-color: transparent;
      color: white;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.2rem;
      cursor: pointer;
      padding-bottom: 0.5rem;
      font-size: 1rem;
    }

    .u-menubar-icon{
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      filter: invert(50%) sepia(39%) saturate(4219%) hue-rotate(8deg) brightness(101%) contrast(104%);
    }
    .u-menubar-icon.re{
      width: 2.5rem;
      height: 2.5rem;
    }   
  }
  @media only screen and (min-width: 1800px) {
    .container{
      padding: 0 12rem;
    }  
  }
/* 2 */

</style>
