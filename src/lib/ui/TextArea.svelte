<script lang="ts">
  const id = crypto.randomUUID();

  export let required: boolean = true;
  export let label: string;
  export let name: string = id;
  export let value: string;
</script>

<div class="flex flex-col gap-2 max-w-prose">
  <label for={id} class="text-label">
    {#if required}
      <span class="text-red-600">*</span>
    {/if}
    <span>{label}</span>
  </label>
  <textarea
    {id}
    {name}
    {required}
    bind:value
    class="text-label p-lg rounded outline outline-2 outline-main-green ring-4 ring-surface-dark bg-surface-dark focus:ring-surface-dark-h focus:bg-surface-dark-h"
    rows="5"
    placeholder="Write here"
  />
</div>
