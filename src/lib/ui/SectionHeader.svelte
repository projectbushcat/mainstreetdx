<script lang="ts">
  export let header: string;
  export let subhead: string | undefined = undefined;

  export let level: 1 | 2 | 3 = 2;
  export let actionable: boolean = false;
  export let standalone: boolean = false; // controls extra spacing form headers
  export let id: string | undefined = undefined;
</script>

<div class="flex flex-col" class:pb-8={standalone}>
  {#if level === 1}
    <h1 class="header-strong" {id}>
      {#if actionable}
        ☞
      {/if}
      {header}
    </h1>
  {:else if level === 2}
    <h2 class="header-strong" {id}>
      {#if actionable}
        ☞
      {/if}
      {header}
    </h2>
  {:else if level === 3}
    <h3 class="header-strong" {id}>
      {#if actionable}
        ☞
      {/if}
      {header}
    </h3>
  {/if}
  {#if subhead}
    <p class="header-weak">{@html subhead}</p>
  {/if}
</div>
