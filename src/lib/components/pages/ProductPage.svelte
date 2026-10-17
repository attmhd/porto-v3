<section class="border-b border-gray-200 bg-white px-7 py-8">
  <p class="text-sm font-medium text-gray-500">Currently building</p>
  <h2 class="mt-2 font-hand text-3xl text-black">Products in development</h2>
  <div class="mt-5 flex flex-wrap gap-2">
    {#each ['cekrek.studio', 'nantee', 'nattapos'] as product}
      <span class="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 font-mono text-sm text-gray-600">
        {product}
      </span>
    {/each}
  </div>
</section>
