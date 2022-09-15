<script lang="ts">
  import DataTable from '../Components/DataTable.svelte';
  import type { FieldMap } from '../Components/TableTypes';
  import { onMount } from 'svelte';
  import { getCall } from '../helpers/BackendCalls';
  import axios from "axios";

  const columns: string[] = [
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

  const fields: FieldMap = {
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

  let data: any[] = [];

  onMount(async () => {
    const resp = await axios('/sample.json');
    data = resp.data.filter((item, index) => index < 20);
  });
</script>

<DataTable columns="{columns}" data="{data}" fields="{fields}" />
