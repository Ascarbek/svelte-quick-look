<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    label,
    placeholder,
    value = $bindable(''),
    class: className,
    labelClass = '',
    labelComp,
  }: {
    label?: string;
    placeholder?: string;
    value?: string;
    class?: string;
    labelClass?: string;
    labelComp?: Snippet;
  } = $props();
</script>

{#if labelComp}
  {@render labelComp()}
{:else}
  <div class={labelClass}>
    {label}
  </div>
{/if}

<div class="flex items-center flex-1">
  <input
    {placeholder}
    bind:value
    class="flex-1 px-2 py-1 text-sm bg-bg-0 border-2 border-bg-300 rounded h-full focus:border-sky-400/50"
  />
</div>
