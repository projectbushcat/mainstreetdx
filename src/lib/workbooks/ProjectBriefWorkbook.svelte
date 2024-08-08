<script lang="ts">
  import Accordion from "$lib/ui/Accordion.svelte";
  import ActionButton from "$lib/ui/ActionButton.svelte";
  import EditableText from "$lib/ui/EditableText.svelte";
  import Highlight from "$lib/ui/Highlight.svelte";
  import Section from "$lib/ui/Section.svelte";
</script>

<Section gap={false} surface="light" bordered prose>
  <Highlight>Workbook #1</Highlight>
  <div class="flex flex-col gap">
    <p class="header">
      <span>“We hired Main Street to</span>
      <EditableText punctuation="period" value="redesign our Shopify website" />
      <ActionButton label="Add" icon="plus" positionOverrideType="editable_text" />
      <ActionButton label="Shuffle" icon="refresh" positionOverrideType="editable_text" />
    </p>
    <p class="header">
      <span>Our </span>
      <EditableText value="revenue is up 20%" />
      <span> in 90 days.”</span>
    </p>
    <p class="header-weak opacity-70">— You, in 90 days.</p>
  </div>
</Section>
<Section prose>
  <Accordion title="Why we require a 90-day goal.">
    Lorem ipsum is old text used in the copywriting industry to indicate an area that isn’t final yet.
  </Accordion>
</Section>

<style lang="scss">
  p {
    line-height: 1.35;
  }
</style>
