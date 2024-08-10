<script lang="ts">
  import Accordion from "$lib/ui/Accordion.svelte";
  import Highlight from "$lib/ui/Highlight.svelte";
  import Range from "$lib/ui/Range.svelte";
  import Section from "$lib/ui/Section.svelte";
  import SectionHeader from "$lib/ui/SectionHeader.svelte";
  import { currencyFormatter } from "$lib/utils/currencyFormatter";
  import { plural } from "$lib/utils/plural";
  import { ProjectHourlyRate, ProjectStore } from "./Project";

  $: hoursLabel = `${$ProjectStore.hours} hours/wk @ $${ProjectHourlyRate}/hr`;
  $: weeksLabel = `${$ProjectStore.weeks} ${plural($ProjectStore.weeks, "week", "weeks")}`;
</script>

<Section surface="light" bordered prose gap>
  <SectionHeader actionable level={3} header="Set budget and duration." id="budget-header">
    <Highlight slot="highlight">Workbook</Highlight>
  </SectionHeader>

  <!-- <h2 class="header" id="budget-header">Set your project's budget and duration.</h2> -->

  <div class="grid grid-cols-2 gap-lg">
    <div>
      <Range
        label={hoursLabel}
        valueText={`${$ProjectStore.hours} hours per week`}
        min={2}
        max={32}
        step={2}
        bind:value={$ProjectStore.hours}
        labelledBy="budget-header"
      />
    </div>
    <div
      class="bg-main-green text-white rounded text-center py-md row-span-2 flex flex-col justify-center items-center"
      role="status"
    >
      <p class="text-stat text-white">Max charge:</p>
      <p class="text-jumbo">
        {currencyFormatter.format(
          ProjectHourlyRate * Number($ProjectStore.hours) * Number($ProjectStore.weeks)
        )}
      </p>
    </div>
    <div>
      <Range
        label={weeksLabel}
        valueText={weeksLabel}
        min={1}
        max={8}
        bind:value={$ProjectStore.weeks}
        labelledBy="budget-header"
      />
    </div>
  </div>
</Section>
<Section prose>
  <Accordion title="A conversation is always free.">
    Lorem ipsum is old text used in the copywriting industry to indicate an area that isn’t final yet.
  </Accordion>
</Section>
