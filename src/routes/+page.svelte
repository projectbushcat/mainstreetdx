<script lang="ts">
  import Hero from "$lib/sections/home/Hero.svelte";
  import HowCanWeHelp from "$lib/sections/home/HowCanWeHelp.svelte";
  import HireUsToBuild from "$lib/sections/home/HireUsToBuild.svelte";
  import OurMission from "$lib/sections/home/OurMission.svelte";
  import About from "$lib/sections/home/About.svelte";
  import AreasOfExpertise from "$lib/sections/home/AreasOfExpertise.svelte";
  import TheLoop from "$lib/sections/global/TheLoop.svelte";
  import EasyStreetResources from "$lib/sections/easy-street/EasyStreetResources.svelte";
</script>

<svelte:head>
  <title
    >Main Street DX | Digital transformation services for iconic local businesses, nonprofits,
    startups and enterprise | Free AI-enabled resources for entrepreneurs | Local web design,
    development and business services starting at $250/day</title
  >
  <meta
    name="description"
    content="We help entrepreneurs from all backgrounds grow their business using technology by providing free resources and consulting services starting at $250/day."
  />
</svelte:head>

<Hero />
<HowCanWeHelp />
<EasyStreetResources />
<AreasOfExpertise />
<HireUsToBuild />
<OurMission />
<About />
<TheLoop />
