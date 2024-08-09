<script lang="ts" context="module">
  export type IconName =
    | "edit"
    | "plus"
    | "refresh"
    | "support"
    | "thumb"
    | "x"
    | "link"
    | "linkedin"
    | "email"
    | "new_window"
    | "plus_circle"
    | "minus_circle";
</script>

<script lang="ts">
  export let icon: IconName;
  export let className: string = "";
  export let positionOverrideType: "editable_text" | "accordion" | undefined = undefined;
  export let ariaLabel: string | undefined = undefined;
</script>

<i
  role="presentation"
  class={className}
  class:et={positionOverrideType === "editable_text"}
  class:ac={positionOverrideType === "accordion"}
  aria-label={ariaLabel}
>
  <img src={`/icons/${icon}.svg`} alt="" />
</i>

<style lang="postcss">
  i.et {
    transform: translateY(2px);
  }

  i.ac {
    transform: translateY(2px);

    @screen md {
      transform: none;
    }
  }

  i.ac img {
    width: 1.25rem;

    @screen md {
      width: auto;
    }
  }
</style>
