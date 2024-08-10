<script lang="ts">
  import Accordion from "$lib/ui/Accordion.svelte";
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
    header="Main Street’s partner for digital transformation."
    subhead="We help entrepreneurial businesses implement cutting-edge technology that drives community-lead growth."
  ></SectionHeader>
</Section>
<article class="bg-surface-dark md:pb md:rounded-[2rem]">
  <Section>
    <SectionHeader
      header="Experience our expertise."
      subhead="Get an action plan tailored to your most important goals for free, using the interactive workbooks below."
    />
  </Section>
  <ProjectBriefWorkbook></ProjectBriefWorkbook>
  <ProjectBudgetWorkbook></ProjectBudgetWorkbook>
  <ProjectKickoffWorkbook></ProjectKickoffWorkbook>
</article>
<Section>
  <SectionHeader header="Our mission is to empower Main Street with a future-looking perspective.">
    <Accordion title="Meet your digital superpower 👋">
      <p>
        We're digital natives with decades of experience across advertising, startups, and enterprise
        transformation. We know that a thriving small town starts with the entrepreneurs that call it home,
        which is why our mission is to partner with you on your hardest digital challenges — so that you can
        focus on serving your community.
      </p>
      <p></p>
    </Accordion>
  </SectionHeader>
</Section>
