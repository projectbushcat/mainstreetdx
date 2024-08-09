<script lang="ts">
  import Section from "$lib/ui/Section.svelte";
  import SectionHeader from "$lib/ui/SectionHeader.svelte";
  import ProjectBriefWorkbook from "$lib/workbooks/ProjectBriefWorkbook.svelte";
  import ProjectBudgetWorkbook from "$lib/workbooks/ProjectBudgetWorkbook.svelte";
  import ProjectKickoffWorkbook from "$lib/workbooks/ProjectKickoffWorkbook.svelte";
</script>

<svelte:head>
  <title
    >Main Street DX | Digital transformation and business consulting services for local businesses and
    organizations | Meet your digital superpower optimized for speed, outcome and trust</title
  >
  <meta
    name="description"
    content="Meet your digital superpower: Main Street helps your business get the most out of tech. We prioritize speed, outcome — and trust. Our POV is shaped by decades of experience: ship fast, move the needle, and be accountable."
  />
</svelte:head>

<Section>
  <SectionHeader
    level={1}
    header="Meet your digital superpower."
    subhead="Main Street delivers cutting-edge outcomes in weeks, not months."
  />
  <SectionHeader
    header="Consulting optimized for speed, impact — and trust."
    subhead="Our innovative per-project model is accessible for every size, shape and phase of business."
  />
  <SectionHeader
    standalone
    header="Put simply: our bias is for action."
    subhead="Use the workbooks below to configure your project and schedule kickoff in ten minutes, tops."
  />
</Section>
<article class="pb">
  <Section>
    <SectionHeader
      id="brief"
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
      header="Step 2: Set budget & duration."
      subhead="Our per-project working model makes us nimble and efficient. Invoiced every Friday, due by noon Monday."
    />
  </Section>
  <ProjectBudgetWorkbook></ProjectBudgetWorkbook>
</article>
<article class="pb">
  <ProjectKickoffWorkbook></ProjectKickoffWorkbook>
</article>
