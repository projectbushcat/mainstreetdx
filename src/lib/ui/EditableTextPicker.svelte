<script lang="ts">
  import { ProjectStore, ProjectUtils } from "$lib/workbooks/Project";

  import ActionButton from "./ActionButton.svelte";
  import SectionHeader from "./SectionHeader.svelte";
  import TextInput from "./TextInput.svelte";

  export let value: string;
  export let type: "outcome" | "goal" = "outcome";
  export let index: number;
  export let dialog: HTMLDialogElement;

  $: inspo = type === "outcome" ? ProjectUtils.shuffleOutcomes(3) : ProjectUtils.shuffleGoals(3);

  const handleInspoClick = (item: string) => {
    if (type === "goal") {
      $ProjectStore.goal = item;
    }

    if (type === "outcome") {
      ProjectStore.update((prev) => {
        const outcomes = prev.outcomes;

        outcomes[index] = item;

        return {
          ...prev,
          outcomes
        };
      });
    }

    dialog?.close();
  };

  const handleDeleteClick = () => {
    ProjectStore.update((prev) => {
      prev.outcomes.splice(index, 1);

      return {
        ...prev
      };
    });

    dialog?.close();
  };
</script>

<form
  method="dialog"
  on:submit|preventDefault={() => {
    dialog?.close();
  }}
>
  <div class="flex flex-col gap">
    <SectionHeader
      actionable
      header={type === "outcome" ? "Set a project outcome." : "Define a 90-day goal."}
    />
    <div class="flex flex-col gap-lg">
      <TextInput
        bind:value
        autofocus
        label={type === "outcome" ? "What do you need to accomplish?" : "What's your business's 90-day goal?"}
      />
      <ul class="flex justify-between">
        <li>
          {#if type === "outcome" && $ProjectStore.outcomes.length > 1}
            <ActionButton label="Delete" icon="x" on:click={handleDeleteClick} />
          {/if}
        </li>
        <li>
          <ActionButton
            label="Done"
            icon="thumb"
            on:click={() => {
              dialog?.close();
            }}
          />
        </li>
      </ul>
    </div>

    <ul class="flex flex-col">
      <li class="text-label">Inspiration:</li>
      {#each inspo as item}
        <li>
          <ActionButton
            label={item}
            icon="plus"
            on:click={() => {
              handleInspoClick(item);
            }}
          />
        </li>
      {/each}
    </ul>
  </div>
</form>
