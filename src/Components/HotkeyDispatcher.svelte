<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { EventMap } from './EventMap';

  const dispatch = createEventDispatcher<EventMap>();

  let isOpen = false;
  let isEditMode = false;

  let onArrowDown = false;
  let onArrowUp = false;
  let onSpace = false;
  let onEscape = false;
  let onEnter = false;
  let onCtrlEnter = false;
  let onShiftEnter = false;
  let onN = false;
  let onP = false;
  let onF = false;
  let onS = false;
  let onCtrlK = false;
  let onCtrlM = false;

  const onKeyDown = (e: KeyboardEvent) => {
    if (isOpen) {
      if (isEditMode) {
        onCtrlEnter = e.code === 'Enter' && e.ctrlKey && !e.shiftKey;
        onEscape = e.code === 'Escape';
      } else {
        if (e.code === 'Space' || e.code === 'Enter' || e.code === 'ArrowDown' || e.code === 'ArrowUp')
          e.preventDefault();
        onArrowDown = e.code === 'ArrowDown';
        onArrowUp = e.code === 'ArrowUp';
        onSpace = e.code === 'Space';
        onEscape = e.code === 'Escape';
        onEnter = e.code === 'Enter' && !e.ctrlKey && !e.shiftKey;
        onShiftEnter = e.code === 'Enter' && !e.ctrlKey && e.shiftKey;
        onN = e.code === 'KeyN' && !e.ctrlKey;
        onP = e.code === 'KeyP' && !e.ctrlKey;
        onF = e.code === 'KeyF' && !e.ctrlKey;
        onS = e.code === 'KeyS' && !e.ctrlKey;
      }
    } else {
      if (e.code === 'Space' || e.code === 'Enter' || e.code === 'ArrowDown' || e.code === 'ArrowUp') e.preventDefault();
      onArrowDown = e.code === 'ArrowDown';
      onArrowUp = e.code === 'ArrowUp';
      onSpace = e.code === 'Space';
      onN = e.code === 'KeyN' && !e.ctrlKey;
      onP = e.code === 'KeyP' && !e.ctrlKey;
      onF = e.code === 'KeyF' && !e.ctrlKey;
      onS = e.code === 'KeyS' && !e.ctrlKey;
      onCtrlK = e.code === 'KeyK' && e.ctrlKey;
      onCtrlM = e.code === 'KeyM' && e.ctrlKey;
    }
  };

  const onKeyUp = (e: KeyboardEvent) => {
    onArrowDown = false;
    onArrowUp = false;
    onSpace = false;
    onEscape = false;
    onEnter = false;
    onCtrlEnter = false;
    onShiftEnter = false;
    onN = false;
    onP = false;
    onF = false;
    onS = false;
    onCtrlK = false;
    onCtrlM = false;
  };

  $: onArrowDown && dispatch('NextRow');

  $: onArrowUp && dispatch('PrevRow');

  const SpaceHandler = () => {
    isOpen = !isOpen;
    if (isOpen) {
      dispatch('Open');
    } else {
      dispatch('Close');
    }
  };

  $: onSpace && SpaceHandler();

  const EscapeHandler = () => {
    if (isEditMode) {
      isEditMode = false;
      dispatch('Discard');
      dispatch('ViewMode');
    } else {
      isOpen = false;
      dispatch('Close');
    }
  };

  $: onEscape && EscapeHandler();

  const EnterHandler = () => {
    if (isOpen && !isEditMode) {
      isEditMode = true;
      dispatch('EditMode');
    }
  };

  $: onEnter && EnterHandler();

  const CtrlEnterHandler = () => {
    dispatch('Save');
    dispatch('ViewMode');
    isEditMode = false;
  };

  $: onCtrlEnter && CtrlEnterHandler();

  const ShiftEnterHandler = () => {
    dispatch('OpenDetailPage');
  };

  $: onShiftEnter && ShiftEnterHandler();

  const NHandler = () => {
    isOpen = true;
    isEditMode = true;
    dispatch('NewItem');
  };

  $: onN && NHandler();

  $: onP && dispatch('Print');

  $: onF && dispatch('Follow');

  $: onS && dispatch('ChangeStatus');

  $: onCtrlK && dispatch('SearchById');

  $: onCtrlM && dispatch('SearchByMenu');
</script>

<svelte:window on:keydown="{onKeyDown}" on:keyup="{onKeyUp}" />
