<script lang="ts">
  import { Calendly30Min } from "$lib/data/MainStreet";
  import Section from "$lib/ui/Section.svelte";
</script>

<Section bg="white">
  <h2 class="text-hero">Main Street's partner for community-led growth.</h2>
  <ul class="flex flex-col gap-8">
    <li class="flex flex-col gap-2">
      <aside class="bg-main-blue">Community resources</aside>
      <h3 class="text-headline">
        Making entrepreneurship more accessible to more people — for free.
      </h3>
      <p class="text-subhead">
        We make entrepreneurship and technology accessible to more people with <a
          href="/easy-street">free resources</a
        >
        and <a href={Calendly30Min}>consultations</a>.
      </p>
    </li>
    <li class="flex flex-col gap-2">
      <aside class="bg-main-green">Professional services</aside>
      <h3 class="text-headline">
        Outcome-driven consulting available per-project, accessible for every budget.
      </h3>
      <p></p>
      <p class="text-subhead">
        Our approach <a href="#hire-us">works backwards</a> from a 90-day goal your business needs
        to achieve. Unsure where to start? <a href="#our-services">We can help</a> with that, too.
      </p>
    </li>
  </ul>
</Section>
