<script lang="ts">
  import { untrack } from 'svelte';
  import type { KeyboardEventHandler } from 'svelte/elements';
  import { triggerHotkey } from './HotkeyTrigger';

  let isOpen = $state(false);
  let isEditMode = $state(false);

  let onArrowDown = $state(false);
  let onArrowUp = $state(false);
  let onSpace = $state(false);
  let onEscape = $state(false);
  let onEnter = $state(false);
  let onCtrlEnter = $state(false);
  let onShiftEnter = $state(false);
  let onN = $state(false);
  let onP = $state(false);
  let onF = $state(false);
  let onS = $state(false);
  let onCtrlK = $state(false);
  let onCtrlM = $state(false);

  let {
    NextRow,
    PrevRow,
    NewItem,
    Open,
    Close,
    EditMode,
    ViewMode,
    Save,
    Discard,
    Print,
    ChangeStatus,
    Follow,
    SearchById,
    SearchByMenu,
    OpenDetailPage,
  }: {
    NextRow?: () => void;
    PrevRow?: () => void;
    NewItem?: () => void;
    Open?: () => void;
    Close?: () => void;
    EditMode?: () => void;
    ViewMode?: () => void;
    Save?: () => void;
    Discard?: () => void;
    Print?: () => void;
    ChangeStatus?: () => void;
    Follow?: () => void;
    SearchById?: () => void;
    SearchByMenu?: () => void;
    OpenDetailPage?: () => void;
  } = $props();

  const onKeyDown: KeyboardEventHandler<Window> = (e) => {
    if (isOpen) {
      if (isEditMode) {
        onCtrlEnter = e.code === 'Enter' && e.ctrlKey && !e.shiftKey;
        onEscape = e.code === 'Escape';
      } else {
        if (e.code === 'Space' || e.code === 'Enter' || e.code === 'ArrowDown' || e.code === 'ArrowUp')
          e.preventDefault();
        if (!onArrowDown) {
          onArrowDown = e.code === 'ArrowDown';
        }
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
      if (!onArrowDown) {
        onArrowDown = e.code === 'ArrowDown';
      }
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

  const onKeyUp: KeyboardEventHandler<Window> = () => {
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

  const SpaceHandler = () => {
    if (!isOpen) {
      Open?.();
    } else {
      Close?.();
    }
    isOpen = !isOpen;
  };

  const EscapeHandler = () => {
    if (isEditMode) {
      isEditMode = false;
      Discard?.();
      ViewMode?.();
    } else {
      isOpen = false;
      Close?.();
    }
  };

  const EnterHandler = () => {
    if (isOpen && !isEditMode) {
      isEditMode = true;
      EditMode?.();
    }
  };

  const CtrlEnterHandler = () => {
    Save?.();
    ViewMode?.();
    isEditMode = false;
  };

  const ShiftEnterHandler = () => {
    OpenDetailPage?.();
  };

  const NHandler = () => {
    if (NewItem) {
      isOpen = true;
      isEditMode = true;
      NewItem();
    }
  };

  $triggerHotkey = {
    onNextRow: () => {
      NextRow?.();
    },
    onPrevRow: () => {
      PrevRow?.();
    },
    onNewItem: () => {
      isOpen = true;
      isEditMode = true;
      NewItem?.();
    },
    onOpen: () => {
      isOpen = true;
      Open?.();
    },
    onClose: () => {
      isOpen = false;
      Close?.();
    },
    onEditMode: () => {
      isEditMode = true;
      EditMode?.();
    },
    onViewMode: () => {
      isEditMode = false;
      ViewMode?.();
    },
    onSave: () => {
      isEditMode = false;
      Save?.();
    },
    onDiscard: () => {
      isEditMode = false;
      Discard?.();
    },
    onPrint: () => {
      Print?.();
    },
    onChangeStatus: () => {
      ChangeStatus?.();
    },
    onFollow: () => {
      Follow?.();
    },
  };

  $effect(() => {
    if (onArrowDown) {
      untrack(() => {
        NextRow?.();
      });
    }
    if (onArrowUp) {
      untrack(() => {
        PrevRow?.();
      });
    }
    if (onSpace) {
      untrack(() => {
        SpaceHandler();
      });
    }
    if (onEscape) {
      untrack(() => {
        EscapeHandler();
      });
    }
    if (onEnter) {
      untrack(() => {
        EnterHandler();
      });
    }
    if (onCtrlEnter) {
      untrack(() => {
        CtrlEnterHandler();
      });
    }
    if (onShiftEnter) {
      untrack(() => {
        ShiftEnterHandler();
      });
    }
    if (onN) {
      untrack(() => {
        NHandler();
      });
    }
    if (onP) {
      untrack(() => {
        Print?.();
      });
    }
    if (onF) {
      untrack(() => {
        Follow?.();
      });
    }
    if (onS) {
      untrack(() => {
        ChangeStatus?.();
      });
    }
    if (onCtrlK) {
      untrack(() => {
        SearchById?.();
      });
    }
    if (onCtrlM) {
      untrack(() => {
        SearchByMenu?.();
      });
    }
  });
</script>

<svelte:window onkeydown={onKeyDown} onkeyup={onKeyUp} />
