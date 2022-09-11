<script lang="ts">
  import DataTable from '../Components/DataTable.svelte';
  import type { IColumn } from '../Components/TableTypes';

  const columns: IColumn[] = [
    { title: 'ID', name: 'show_id', type: 'string' },
    { title: 'Type', name: 'type', type: 'string' },
    { title: 'Title', name: 'title', type: 'string' },
    { title: 'Director', name: 'director', type: 'string' },
    { title: 'Country', name: 'country', type: 'string' },
    { title: 'Date', name: 'date_added', type: 'date' },
    { title: 'Release', name: 'release_year', type: 'string' },
    { title: 'Rating', name: 'rating', type: 'string' },
    { title: 'Duration', name: 'duration', type: 'string' },
    { title: 'Listed', name: 'listed_in', type: 'string' },
  ];
</script>

<DataTable columns="{columns}" />
