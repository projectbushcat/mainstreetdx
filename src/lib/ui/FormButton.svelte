<script lang="ts">
  import type { ColorName } from "$lib/data/ColorName";

  export let label: string;
  export let value: string;
  export let bg: ColorName;
  export let secondary: boolean = false;
  export let disabled: boolean = false;
  export let type: "submit" | "button" = "button";

  const id = crypto.randomUUID();
</script>

<nav class="flex flex-col items-end gap-4">
  <label for={id} class="text-label">{label}</label>
  <input
    {id}
    {type}
    {value}
    {disabled}
    on:click
    class="px-8 py-4 max-w-max text-label underline underline-offset-2 ring-2 border-2 border-white rounded-lg active:ring-0 enabled:active:scale-95 transition-all duration-75 disabled:opacity-50 disabled:ring-0 active:no-underline disabled:no-underline disabled:active:animate-shake"
    class:self-start={secondary}
    class:bg-main-green={bg === "main-green"}
    class:bg-main-yellow={bg === "main-yellow"}
    class:bg-main-blue={bg === "main-blue"}
    class:bg-main-gray={bg === "main-gray"}
    class:bg-main-orange={bg === "main-orange"}
    class:bg-surface-green={bg === "surface-green"}
    class:bg-surface-yellow={bg === "surface-yellow"}
    class:bg-surface-blue={bg === "surface-blue"}
    class:bg-surface-gray={bg === "surface-gray"}
    class:bg-surface-orange={bg === "surface-orange"}
    class:text-white={!secondary && bg !== "main-orange" && bg !== "main-yellow"}
    class:text-black={secondary || bg === "main-orange" || bg === "main-yellow"}
    class:ring-main-green={bg === "main-green" || bg === "surface-green"}
    class:ring-main-yellow={bg === "main-yellow" || bg === "surface-yellow"}
    class:ring-main-blue={bg === "main-blue" || bg === "surface-blue"}
    class:ring-main-gray={bg === "main-gray" || bg === "surface-gray"}
    class:ring-main-orange={bg === "main-orange" || bg === "surface-orange"}
  />
</nav>
