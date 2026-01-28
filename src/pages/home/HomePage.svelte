<script lang="ts">
  import HotkeyDispatcher from '$features/hotkey-dispatcher/HotkeyDispatcher.svelte';
  import { columns } from '$pages/home/columns';
  import type { TRow } from '$pages/home/row';
  import TealTable from '$widgets/styled-table/SlateTable.svelte';
  import type { TSort } from '$widgets/table/Table';
  import Table from '$widgets/table/Table.svelte';
  import { onMount } from 'svelte';
  import FormView from './FormView.svelte';

  let rows = $state<TRow[]>([]);

  onMount(async () => {
    const resp = await fetch('/sample.json', {
      headers: {
        'Content-type': 'application/json',
      },
    });
    rows = await resp.json();
    // rows = rows.filter((_, index) => index < 10);
    rows = rows.filter((_, index) => index < 20);
  });

  let selectedRow = $state(0);
  let showForm = $state(false);
  let editMode = $state(false);
  let modifiedData = $state<TRow | null>(null);

  let sort = $state<TSort<keyof TRow>>({
    key: 'title',
    direction: 'asc',
  });

  const OnNextRow = () => {
    if (selectedRow < rows.length - 1) selectedRow++;
  };

  const OnPrevRow = () => {
    if (selectedRow > 0) selectedRow--;
  };

  const OnOpen = () => {
    showForm = true;
  };

  const OnClose = () => {
    showForm = false;
  };

  const OnEditMode = () => {
    editMode = true;
  };

  const OnViewMode = () => {
    editMode = false;
  };

  const OnSave = () => {
    rows = rows.map((item, index) =>
      index === selectedRow && modifiedData
        ? {
            ...modifiedData,
          }
        : { ...item }
    );

    editMode = false;
  };

  const OnDiscard = () => {
    editMode = false;
  };
</script>

<div class="flex flex-col gap-8 bg-white p-8">
  <div class="rounded-lg border border-neutral-300 bg-slate-100 shadow">
    <TealTable {rows} {columns} bind:sort bind:selectedRow></TealTable>
    <!-- pagination -->
    <div class="flex items-center gap-2 p-2">
      <div class="">
        <input placeholder="search" class="rounded-lg border border-neutral-300 bg-white px-2 py-1 text-xs" />
      </div>
    </div>
  </div>
</div>

{#if showForm}
  <FormView {editMode} data={rows[selectedRow]} bind:modifiedData />
{/if}

<HotkeyDispatcher
  NextRow={OnNextRow}
  PrevRow={OnPrevRow}
  Open={OnOpen}
  Close={OnClose}
  EditMode={OnEditMode}
  ViewMode={OnViewMode}
  Save={OnSave}
  Discard={OnDiscard}
/>
