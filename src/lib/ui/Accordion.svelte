<script lang="ts">
  import Icon from "./Icon.svelte";

  export let expanded: boolean = false;
  export let title: string;

  const id = crypto.randomUUID();

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "Escape" && expanded) {
      expanded = false;
    }
  };
</script>

<article class="transition-all" class:bg-surface-dark={expanded} class:rounded={expanded}>
  <h3
    class="header flex gap-md items-baseline justify-start transition-all hover:text-black"
    class:header-weak={!expanded}
    class:p={expanded}
    class:pb-0={expanded}
  >
    <Icon icon={expanded ? "minus_circle" : "plus_circle"} positionOverrideType="accordion" />
    <button
      aria-expanded={expanded}
      aria-controls={id}
      on:click={() => (expanded = !expanded)}
      class="text-left focus:ring-2 focus:ring-main-green focus:rounded active:outline-main-green focus:outline-main-green"
      on:keyup={handleKeyUp}>{title}</button
    >
  </h3>
  <section {id} class="text-accordion p-0 transition-all" class:hidden={!expanded} class:p-8={expanded}>
    <slot />
  </section>
</article>
