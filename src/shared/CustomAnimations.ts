import { backOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export const bounce: (node: Element, params?: { duration: number }) => TransitionConfig = (node: Element, params) => {
  return {
    duration: params?.duration ?? 200,
    css: (t, _) => {
      const eased = backOut(t);
      return `transform: scale(${eased});`;
    },
  };
};
