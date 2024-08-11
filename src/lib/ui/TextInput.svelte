<script lang="ts">
  const id = crypto.randomUUID();

  export let required: boolean = true;
  export let label: string;
  export let name: string = id;
  export let value: string;
  export let autofocus: boolean = false;
</script>

<div class="flex flex-col gap-2 max-w-[32.5ch]">
  <label for={id} class="text-label">
    {#if required}
      <span class="text-red-600">*</span>
    {/if}
    <span>{label}</span>
  </label>
  <!-- svelte-ignore a11y-autofocus -->
  <input
    type="text"
    {id}
    {name}
    {required}
    {autofocus}
    minlength="3"
    bind:value
    class="text-label p-lg rounded ring-4 ring-surface-dark bg-surface-dark focus:ring-surface-dark-h focus:bg-surface-dark-h focus:outline-none border-solid border-2 border-main-green"
    placeholder="Write here"
  />
</div>
