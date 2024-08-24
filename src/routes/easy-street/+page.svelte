<script lang="ts">
  import { Calendly30Min } from "$lib/data/MainStreet";
  import EasyStreetResources from "$lib/sections/easy-street/EasyStreetResources.svelte";
  import TheLoop from "$lib/sections/global/TheLoop.svelte";
  import Link from "$lib/ui/Link.svelte";
  import Section from "$lib/ui/Section.svelte";
</script>

<svelte:head>
  <title>Easy Street, by Main Street DX | Making entrepreneurship accessible for more people</title>
  <meta
    name="description"
    content="Easy Street empowers entrepreneurs with free time, free resources, and community outreach. We serve our thriving local ecosystem, helping more people transform their ideas into iconic local businesses."
  />
  <meta property="og:image" content="/og/og-easystreet.jpg" />
</svelte:head>

<EasyStreetResources
  logo={false}
  header_size="hero"
  header="Free resources for entrepreneurs."
  max_cols={5}
>
  <div class="flex justify-between" slot="header">
    <img
      src="/wordmark-es.svg"
      width="138"
      height="72"
      alt="Easy Street logo - Free resources for entrepreneurs from Main Street DX"
    />
    <div class="h-[52px] flex items-center">
      <Link href="/" label="Home" icon="m-icon" />
    </div>
  </div>
</EasyStreetResources>
<Section bg="main-blue">
  <h2 class="text-hero">Easy Street empowers entrepreneurs.</h2>
  <p class="text-hero text-surface-blue/80">
    With free time, free resources, and community outreach.
  </p>
  <p class="text-hero">We serve our thriving local ecosystem.</p>
  <p class="text-hero text-surface-blue/80">
    Helping more people transform their ideas into iconic local businesses.
  </p>
</Section>
<Section bg="surface-blue">
  <h2 class="text-headline">Schedule a free chat. Or consultation. Or therapy session.</h2>
  <p class="text-subhead">
    Our mission is to empower more local entrepreneurs to harness cutting-edge technology. Even if
    that's just a website.
  </p>
  <Link href={Calendly30Min} icon="phone" label="Book a call" />
</Section>
<TheLoop />
