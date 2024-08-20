<script lang="ts" generics="T">
  export let items: T[];
  export let labelledBy: string;
</script>

<ul
  class="mx-auto px-4 pb-4 xl:pb-8 gap-4 justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-[1280px]"
  aria-labelledby={labelledBy}
>
  {#each items as item}
    <slot {item} />
  {/each}
</ul>
