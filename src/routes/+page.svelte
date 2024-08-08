<script lang="ts">
  import Section from "$lib/ui/Section.svelte";
  import SectionHeader from "$lib/ui/SectionHeader.svelte";
  import ProjectBriefWorkbook from "$lib/workbooks/ProjectBriefWorkbook.svelte";
  import ProjectBudgetWorkbook from "$lib/workbooks/ProjectBudgetWorkbook.svelte";
  import ProjectKickoffWorkbook from "$lib/workbooks/ProjectKickoffWorkbook.svelte";
</script>

<Section>
  <SectionHeader
    level={1}
    header="Meet your new superpower."
    subhead="Main Street drives cutting-edge digital outcomes in weeks, not years."
  />
  <SectionHeader
    header="Consulting optimized for speed, impact — and trust."
    subhead="Our innovative per-project model is accessible for every size, shape and phase of business."
  />
  <SectionHeader
    standalone
    header="Put simply: our bias is for action."
    subhead="Use the workbooks below to configure your project and schedule kickoff in ten minutes."
  />
</Section>
<article class="pb">
  <Section>
    <SectionHeader
      actionable
      header="Step 1: Configure your project."
      subhead="Treat it like you’re writing a testimonial about us, so we’re all motivated to make it true."
    />
  </Section>
  <ProjectBriefWorkbook></ProjectBriefWorkbook>
</article>
<article class="pb">
  <Section>
    <SectionHeader
      actionable
      standalone
      header="Step 2: Set budget & duration."
      subhead="Our unique pricing model makes us nimble and efficient. Invoiced every Friday, due by noon Monday."
    />
  </Section>
  <ProjectBudgetWorkbook></ProjectBudgetWorkbook>
</article>
<article class="pb">
  <ProjectKickoffWorkbook></ProjectKickoffWorkbook>
  <!-- <Section>
    <SectionHeader actionable form_notice header="Step 3: Project Kickoff" />
  </Section> -->
</article>
