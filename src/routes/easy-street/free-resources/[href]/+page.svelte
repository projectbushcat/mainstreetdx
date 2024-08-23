<script lang="ts">
  import EasyStreetResources from "$lib/sections/easy-street/EasyStreetResources.svelte";
  import Hero from "$lib/sections/easy-street/Hero.svelte";
  import QuestionSection from "$lib/sections/easy-street/QuestionSection.svelte";
  import TheLoop from "$lib/sections/global/TheLoop.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  // 0-2, for each completed section
  let completed_index = 0;
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

<Hero resource={data.resource} bottom_border={completed_index > 0} />
{#each data.resource.sections as section, index}
  {#if index <= completed_index}
    <QuestionSection
      resource={data.resource}
      {section}
      {index}
      on:complete={() => {
        completed_index += 1;
      }}
    />
  {/if}
{/each}
<EasyStreetResources exclude_href={data.href} />
<TheLoop />
