<script lang="ts" context="module">
  interface Stage {
    label: string;
    status: "idle" | "processing" | "complete";
  }
</script>

<script lang="ts">
  import { writable } from "svelte/store";
  import Icon, { type IconName } from "./Icon.svelte";
  import { onMount } from "svelte";
  import ButtonLabel from "./ButtonLabel.svelte";
  import Button from "./Button.svelte";

  const icon_for_status: Record<Stage["status"], IconName> = {
    idle: "loader",
    processing: "refresh",
    complete: "thumb"
  };

  const checks = writable<Stage[]>([
    { label: "Analyzing brief for feasibility…", status: "idle" },
    { label: "Generating personalized action plan…", status: "idle" },
    { label: "Generating clarifying questions…", status: "idle" }
  ]);

  let processing: number = -1;
  let interval_id: any = 0;

  const advance = () => {
    clearInterval(interval_id);

    checks.update((prev) => {
      if (prev[processing]) {
        prev[processing].status = "complete";
      }

      processing += 1;

      if (prev[processing]) {
        prev[processing].status = "processing";
        interval_id = setInterval(advance, 2000);
      }

      return prev;
    });
  };

  onMount(() => {
    advance();
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
</div>

{#if processing === $checks.length}
  <ButtonLabel label="Next step:">
    <Button>Review action plan</Button>
  </ButtonLabel>
{/if}
