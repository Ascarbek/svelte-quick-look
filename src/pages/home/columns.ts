import type { TRow } from '$pages/home/row';
import type { TColumn } from '$widgets/table/Table';

export const columns: TColumn<TRow>[] = [
  { key: 'title', title: 'TITLE' },
  { key: 'type', title: 'TYPE' },
  { key: 'country', title: 'COUNTRY' },
  { key: 'release_year', title: 'RELEASE_YEAR' },
  // { key: 'date_added', title: 'date_added' },
  { key: 'duration', title: 'DURATION' },
  { key: 'director', title: 'DIRECTOR' },
  // { key: 'listed_in', title: 'listed_in' },
  // { key: 'rating', title: 'rating' },

  // { key: 'show_id', title: 'show_id' },
];
