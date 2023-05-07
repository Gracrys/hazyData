<script lang="ts">
  import { gameVersion, type Data } from "../data";
  import BC from "$lib/assets/regionIcons/BandleCity.png";
  import BW from "$lib/assets/regionIcons/Bilgewater.png";
  import SI from "$lib/assets/regionIcons/ShadowIsles.png";
  import SH from "$lib/assets/regionIcons/Shurima.png";
  import NX from "$lib/assets/regionIcons/Noxus.png";
  import DE from "$lib/assets/regionIcons/Demacia.png";
  import MT from "$lib/assets/regionIcons/Targon.png";
  import PNZ from "$lib/assets/regionIcons/PiltoverZaun.png";
  import IO from "$lib/assets/regionIcons/Ionia.png";
  import RU from "$lib/assets/regionIcons/Runeterrean.png";

  export let data: Data[];

  const calculateWR = (n: number) => {
    return (n - 40) * 20;
  };
  const calculatePR = (n: number) => {
    return n * 60;
  };

  const Regions = {
    BC,
    BW,
    SI,
    SH,
    NX,
    DE,
    MT,
    PNZ,
    RU,
    IO,
  };

  const parseImg = (code: string) =>
    `https://dd.b.pvp.net/${gameVersion}/set${code[1]}/en_us/img/cards/${code}-full.png`;
</script>

<section class="card p-4 overflow-auto space-y-4 mx-auto w-auto">
  <header class="card-header text-center">
    <h1>First Graph</h1>
  </header>
  <section class="flex">
    <div class="flex flex-col gap-4 h-full">
      {#each data as d, i}
        <aside
          class="h-16 flex justify-between border-2 border-blue-600 bg-blue-600/50 rounded-lg items-center p-2 gap-4"
        >
          <b class="text-xl">{d.PR.champ + " " + d.WR.champ}</b>
          <figure class="w-14 flex justify-center gap-2">
            {#each d.regions as region}
              <img src={Regions[region]} alt="" class="w-6" />
            {/each}
          </figure>
        </aside>
      {/each}
    </div>
    <article class="flex w-[1080px] justify-center relative">
      <figure class=" flex flex-col items-end gap-4">
        {#each data as d}
          <div
            class="w-full h-16 bg-primary-500 bg-cover bg-center relative"
            style="background-image:  url({parseImg(
              d.PR.code
            )});width:{calculatePR(d.PR.size)}px "
          >
            <span
              class=" w-full h-full flex items-center z-10 block justify-end pr-10"
            >
              <div class="flex-col flex items-end">
                <b class="text-white text-stroke-black"> PR </b>
                <b class="text-white text-stroke-black"> {d.PR.size}% </b>
              </div>
            </span>
          </div>
        {/each}
      </figure>
      <div class="relative h-full">
        <div class="flex flex-col gap-4 absolute h-full w-20 z-20 -left-10">
          {#each data as d}
            <figure
              class="w-full h-16 bg-gradient-to-r from-gray-500/5 via-gray-500 to-gray-500/5"
            />
          {/each}
        </div>
      </div>
      <figure class="flex flex-col gap-4">
        {#each data as d}
          <div
            class="w-full h-16 bg-primary-500 bg-cover bg-center relative"
            style="background-image:  url({parseImg(
              d.WR.code
            )});width:{calculateWR(d.WR.size)}px "
          >
            <span class=" w-full h-full flex items-center z-10 block pl-10">
              <div class="flex-col flex">
                <b class="text-white text-stroke-black"> WR </b>
                <b class="text-white text-stroke-black"> {d.WR.size}% </b>
              </div>
            </span>
          </div>
        {/each}
      </figure>
    </article>
  </section>
</section>

<style>
  b {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
</style>
