<script lang="ts">
  import { slide } from "svelte/transition";
  import Icon from "./icons/Icon.svelte";
  import type { ColorName } from "$lib/data/ColorName";

  export let expanded: boolean = false;
  export let title: string;
  export let bg: ColorName = "surface-green";

  const id = crypto.randomUUID();

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "Escape" && expanded) {
      expanded = false;
    }
  };
</script>

<article
  class="flex flex-col gap-8 transition-all"
  class:bg-surface-green={expanded && bg === "surface-green"}
  class:bg-main-yellow={expanded && bg === "main-yellow"}
  class:border-black={expanded && bg === "main-yellow"}
  class:border-2={expanded}
  class:rounded-2xl={expanded}
  class:p-4={expanded}
  class:my-4={expanded}
>
  <h3>
    <button
      aria-expanded={expanded}
      aria-controls={id}
      class="flex text-left gap-2 rounded focus:ring-2 focus:ring-main-green"
      on:click={() => (expanded = !expanded)}
      on:keyup={handleKeyUp}
    >
      <span class="h-[30px] inline-flex items-center">
        <Icon icon={expanded ? "minus_circle" : "plus_circle"} />
      </span>
      <span
        class="underline-offset-2 hover:underline text-headline flex-1"
        class:underline={expanded}>{title}</span
      >
    </button>
  </h3>
  <section {id} class:hidden={!expanded} aria-live="polite">
    {#if expanded}
      <div class="text-body flex flex-col gap-8" in:slide out:slide>
        <slot />
      </div>
    {/if}
  </section>
</article>
