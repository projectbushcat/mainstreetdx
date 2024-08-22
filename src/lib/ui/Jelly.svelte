<script lang="ts">
  import type { ColorName } from "$lib/data/ColorName";
  import { spring } from "svelte/motion";
  import Icon from "./icons/Icon.svelte";
  import { slide } from "svelte/transition";

  export let bg: ColorName;
  export let action: string;
  export let width: "half" | "full" = "full";
  export let type: "expandable" | "link" = "expandable";
  export let title: string | undefined = undefined;
  export let href: string | undefined = undefined;
  export let target: "_blank" | "_self" = "_blank";

  const id = crypto.randomUUID();

  const defaultPadding = () => ({
    container: 0,
    triggerT: type === "link" ? 1 : width === "half" ? 10 : 2,
    triggerX: type === "link" ? 1 : width === "half" ? 1 : 2,
    triggerB: type === "link" ? 1 : width === "half" ? 1 : 2
  });

  const defaultHeight = 12;

  let expanded = false;

  let padding = spring(defaultPadding(), {
    damping: 0.45
  });

  let height = spring(defaultHeight, {
    damping: 0.35
  });

  const handleHover = () => {
    if (expanded) return;

    padding.set({
      ...defaultPadding(),
      container: 0.25,
      triggerT: type === "link" ? 1 : width === "half" ? 9.5 : 1.75,
      triggerB: type === "link" ? 1 : width === "half" ? 1 : 1.75
    });

    if (type === "link") height.set(11.5);
  };

  const handleLeave = () => {
    if (expanded) return;

    padding.set({
      ...defaultPadding(),
      container: 0
    });

    if (type === "link") height.set(defaultHeight);
  };

  const handleExpandClick = () => {
    expanded = !expanded;

    if (expanded) {
      padding.set({
        container: 0,
        triggerT: 1,
        triggerX: 1,
        triggerB: 1
      });
    } else {
      padding.set(defaultPadding());
    }
  };
</script>

<li
  style="padding: {$padding.container}rem; grid-column: {width === 'half' && expanded
    ? 'span 2'
    : 'span 1'}"
  on:mouseenter={handleHover}
  on:touchstart={handleHover}
  on:mouseleave={handleLeave}
  on:touchend={handleLeave}
>
  <div
    class="ring-2 border-2 border-white rounded-[18px] m-auto"
    class:bg-main-green={bg === "main-green"}
    class:bg-main-yellow={bg === "main-yellow"}
    class:bg-main-blue={bg === "main-blue"}
    class:bg-main-gray={bg === "main-gray"}
    class:bg-main-orange={bg === "main-orange"}
    class:text-white={bg !== "main-orange" && bg !== "main-yellow"}
    class:text-black={bg === "main-orange" || bg === "main-yellow"}
    class:ring-main-green={bg === "main-green"}
    class:ring-main-yellow={bg === "main-yellow"}
    class:ring-main-blue={bg === "main-blue"}
    class:ring-main-gray={bg === "main-gray"}
    class:ring-main-orange={bg === "main-orange"}
  >
    {#if type === "expandable"}
      <button
        style="padding-top: {$padding.triggerT}rem; padding-left: {$padding.triggerX}rem; padding-right: {$padding.triggerX}rem; padding-bottom: {$padding.triggerB}rem;"
        class="text-left inline-flex w-full gap-1 text-headline focus:ring focus:rounded-[18px] focus:ring-inset hover:underline"
        class:underline={expanded}
        aria-expanded={expanded}
        aria-controls={id}
        on:click={handleExpandClick}
      >
        <span class="inline-flex items-center h-[30px]">
          <Icon
            bg={bg === "main-yellow" || bg === "main-orange" ? "black" : "white"}
            icon={expanded ? "minus_circle" : "plus_circle"}
          />
        </span>
        {action}
      </button>
      {#if expanded}
        <div {id} in:slide out:slide class="p-4 pt-0" aria-live="polite">
          <slot />
        </div>
      {/if}
    {:else if type === "link"}
      <a
        {href}
        {target}
        class="flex flex-col justify-between hover:underline underline-offset-2"
        style="padding-top: {$padding.triggerT}rem; padding-left: {$padding.triggerX}rem; padding-right: {$padding.triggerX}rem; padding-bottom: {$padding.triggerB}rem; height: {$height}rem;"
      >
        <span class="text-headline pr-2 underline-offset-2">{title}</span>
        <span class="text-body inline-flex items-center gap-1">
          <Icon
            icon={target === "_blank" ? "external_link" : "link"}
            bg={bg === "main-yellow" || bg === "main-orange" ? "black" : "white"}
          />
          <span class="underline-offset-2">{action}</span>
        </span>
      </a>
    {/if}
  </div>
</li>
