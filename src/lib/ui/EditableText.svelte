<script lang="ts">
  import EditableTextPicker from "./EditableTextPicker.svelte";

  export let value: string;
  export let index: number;
  export let length: number;
  export let type: "outcome" | "goal" = "outcome";

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
  class="bg-surface-dark hover:bg-surface-dark-h border-b-main-green border-b-2 active:rounded px-sm focus:outline focus:outline-2 focus:outline-main-green focus:rounded"
  role="button"
  on:click={handleClick}
  on:keydown={handleKeyDown}
  on:keyup={handleKeyUp}
  tabindex="0"
>
  {value}{#if length > 2 && index < 2},{/if}{#if index === length - 1}.{/if}
</span>
{#if (length > 2 && index === 1) || (length === 2 && index === 0)}
  <span> and </span>
{/if}
<dialog
  bind:this={dialog}
  on:close={handleClose}
  class="p-4 md:p-8 rounded bg-surface-light ring-surface-dark ring-6 border-2 border-main-green max-w-[640px] w-[95vw] overscroll-contain"
>
  <button class="sr-only" on:click={handleClose}>Close</button>
  <EditableTextPicker bind:value bind:dialog {type} {index} />
</dialog>

<style lang="scss">
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.15);
  }
</style>
