<script lang="ts">
  import { education } from '$lib/data/education';
</script>

<section class="bg-white">
  <div class="border-gray-300 px-7 py-5">
    <h2 class="font-hand text-3xl leading-none text-black">
      Education
      <sup class="align-top font-hand text-sm text-gray-400">({education.length})</sup>
    </h2>
  </div>

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
            <div class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-gray-500">
              <span>{item.gpa}</span>
              <span class="text-gray-300">|</span>
              <span>{item.period}</span>
            </div>
          </div>
        </div>
      </article>
    {/each}
  </div>
</section>
