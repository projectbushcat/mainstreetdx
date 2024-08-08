<script lang="ts">
  export let type: "submit" | "reset" | "button" = "button";
</script>

<button
  {type}
  on:click
  class="px-4 py-2 outline outline-2 outline-white ring-4 ring-main-green bg-main-green text-label rounded hover:bg-main-green-h hover:ring-main-green-h"
>
  <slot />
</button>

<style lang="scss">
  button {
    max-width: max-content;
    color: #fff;

    &:hover {
      color: #fff;
    }
  }
</style>
