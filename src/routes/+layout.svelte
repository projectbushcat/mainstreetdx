<script lang="ts">
  import "$lib/styles/app.scss";
  import ActionLink from "$lib/ui/ActionLink.svelte";
  import Highlight from "$lib/ui/Highlight.svelte";
  import Section from "$lib/ui/Section.svelte";
  import {
    ProjectBookAnIntroCallHref,
    ProjectEmailAddress,
    ProjectLinkedInHref
  } from "$lib/workbooks/Project";

  const currentYear = new Date().getFullYear();
</script>

<header class="bg-white">
  <Section>
    <div class="flex flex-col items-center gap-4 md:justify-between md:flex-row">
      <a
        href="/"
        class="focus:outline-main-green focus:outline-offset-4"
        aria-label="Main Street Digital Transformation - Homepage"
      >
        <img src="/wordmark.svg" alt="Main Street DX (Digital Transformation)" />
      </a>
      <div class="flex items-center gap-md">
        <ActionLink href={ProjectBookAnIntroCallHref} label="Book a call" icon="support" />
        <Highlight>Times available</Highlight>
      </div>
    </div>
  </Section>
</header>
<main class="bg-white rounded-b-[1rem] md:rounded-b-[2rem]">
  <slot />
</main>
<footer>
  <Section surface="dark">
    <ul class="flex flex-col gap-lg">
      <li>
        <a
          href="/"
          class="focus:outline-main-green focus:outline-offset-4"
          aria-label="Main Street Digital Transformation - Homepage"
        >
          <img src="/wordmark-bw.svg" alt="Main Street DX (Digital Transformation)" />
        </a>
      </li>
      <li>
        <p class="text-label">Made with ♡ in a thriving small town.</p>
      </li>
      <li>
        <ActionLink href={ProjectBookAnIntroCallHref} label="Book a call" icon="support" />
      </li>
      <li>
        <ActionLink href={`mailto:${ProjectEmailAddress}`} label={ProjectEmailAddress} icon="email" />
      </li>
      <li>
        <ActionLink href={ProjectLinkedInHref} label="Connect with us" icon="linkedin" />
      </li>
      <li>
        <ActionLink href="/privacy-policy" label="Privacy policy" icon="link" />
      </li>
    </ul>
    <div class="text-main-gray opacity-70 flex flex-col gap-4">
      <p>&copy; {currentYear} Main Street Digital Transformation Services, LLC.</p>
    </div>
  </Section>
</footer>
