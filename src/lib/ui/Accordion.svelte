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

<article
  class="transition-all flex flex-col gap-lg"
  class:bg-surface-dark={expanded}
  class:rounded={expanded}
  class:p-lg={expanded}
  class:md:p={expanded}
>
  <h3 class="header-weak flex gap-md items-baseline justify-start hover:text-black">
    <Icon
      icon={expanded ? "minus_circle" : "plus_circle"}
      positionOverrideType="accordion"
      className="shrink-0"
    />
    <button
      aria-expanded={expanded}
      aria-controls={id}
      on:click={() => (expanded = !expanded)}
      class="text-left focus:ring-2 focus:ring-main-green focus:rounded active:outline-main-green focus:outline-main-green"
      on:keyup={handleKeyUp}>{title}</button
    >
  </h3>
  <section {id} class="text-accordion flex flex-col gap-lg" class:hidden={!expanded}>
    <slot />
  </section>
</article>
