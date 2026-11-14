<script lang="ts">
  import type { Snippet } from 'svelte';
  import Icon from '@iconify/svelte';

  let {
    title,
    count,
    children,
  }: {
    title: string;
    count: number;
    children: Snippet;
  } = $props();

  let isExpanded = $state(true);
</script>

<section class="bg-white">
  <div class="flex items-center justify-between gap-4 border-gray-300 px-7 py-5">
    <h2 class="font-hand text-3xl leading-none text-black">
      {title}
      <sup class="align-top font-hand text-sm text-gray-400">({count})</sup>
    </h2>

    <button
      type="button"
      onclick={() => (isExpanded = !isExpanded)}
      aria-expanded={isExpanded}
      aria-label={isExpanded ? `Hide ${title}` : `Expand ${title}`}
      class="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 font-mono text-xs text-gray-600 transition hover:border-gray-400 hover:bg-white hover:text-black"
    >
      <span>{isExpanded ? 'Hide' : 'Expand'}</span>
      <Icon
        icon="lucide:chevron-down"
        width={15}
        height={15}
        class={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
      />
    </button>
  </div>

  <div
    class="grid transition-[grid-template-rows] duration-500 ease-in-out"
    class:grid-rows-1={isExpanded}
    class:grid-rows-0={!isExpanded}
  >
    <div class="overflow-hidden">
      {@render children()}
    </div>
  </div>
</section>

<style>
  .grid-rows-0 {
    grid-template-rows: 0fr;
  }

  .grid-rows-1 {
    grid-template-rows: 1fr;
  }
</style>
