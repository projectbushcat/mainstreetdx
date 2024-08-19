<script lang="ts">
  import Icon from "./icons/Icon.svelte";

  export let expanded: boolean = false;
  export let surface: "dark" | "light" = "dark";
  export let emoji: string | undefined = undefined;
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
  class:bg-surface-dark={expanded && surface === "dark"}
  class:bg-surface-light={expanded && surface === "light"}
  class:ring-2={expanded && surface === "light"}
  class:ring-surface-light={expanded && surface === "light"}
  class:border-2={expanded && surface === "light"}
  class:border-surface-dark={expanded && surface === "light"}
  class:rounded={expanded}
  class:p-lg={expanded}
>
  <h3 class="header-weak flex gap-md items-baseline justify-start hover:text-black">
    {#if emoji && !expanded}
      <span role="presentation">{emoji}</span>
    {:else}
      <Icon icon={expanded ? "minus_circle" : "plus_circle"} />
    {/if}
    <button
      aria-expanded={expanded}
      aria-controls={id}
      on:click={() => (expanded = !expanded)}
      class="text-left underline underline-offset-2 focus:ring-2 focus:ring-main-green focus:rounded active:outline-main-green focus:outline-main-green"
      on:keyup={handleKeyUp}>{title}</button
    >
  </h3>
  <section {id} class="text-accordion flex flex-col gap-lg print:block" class:hidden={!expanded}>
    <slot />
  </section>
</article>
