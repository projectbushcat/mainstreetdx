<script lang="ts">
  import type { ColorName } from "$lib/data/ColorName";
  import { spring } from "svelte/motion";

  export let question: string;
  export let answer: string;
  export let bg: ColorName;

  let focused = false;

  $: filled = answer.trim() !== "";

  let fx = spring(
    {
      gap: filled ? 1 : 0.25,
      width: filled ? 100 : 90,
      minHeight: filled ? 3 : 1
    },
    {
      damping: 0.4
    }
  );

  const handleFocus = () => {
    focused = true;

    fx.set({ gap: 1, width: 100, minHeight: 3 });
  };

  const handleBlur = () => {
    focused = false;

    if (!filled) {
      answer = "";
      fx.set({ gap: 0.25, width: 90, minHeight: 1 });
    }
  };
</script>

<label
  class="flex flex-col ring-2 border-2 border-white m-auto rounded-[18px]"
  style="gap: {$fx.gap}rem; width: {$fx.width}%;"
  class:bg-main-green={!focused && !filled && bg === "main-green"}
  class:bg-main-yellow={!focused && !filled && bg === "main-yellow"}
  class:bg-main-blue={!focused && !filled && bg === "main-blue"}
  class:bg-main-gray={!focused && !filled && bg === "main-gray"}
  class:bg-main-orange={!focused && !filled && bg === "main-orange"}
  class:bg-surface-green={(focused || filled) && bg === "main-green"}
  class:bg-surface-yellow={(focused || filled) && bg === "main-yellow"}
  class:bg-surface-blue={(focused || filled) && bg === "main-blue"}
  class:bg-surface-gray={(focused || filled) && bg === "main-gray"}
  class:bg-surface-orange={(focused || filled) && bg === "main-orange"}
  class:text-white={!focused && !filled && bg !== "main-orange" && bg !== "main-yellow"}
  class:text-black={focused || filled || bg === "main-orange" || bg === "main-yellow"}
  class:ring-main-green={bg === "main-green"}
  class:ring-main-yellow={bg === "main-yellow"}
  class:ring-main-blue={bg === "main-blue"}
  class:ring-main-gray={bg === "main-gray"}
  class:ring-main-orange={bg === "main-orange"}
  on:focus|capture={handleFocus}
  on:blur|capture={handleBlur}
>
  <span class="text-headline px-4 pt-4">{question}</span>
  <textarea
    bind:value={answer}
    class="w-full bg-transparent px-4 pb-4 focus:outline-none text-subhead"
    style="min-height: {$fx.minHeight * 24}px;"
    rows="1"
    class:placeholder:text-white={!focused &&
      !filled &&
      bg !== "main-orange" &&
      bg !== "main-yellow"}
    class:placeholder:text-black={focused || filled || bg === "main-orange" || bg === "main-yellow"}
    placeholder={focused ? "Thoughtful answers get the best results." : "Tap to write your answer."}
  ></textarea>
</label>
