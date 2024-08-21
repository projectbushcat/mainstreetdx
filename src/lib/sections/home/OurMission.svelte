<script lang="ts">
  import Jelly from "$lib/ui/Jelly.svelte";
  import Section from "$lib/ui/Section.svelte";
</script>

<Section bg="white" name="our-mission">
  <h2>
    <span class="text-headline block text-main-gray">Our mission:</span>
    <span class="text-hero"
      >Help communities <span
        class="indent-[-100000px] inline-block align-middle w-[139px] h-[53px]"
        style="background-image:url(/decorations/thrive.svg)">thrive</span
      >
    </span>
  </h2>
  <p class="text-headline">
    We acknowledge the delicate balance between preserving local culture and embracing digital
    change.
  </p>
  <p class="text-subhead">
    Our methodology treats each business we serve as a vital component of an interconnected
    community landscape.
  </p>
  <h3 id="methodology" class="text-headline">How we achieve our mission:</h3>
  <div slot="full-width">
    <ul
      aria-labelledby="methodology"
      class="mx-auto px-4 pb-4 md:pb-8 grid justify-center grid-cols-1 gap-4 max-w-lg"
    >
      <Jelly bg="main-green" width="full" action="Assess for community impact">
        <p class="text-body">
          We carefully evaluate how each digital transformation project will affect not just the
          individual business, but the broader community ecosystem. We consider factors like local
          job impacts, effects on neighboring businesses, and alignment with community values and
          long-term goals. Our assessments go beyond financial metrics to measure true community
          benefit.
        </p>
      </Jelly>
      <Jelly bg="main-orange" width="full" action="Deploy responsibly & ethically">
        <p class="text-body">
          We implement digital solutions with a "do no harm" approach, prioritizing data privacy,
          fair labor practices, and environmental sustainability. We favor open-source and
          interoperable technologies that empower rather than restrict local businesses. We track
          community feedback and course correct as appropriate.
        </p>
      </Jelly>
      <Jelly bg="main-blue" width="full" action="Foster resilience with education">
        <p class="text-body">
          We don't just implement technology - we transfer knowledge. Through workshops, mentoring,
          and accessible documentation, we ensure local businesses and community members understand
          and can maintain the digital solutions we deploy. We aim to build long-term digital
          literacy and self-sufficiency, reducing reliance on outside consultants over time.
        </p>
      </Jelly>
    </ul>
  </div>
</Section>
