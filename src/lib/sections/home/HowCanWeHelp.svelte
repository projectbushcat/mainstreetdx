<script lang="ts">
  import { AllResources } from "$lib/data/EasyStreet";
  import { Calendly30Min } from "$lib/data/MainStreet";
  import Jelly from "$lib/ui/Jelly.svelte";
  import JellyGrid from "$lib/ui/JellyGrid.svelte";
  import Section from "$lib/ui/Section.svelte";
</script>

<Section bg="white">
  <h2 class="text-hero">How can we help?</h2>
  <ul class="flex flex-col gap-8">
    <li class="flex flex-col gap-2">
      <h3 class="text-headline">Free community resources.</h3>
      <p class="text-body">
        We make entrepreneurship and technology accessible to more people with <a
          href={Calendly30Min}
        >
          free consultations
        </a>
        and <a href="#easy-street">resources</a>.
      </p>
    </li>
    <li class="flex flex-col gap-2">
      <h3 class="text-headline">Paid consulting services.</h3>
      <p class="text-body">
        We work backwards from a 90-day goal you want to achieve. This drives alignment at <a
          href="#hire-us">project kickoff</a
        > and is an effective way to measure outcome.
      </p>
    </li>
    <li class="flex flex-col gap-2">
      <h3 class="text-headline">Our approach is simple: we meet you where you are.</h3>
      <p class="text-body">
        Our hands-on perspective spans two decades in marketing, startups and enterprise — giving
        your business a tactical advantage at every phase.
      </p>
    </li>
  </ul>
  <div slot="full-width">
    <div class="max-w-prose m-auto px-8">
      <h2 id="explore-expertise" class="text-headline">Explore our areas of expertise:</h2>
    </div>
    <JellyGrid items={AllResources} labelledBy="explore-expertise" let:item>
      <Jelly bg={item.bg} width="half" action={item.category}>
        <dl
          class:text-white={item.bg !== "main-yellow" && item.bg !== "main-orange"}
          class:text-black={item.bg === "main-yellow" || item.bg === "main-orange"}
        >
          <dt class="text-label">Example goal:</dt>
          <dd class="text-body">{item.exampleGoal}</dd>
          <dt class="text-label mt-4">Key concepts:</dt>
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
