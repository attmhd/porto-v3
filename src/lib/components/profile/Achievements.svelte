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
      <li>
        <a
          href={`/achievements/${item.id}`}
          aria-label={`View ${item.event} achievement details`}
          class="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 transition hover:border-gray-400 hover:bg-white"
        >
          <Icon icon="lucide:trophy" width={18} height={18} class="text-gray-600" />
          <div class="flex-1">
            <p class="font-mono text-sm text-black">{item.title}</p>
            <p class="text-xs text-gray-500">{item.event}</p>
          </div>
          <span class="font-mono text-xs text-gray-500">{item.year}</span>
          <Icon
            icon="lucide:arrow-up-right"
            width={16}
            height={16}
            class="shrink-0 text-gray-500"
          />
        </a>
      </li>
    {/each}
  </ul>
</section>
