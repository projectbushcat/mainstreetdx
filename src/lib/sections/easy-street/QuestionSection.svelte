<script lang="ts">
  import {
    FreeResourceUtils,
    type FreeResource,
    type FreeResourceSection
  } from "$lib/data/EasyStreet";
  import { Calendly30Min } from "$lib/data/MainStreet";
  import FormButton from "$lib/ui/FormButton.svelte";
  import Icon from "$lib/ui/icons/Icon.svelte";
  import JellyQA from "$lib/ui/JellyQA.svelte";
  import Link from "$lib/ui/Link.svelte";
  import Section from "$lib/ui/Section.svelte";
  import { createEventDispatcher } from "svelte";
  import { quartInOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { slide } from "svelte/transition";

  const MAX_GENERATIONS = 2;
  const dispatch = createEventDispatcher();

  export let index: number;
  export let resource: FreeResource;
  export let section: FreeResourceSection;

  let answers: string[] = section.questions.map((q) => "");
  let num_generated = 0;
  $: disabled = answers.join("").trim().length < 15 || num_generated > MAX_GENERATIONS;
  let generating = false;
  let generated = false;
  let generating_error = false;
  let completed = false;
  let insights: string | undefined = undefined;
  let typing = tweened(0, { duration: 1000, easing: quartInOut });

  const generate = async () => {
    generating = true;
    generated = false;
    generating_error = false;
    insights = undefined;
    $typing = 0;
    num_generated += 1;

    const res = await FreeResourceUtils.generate(resource, index, answers);

    if (res.success) {
      generated = true;
      insights = res.insights;
      typing.set(insights.length).then(() => {
        generating = false;
      });
    } else {
      generating = false;
      generated = true;
      generating_error = true;
    }
  };

  const handleCompleteClick = () => {
    completed = true;
    dispatch("complete");

    const next_id = `step-${index + 2}`;

    location.hash = next_id;
    setTimeout(() => {
      document.getElementById(next_id)?.scrollIntoView({ behavior: "smooth" });
    }, 1);
  };

  const handleSubmit = () => {
    generate();
  };

  const handleGenerateClick = () => {
    generate();
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <Section
    bg={completed ? resource.surface : "white"}
    bottom_border={completed}
    name="step-{index + 1}"
  >
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
      <JellyQA bg={resource.bg} {question} bind:answer={answers[index]} />
    {/each}
    {#if num_generated < 1}
      <FormButton
        bind:disabled
        label="Next step:"
        value="Get insights"
        bg={resource.bg}
        type="submit"
      />
    {/if}
    {#if generating || generated}
      <p class="text-label text-main-gray flex gap-1" aria-live="polite">
        <span class="flex h-[24px] items-center">
          <Icon icon={generating ? "refresh" : "thumb"} spins={generating} />
        </span>
        Analyzing your answers and generating insights… {#if !generating}Done.{/if}
      </p>
    {/if}
    {#if generating_error}
      <p class="text-label">Something went wrong. Please try again later.</p>
    {/if}
    {#if insights}
      <div>
        <h3 class="text-headline text-main-gray-secondary">AI Insights:</h3>
        <pre class="text-body font-sans">{insights.substring(0, $typing)}</pre>
      </div>
    {/if}
    <div slot="full-width" class="max-w-prose m-auto">
      {#if generated && !generating}
        <div class="px-8 pb-8" in:slide={{ delay: 250, duration: 500, easing: quartInOut }}>
          <div class="flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between">
            <FormButton
              bind:disabled
              label={disabled
                ? "You used 3/3 free insights."
                : generating_error
                  ? "Tap to try again:"
                  : "Changed your answers?"}
              value="Regenerate insights"
              bg={resource.surface}
              secondary
              on:click={handleGenerateClick}
            />
            {#if !completed}
              {#if index === 2}
                <p class="text-hero">Good luck!</p>
                <p class="text-label">
                  We hope you found this resource helpful, and would love to hear from you with any
                  questions about starting a business or harnessing technology.
                </p>
                <p>
                  <Link
                    href={Calendly30Min}
                    target="_blank"
                    label="Schedule a free call"
                    icon="external_link"
                  />
                </p>
              {:else}
                <FormButton
                  label="Move on to Section {index + 2}:"
                  value={resource.sections[index + 1].headline ?? "Next Section"}
                  bg={resource.bg}
                  on:click={handleCompleteClick}
                />
              {/if}
            {/if}
          </div>
        </div>
      {/if}
    </div>
  </Section>
</form>
