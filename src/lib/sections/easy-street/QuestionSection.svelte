<script lang="ts">
  import { pushState } from "$app/navigation";
  import type { ColorName } from "$lib/data/ColorName";
  import type { FreeResourceSection } from "$lib/data/EasyStreet";
  import FormButton from "$lib/ui/FormButton.svelte";
  import JellyQA from "$lib/ui/JellyQA.svelte";
  import Section from "$lib/ui/Section.svelte";
  import { createEventDispatcher } from "svelte";

  export let index: number;
  export let bg: ColorName;
  export let surface: ColorName;
  export let section: FreeResourceSection;

  let answers: string[] = section.questions.map((q) => "");
  $: disabled = answers.join("").trim().length < 15;
  let generating = false;
  let generated = false;
  let completed = false;

  const dispatch = createEventDispatcher();

  const handleCompleteClick = () => {
    completed = true;
    dispatch("complete");

    const next_id = `step-${index + 2}`;

    location.hash = next_id;
    setTimeout(() => {
      document.getElementById(next_id)?.scrollIntoView({ behavior: "smooth" });
    }, 1);
  };

  const handleSubmit = () => {};

  const handleGenerateClick = () => {};
</script>

<form on:submit|preventDefault={handleSubmit}>
  <Section bg={completed ? surface : "white"} bottom_border={completed} name="step-{index + 1}">
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
    {#if completed}
      <FormButton
        bind:disabled
        label="Changed your answers?"
        value="Regenerate insights"
        bg={surface}
        secondary
        on:click={handleGenerateClick}
      />
    {:else}
      <FormButton bind:disabled label="Next step:" value="Get insights" {bg} type="submit" />
    {/if}
  </Section>
</form>
