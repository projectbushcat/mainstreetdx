<script lang="ts">
  export let label: string;
</script>

<div class="flex flex-col gap-2">
  <p class="text-label">{label}</p>
  <slot />
</div>
