<script lang="ts">
  import Accordion from "$lib/ui/Accordion.svelte";
  import ActionButton from "$lib/ui/ActionButton.svelte";
  import EditableText from "$lib/ui/EditableText.svelte";
  import Highlight from "$lib/ui/Highlight.svelte";
  import Section from "$lib/ui/Section.svelte";
  import { ProjectStore, ProjectUtils } from "./Project";

  const handleShuffleClick = () => {
    ProjectStore.update((prev) => {
      return {
        ...prev,
        outcomes: ProjectUtils.shuffleOutcomes(),
        goal: ProjectUtils.shuffleGoal()
      };
    });
  };

  const handleAddOutcomeClick = () => {
    if ($ProjectStore.outcomes.length >= 3) return;

    ProjectStore.update((prev) => {
      return {
        ...prev,
        outcomes: [...prev.outcomes, ProjectUtils.shuffleOutcomes()[0]]
      };
    });
  };
</script>

<Section gap={false} surface="light" bordered prose>
  <Highlight>Workbook #1</Highlight>
  <div class="flex flex-col gap">
    <p class="header">
      <span>“We hired Main Street to</span>
      {#each $ProjectStore.outcomes as outcome, index}
        <EditableText value={outcome} {index} length={$ProjectStore.outcomes.length} type="outcome" />
      {/each}
      {#if $ProjectStore.outcomes.length < 3}<ActionButton
          label="Add"
          icon="plus"
          positionOverrideType="editable_text"
          on:click={handleAddOutcomeClick}
        />{/if}<ActionButton
        label="Shuffle"
        icon="refresh"
        positionOverrideType="editable_text"
        on:click={handleShuffleClick}
      />
    </p>
    <p class="header">
      <span>Our </span>
      <EditableText index={0} length={0} bind:value={$ProjectStore.goal} type="goal" />
      <span> in 90 days.”</span>
    </p>
    <p class="header-weak opacity-70">— You, in 90 days.</p>
  </div>
</Section>
<Section prose>
  <Accordion title="Why we require a 90-day goal.">
    Lorem ipsum is old text used in the copywriting industry to indicate an area that isn’t final yet.
  </Accordion>
</Section>

<style lang="postcss">
  p {
    line-height: 1.5;
  }

  @screen md {
    p {
      line-height: 1.35;
    }
  }
</style>
