<script lang="ts">
  const id = crypto.randomUUID();

  export let label: string;
  export let min: number;
  export let max: number;
  export let value: string;
  export let step: number = 1;
  export let labelledBy: string | undefined = undefined;
  export let valueText: string | undefined = undefined;
</script>

<div class="flex flex-col gap-md">
  <label for={id} class="text-stat md:text-center whitespace-nowrap">{label}</label>
  <input
    {id}
    type="range"
    bind:value
    {min}
    {max}
    {step}
    class="focus:outline-main-green"
    aria-labelledby={labelledBy}
    aria-valuetext={valueText}
  />
</div>
