<script lang="ts">
  import Icon from '@iconify/svelte';
  import { publications } from '$lib/data/publications';
</script>

<section id="publications" class="bg-white">
  <h2 class="border-b border-gray-300 px-7 py-5 font-hand text-3xl leading-none text-black">
    Publications
  </h2>
  <ul class="flex flex-col gap-3 px-7 py-6">
    {#each publications as item (item.id)}
      <li>
        <a
          href={`/publications/${item.id}`}
          aria-label={`View publication details: ${item.title}`}
          class="block rounded-lg border border-gray-200 bg-gray-50 p-4 transition hover:border-gray-400 hover:bg-white"
        >
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="text-xs font-medium text-gray-500">{item.journal}</p>
              <h3 class="mt-1 text-sm font-semibold leading-6 text-black">{item.title}</h3>
            </div>
            {#if item.badgeImage}
              <img
                src={item.badgeImage}
                alt={item.badgeLabel ?? 'Publication badge'}
                width="106"
                height="28"
                loading="lazy"
                decoding="async"
                class="h-7 w-auto shrink-0 object-contain"
              />
            {:else}
              <Icon
                icon="lucide:arrow-up-right"
                width={16}
                height={16}
                class="mt-0.5 shrink-0 text-gray-500"
              />
            {/if}
          </div>
          <p class="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
        </a>
      </li>
    {/each}
  </ul>
</section>
