<script lang="ts" context="module">
  export type Phases = "email" | "summary";
  export interface PhaseLabel {
    label: string;
    subhead?: string;
    actionable?: boolean;
    form_notice?: boolean;
  }
</script>

<script lang="ts">
  import Button from "$lib/ui/Button.svelte";
  import ButtonLabel from "$lib/ui/ButtonLabel.svelte";
  import Highlight from "$lib/ui/Highlight.svelte";
  import Icon from "$lib/ui/Icon.svelte";
  import ProjectSummary from "$lib/ui/ProjectSummary.svelte";
  import Section from "$lib/ui/Section.svelte";
  import SectionHeader from "$lib/ui/SectionHeader.svelte";
  import TextInput from "$lib/ui/TextInput.svelte";

  let phase: "email" | "summary" = "summary";

  const phase_labels: Record<Phases, PhaseLabel> = {
    summary: { label: "Your project plan." },
    email: {
      label: "Step 3: Insights and initial questions",
      actionable: true
    }
  };
</script>

<Section surface="light" bordered prose>
  <div>
    <Highlight>Workbook #3</Highlight>
    <SectionHeader
      header={phase_labels[phase].label}
      subhead={phase_labels[phase].subhead}
      actionable={phase_labels[phase].actionable}
      form_notice={phase_labels[phase].form_notice}
    />
  </div>

  {#if phase === "summary"}
    <ProjectSummary editable />
  {/if}

  {#if phase === "email"}
    <TextInput label="Your email address:" name="email" value="" />
    <ButtonLabel label="Next step:">
      <Button
        on:click={() => {
          phase = "summary";
        }}
      >
        Confirm project details
      </Button>
    </ButtonLabel>
  {/if}

  <p class="text-label">
    <span class="opacity-50">Refer to our </span><a
      href="/privacy-policy"
      target="_blank"
      aria-label="opens in a new window"
      class="inline-flex items-center opacity-50 hover:opacity-100 pr-sm"
    >
      <span class="underline">privacy policy</span>
      <Icon icon="new_window" className="inline-flex translate-y-[2px] opacity-80" />
    </a><span class="opacity-50"> for how we process the data we collect in this workbook.</span>
  </p>
</Section>
