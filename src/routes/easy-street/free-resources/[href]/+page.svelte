<script lang="ts">
  import EasyStreetResources from "$lib/sections/easy-street/EasyStreetResources.svelte";
  import Hero from "$lib/sections/easy-street/Hero.svelte";
  import Question from "$lib/sections/easy-street/Question.svelte";
  import TheLoop from "$lib/sections/global/TheLoop.svelte";
  import type { PageData } from "./$types";
  import {
    FreeResourceUtils,
    type FreeResourceGenerateResponse,
    type FreeResourceGeneratorFn
  } from "$lib/data/EasyStreet";

  export let data: PageData;

  // 0-2, for each completed section
  let completed_index = 0;
  let answers: string[][] = data.resource.sections.map((section) =>
    new Array(section.questions.length).fill("")
  );

  const getGeneration: FreeResourceGeneratorFn = async (
    r,
    i
  ): Promise<FreeResourceGenerateResponse> => {
    return FreeResourceUtils.generate(r, i, answers);
  };
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
  <meta property="og:image" content="/og/og-{data.resource.href}.jpg" />
</svelte:head>

<Hero resource={data.resource} bottom_border={completed_index > 0} />
{#each data.resource.sections as section, index}
  {#if index <= completed_index}
    <Question
      resource={data.resource}
      {section}
      {index}
      {getGeneration}
      bind:answers={answers[index]}
      on:complete={() => {
        completed_index += 1;
      }}
    />
  {/if}
{/each}
<EasyStreetResources exclude_href={data.href} />
<TheLoop />
