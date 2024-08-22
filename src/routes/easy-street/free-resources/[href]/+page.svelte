<script lang="ts">
  import Section from "$lib/ui/Section.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>
    {data.resource.name} | A free resource for entrepreneurs | from Main Street DX, Main Street's partner
    for community-led growth.
  </title>
  <meta
    name="description"
    content="Use this free resource to help you contextualize your business. For example: {data
      .resource.exampleGoal}"
  />
</svelte:head>

<Section bg={data.resource.surface}>
  <div class="flex flex-col gap-[6rem]">
    <div>
      <a href="/easy-street">
        <img
          src="/wordmark-es.svg"
          width="138"
          height="72"
          alt="Easy Street logo - Free resources for entrepreneurs from Main Street DX"
        />
      </a>
    </div>
    <div class="flex flex-col gap-2">
      <aside class="bg-{data.resource.bg}">{data.resource.category}</aside>
      <h1 class="text-hero">{data.resource.name}</h1>
      {#each data.resource.instructions as instruction}
        <p class="text-body">{@html instruction}</p>
      {/each}
    </div>
  </div>
</Section>
