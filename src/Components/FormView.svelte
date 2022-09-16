<script lang="ts">
  import type { FieldMap } from './DataTypes';
  import { bounce } from './CustomAnimations';
  import { triggerHotkey } from './HotkeyTrigger';

  export let data: any = {};
  export let fields: FieldMap = {};
  export let fieldOrder: string[] = [];
  export let editMode: boolean = false;

  export let modifiedData: any = {};

  const loadValues = () => {
    Object.keys(fields).forEach((id) => {
      modifiedData[id] = data[id];
    });
  };

  $: editMode && loadValues();
</script>

<div class="fixed inset-0 flex items-center justify-center bg-neutral-900/50">
  <div class="rounded-xl" transition:bounce>
    <div class="px-8 font-bold py-4 bg-neutral-200 rounded-tl-xl rounded-tr-xl flex items-center justify-between">
      <span class="mr-8 text-neutral-600 text-xl">Details</span>
      <button on:click="{() => $triggerHotkey.onClose()}"><i class="fa-solid fa-xmark"></i></button>
    </div>

    <div class="px-8 py-8 grid grid-cols-3 gap-8 bg-white">
      {#each fieldOrder as fieldId}
        <div class="field flex flex-col">
          <label class="pl-2 mb-1">{fields[fieldId].title}</label>
          {#if editMode}
            <input class="px-2 py-1 border border-neutral-400 rounded-lg" bind:value="{modifiedData[fieldId]}" />
          {:else}
            <div
              class="px-2 py-1 border border-neutral-400 bg-neutral-100 rounded-lg whitespace-nowrap overflow-hidden overflow-ellipsis"
            >
              {data[fieldId]}
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <div class="px-8 py-4 bg-neutral-200 rounded-bl-xl rounded-br-xl">
      <div class="flex items-center w-24 h-8 justify-between relative">
        <button class="discard" class:hide="{!editMode}" on:click="{() => $triggerHotkey.onDiscard()}">
          <i class="fa-solid fa-rotate-left"></i>
        </button>

        <button
          class="lock"
          class:move="{editMode}"
          on:click="{() => (editMode ? $triggerHotkey.onSave() : $triggerHotkey.onEditMode())}"
        >
          {#if editMode}
            <i class="fa-solid fa-lock-open"></i>
          {:else}
            <i class="fa-solid fa-lock"></i>
          {/if}
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .field {
    width: 300px;
  }

  button {
    @apply bg-neutral-300 text-main-700 rounded-lg w-10 h-10;
  }

  label {
  }

  input {
    width: unset;
  }

  .discard,
  .lock {
    @apply absolute;
  }

  .discard {
    transition: opacity 200ms ease-in-out;
  }

  .lock {
    @apply left-0;
    transition: left 200ms ease-in-out;
  }

  .discard.hide {
    @apply opacity-50;
  }

  .lock.move {
    @apply left-16;
  }
</style>
