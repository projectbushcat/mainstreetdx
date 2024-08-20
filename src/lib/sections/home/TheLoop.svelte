<script lang="ts">
  import { MainStreetSubstackAddress } from "$lib/data/MainStreet";
  import Link from "$lib/ui/Link.svelte";
  import Section from "$lib/ui/Section.svelte";
</script>

<Section bg="white">
  <div>
    <a
      href={MainStreetSubstackAddress}
      aria-label="The Loop newsletter on Substack"
      class="inline-block h-14"
    >
      <img
        src="/wordmark-loop.svg"
        width="254"
        height="91"
        alt="The Loop"
        class="inline-block -mt-6 -ml-5"
      />
    </a>
  </div>
  <h2 class="text-headline">Tech insights and research, weekly-ish.</h2>
  <p>
    <Link icon="bookmark" href={MainStreetSubstackAddress} label="The Loop on Substack" />
  </p>
</Section>
