<script lang="ts" generics="T extends object">
  import type { TColumn, TSort } from '$widgets/table/Table';

  let {
    rows,
    columns,
    sort = $bindable(),
    thClass,
    tdClass,
    selectedClass,
    tableClass,
    selectedRow = $bindable(),
  }: {
    rows: T[];
    columns: TColumn<T>[];
    sort: TSort<keyof T>;
    thClass: string;
    tdClass: string;
    selectedClass: string;
    tableClass: string;
    selectedRow: number;
  } = $props();

  const onHeaderClick = (col: TColumn<T>) => {
    if (col.key && !col.dontSort) {
      sort = { key: col.key, direction: sort.direction === 'asc' ? 'desc' : 'asc' };
    }
  };
</script>

<table class={tableClass}>
  <thead>
    <tr>
      {#each columns as col}
        <th class={thClass}>
          {#if col.headerComp}
            {@const HeaderComp = col.headerComp}
            <HeaderComp
              title={col.title || ''}
              sort={col.dontSort
                ? { sortable: false }
                : {
                    sortable: true,
                    sort: sort.key === col.key ? sort.direction : null,
                    onClick: () => onHeaderClick(col),
                  }}
            ></HeaderComp>
          {:else}
            {col.title || ''}
          {/if}
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row, rowIndex}
      <tr>
        {#each columns as col}
          <td
            onclick={() => (selectedRow = rowIndex)}
            class={`${tdClass} ${selectedRow === rowIndex ? selectedClass : ''}`}
          >
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
