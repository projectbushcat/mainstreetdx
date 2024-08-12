<script lang="ts" context="module">
  interface Stage {
    label: string;
    status: "idle" | "processing" | "complete";
  }

  const fakeResponse = false;

  const fakedResponse = {
    success: true,
    data: {
      action_items: ["Action 1", "Action 2", "Action 3"],
      feasibility: "Lorem ipsum dolor sit amet",
      clarifying_questions: ["Question 1?", "Question 2?", "Question 3?"]
    }
  };
</script>

<script lang="ts">
  import { writable } from "svelte/store";
  import Icon, { type IconName } from "./Icon.svelte";
  import { createEventDispatcher, onMount } from "svelte";
  import ButtonLabel from "./ButtonLabel.svelte";
  import Button from "./Button.svelte";
  import {
    ProjectHourlyRate,
    ProjectStore,
    ProjectUtils,
    type PlanAnalyzeData
  } from "$lib/workbooks/Project";
  import { currencyFormatter } from "$lib/utils/currencyFormatter";

  const icon_for_status: Record<Stage["status"], IconName> = {
    idle: "loader",
    processing: "refresh",
    complete: "thumb"
  };

  const checks = writable<Stage[]>([
    { label: "Analyzing brief for feasibility…", status: "idle" },
    { label: "Generating action plan…", status: "idle" },
    { label: "Generating next steps…", status: "idle" }
  ]);

  const dispatch = createEventDispatcher();

  let processing: number = -1;
  let interval_id: any = 0;
  let finished_early = false; // finished the loop early?
  let loaded = false; // loaded the data?
  let errored = false; // errored loading?

  const advance = () => {
    clearInterval(interval_id);

    checks.update((prev) => {
      if (prev[processing]) {
        prev[processing].status = "complete";
      }

      processing += 1;

      if (prev[processing]) {
        prev[processing].status = "processing";
        interval_id = setInterval(advance, 1250);
      } else {
        if (!loaded) finished_early = true;
      }

      return prev;
    });
  };

  const handleNextClick = () => {
    $ProjectStore.editable = false;
    dispatch("complete");
  };

  onMount(async () => {
    advance();

    if (fakeResponse) {
      clearInterval(interval_id);
      finished_early = true;
      loaded = true;
      processing = $checks.length;
      ProjectStore.update((prev) => {
        return {
          ...prev,
          action_items: fakedResponse.data.action_items,
          feasibility: fakedResponse.data.feasibility,
          questions: fakedResponse.data.clarifying_questions.map((q) => ({
            id: crypto.randomUUID(),
            question: q,
            answer: ""
          }))
        };
      });
      return;
    }

    try {
      if ($ProjectStore.onMountTriggersAnalyze === true) {
        $ProjectStore.onMountTriggersAnalyze = false;

        const body = new FormData();

        body.append("brief", ProjectUtils.getBriefTemplate($ProjectStore.outcomes, $ProjectStore.goal));
        body.append("hours", $ProjectStore.hours);
        body.append("weeks", $ProjectStore.weeks);
        body.append(
          "total",
          currencyFormatter.format(
            Number($ProjectStore.hours) * Number($ProjectStore.weeks) * ProjectHourlyRate
          )
        );

        const req = await fetch("/api/plan/analyze", {
          method: "POST",
          body
        });
        const json = (await req.json()) as { success: boolean; data: PlanAnalyzeData };

        if (json.success && json.data) {
          ProjectStore.update((prev) => {
            return {
              ...prev,
              action_items: json.data.action_items,
              feasibility: json.data.feasibility,
              questions: json.data.clarifying_questions.map((q) => ({
                id: crypto.randomUUID(),
                question: q,
                answer: ""
              }))
            };
          });

          loaded = true;
        } else {
          errored = true;
        }
      }
    } catch (e) {
      loaded = false;
      errored = true;
      clearInterval(interval_id);
      $ProjectStore.editable = false;
    }
  });
</script>

<div>
  {#each $checks as check}
    <p class="text-label flex gap-sm items-center" class:opacity-70={check.status !== "complete"}>
      <Icon icon={icon_for_status[check.status]} rotates={check.status === "processing"} />
      {check.label}
      {#if check.status === "complete"}
        Done.
      {/if}
    </p>
  {/each}
  {#if finished_early && !errored}
    <p class="text-label flex gap-sm items-center" class:opacity-70={!loaded}>
      <Icon icon={loaded ? "thumb" : "refresh"} rotates={!loaded} />
      Finishing up… {#if loaded}
        Done.{/if}
    </p>
  {/if}
  {#if errored}
    <p class="text-label flex gap-sm items-center">
      <Icon icon="x" />
      We used all our tokens! Please try again later.
    </p>
  {/if}
</div>

{#if processing === $checks.length && loaded}
  <ButtonLabel label="Next step:">
    <Button on:click={handleNextClick}>Review your action plan</Button>
  </ButtonLabel>
{/if}
