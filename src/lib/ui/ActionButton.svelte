<script lang="ts">
  import { ActionClassName } from "./Action";
  import Icon from "./Icon.svelte";
  import type { IconName } from "./Icon.svelte";

  export let label: string;
  export let icon: IconName;
  export let positionOverrideType: "editable_text" | undefined = undefined;
  export let type: "submit" | "button" = "button";
</script>

<button {type} class={ActionClassName} class:et={positionOverrideType === "editable_text"} on:click>
  <Icon {icon} className="shrink-0 self-baseline translate-y-[4px]" />
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
