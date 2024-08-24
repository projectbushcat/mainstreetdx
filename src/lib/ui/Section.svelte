<script lang="ts">
  import type { ColorName } from "$lib/data/ColorName";

  export let bg: ColorName = "white";
  export let name: string | undefined = undefined;
  export let rounded: boolean = true;
  export let bottom_border: boolean = false;
</script>

<section
  class:rounded-bl-4xl={rounded}
  class:rounded-br-4xl={rounded}
  class:bg-surface-green={bg === "surface-green"}
  class:bg-surface-blue={bg === "surface-blue"}
  class:bg-surface-yellow={bg === "surface-yellow"}
  class:bg-surface-orange={bg === "surface-orange"}
  class:bg-surface-gray={bg === "surface-gray"}
  class:bg-main-green={bg === "main-green"}
  class:bg-main-yellow={bg === "main-yellow"}
  class:bg-main-blue={bg === "main-blue"}
  class:bg-black={bg === "black"}
  class:bg-white={bg === "white"}
  class:text-white={bg === "black" || bg === "main-green" || bg === "main-blue"}
  class:relative={typeof name !== "undefined"}
  class:border-b-2={bottom_border}
  class:border-b-main-green={bottom_border && bg === "surface-green"}
  class:border-b-main-blue={bottom_border && bg === "surface-blue"}
  class:border-b-main-yellow={bottom_border && bg === "surface-yellow"}
  class:border-b-main-orange={bottom_border && bg === "surface-orange"}
  class:border-b-main-gray={bottom_border && bg === "surface-gray"}
>
  {#if name}
    <a id={name} class="absolute top-8"><span class="sr-only">Named anchor for {name}</span></a
    >{/if}
  <div class="max-w-prose m-auto pt-24 px-8 pb-8 flex flex-col gap-8">
    <slot />
  </div>
  <slot name="full-width" />
</section>
