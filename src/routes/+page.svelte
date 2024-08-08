<script lang="ts">
  import Section from "$lib/ui/Section.svelte";
  import SectionHeader from "$lib/ui/SectionHeader.svelte";
  import ProjectBriefWorkbook from "$lib/workbooks/ProjectBriefWorkbook.svelte";
  import ProjectBudgetWorkbook from "$lib/workbooks/ProjectBudgetWorkbook.svelte";
  import ProjectKickoffWorkbook from "$lib/workbooks/ProjectKickoffWorkbook.svelte";
  const hi = "hello";
</script>

<Section>
  <SectionHeader
    level={1}
    header="Meet your digital superpower."
    subhead="Main Street helps your business get the most out of tech."
  />
  <SectionHeader
    header="We prioritize speed, outcome — and trust."
    subhead="Our POV is shaped by decades of experience: ship fast, move the needle, and be accountable."
  />
  <SectionHeader
    standalone
    header="Put simply, we prefer to show instead of tell."
    subhead="Use the workbooks below to explore offerings, answer any immediate questions, and schedule kickoff."
  />
</Section>
<article class="pb">
  <Section>
    <SectionHeader
      actionable
      header="Step 1: Build your project's brief."
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
  <Section>
    <SectionHeader
      standalone
      actionable
      header="Step 3: Schedule Kickoff"
      subhead={`Everything you send to us is covered by our <a href="/customer-policy">standard customer policy</a>.`}
    />
  </Section>
  <ProjectKickoffWorkbook></ProjectKickoffWorkbook>
</article>
