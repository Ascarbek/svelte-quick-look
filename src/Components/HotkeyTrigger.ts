import { writable } from 'svelte/store';

export const triggerHotkey = writable<{
  onNextRow: () => void;
  onPrevRow: () => void;
  onNewItem: () => void;
  onOpen: () => void;
  onClose: () => void;
  onEditMode: () => void;
  onViewMode: () => void;

  onSave: () => void;
  onDiscard: () => void;

  onPrint: () => void;
  onChangeStatus: () => void;
  onFollow: () => void;
}>({
  onNextRow: () => null,
  onPrevRow: () => null,
  onNewItem: () => null,
  onOpen: () => null,
  onClose: () => null,
  onEditMode: () => null,
  onViewMode: () => null,

  onSave: () => null,
  onDiscard: () => null,

  onPrint: () => null,
  onChangeStatus: () => null,
  onFollow: () => null,
});
