<script lang="ts">
  import { currencyFormatter } from "$lib/utils/currencyFormatter";
  import { plural } from "$lib/utils/plural";
  import { ProjectHourlyRate, ProjectStore } from "$lib/workbooks/Project";
  import ActionLink from "./ActionLink.svelte";

  export let editable: boolean = false;
  export let extended: boolean = false;
</script>

<div class="flex flex-col">
  <h3 class="header-strong">Outcomes:</h3>
  <ol class="header-weak list-decimal">
    {#each $ProjectStore.outcomes as outcome}
      <li>{outcome}</li>
    {/each}
  </ol>
  {#if editable}
    <ActionLink icon="edit" label="Edit" href="#brief" />
  {/if}
  <br />
  <h3 class="header-strong">Metrics:</h3>
  <p class="header-weak">Goal: {$ProjectStore.goal} in 90 days.</p>
  <p class="header-weak">
    Duration: {`${Number($ProjectStore.hours) * Number($ProjectStore.weeks)} ${plural($ProjectStore.hours, "hour", "hours")} total over ${$ProjectStore.weeks} ${plural($ProjectStore.weeks, "week", "weeks")}`}
  </p>
  <p class="header-weak">
    Budget: {currencyFormatter.format(
      ProjectHourlyRate * Number($ProjectStore.hours) * Number($ProjectStore.weeks)
    )} ({currencyFormatter.format(ProjectHourlyRate)}/hr)
  </p>
  {#if extended}
    <br />
    <h3 class="header-strong">Action items:</h3>
    <ol class="header-weak list-decimal">
      {#each $ProjectStore.action_items as action_item}
        <li>{action_item}</li>
      {/each}
    </ol>
    <br />
    <h3 class="header-strong">Feasibility:</h3>
    <p class="header-weak">{$ProjectStore.feasibility}</p>
    <br />
    <h3 class="header-strong">Next steps:</h3>
    <ol class="header-weak list-disc">
      {#each $ProjectStore.questions as question}
        <li>{question.question}</li>
      {/each}
    </ol>
  {/if}
</div>

<style lang="postcss">
  ol.list-decimal {
    @screen md {
      padding-left: 2.5rem;
    }
  }
</style>
