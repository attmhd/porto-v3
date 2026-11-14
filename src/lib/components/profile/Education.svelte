<script lang="ts">
  import CollapsibleSection from '../common/CollapsibleSection.svelte';
  import { education } from '$lib/data/education';
</script>

<CollapsibleSection title="Education" count={education.length}>
  <div>
    {#each education as item (item.institution)}
      <article class="border-t border-gray-300 px-7 py-7">
        <div class="flex items-center gap-5">
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-semibold text-gray-500"
          >
            <img
              src={item.logo}
              alt={item.institution}
              width="40"
              height="40"
              decoding="async"
              class="max-h-10 max-w-10 rounded-xl object-contain mix-blend-multiply"
            />
          </div>
          <div class="min-w-0">
            <h3 class="text-xl font-semibold tracking-tight text-black">{item.institution}</h3>
            <p class="mt-2 text-lg font-medium text-black">{item.degree}</p>
            {#if item.gpa || item.period}
              <div class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-gray-500">
                {#if item.gpa}
                  <span>{item.gpa}</span>
                {/if}
                {#if item.gpa && item.period}
                  <span class="text-gray-300">|</span>
                {/if}
                {#if item.period}
                  <span>{item.period}</span>
                {/if}
              </div>
            {/if}
          </div>
        </div>
      </article>
    {/each}
  </div>
</CollapsibleSection>
