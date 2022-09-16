<script lang="ts">
  import DataTable from '../Components/DataTable.svelte';
  import { onMount } from 'svelte';
  import axios from 'axios';
  import FormView from '../Components/FormView.svelte';
  import HotkeyDispatcher from '../Components/HotkeyDispatcher.svelte';

  const columns = [
    'show_id',
    'type',
    'title',
    'director',
    'country',
    'date_added',
    'release_year',
    'rating',
    'duration',
    'listed_in',
  ];

  const fields = {
    show_id: {
      title: 'ID',
      type: 'string',
      editType: 'input',
    },
    type: {
      title: 'Type',
      type: 'string',
      editType: 'input',
    },
    title: {
      title: 'Title',
      type: 'string',
      editType: 'input',
    },
    director: {
      title: 'Director',
      type: 'string',
      editType: 'input',
    },
    country: {
      title: 'Country',
      type: 'string',
      editType: 'input',
    },
    date_added: {
      title: 'Date',
      type: 'string',
      editType: 'date',
    },
    release_year: {
      title: 'Release Year',
      type: 'string',
      editType: 'input',
    },
    rating: {
      title: 'Rating',
      type: 'string',
      editType: 'input',
    },
    duration: {
      title: 'Duration',
      type: 'string',
      editType: 'input',
    },
    listed_in: {
      title: 'Listed in',
      type: 'string',
      editType: 'area',
    },
  };

  const fieldOrder = [
    'show_id',
    'type',
    'title',
    'director',
    'country',
    'date_added',
    'release_year',
    'rating',
    'duration',
    'listed_in',
  ];

  let rows: any[] = [];

  onMount(async () => {
    const resp = await axios('/sample.json');
    rows = resp.data.filter((item, index) => index < 20);
  });

  let selectedRow = 0;
  let showForm = false;
  let editMode = false;
  let modifiedData: any;

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

<DataTable bind:selectedRow columns="{columns}" rows="{rows}" fields="{fields}" />

{#if showForm}
  <FormView
    editMode="{editMode}"
    data="{rows[selectedRow]}"
    bind:modifiedData
    fields="{fields}"
    fieldOrder="{fieldOrder}"
  />
{/if}

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
