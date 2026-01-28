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
  onNextRow: () => {},
  onPrevRow: () => {},
  onNewItem: () => {},
  onOpen: () => {},
  onClose: () => {},
  onEditMode: () => {},
  onViewMode: () => {},

  onSave: () => {},
  onDiscard: () => {},

  onPrint: () => {},
  onChangeStatus: () => {},
  onFollow: () => {},
});
