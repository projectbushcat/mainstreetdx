<script lang="ts">
  import Icon from "$lib/ui/icons/Icon.svelte";
  import Section from "$lib/ui/Section.svelte";
</script>

<svelte:head>
  <title>Error: 404 | Main Street DX</title>
</svelte:head>

<Section bg="main-green">
  <h1 class="text-hero">
    <span class="block text-subhead">Error: 404</span>
    This page doesn't exist. <span class="opacity-50">That's all we know.</span>
  </h1>
  <p class="text-headline">
    <a class="inline-flex items-center gap-1 underline underline-offset-2" href="/">
      <Icon icon="link" bg="white" />
      Go to the homepage
    </a>.
  </p>
  <div slot="full-width" class="min-h-[380px]"></div>
</Section>
