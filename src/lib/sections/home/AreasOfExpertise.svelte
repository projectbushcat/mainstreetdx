<script lang="ts">
  import { AllResources } from "$lib/data/EasyStreet";
  import Jelly from "$lib/ui/Jelly.svelte";
  import JellyGrid from "$lib/ui/JellyGrid.svelte";
  import Section from "$lib/ui/Section.svelte";
</script>

<Section name="our-services">
  <div class="flex flex-col gap-2">
    <aside class="bg-main-green">Our Services</aside>
    <h2 class="text-headline">We're a general-purpose technology partner.</h2>
    <p class="text-subhead">
      We do tactical things like design and development, and more esoteric things like research and
      foresight.
    </p>
  </div>
  <div class="flex flex-col gap-2">
    <h3 class="text-headline">Our approach is simple: we meet you where you are.</h3>
    <p class="text-subhead">
      Our hands-on perspective spans two decades in marketing, startups and enterprise — giving your
      business a tactical advantage at every phase.
    </p>
  </div>
  <h3 id="explore-expertise" class="text-headline">Explore our expertise:</h3>
  <div slot="full-width">
    <div class="max-w-prose m-auto px-8"></div>
    <JellyGrid items={AllResources} labelledBy="explore-expertise" let:item>
      <Jelly bg={item.bg} width="half" action={item.category}>
        <dl
          class:text-white={item.bg !== "main-yellow" && item.bg !== "main-orange"}
          class:text-black={item.bg === "main-yellow" || item.bg === "main-orange"}
        >
          <dt class="text-label">Example outcome:</dt>
          <dd class="text-body">{item.exampleGoal}</dd>
          <dt class="text-label mt-4">Key services:</dt>
          <dd class="text-body">
            <ul class="list-inside list-disc">
              {#each item.concepts as concept}
                <li>{concept}</li>
              {/each}
            </ul>
          </dd>
        </dl>
      </Jelly>
    </JellyGrid>
  </div>
</Section>
