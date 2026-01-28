<script lang="ts" generics="T extends object">
  import type { TColumn, TSort } from '$widgets/table/Table';
  import Table from '$widgets/table/Table.svelte';
  import Th from '$widgets/table/Th.svelte';

  let {
    rows,
    columns,
    sort = $bindable(),
    selectedRow = $bindable(),
  }: {
    rows: T[];
    columns: TColumn<T>[];
    sort: TSort<keyof T>;
    selectedRow?: number;
  } = $props();

  let localColumns = $state<TColumn<T>[]>([]);

  $effect(() => {
    localColumns = columns.map((col) => {
      return {
        ...col,
        headerComp: col.headerComp ? col.headerComp : Th,
      };
    });
  });
</script>

<Table
  {rows}
  columns={localColumns}
  bind:sort
  tableClass="w-full"
  thClass="text-slate-500 px-4 h-[40px] text-xs tracking-wider"
  tdClass="px-4 py-1 border-b border-slate-100 bg-white whitespace-nowrap"
  selectedClass="!bg-slate-500 !text-white"
  bind:selectedRow
></Table>
