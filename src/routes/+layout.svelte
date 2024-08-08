<script lang="ts">
  import "$lib/styles/app.scss";
  import ActionLink from "$lib/ui/ActionLink.svelte";
  import Highlight from "$lib/ui/Highlight.svelte";
  import Section from "$lib/ui/Section.svelte";
  import { BookAnIntroCallHref } from "$lib/workbooks/ProjectKickoff";

  const currentYear = new Date().getFullYear();
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

<header>
  <Section>
    <div class="flex flex-col items-center gap-4 md:justify-between md:flex-row">
      <a
        href="/"
        class="focus:outline-main-green focus:outline-offset-4"
        aria-label="Main Street Digital - Homepage"
        aria-current="page"
      >
        <img src="/wordmark.svg" alt="Main Street Digital" />
      </a>
      <div class="flex items-center gap-md">
        <ActionLink href={BookAnIntroCallHref} label="Book a call" icon="support" />
        <Highlight>Times available</Highlight>
      </div>
    </div>
  </Section>
</header>
<slot></slot>
<footer>
  <Section>
    <div class="text-main-gray opacity-70 flex flex-col gap-4">
      <p>&copy; {currentYear} Main Street Digital Transformation Services, LLC.</p>
      <!-- <p>*Offer valid for our hometown of Bentonville, AR. &lt;3</p> -->
    </div>
  </Section>
</footer>
