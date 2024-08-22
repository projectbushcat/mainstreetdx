<script lang="ts">
  import { AllResources, FreeResourceUtils } from "$lib/data/EasyStreet";
  import Jelly from "$lib/ui/Jelly.svelte";
  import JellyGrid from "$lib/ui/JellyGrid.svelte";
  import Section from "$lib/ui/Section.svelte";

  export let exclude_href: string;
</script>

<Section bg="surface-blue">
  <div class="flex flex-col gap-2">
    <h2 class="text-headline" id="free-resources">Explore additional resources.</h2>
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
