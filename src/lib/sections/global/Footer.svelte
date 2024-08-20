<script lang="ts">
  import { AllResources } from "$lib/data/EasyStreet";
  import {
    Calendly30Min,
    MainStreetEmailAddress,
    MainStreetLinkedInAddress,
    MainStreetSubstackAddress
  } from "$lib/data/MainStreet";
  import Link from "$lib/ui/Link.svelte";
  import Section from "$lib/ui/Section.svelte";

  let currentYear = new Date().getFullYear();
</script>

<footer>
  <Section bg="surface-green">
    <div>
      <a href="/" aria-label="Homepage - Main Street DX">
        <img
          src="/wordmark-bw.svg"
          width="201"
          height="51"
          alt=""
          role="presentation"
          class="inline-block"
        />
      </a>
    </div>
    <h2 class="text-label">Made with ♡ in Bentonville, AR.</h2>
    <dl class="flex flex-col gap-4">
      <dt class="text-headline">Contact Michael Griffith at Main Street DX:</dt>
      <dd>
        <Link href={Calendly30Min} icon="phone" label="Schedule a free meeting" />
      </dd>
      <dd>
        <Link href="mailto:{MainStreetEmailAddress}" icon="mail" label={MainStreetEmailAddress} />
      </dd>
      <dd>
        <Link href={MainStreetLinkedInAddress} icon="linkedin" label="Connect on LinkedIn" />
      </dd>
      <dd>
        <Link href={MainStreetSubstackAddress} icon="bookmark" label="The Loop on Substack" />
      </dd>
    </dl>
    <dl class="flex flex-col gap-4">
      <dt class="text-headline">Resources for entrepreneurs and small businesses:</dt>
      {#each AllResources as item}
        <dd>
          <Link href={item.getHref()} icon="link" label="How to: {item.name}" />
        </dd>
      {/each}
    </dl>
    <dl class="flex flex-col gap-4">
      <dt class="text-headline">Everything else:</dt>
      <dd>
        <Link href="/privacy-policy" icon="link" label="Privacy Policy" />
      </dd>
      <dd class="text-body">
        <small>&copy; {currentYear} Main Street Digital Transformation Services, LLC.</small>
      </dd>
    </dl>
  </Section>
</footer>
