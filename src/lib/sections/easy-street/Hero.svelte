<script lang="ts">
  import type { FreeResource } from "$lib/data/EasyStreet";
  import Link from "$lib/ui/Link.svelte";
  import Section from "$lib/ui/Section.svelte";

  export let resource: FreeResource;
  export let bottom_border: boolean;
</script>

<Section bg={resource.surface} {bottom_border}>
  <div class="flex flex-col gap-[6rem]">
    <div class="flex justify-between">
      <a href="/easy-street">
        <img
          src="/wordmark-es.svg"
          width="138"
          height="72"
          alt="Easy Street logo - Free resources for entrepreneurs from Main Street DX"
        />
      </a>
      <div class="h-[52px] flex items-center">
        <Link href="/" label="Home" icon="m-icon" />
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <aside class="bg-{resource.bg}">{resource.category}</aside>
      <h1 class="text-hero">{resource.name}</h1>
      {#each resource.instructions as instruction}
        <p class="text-body">{@html instruction}</p>
      {/each}
    </div>
  </div>
</Section>
