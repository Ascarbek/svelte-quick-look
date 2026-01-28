<script lang="ts">
  import type { FieldMap } from '../../Components/DataTypes';

  export let columns: string[] = [];
  export let rows: any[] = [];
  export let fields: FieldMap = {};

  export let selectedRow = 0;
</script>

<div class="flex flex-col max-h-full overflow-y-auto">
  <div class="max-w-full flex-1 min-h-0 flex items-center overflow-x-auto">
    <table class="flex-1 min-w-0 min-h-0">
      <thead>
        <tr>
          {#each columns as col, index}
            <th class="bg-neutral-600 text-neutral-200 py-2">
              <span class="mr-2">
                {fields[col].title}
              </span>
              <i class="fa-solid fa-sort"></i>
            </th>
          {/each}
        </tr>
        <tr>
          {#each columns as col, index}
            <th class="bg-neutral-600 px-2 pb-2">
              <div class="flex items-center justify-center">
                <input class="min-w-0 flex-1 font-normal flex-1 rounded bg-neutral-200 text-neutral-900 px-2 py-1" />
              </div>
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each rows as row, index}
          <tr>
            {#each columns as col}
              <td
                class="px-2 py-1 border border-neutral-300 whitespace-nowrap"
                class:selected="{selectedRow === index}"
                on:click="{() => (selectedRow = index)}"
              >
                {row[col]}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  .selected {
    @apply bg-main-100;
  }
</style>
