<script lang="ts">
  import { ActionClassName } from "./Action";
  import Icon from "./Icon.svelte";
  import type { IconName } from "./Icon.svelte";

  export let label: string;
  export let icon: IconName;
  export let href: string;
  export let target: "_blank" | undefined = undefined;

  $: ariaLabel = target === "_blank" ? "(opens in new window)" : undefined;
</script>

<a {href} class={ActionClassName} {target} aria-label={ariaLabel}>
  <Icon {icon} />
  <span class="underline underline-offset-2">
    {label}
  </span>
</a>
