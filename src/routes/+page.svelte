<script lang="ts">
  import Accordion from "$lib/ui/Accordion.svelte";
  import EditableText from "$lib/ui/EditableText.svelte";
  import Highlight from "$lib/ui/Highlight.svelte";
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
<article>
  <Section>
    <SectionHeader
      standalone
      header="Main Street’s partner for digital transformation."
      subhead="We help entrepreneurial businesses implement cutting-edge technology that drives community-lead growth."
    ></SectionHeader>
  </Section>
</article>
<!-- <article> -->
<!-- <Section surface="md:dark">
    
  </Section> -->
<Section>
  <SectionHeader
    header="Experience our expertise."
    subhead="Get an action plan tailored to your most important goals for free, using the interactive workbooks below."
  >
    <!-- <Highlight slot="highlight">Free resource</Highlight> -->
  </SectionHeader>
</Section>
<ProjectBriefWorkbook></ProjectBriefWorkbook>
<!-- </article>
<article>
  <Section surface="md:dark">
    <SectionHeader
      actionable
      header="Step 2: Working model"
      subhead="Our services adapt to your budget to deliver expert insight at every phase and scale of business."
    />
  </Section> -->
<ProjectBudgetWorkbook></ProjectBudgetWorkbook>
<!-- </article>
<article>
  <Section surface="md:dark">
    <SectionHeader
      actionable
      header="Step 3: Take action"
      subhead="We'll generate an action plan, ask any follow-up questions, and  offer to schedule a kickoff."
    />
  </Section> -->
<ProjectKickoffWorkbook></ProjectKickoffWorkbook>
<!-- </article> -->
