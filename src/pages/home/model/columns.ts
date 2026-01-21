import type { TRow } from '$pages/home/model/row';
import type { TColumn } from '$widgets/table/Table';

export const columns: TColumn<TRow>[] = [
  { key: 'country', title: 'country' },
  { key: 'date_added', title: 'date_added' },
  { key: 'director', title: 'director' },
  { key: 'duration', title: 'duration' },
  { key: 'listed_in', title: 'listed_in' },
  { key: 'rating', title: 'rating' },
  { key: 'release_year', title: 'release_year' },
  { key: 'show_id', title: 'show_id' },
  { key: 'title', title: 'title' },
  { key: 'type', title: 'type' },
];
