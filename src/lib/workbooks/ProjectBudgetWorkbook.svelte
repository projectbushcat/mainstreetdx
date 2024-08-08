<script lang="ts">
  import Accordion from "$lib/ui/Accordion.svelte";
  import Highlight from "$lib/ui/Highlight.svelte";
  import Range from "$lib/ui/Range.svelte";
  import Section from "$lib/ui/Section.svelte";
  import SectionHeader from "$lib/ui/SectionHeader.svelte";
  import { HourlyRate } from "./ProjectBudget";

  let hours: string = "16";
  let weeks: string = "2";

  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    maximumFractionDigits: 0
  });

  $: hoursLabel = `${hours} hours/wk @ $${HourlyRate}/hr`;
  $: weeksLabel = `${weeks} week${Number(weeks) > 1 ? "s" : ""}`;
</script>

<Section surface="light" bordered prose>
  <div>
    <Highlight>Workbook #2</Highlight>
    <SectionHeader header="Set your budget and duration." id="budget-header" />
  </div>
  <div class="grid grid-cols-2 gap-lg">
    <div>
      <Range
        label={hoursLabel}
        valueText={`${hours} hours per week`}
        min={2}
        max={32}
        step={2}
        bind:value={hours}
        labelledBy="budget-header"
      />
    </div>
    <div
      class="bg-surface-dark rounded text-center py-md row-span-2 flex flex-col justify-center items-center"
      role="status"
    >
      <p class="text-stat">Max charge:</p>
      <p class="text-jumbo">{formatter.format(HourlyRate * Number(hours) * Number(weeks))}</p>
    </div>
    <div>
      <Range
        label={weeksLabel}
        valueText={weeksLabel}
        min={1}
        max={8}
        bind:value={weeks}
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
