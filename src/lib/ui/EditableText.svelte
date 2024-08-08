<script lang="ts">
  import Icon from "./Icon.svelte";
  import EditableTextPicker from "./EditableTextPicker.svelte";

  export let punctuation: "comma" | "and" | "period" | undefined = undefined;
  export let value: string;

  let dialog: HTMLDialogElement;

  let _skip_next = false;

  const handleClick = () => {
    _skip_next = true;
    dialog.showModal();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Space") {
      e.preventDefault();
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (dialog.open || _skip_next) {
      _skip_next = false;
      return;
    }
    if (e.code === "Enter" || e.code === "Space") {
      e.stopPropagation();
      e.preventDefault();
      handleClick();
    }
  };

  const handleClose = () => {
    dialog.close();
  };
</script>

<span
  class="bg-surface-dark hover:bg-surface-dark-h border-main-green border-b-2 active:ring-2 active:ring-main-green active:rounded focus:outline-main-green px-sm"
  role="button"
  on:click={handleClick}
  on:keydown={handleKeyDown}
  on:keyup={handleKeyUp}
  tabindex="0"
>
  {value}{#if punctuation === "comma"},{/if}{#if punctuation === "period"}.{/if}
</span>
{#if punctuation === "and"}
  <span> and </span>
{/if}
<dialog
  popover="auto"
  bind:this={dialog}
  on:close={handleClose}
  class="p-4 md:p-8 rounded bg-surface-dark ring-surface-dark ring-6 border-2 border-main-green max-w-[640px] w-[95vw] overscroll-contain"
>
  <button class="sr-only" on:click={handleClose}>Close</button>
  <EditableTextPicker bind:value />
</dialog>

<style lang="scss">
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.15);
  }
</style>
