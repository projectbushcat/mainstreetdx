<script lang="ts">
  import { AllResources, FreeResourceUtils } from "$lib/data/EasyStreet";
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
  <Section bg="surface-green" rounded={false}>
    <dl class="flex flex-col gap-4">
      <dt>
        <a href="/" aria-label="Main Street DX: Homepage">
          <img
            src="/wordmark-bw.svg"
            width="201"
            height="51"
            alt=""
            role="presentation"
            class="inline-block"
          />
        </a>
      </dt>
      <dd class="text-label">Made with ♡ in Bentonville, AR.</dd>
    </dl>
    <dl class="flex flex-col gap-4">
      <dt class="text-label">Contact Michael Griffith at Main Street DX:</dt>
      <dd>
        <Link href={Calendly30Min} icon="phone" label="Schedule a free consultation" />
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
    <dl class="flex flex-col gap-4 mt-8">
      <dt>
        <a
          href="/easy-street"
          aria-label="Easy Street: Free resources for entrepreneurs from Main Street DX"
        >
          <img
            src="/wordmark-es.svg"
            width="138"
            height="72"
            alt=""
            role="presentation"
            class="inline-block"
          />
        </a>
      </dt>
      <dd class="text-label">Free resources for entrepreneurs and small businesses.</dd>
      {#each AllResources as item}
        <dd>
          <Link href={FreeResourceUtils.getHref(item)} icon="link" label="How to: {item.name}" />
        </dd>
      {/each}
    </dl>
    <dl class="flex flex-col gap-4 mt-8">
      <dt class="text-headline">Everything else:</dt>
      <dd>
        <Link href="/#about" icon="link" label="About Main Street DX" />
      </dd>
      <dd>
        <Link href="/privacy-policy" icon="link" label="Privacy Policy" />
      </dd>
      <dd class="text-body">
        <small>&copy; {currentYear} Main Street Digital Transformation Services, LLC.</small>
      </dd>
    </dl>
  </Section>
</footer>
