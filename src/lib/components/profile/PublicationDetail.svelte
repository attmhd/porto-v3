<script lang="ts">
  import Icon from '@iconify/svelte';
  import type { Publication } from '$lib/data/publications';

  let { publication }: { publication: Publication } = $props();
</script>

<section class="bg-white text-black">
  <div class="flex items-center justify-between gap-4 border-b border-gray-100 px-6 py-4 sm:px-8">
    <a
      href="/#publications"
      class="flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
    >
      <Icon icon="lucide:arrow-left" width={15} height={15} /> Publications
    </a>
    {#if publication.badgeImage}
      <img
        src={publication.badgeImage}
        alt={publication.badgeLabel ?? 'Publication badge'}
        width="106"
        height="28"
        decoding="async"
        class="h-7 w-auto"
      />
    {/if}
  </div>

  <div class="px-6 py-10 sm:px-10 sm:py-14">
    <p class="text-sm font-medium text-gray-500">{publication.journal}</p>
    <h1 class="mt-5 text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
      {publication.title}
    </h1>
    <p class="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
      {publication.description}
    </p>
    <a
      href={publication.url}
      target="_blank"
      rel="noopener noreferrer"
      class="mt-7 inline-flex items-center gap-2 border-b border-black pb-1 text-sm transition hover:text-gray-500"
    >
      Read publication
      <Icon icon="lucide:external-link" width={15} height={15} />
    </a>
  </div>

  <div class="border-t border-gray-100 px-6 py-9 sm:px-10">
    <h2 class="text-lg font-medium tracking-tight">Abstract</h2>
    <p class="mt-5 text-sm leading-7 text-gray-600">{publication.abstract}</p>
  </div>

  <div class="border-t border-gray-100 px-6 py-9 sm:px-10">
    <h2 class="text-lg font-medium tracking-tight">Keywords</h2>
    <div class="mt-5 flex flex-wrap gap-2">
      {#each publication.keywords as keyword}
        <span class="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-600">
          {keyword}
        </span>
      {/each}
    </div>
  </div>
</section>
