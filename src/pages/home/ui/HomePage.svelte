<script lang="ts">
  import { columns } from '$pages/home/model/columns';
  import type { TRow } from '$pages/home/model/row';
  import type { TSort } from '$widgets/table/Table';
  import Table from '$widgets/table/Table.svelte';
  import { onMount } from 'svelte';
  import FormView from './FormView.svelte';

  let rows =$state<TRow[]>( []);

  onMount(async () => {
    const resp = await fetch('/sample.json', {
      headers: {
        'Content-type':'application/json'
      }
    });
    rows = await resp.json()
    // rows = resp.data.filter((item, index) => index < 20);
  });

  let selectedRow = 0;
  let showForm = false;
  let editMode = false;
  let modifiedData: any;

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
      index === selectedRow
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

<Table
  {rows}
  {columns}
  bind:sort
  thClass="bg-neutral-600 text-neutral-200 py-2"
  tdClass="px-2 py-1 border border-neutral-300 whitespace-nowrap"
></Table>

<!--<DataTable bind:selectedRow columns="{columns}" rows="{rows}" fields="{fields}" />-->

<!--{#if showForm}
  <FormView
    editMode="{editMode}"
    data="{rows[selectedRow]}"
    bind:modifiedData
    fields="{fields}"
    fieldOrder="{fieldOrder}"
  />
{/if}-->

<!--
<HotkeyDispatcher
  on:NextRow="{OnNextRow}"
  on:PrevRow="{OnPrevRow}"
  on:Open="{OnOpen}"
  on:Close="{OnClose}"
  on:EditMode="{OnEditMode}"
  on:ViewMode="{OnViewMode}"
  on:Save="{OnSave}"
  on:Discard="{OnDiscard}"
/>
-->
