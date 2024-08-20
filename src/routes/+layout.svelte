<script lang="ts">
  import Footer from "$lib/sections/global/Footer.svelte";
  import "$lib/styles/app.scss";
</script>

<main>
  <slot />
  <Footer />
</main>

<style lang="scss">
  :global(main > *) {
    margin-top: -32px;
    position: relative;
  }

  @for $i from 1 through 9 {
    :global(main > *:nth-child(#{$i})) {
      z-index: #{8 - $i};
    }
  }
</style>
