<script lang="ts">
  import type { IconName } from "$lib/data/IconName";
  import Icon from "./icons/Icon.svelte";

  export let icon: IconName;
  export let href: string;
  export let label: string;
  export let target: "_blank" | "_self" = "_self";
</script>

<a
  {href}
  {target}
  class="text-label text-main-gray hover:text-black inline-flex items-center gap-1"
>
  <Icon {icon} bg="black" />
  <span class="underline underline-offset-2">{label}</span>
</a>
