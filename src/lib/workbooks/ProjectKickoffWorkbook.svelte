<script lang="ts" context="module">
  export type Phases = "action_plan" | "analyzing" | "additional_questions" | "final_review";
  export interface PhaseLabel {
    header: string;
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

  let phase: Phases = "action_plan";

  const phase_labels: Record<Phases, PhaseLabel> = {
    action_plan: { header: "Get your action plan.", actionable: true },
    analyzing: { header: "Analyzing…" },
    additional_questions: { header: "We have some additional questions about your project." },
    final_review: { header: "Final review" }
  };
</script>

<Section surface="light" bordered prose>
  <SectionHeader
    header={phase_labels[phase].header}
    subhead={phase_labels[phase].subhead}
    actionable={phase_labels[phase].actionable}
    form_notice={phase_labels[phase].form_notice}
  >
    <Highlight slot="highlight">Workbook</Highlight>
  </SectionHeader>

  {#if phase === "action_plan"}
    <ProjectSummary />
    <ButtonLabel label="Next step:">
      <Button>Generate action plan</Button>
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
