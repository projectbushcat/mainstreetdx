<script lang="ts">
  import { page } from "$app/stores";
  import Footer from "$lib/sections/global/Footer.svelte";
  import "$lib/styles/app.scss";
</script>

<main
  class:bg-surface-green={$page.data.bg === "surface-green"}
  class:bg-surface-yellow={$page.data.bg === "surface-yellow"}
  class:bg-surface-orange={$page.data.bg === "surface-orange"}
  class:bg-surface-gray={$page.data.bg === "surface-gray"}
  class:bg-surface-blue={$page.data.bg === "surface-blue"}
>
  <slot />
  <Footer />
</main>

<style lang="scss">
  :global(main > *) {
    margin-top: -32px;
    position: relative;
  }

  @for $i from 1 through 10 {
    :global(main > *:nth-child(#{$i})) {
      z-index: #{9 - $i};
    }
  }
</style>
