<script lang="ts">
  import type { TRow } from '$pages/home/row';
  import { bounce } from '$shared/CustomAnimations';
  import { triggerHotkey } from '$features/hotkey-dispatcher/HotkeyTrigger';

  let {
    data,
    editMode,
    modifiedData = $bindable(),
  }: {
    data: TRow;
    editMode: boolean;
    modifiedData: TRow | null;
  } = $props();

  $effect(() => {
    if (editMode) {
      modifiedData = { ...data };
    }
  });
</script>

<div class="fixed inset-0 flex items-center justify-center bg-neutral-900/50">
  <div class="rounded-xl" transition:bounce>
    <div class="flex items-center justify-between rounded-tl-xl rounded-tr-xl bg-neutral-200 px-8 py-4 font-bold">
      <span class="mr-8 text-xl text-neutral-600">Details</span>
      <button aria-label="close" onclick={() => $triggerHotkey.onClose()}><i class="fa-solid fa-xmark"></i></button>
    </div>

    <div class="grid grid-cols-3 gap-8 bg-white px-8 py-8">
      <div class="field flex flex-col">
        <span class="mb-1 pl-2">Country</span>
        {#if editMode && modifiedData}
          <input class="rounded-lg border border-neutral-400 px-2 py-1" bind:value={modifiedData['country']} />
        {:else}
          <div
            class="overflow-hidden overflow-ellipsis whitespace-nowrap rounded-lg border border-neutral-400 bg-neutral-100 px-2 py-1"
          >
            {data['country']}
          </div>
        {/if}
      </div>

      <div class="field flex flex-col">
        <span class="mb-1 pl-2">Date Added</span>
        {#if editMode && modifiedData}
          <input class="rounded-lg border border-neutral-400 px-2 py-1" bind:value={modifiedData['date_added']} />
        {:else}
          <div
            class="overflow-hidden overflow-ellipsis whitespace-nowrap rounded-lg border border-neutral-400 bg-neutral-100 px-2 py-1"
          >
            {data['date_added']}
          </div>
        {/if}
      </div>

      <div class="field flex flex-col">
        <span class="mb-1 pl-2">Director</span>
        {#if editMode && modifiedData}
          <input class="rounded-lg border border-neutral-400 px-2 py-1" bind:value={modifiedData['director']} />
        {:else}
          <div
            class="overflow-hidden overflow-ellipsis whitespace-nowrap rounded-lg border border-neutral-400 bg-neutral-100 px-2 py-1"
          >
            {data['director']}
          </div>
        {/if}
      </div>

      <div class="field flex flex-col">
        <span class="mb-1 pl-2">Duration</span>
        {#if editMode && modifiedData}
          <input class="rounded-lg border border-neutral-400 px-2 py-1" bind:value={modifiedData['duration']} />
        {:else}
          <div
            class="overflow-hidden overflow-ellipsis whitespace-nowrap rounded-lg border border-neutral-400 bg-neutral-100 px-2 py-1"
          >
            {data['duration']}
          </div>
        {/if}
      </div>

      <div class="field flex flex-col">
        <span class="mb-1 pl-2">Listed In</span>
        {#if editMode && modifiedData}
          <input class="rounded-lg border border-neutral-400 px-2 py-1" bind:value={modifiedData['listed_in']} />
        {:else}
          <div
            class="overflow-hidden overflow-ellipsis whitespace-nowrap rounded-lg border border-neutral-400 bg-neutral-100 px-2 py-1"
          >
            {data['listed_in']}
          </div>
        {/if}
      </div>

      <div class="field flex flex-col">
        <span class="mb-1 pl-2">Rating</span>
        {#if editMode && modifiedData}
          <input class="rounded-lg border border-neutral-400 px-2 py-1" bind:value={modifiedData['rating']} />
        {:else}
          <div
            class="overflow-hidden overflow-ellipsis whitespace-nowrap rounded-lg border border-neutral-400 bg-neutral-100 px-2 py-1"
          >
            {data['rating']}
          </div>
        {/if}
      </div>

      <div class="field flex flex-col">
        <span class="mb-1 pl-2">Release Year</span>
        {#if editMode && modifiedData}
          <input class="rounded-lg border border-neutral-400 px-2 py-1" bind:value={modifiedData['release_year']} />
        {:else}
          <div
            class="overflow-hidden overflow-ellipsis whitespace-nowrap rounded-lg border border-neutral-400 bg-neutral-100 px-2 py-1"
          >
            {data['release_year']}
          </div>
        {/if}
      </div>

      <div class="field flex flex-col">
        <span class="mb-1 pl-2">Show ID</span>
        {#if editMode && modifiedData}
          <input class="rounded-lg border border-neutral-400 px-2 py-1" bind:value={modifiedData['show_id']} />
        {:else}
          <div
            class="overflow-hidden overflow-ellipsis whitespace-nowrap rounded-lg border border-neutral-400 bg-neutral-100 px-2 py-1"
          >
            {data['show_id']}
          </div>
        {/if}
      </div>

      <div class="field flex flex-col">
        <span class="mb-1 pl-2">Title</span>
        {#if editMode && modifiedData}
          <input class="rounded-lg border border-neutral-400 px-2 py-1" bind:value={modifiedData['title']} />
        {:else}
          <div
            class="overflow-hidden overflow-ellipsis whitespace-nowrap rounded-lg border border-neutral-400 bg-neutral-100 px-2 py-1"
          >
            {data['title']}
          </div>
        {/if}
      </div>

      <div class="field flex flex-col">
        <span class="mb-1 pl-2">Country</span>
        {#if editMode && modifiedData}
          <input class="rounded-lg border border-neutral-400 px-2 py-1" bind:value={modifiedData['type']} />
        {:else}
          <div
            class="overflow-hidden overflow-ellipsis whitespace-nowrap rounded-lg border border-neutral-400 bg-neutral-100 px-2 py-1"
          >
            {data['type']}
          </div>
        {/if}
      </div>
    </div>

    <div class="rounded-bl-xl rounded-br-xl bg-neutral-200 px-8 py-4">
      <div class="relative flex h-8 w-24 items-center justify-between">
        <button aria-label="discard" class="discard" class:hide={!editMode} onclick={() => $triggerHotkey.onDiscard()}>
          <i class="fa-solid fa-rotate-left"></i>
        </button>

        <button
          class="lock"
          class:move={editMode}
          onclick={() => (editMode ? $triggerHotkey.onSave() : $triggerHotkey.onEditMode())}
        >
          {#if editMode && modifiedData}
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
    @apply h-10 w-10 rounded-lg bg-neutral-300 text-neutral-700;
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
