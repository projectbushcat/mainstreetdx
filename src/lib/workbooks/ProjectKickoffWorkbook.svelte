<script lang="ts" context="module">
  export type Phases = "email" | "summary";
</script>

<script lang="ts">
  import Button from "$lib/ui/Button.svelte";
  import ButtonLabel from "$lib/ui/ButtonLabel.svelte";
  import Highlight from "$lib/ui/Highlight.svelte";
  import Section from "$lib/ui/Section.svelte";
  import SectionHeader from "$lib/ui/SectionHeader.svelte";
  import TextInput from "$lib/ui/TextInput.svelte";

  let phase: "email" | "summary" = "email";

  const phase_labels: Record<Phases, string> = {
    email: "Step 3: Schedule kickoff",
    summary: "Review "
  };
</script>

<Section surface="light" bordered>
  <div>
    <Highlight>Last step</Highlight>
    <SectionHeader header={phase_labels[phase]} actionable form_notice />
  </div>
  {#if phase === "email"}
    <TextInput label="Your email address:" name="email" value="" />
    <ButtonLabel label="Next step:">
      <Button
        on:click={() => {
          phase = "summary";
        }}>Confirm project details</Button
      >
    </ButtonLabel>
  {/if}

  {#if phase === "summary"}
    <h2>hello</h2>
  {/if}

  <p class="text-label opacity-50">
    Refer to our <a href="/privacy">privacy policy</a> for how we process the data we collect in this workbook.
  </p>
</Section>
