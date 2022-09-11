import { backOut } from 'svelte/easing';

export const bounce = (node, { duration }) => {
  return {
    duration,
    css: (t) => {
      const eased = backOut(t);
      return `transform: scale(${eased});`;
    },
  };
};
