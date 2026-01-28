<script lang="ts" generics="T extends object">
  import type { TSortConfig } from '$widgets/table/Table';

  let {
    title,
    sort,
  }: {
    title: string;
    sort: TSortConfig;
  } = $props();
</script>

<button class="flex h-full w-full items-center justify-between" onclick={() => sort.sortable && sort.onClick()}>
  <span class="flex items-center gap-2">
    <span>
      {title}
    </span>

    {#if sort.sortable}
      <i class="block w-[12px] text-[12px]">
        {#if sort.sort !== null}
          {#if sort.sort === 'asc'}
            <i class="fa-solid fa-sort-up"></i>
          {:else}
            <i class="fa-solid fa-sort-down"></i>
          {/if}
        {/if}
      </i>
    {/if}
  </span>
</button>
