<script lang="ts">
  import Icon from '@iconify/svelte';
  import DevelopmentStamp from '$lib/components/profile/DevelopmentStamp.svelte';
  import { products } from '$lib/data/products';
</script>

<section class="bg-white">
  <div class="grid grid-cols-1 sm:grid-cols-2">
    {#each products as product, index (product.id)}
      <a
        href={`/product/${product.id}`}
        aria-label={`View product details: ${product.title}`}
        class={`group flex min-w-0 flex-col border-b border-gray-200 p-5 text-left transition-colors hover:bg-gray-50 sm:p-6 ${index % 2 === 0 ? 'sm:border-r' : ''}`}
      >
        <div class="flex min-h-14 items-start justify-between gap-3">
          <h3 class="text-lg font-semibold leading-tight text-gray-800">{product.title}</h3>
          <Icon
            icon="lucide:arrow-up-right"
            width={19}
            height={19}
            class="shrink-0 text-gray-400 group-hover:text-black"
          />
        </div>
        <p class="min-h-20 text-justify text-sm leading-6 text-gray-600">{product.description}</p>
        <div
          class="relative mt-4 aspect-4/2.5 w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100"
        >
          <img
            src={product.image}
            alt={`${product.title} website preview`}
            width="640"
            height="400"
            loading="lazy"
            decoding="async"
            class="h-full w-full object-cover object-top"
          />
          <div class="absolute bottom-5 right-3"><DevelopmentStamp /></div>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          {#each product.tags as tag}
            <span
              class="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 font-mono text-xs text-gray-500"
              >{tag}</span
            >
          {/each}
        </div>
        <span class="mt-5 text-sm font-medium text-gray-800">Discover the product →</span>
      </a>
    {/each}
  </div>
</section>
