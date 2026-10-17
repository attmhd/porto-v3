<script lang="ts">
  import Icon from '@iconify/svelte';
  import { experiences } from '$lib/data/experience';

  let activeIndex = $state<number | null>(null);

  function toggleExperience(index: number) {
    activeIndex = activeIndex === index ? null : index;
  }
</script>

<section class="bg-white">
  <!-- Section Header -->
  <div class=" border-gray-300 px-7 py-5">
    <h2 class="font-hand text-3xl leading-none text-black">
      Experience

      <sup class=" align-top font-hand text-sm text-gray-400">
        ({experiences.length})
      </sup>
    </h2>
  </div>

  <!-- Experience List -->
  <div>
    {#each experiences as experience, index}
      <article class="border-t border-gray-300">

        <!-- Company + Role -->
        <div class="px-7 py-7">

          <!-- Company -->
          <div class="flex items-center gap-5">

            <!-- Company Logo -->
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-semibold text-gray-500">
            {#if experience.logo}
              <img
                src={experience.logo}
                alt={experience.company}
                width="40"
                height="40"
                decoding="async"
                class="max-h-10 max-w-10 rounded-xl object-contain mix-blend-multiply"
              />
            {:else}
              {experience.company.slice(0, 2).toUpperCase()}
            {/if}
          </div>
            <!-- Company Name -->
            <h3
              class="text-xl font-semibold tracking-tight text-black"
            >
              {experience.company}
            </h3>

          </div>

          <!-- Role Timeline -->
          <div class="mt-4 flex">

            <!-- Timeline Icon + Line -->
            <div class="relative flex w-10 shrink-0 justify-center">

              <!-- Vertical Line -->
              {#if index < experiences.length - 1}
                <div
                  class="absolute left-1/2 top-10 -bottom-7 w-px -translate-x-1/2 bg-gray-200"
                ></div>
              {/if}

            </div>

            <!-- Role Content -->
            <div class="min-w-0 flex-1 pl-5">

              <!-- Clickable Role -->
              <button
                type="button"
                class="flex w-full items-center gap-3 text-left"
                onclick={() => toggleExperience(index)}
                aria-expanded={activeIndex === index}
              >
                <span
                  class="text-lg font-medium text-black"
                >
                  {experience.role}
                </span>

                <Icon
                  icon="lucide:chevron-down"
                  width={21}
                  height={21}
                  class={`ml-auto shrink-0 text-gray-500 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <!-- Metadata -->
              <div
                class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-gray-500"
              >
                <span>
                  {experience.type}
                </span>

                <span class="text-gray-300">
                  |
                </span>

                <span>
                  {experience.period}
                </span>

              </div>

              <!-- TECH STACK -->
              <div class="mt-4 flex flex-wrap gap-2">
                {#each experience.tags as tag}
                  <span
                    class="inline-flex items-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 font-mono text-sm text-gray-600"
                  >
                    {tag}
                  </span>
                {/each}
              </div>

              <!-- Description -->
              <div
                class="grid transition-[grid-template-rows] duration-500 ease-in-out"
                class:grid-rows-1={activeIndex === index}
                class:grid-rows-0={activeIndex !== index}
              >
                <div class="overflow-hidden">
                  <div class="pt-5">
                    <p
                      class="max-w-2xl text-base leading-7 text-gray-600"
                    >
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </article>
    {/each}
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
