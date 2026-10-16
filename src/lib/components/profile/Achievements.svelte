<script lang="ts">
  import Icon from '@iconify/svelte';
  import { achievements } from '$lib/data/achievements';
</script>

<section id="achievements" class="bg-white">
  <h2 class="border-b border-gray-300 px-7 py-5 font-hand text-3xl leading-none text-black">
    Achievements
  </h2>
  <ul class="flex flex-col gap-3 px-7 py-6">
    {#each achievements as item (item.id)}
      <li class="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
        <Icon icon="lucide:trophy" width={18} height={18} class="text-gray-600" />
        <div class="flex-1">
          <p class="font-mono text-sm text-black">{item.title}</p>
          <p class="text-xs text-gray-500">{item.event}</p>
        </div>
        <span class="font-mono text-xs text-gray-500">{item.year}</span>
        {#if item.url}
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${item.title} post`}
            class="text-gray-500 transition hover:text-black"
          >
            <Icon icon="lucide:external-link" width={16} height={16} />
          </a>
        {/if}
      </li>
    {/each}
  </ul>
</section>
