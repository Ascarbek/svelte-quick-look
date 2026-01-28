<script lang="ts" generics="T extends object">
  import type { TColumn, TSort } from '$widgets/table/Table';

  let {
    rows,
    columns,
    sort = $bindable(),
    thClass,
    tdClass,
    tableClass,
  }: {
    rows: T[];
    columns: TColumn<T>[];
    sort: TSort<keyof T>;
    thClass?: string;
    tdClass?: string;
    tableClass?: string;
  } = $props();
</script>

<table class={tableClass}>
  <thead>
    <tr>
      {#each columns as col}
        <th class={thClass}>
          {#if col.title}
            <button
              class="flex h-full w-full items-center justify-between"
              onclick={() => {
                if (col.key && !col.dontSort) {
                  sort = { key: col.key, direction: sort.direction === 'asc' ? 'desc' : 'asc' };
                }
              }}
            >
              <span class="flex items-center gap-2">
                <span>
                  {col.title}
                </span>

                {#if !col.dontSort}
                  <i class="block text-[12px] w-[12px]">
                    {#if sort.key === col.key}
                      {#if sort.direction === 'asc'}
                        <i class="fa-solid fa-sort-up"></i>
                      {:else}
                        <i class="fa-solid fa-sort-down"></i>
                      {/if}
                    {/if}
                  </i>
                {/if}
              </span>
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
