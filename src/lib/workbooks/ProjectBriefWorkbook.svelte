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
  <Accordion title="90-day goals drive outcomes." surface="light">
    <SectionHeader
      header="Let's talk 90-day goals."
      subhead="This powerful technique isn't just about setting targets — it's about creating a roadmap for success."
      level={4}
    />
    <p>Here's a helpful framework:</p>
    <ol class="list-decimal ml-[1rem]">
      <li><strong>Envision:</strong> Where do you want your business to be in 90 days?</li>
      <li><strong>Specify:</strong> What 3-5 key objectives will get you there?</li>
      <li><strong>Plan:</strong> Break each objective into weekly actionable tasks.</li>
      <li><strong>Execute:</strong> Commit to your plan, but stay flexible.</li>
      <li><strong>Review:</strong> At day 90, celebrate wins and learn from challenges.</li>
    </ol>
    <p>This process, when repeated, creates a rhythm of continuous improvement.</p>
    <p>
      Whether you're working with us or charting your own course, mastering 90-day goal setting is a skill
      that will serve you throughout your entrepreneurial journey.
    </p>
    <p>Need help refining your goals? That's where our expertise comes in.</p>
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
