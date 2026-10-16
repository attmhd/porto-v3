<script lang="ts">
  import Icon from '@iconify/svelte';
  import { STACK_CONTENT } from '$lib/data/stack';
</script>
<section
  id="stack"
  class="bg-white"
>
  <!-- SECTION TITLE -->
  <h2
    class="border-b border-gray-300 px-7 py-5 font-hand text-3xl leading-none text-black"
  >
    Tech Stack
  </h2>
  <!-- STACK ITEMS -->
  <div class="flex flex-wrap items-center gap-2 px-7 py-6">
    {#each STACK_CONTENT as item}
      <div
        class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs text-gray-600"
      >
        <Icon icon={`simple-icons:${item.iconName}`} width={15} height={15} />
        <span class="font-mono text-black">
          {item.name}
        </span>
      </div>
    {/each}
  </div>
</section>