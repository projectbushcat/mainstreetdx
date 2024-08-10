<script lang="ts">
  import Accordion from "$lib/ui/Accordion.svelte";
  import ActionButton from "$lib/ui/ActionButton.svelte";
  import EditableText from "$lib/ui/EditableText.svelte";
  import Highlight from "$lib/ui/Highlight.svelte";
  import Section from "$lib/ui/Section.svelte";
  import SectionHeader from "$lib/ui/SectionHeader.svelte";
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

<!-- subhead="Frame your project like a testimonial, so we're all on the same page." -->
<Section surface="light" bordered prose>
  <SectionHeader id="brief" actionable level={3} header="How can we help?">
    <Highlight slot="highlight">Workbook</Highlight>
  </SectionHeader>
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
    <div>
      <p class="header">
        <span>Our </span>
        <EditableText index={0} length={0} bind:value={$ProjectStore.goal} type="goal" />
        <span> in 90 days.”</span>
      </p>
      <p class="header-weak opacity-70">— You, in 90 days.</p>
    </div>
  </div>
</Section>
<Section prose>
  <Accordion title="90-day goals drive outcomes.">
    Lorem ipsum is old text used in the copywriting industry to indicate an area that isn’t final yet.
  </Accordion>
</Section>

<style lang="postcss">
  p {
    line-height: 1.35;
  }

  @screen md {
    p {
      line-height: 1.35;
    }
  }
</style>
