<script lang="ts">
  import { ActionClassName } from "./Action";
  import Icon from "./Icon.svelte";
  import type { IconName } from "./Icon.svelte";

  export let label: string;
  export let icon: IconName;
  export let positionOverrideType: "editable_text" | undefined = undefined;
</script>

<button class={ActionClassName} class:et={positionOverrideType === "editable_text"} on:click>
  <Icon {icon} />
  <span class="underline underline-offset-2">
    {label}
  </span>
</button>

<style lang="postcss">
  .et {
    transform: translateY(2px);
    @apply px-sm;
  }
</style>
