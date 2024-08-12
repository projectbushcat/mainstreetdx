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
    subhead="We help entrepreneurial businesses implement cutting-edge technology that drives community-led growth."
  ></SectionHeader>
</Section>
<article class="bg-surface-dark md:pb md:rounded-[2rem]">
  <Section>
    <SectionHeader
      header="Experience our expertise — for free."
      subhead="Get an instant action plan tailored to your most important goal, using the interactive workbooks below."
    />
  </Section>
  <ProjectBriefWorkbook></ProjectBriefWorkbook>
  <ProjectBudgetWorkbook></ProjectBudgetWorkbook>
  <ProjectKickoffWorkbook></ProjectKickoffWorkbook>
</article>
<Section>
  <SectionHeader header="Our mission is to empower Main Street with future-ready digital solutions.">
    <Accordion emoji="👋" title="Meet your digital superpower">
      <SectionHeader
        header="With our roots in advertising, startups, and enterprise transformation, we bring big-tech expertise to
        local challenges."
        level={3}
      />
      <p>
        We're driven by a simple belief: empowered entrepreneurs build thriving communities. Which is why our
        mission is to partner with you on your hardest digital challenges — so that you can focus on serving
        your community.
      </p>
      <h3 class="header-weak">
        As entrepreneurs ourselves, we understand the power of collaboration and the value of a good
        conversation about your business.
      </h3>
      <p>
        When you partner with Main Street DX, you're not just getting a service provider; you're gaining a
        dedicated ally on your journey. We've walked in your shoes, faced similar challenges, and know how to
        leverage technology to overcome them. Together, we can accomplish more than you might imagine —
        turning digital challenges into stepping stones for growth, innovation, and community impact.
      </p>
    </Accordion>
  </SectionHeader>
</Section>
