<script lang="ts">
  import Icon from '@iconify/svelte';
  import { certificates } from '$lib/data/certificates';
</script>

<section class="bg-white">
  <div class="grid grid-cols-1 md:grid-cols-2">
    {#each certificates as item, index (item.id)}
      <article
        class={`flex min-w-0 flex-col border-b border-gray-200 p-5 transition-colors hover:bg-gray-50 sm:p-6 ${
          index % 2 === 0 ? 'md:border-r' : ''
        }`}
      >
        <!-- PREVIEW / BADGE CONTAINER -->
        <div class="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
          {#if item.image}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          {:else}
            <div class="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-400">
              <Icon icon="lucide:award" width={40} height={40} class="text-gray-400" />
              <span class="text-xs font-mono text-gray-500">{item.issuer}</span>
            </div>
          {/if}
        </div>

        <!-- TITLE + YEAR -->
        <div class="mt-5 flex items-start justify-between gap-3">
          <h3 class="text-base font-semibold leading-snug text-black">
            {item.title}
          </h3>
          <span class="shrink-0 font-mono text-xs text-gray-400">
            {item.issueDate}
          </span>
        </div>

        <!-- ISSUER -->
        <p class="mt-1 flex items-center gap-1.5 text-xs font-medium text-gray-600">
          <Icon icon="lucide:badge-check" width={14} height={14} class="shrink-0 text-gray-500" />
          <span>{item.issuer}</span>
        </p>

        <!-- DESCRIPTION -->
        <p class="mt-3 flex-1 text-sm leading-6 text-justify text-gray-600">
          {item.description}
        </p>

        <!-- SKILLS / TAGS -->
        <div class="mt-4 flex flex-wrap gap-1.5">
          {#each item.skills as skill}
            <span class="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 font-mono text-[11px] text-gray-600">
              {skill}
            </span>
          {/each}
        </div>

        <!-- CREDENTIAL LINK -->
        {#if item.credentialUrl}
          <div class="mt-4 pt-2 border-t border-gray-100">
            <a
              href={item.credentialUrl}
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-black transition"
            >
              <span>View Credential</span>
              <Icon icon="lucide:arrow-up-right" width={13} height={13} />
            </a>
          </div>
        {/if}
      </article>
    {/each}
  </div>
</section>
