<script lang="ts" generics="T">
  export let items: T[];
  export let labelledBy: string;
  export let max_cols: 4 | 5 = 5;
</script>

<ul
  class="mx-auto px-4 pb-4 xl:pb-8 gap-4 justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 {max_cols ===
  5
    ? 'lg:grid-cols-5'
    : ''}"
  class:max-w-[990px]={max_cols === 4}
  class:max-w-[1280px]={max_cols === 5}
  aria-labelledby={labelledBy}
>
  {#each items as item}
    <slot {item} />
  {/each}
</ul>
