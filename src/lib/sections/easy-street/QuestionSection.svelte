<script lang="ts">
  import type { ColorName } from "$lib/data/ColorName";
  import type { FreeResourceSection } from "$lib/data/EasyStreet";
  import JellyQA from "$lib/ui/JellyQA.svelte";
  import Section from "$lib/ui/Section.svelte";
  import { createEventDispatcher } from "svelte";

  export let index: number;
  export let bg: ColorName;
  export let section: FreeResourceSection;

  let answers: string[] = section.questions.map((q) => "");
  let completed = false;

  const dispatch = createEventDispatcher();

  $: console.log(answers);
</script>

<Section bg={completed ? "surface-green" : "white"} bottom_border={completed}>
  <div class="flex flex-col gap-2">
    <h2 class="flex flex-col">
      <span class="text-headline text-main-gray-secondary"
        >Section {index + 1} of 3{#if completed}, completed{/if}:</span
      >
      <span class="text-hero">{section.headline}</span>
    </h2>
    <p class="text-body">{@html section.instructions}</p>
  </div>
  {#each section.questions as question, index}
    <JellyQA {bg} {question} bind:answer={answers[index]} />
  {/each}
  <button
    on:click={() => {
      completed = true;
      dispatch("complete");
    }}>Next</button
  >
</Section>
