<script lang="ts">
  import { AllResources, FreeResourceUtils } from "$lib/data/EasyStreet";
  import Jelly from "$lib/ui/Jelly.svelte";
  import JellyGrid from "$lib/ui/JellyGrid.svelte";
  import Section from "$lib/ui/Section.svelte";
</script>

<Section bg="surface-blue" name="easy-street">
  <div>
    <img
      src="/wordmark-es.svg"
      width="138"
      height="72"
      alt="Easy Street logo - Free resources for entrepreneurs from Main Street DX"
    />
  </div>
  <div class="flex flex-col gap-2">
    <h2 class="text-headline" id="free-resources">
      Free resources to start and grow any kind of business.
    </h2>
    <p class="text-subhead">
      From food trucks to startups, use our free AI-enabled resources to ideate, refine, and
      contextualize your goals.
    </p>
  </div>
  <div slot="full-width">
    <JellyGrid labelledBy="free-resources" items={AllResources} let:item>
      <Jelly
        bg={item.bg}
        width="half"
        action="Launch"
        type="link"
        title={item.name}
        href={FreeResourceUtils.getHref(item)}
      ></Jelly>
    </JellyGrid>
  </div>
</Section>
