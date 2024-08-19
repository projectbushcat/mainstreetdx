<script lang="ts">
  import { Calendly30Min } from "$lib/data/MainStreet";
  import Link from "$lib/ui/Link.svelte";
  import Section from "$lib/ui/Section.svelte";
</script>

<Section bg="surface-green">
  <div>
    <a href="/" aria-label="Homepage - Main Street DX" aria-current="page">
      <img
        src="wordmark.svg"
        width="201"
        height="51"
        alt=""
        role="presentation"
        class="inline-block"
      />
    </a>
  </div>
  <h1 class="text-headline md:text-hero">
    Digital transformation for <span
      class="indent-[-100000px] inline-block w-[123px] h-[54px] -translate-x-2 xs:translate-x-0 align-middle"
      style="background-image: url(/decorations/iconic.svg);">iconic</span
    > local businesses.
  </h1>
  <p class="text-subhead">
    We help entrepreneurs from all backgrounds grow their business using technology.
  </p>
  <ul class="flex flex-col gap-4">
    <li>
      <Link href="#easy-street" icon="compass" label="Explore our free resources" />
    </li>
    <li>
      <Link href={Calendly30Min} icon="phone" label="Schedule a free consultation" />
    </li>
  </ul>
</Section>
