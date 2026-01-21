<script lang="ts" generics="T extends object">
  import type { TableStoreType, TColumn, TSort } from '$widgets/table/Table';
  import { setContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';

  let {
    rows,
    columns,
    sort = $bindable(),
    rowCount,
    page,
    thClass,
    tdClass,
    tableClass,
  }: {
    rows: T[];
    columns: TColumn<T>[];
    sort: TSort<keyof T>;
    rowCount?: number;
    page?: number;
    thClass?: string;
    tdClass?: string;
    tableClass?: string;
  } = $props();

  const tableStore = writable<TableStoreType<T>>({
    rows,
    columns,
    sort,
    page,
    rowCount,
  });

  setContext<Writable<TableStoreType<T>>>('tableStore', tableStore);
</script>

<table class={tableClass}>
  <thead>
    <tr>
      {#each columns as col}
        <th class={thClass}>
          {#if col.title}
            <button
              class="w-full h-full flex items-center justify-between px-2 py-1"
              onclick={() => {
                if (col.key && !col.dontSort) {
                  sort = { key: col.key, direction: sort.direction === 'asc' ? 'desc' : 'asc' };
                }
              }}
            >
              <span>
                {col.title}
              </span>
              {#if !col.dontSort}
                <i class="text-[24px]">
                  {#if sort.key === col.key}
                    {#if sort.direction === 'asc'}
                      <i class="block text-[20px]">
<!--                        <SortAscendingLight />-->
                        <i class="fa-solid fa-sort-up"></i>
                      </i>
                    {:else}
                      <i class="block text-[20px]">
<!--                        <SortDescendingLight />-->
                        <i class="fa-solid fa-sort-down"></i>
                      </i>
                    {/if}
                  {:else}
                    <!-- <div class="flex flex-col">
                      <span class="material-icons -mb-2">arrow_drop_up</span>
                      <span class="material-icons -mt-2">arrow_drop_down</span>
                    </div> -->
                  {/if}
                </i>
              {/if}
            </button>
          {/if}
          {#if col.headerComp}
            {@const HeaderComp = col.headerComp}
            <HeaderComp></HeaderComp>
          {/if}
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <tr>
        {#each columns as col}
          <td class={tdClass}>
            {#if col.dataComp}
              {@const DataComp = col.dataComp}
              <DataComp {row}></DataComp>
            {:else if col.key}
              {row[col.key]}
            {/if}
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
