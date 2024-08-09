<script lang="ts">
  import { currencyFormatter } from "$lib/utils/currencyFormatter";
  import { plural } from "$lib/utils/plural";
  import { ProjectHourlyRate, ProjectStore } from "$lib/workbooks/Project";
  import ActionLink from "./ActionLink.svelte";
  import Button from "./Button.svelte";
  import ButtonLabel from "./ButtonLabel.svelte";

  export let editable: boolean = false;
</script>

<div class="flex flex-col gap">
  <p class="header">
    Project outcomes:<br />
    {#each $ProjectStore.outcomes as outcome, index (outcome)}
      {index + 1}. {outcome}<br />
    {/each}
    {#if editable}
      <ActionLink icon="edit" label="Edit" href="#brief" />
    {/if}
  </p>
  <p class="header">
    90-day goal: {$ProjectStore.goal}<br />
    Duration: {`${Number($ProjectStore.hours) * Number($ProjectStore.weeks)} ${plural($ProjectStore.hours, "hour", "hours")} total over ${$ProjectStore.weeks} ${plural($ProjectStore.weeks, "week", "weeks")}`}<br
    />
    Budget: {currencyFormatter.format(
      ProjectHourlyRate * Number($ProjectStore.hours) * Number($ProjectStore.weeks)
    )} ({currencyFormatter.format(ProjectHourlyRate)}/hr)
  </p>
  <ButtonLabel label="Next step:">
    <Button>Get insights</Button>
  </ButtonLabel>
</div>
