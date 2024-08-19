<script lang="ts">
  import type { ColorName } from "$lib/data/ColorName";

  export let bg: ColorName = "white";
</script>

<section
  class="rounded-bl-4xl rounded-br-4xl"
  class:bg-surface-green={bg === "surface-green"}
  class:bg-surface-blue={bg === "surface-blue"}
  class:bg-surface-yellow={bg === "surface-yellow"}
  class:bg-surface-orange={bg === "surface-orange"}
  class:bg-surface-gray={bg === "surface-gray"}
  class:bg-main-yellow={bg === "main-yellow"}
  class:bg-black={bg === "black"}
  class:bg-white={bg === "white"}
  class:text-white={bg === "black"}
>
  <div class="max-w-prose m-auto pt-24 px-8 pb-8 flex flex-col gap-8">
    <slot />
  </div>
  <slot name="full-width" />
</section>
