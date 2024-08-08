<script lang="ts">
  import { ActionClassName } from "./Action";
  import Icon from "./Icon.svelte";
  import type { IconName } from "./Icon.svelte";

  export let label: string;
  export let icon: IconName;
  export let href: string;
</script>

<a {href} class={ActionClassName}>
  <Icon {icon} />
  <span class="underline underline-offset-2">
    {label}
  </span>
</a>
