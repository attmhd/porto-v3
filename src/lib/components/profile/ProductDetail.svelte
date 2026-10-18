<script lang="ts">
  import Icon from '@iconify/svelte';
  import DevelopmentStamp from '$lib/components/profile/DevelopmentStamp.svelte';
  import type { Product } from '$lib/data/products';
  let { product }: { product: Product } = $props();
</script>

<section class="bg-white text-black">
  <div class="flex items-center justify-between gap-4 border-b border-gray-100 px-6 py-4 sm:px-8">
    <a
      href="/product"
      class="flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
    >
      <Icon icon="lucide:arrow-left" width={15} height={15} /> Products
    </a>
    <span class="text-xs text-gray-400">{product.category}</span>
  </div>
  <div class="px-6 py-10 sm:px-10 sm:py-14">
    <div class="flex flex-wrap items-center justify-between gap-5">
      <p class="font-mono text-xs text-gray-400">{product.title}</p>
      <DevelopmentStamp />
    </div>
    <h1 class="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
      {product.headline}
    </h1>
    <p class="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">{product.description}</p>
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      class="mt-7 inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-sm text-white transition hover:bg-gray-800"
    >
      {product.cta}
      <Icon icon="lucide:arrow-up-right" width={16} height={16} />
    </a>
    <p class="mt-4 text-xs leading-6 text-gray-500">{product.status}</p>
  </div>
  <div class="px-6 pb-9 sm:px-10">
    <img
      src={product.image}
      alt={`${product.title} website preview`}
      width="1280"
      height="853"
      decoding="async"
      class="h-auto w-full rounded-lg border border-gray-200"
    />
  </div>
  <div class="border-t border-gray-100 px-6 py-9 sm:px-10">
    <h2 class="text-lg font-medium tracking-tight">What it offers</h2>
    <p class="mt-5 text-sm leading-7 text-gray-600">{product.offer}</p>
    <p class="mt-5 text-xs text-gray-400">Made for</p>
    <p class="mt-2 text-sm leading-7 text-gray-600">{product.audience}</p>
  </div>
  <div class="border-t border-gray-100 px-6 py-9 sm:px-10">
    <h2 class="text-lg font-medium tracking-tight">
      {product.id === 'cekrek-studio' ? 'The experience being built' : 'What you get'}
    </h2>
    <ol class="mt-5 divide-y divide-gray-100">
      {#each product.features as feature, index}
        <li class="flex gap-5 py-4 text-sm leading-6 text-gray-600">
          <span class="shrink-0 font-mono text-xs text-gray-400"
            >{String(index + 1).padStart(2, '0')}</span
          >
          <span>{feature}</span>
        </li>
      {/each}
    </ol>
  </div>
  <div class="border-t border-gray-100 px-6 py-9 sm:px-10">
    <h2 class="text-lg font-medium tracking-tight">Why choose {product.title}?</h2>
    <ul class="mt-5 space-y-3">
      {#each product.benefits as benefit}
        <li class="flex gap-3 text-sm leading-6 text-gray-600">
          <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span><span>{benefit}</span>
        </li>
      {/each}
    </ul>
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      class="mt-7 inline-flex items-center gap-2 border-b border-black pb-1 text-sm transition hover:text-gray-500"
    >
      {product.cta}
      <Icon icon="lucide:arrow-up-right" width={16} height={16} />
    </a>
  </div>
</section>
