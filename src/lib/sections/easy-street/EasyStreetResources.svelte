<script lang="ts">
  import type { ColorName } from "$lib/data/ColorName";
  import { AllResources, FreeResourceUtils } from "$lib/data/EasyStreet";
  import Jelly from "$lib/ui/Jelly.svelte";
  import JellyGrid from "$lib/ui/JellyGrid.svelte";
  import Section from "$lib/ui/Section.svelte";

  export let logo: boolean = true;
  export let header: string = "Explore additional resources.";
  export let header_size: "headline" | "hero" = "headline";
  export let exclude_href: string = "";
  export let bg: ColorName = "surface-blue";
</script>

<Section {bg} name="easy-street">
  <slot name="header">
    {#if logo}
      <div>
        <a href="/easy-street">
          <img
            src="/wordmark-es.svg"
            width="138"
            height="72"
            alt="Easy Street logo - Free resources for entrepreneurs from Main Street DX"
          />
        </a>
      </div>
    {/if}
  </slot>
  <div class="flex flex-col gap-2">
    {#if header_size === "hero"}
      <h1 class="text-hero" id="free-resources">{header}</h1>
    {:else}
      <h2 class="text-headline" id="free-resources">{header}</h2>
    {/if}
    <p class="text-subhead">
      From food trucks to startups, use our free AI-enabled resources to ideate, refine, and
      contextualize your goals.
    </p>
  </div>
  <div slot="full-width">
    <JellyGrid
      max_cols={4}
      labelledBy="free-resources"
      items={AllResources.filter((r) => r.href !== exclude_href)}
      let:item
    >
      <Jelly
        bg={item.bg}
        width="half"
        action="Visit"
        type="link"
        title={item.name}
        href={FreeResourceUtils.getHref(item)}
        target="_self"
      ></Jelly>
    </JellyGrid>
  </div>
</Section>
