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
  <SectionHeader
    actionable
    level={3}
    header="Set budget and duration."
    subhead="Your budget is invested in concrete actions and measurable
      outcomes — not meetings."
    id="budget-header"
  >
    <Highlight slot="highlight">Workbook</Highlight>
  </SectionHeader>
  <div class="grid grid-cols-2 gap-lg print:block">
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
        max={12}
        bind:value={$ProjectStore.weeks}
        labelledBy="budget-header"
      />
    </div>
  </div>
</Section>
<Section prose>
  <Accordion emoji="🛟" title="A conversation is always free." surface="light">
    <SectionHeader header="Our approach is simple: we're here to help." level={4} />
    <ol class="list-decimal">
      <li>We listen to your needs (for free)</li>
      <li>We brainstorm solutions (still free!)</li>
      <li>We propose a plan that maximizes your budget</li>
      <li>We execute efficiently, delivering real value</li>
    </ol>
    <h4 class="header-weak">Simply put, we work to maximize your budget.</h4>
    <p>
      That's why conversations are always free — we don't bill for meetings or brainstorming sessions. Your
      budget is invested in concrete actions and measurable outcomes. Partners don't nickel and dime each
      other, they get the job done.
    </p>
  </Accordion>
</Section>
