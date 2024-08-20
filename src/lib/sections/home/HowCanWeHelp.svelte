<script lang="ts">
  import { Calendly30Min } from "$lib/data/MainStreet";
  import Section from "$lib/ui/Section.svelte";
</script>

<Section bg="white">
  <h2 class="text-hero">How can we help?</h2>
  <ul class="flex flex-col gap-8">
    <li class="flex flex-col gap-2">
      <h3 class="text-headline">Free community resources.</h3>
      <p class="text-subhead">
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
      <p class="text-subhead">
        We work backwards from a 90-day goal you want to achieve. This drives alignment at <a
          href="#hire-us">project kickoff</a
        > and is an effective way to measure outcome.
      </p>
    </li>
  </ul>
</Section>
