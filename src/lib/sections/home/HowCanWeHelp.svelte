<script lang="ts">
  import { Calendly30Min } from "$lib/data/MainStreet";
  import Section from "$lib/ui/Section.svelte";
</script>

<Section bg="white">
  <h2 class="text-hero">We drive community-led growth.</h2>
  <ul class="flex flex-col gap-8">
    <li class="flex flex-col gap-2">
      <h3 class="text-headline">Paid consulting services to capitalize on a growing region.</h3>
      <p></p>
      <p class="text-subhead">
        <a href="#hire-us">We work</a> backwards from a 90-day goal your business needs to achieve.
        Unsure where to start? <a href="#our-services">We can help</a> with that, too.
      </p>
    </li>
    <li class="flex flex-col gap-2">
      <h3 class="text-headline">Free AI-enabled resources to help you start a business.</h3>
      <p class="text-subhead">
        We make entrepreneurship and technology accessible to more people with <a
          href="#easy-street">free resources</a
        >
        and <a href={Calendly30Min}>consultations</a>.
      </p>
    </li>
  </ul>
</Section>
