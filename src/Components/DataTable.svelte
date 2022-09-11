<script lang="ts">
  import type { IColumn } from './TableTypes';
  import HotkeyDispatcher from "./HotkeyDispatcher.svelte";

  export let columns: IColumn[] = [];
</script>

<table class="w-full">
  <thead>
    <tr>
      {#each columns as col, index}
        <th class="bg-neutral-600 text-neutral-200 py-2">
          <span class="mr-2">
            {col.title}
          </span>
          <i class="fa-solid fa-sort"></i>
        </th>
      {/each}
    </tr>
    <tr>
      {#each columns as col, index}
        <th class="bg-neutral-600 px-2 pb-2">
          <input class="font-normal flex-1 rounded bg-neutral-200 text-neutral-900 px-2 py-1" />
        </th>
      {/each}
    </tr>
  </thead>
</table>

<HotkeyDispatcher
        on:
>
</HotkeyDispatcher>