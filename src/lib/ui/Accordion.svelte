<script lang="ts">
  import Icon from "./icons/Icon.svelte";

  export let expanded: boolean = false;
  export let title: string;

  const id = crypto.randomUUID();

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "Escape" && expanded) {
      expanded = false;
    }
  };
</script>

<article
  class="flex flex-col gap-4"
  class:bg-surface-green={expanded}
  class:rounded-2xl={expanded}
  class:p-4={expanded}
>
  <h3>
    <button
      aria-expanded={expanded}
      aria-controls={id}
      on:click={() => (expanded = !expanded)}
      class="flex text-left gap-2 rounded focus:ring-2 focus:ring-main-green"
      on:keyup={handleKeyUp}
    >
      <span class="h-[30px] inline-flex items-center">
        <Icon icon={expanded ? "minus_circle" : "plus_circle"} />
      </span>
      <span class="hover:underline text-headline flex-1" class:underline={expanded}>{title}</span>
    </button>
  </h3>
  <section {id} class="text-body flex flex-col gap-4 print:block" class:hidden={!expanded}>
    <slot />
  </section>
</article>
