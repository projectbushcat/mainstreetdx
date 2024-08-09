<script lang="ts">
  export let label: string;
</script>

<div class="flex flex-col gap-md">
  <p class="text-label">{label}</p>
  <slot />
</div>
