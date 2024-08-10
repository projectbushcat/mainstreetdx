<script lang="ts">
  import { currencyFormatter } from "$lib/utils/currencyFormatter";
  import { plural } from "$lib/utils/plural";
  import { ProjectHourlyRate, ProjectStore } from "$lib/workbooks/Project";
  import ActionLink from "./ActionLink.svelte";
  import Button from "./Button.svelte";
  import ButtonLabel from "./ButtonLabel.svelte";

  export let editable: boolean = false;
</script>

<div class="flex flex-col">
  <h3 class="header-strong">Project outcomes:</h3>
  <ol class="header text-main-gray list-decimal ml-[3.5rem]">
    {#each $ProjectStore.outcomes as outcome, index (outcome)}
      <li>{outcome}</li>
    {/each}
  </ol>
  {#if editable}
    <ActionLink icon="edit" label="Edit" href="#brief" />
  {/if}
  <br />
  <h3 class="header-strong">Metrics:</h3>
  <p class="header text-main-gray">Goal: {$ProjectStore.goal} in 90 days.</p>
  <p class="header text-main-gray">
    Duration: {`${Number($ProjectStore.hours) * Number($ProjectStore.weeks)} ${plural($ProjectStore.hours, "hour", "hours")} total over ${$ProjectStore.weeks} ${plural($ProjectStore.weeks, "week", "weeks")}`}
  </p>
  <p class="header text-main-gray">
    Budget: {currencyFormatter.format(
      ProjectHourlyRate * Number($ProjectStore.hours) * Number($ProjectStore.weeks)
    )} ({currencyFormatter.format(ProjectHourlyRate)}/hr)
  </p>
</div>
