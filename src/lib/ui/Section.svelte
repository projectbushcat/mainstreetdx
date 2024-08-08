<script lang="ts">
  export let gap: boolean = true;
  export let surface: "dark" | "light" | undefined = undefined;
  export let bordered: boolean = false;
  export let prose: boolean = false;
</script>

<section
  class="m-auto w-[98vw] max-w-[868px] flex flex-col p-5 md:p"
  class:gap
  class:bg-surface-dark={surface === "dark"}
  class:bg-surface-light={surface === "light"}
  class:border-main-green={bordered}
  class:border-2={bordered}
  class:rounded-lg={bordered}
  class:max-w-prose={prose}
>
  <slot />
</section>
