<script lang="ts">
  import { Calendly30Min, MainStreetEmailAddress } from "$lib/data/MainStreet";
  import Accordion from "$lib/ui/Accordion.svelte";
  import Section from "$lib/ui/Section.svelte";
</script>

<Section bg="main-yellow" name="hire-us">
  <h2 class="text-hero">Hire us to <em>do</em>.</h2>
  <div class="flex flex-col gap-2">
    <h3 class="text-headline">
      Outcome-driven professional services available per-project, accessible for every budget.
    </h3>
    <Accordion title="How we work"></Accordion>
    <Accordion title="Limited budget?"></Accordion>
  </div>
  <ul class="flex flex-col gap-8">
    <li>
      <h4 class="flex justify-between border-b-2 border-b-black mb-2">
        <span class="text-headline">Essentials</span>
        <span class="font-mono text-mono">$250/day</span>
      </h4>
      <p class="text-body">
        Accessible pricing to get your business up and running online, or update what's already
        there. <a href={Calendly30Min}>Schedule a free meeting</a>, we’d love to help.
      </p>
    </li>
    <li>
      <h4 class="flex justify-between border-b-2 border-b-black mb-2">
        <span class="text-headline">Professional</span>
        <span class="font-mono text-mono">Per-project</span>
      </h4>
      <p class="text-body">
        Outcome-driven per-project services for any kind of business and budget. <a
          href="mailto:{MainStreetEmailAddress}">Email us</a
        >
        or <a href={Calendly30Min}> book a call </a> to get started.
      </p>
    </li>
    <li>
      <h4 class="flex justify-between border-b-2 border-b-black mb-2">
        <span class="text-headline">Enterprise</span>
        <span class="font-mono text-mono">$150/hr</span>
      </h4>
      <p class="text-body">
        Dedicated weekly capacity for the most important deliveries. <a
          href="mailto:{MainStreetEmailAddress}">Email us</a
        >.
      </p>
    </li>
  </ul>
</Section>
