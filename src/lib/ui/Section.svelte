<script lang="ts">
  export let gap: true | false | "md" | "lg" = true;
  export let surface: "md:dark" | "dark" | "light" | undefined = undefined;
  export let bordered: boolean = false;
  export let prose: boolean = false;
  export let padded: boolean = true;
</script>

<section
  class="m-auto max-w-[868px] flex flex-col px md:rounded"
  class:py={padded}
  class:gap={gap === true}
  class:gap-md={gap === "md"}
  class:gap-lg={gap === "lg"}
  class:bg-surface-dark={surface === "dark" || surface === "md:dark"}
  class:md:bg-transparent={surface === "md:dark"}
  class:bg-surface-light={surface === "light"}
  class:border-main-green={bordered}
  class:border-y-2={bordered}
  class:md:border-2={bordered}
  class:max-w-prose={prose}
  class:ring-4={bordered}
  class:ring-surface-dark={bordered}
>
  <slot />
</section>
