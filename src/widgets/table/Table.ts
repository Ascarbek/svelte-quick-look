import type { Component } from 'svelte';

export type TColumn<T extends object> = {
  key: keyof T | null;
  title?: string;
  searchable?: boolean;
  dontSort?: boolean;
  headerComp?: Component<Record<string, never>>;
  dataComp?: Component<Record<'row', T>>;
};

export type TSort<C = string> = {
  key: C;
  direction: 'asc' | 'desc';
};

export type TableStoreType<T extends object> = {
  rows: T[];
  columns: TColumn<T>[];
  sort: TSort<keyof T>;
  page?: number;
  rowCount?: number;
};

export function search<T extends object>(data: T[], columns: TColumn<T>[], term: string) {
  if (!term) return data;
  return data.filter((row) => {
    return columns.some((column) => {
      if (!column.searchable) return false;
      return String(column.key ? row[column.key] : '')
        .toLowerCase()
        .includes(term.toLowerCase());
    });
  });
}

export function sort<T>(data: T[], column: keyof T, direction: 'asc' | 'desc') {
  if (!column) return data;
  return data.sort((a, b) => {
    /*if (typeof a[column] === 'string' && dayjs(a[column]).isValid() && dayjs(b[column]).isValid()) {
			if (dayjs(a[column]).isAfter(dayjs(b[column]))) return direction === 'asc' ? 1 : -1;
			if (dayjs(a[column]).isBefore(dayjs(b[column]))) return direction === 'asc' ? -1 : 1;
			return 0;
		}*/
    if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
    if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
    return 0;
  });
}

export function searchAndSort<T extends object>(
  data: T[],
  columns: TColumn<T>[],
  sortBy: { key: keyof T; direction: 'asc' | 'desc' },
  term: string
) {
  return sort(search(data, columns, term), sortBy.key, sortBy.direction);
}
