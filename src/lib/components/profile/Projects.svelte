
<script lang="ts">
  import Icon from '@iconify/svelte';
  import { projects } from '$lib/data/projects';
  import type { Project } from '$lib/data/projects';
  import { paginate } from '$lib/utils/pagination';

  let {
    onSelectProject,
    pageSize = 10
  }: {
    onSelectProject: (project: Project) => void;
    pageSize?: number;
  } = $props();

  let currentPage = $state(1);

  let pagination = $derived(paginate(projects, currentPage, pageSize));

  function goToPage(page: number) {
    if (page >= 1 && page <= pagination.totalPages) {
      currentPage = page;
    }
  }
</script>

<section id="projects" class="mt-5 bg-white">
  <!-- SECTION HEADER -->
  <div class="flex border-gray-300 px-7 pb-5">
    <h2 class="font-hand text-3xl leading-none text-black">
      Projects
    </h2>

    <span class="ml-2 font-hand text-sm text-gray-400">
      ({projects.length})
    </span>
  </div>

  <!-- PROJECT LIST -->
  <div>
    {#each pagination.items as project, index (project.id)}
      <button
        type="button"
        onclick={() => onSelectProject(project)}
        aria-label={`View details for ${project.title}`}
        class="group block w-full border-t border-gray-300 px-7 py-7 text-left transition-colors duration-200 hover:bg-[#f1f1f1]"
      >
        <div
          class="grid grid-cols-[44px_minmax(0,1fr)] gap-4 sm:grid-cols-[72px_minmax(0,1fr)_160px] sm:gap-6"
        >
          <!-- NUMBER -->
          <div>
            <span
              class="font-mono text-4xl font-light leading-none tracking-tight text-gray-300 transition-colors group-hover:text-gray-400 sm:text-5xl"
            >
              {project.number}
            </span>
          </div>

          <!-- MAIN CONTENT -->
          <div class="min-w-0">
            <div class="flex items-start gap-3">
              <h3 class="text-xl font-medium tracking-tight text-black">
                {project.title}
              </h3>

              <Icon
                icon="lucide:arrow-up-right"
                width={18}
                height={18}
                class="mt-1 shrink-0 text-black opacity-0 transition duration-300 group-hover:rotate-45 group-hover:opacity-100"
              />
            </div>

            <p
              class="mt-3 max-w-xl text-justify text-sm leading-6 text-gray-500"
            >
              {project.description}
            </p>

            <!-- TECHNOLOGIES -->
            <div class="mt-5 flex flex-wrap gap-2">
              {#each project.technologies as technology}
                <span
                  class="rounded-xl border border-gray-200 bg-gray-100 px-3 py-1.5 font-mono text-xs text-gray-500"
                >
                  {technology}
                </span>
              {/each}
            </div>
          </div>

          <!-- PROJECT METADATA -->
          <div
            class="hidden space-y-3 text-right text-xs text-gray-400 sm:block"
          >
            <div>
              <p>ROLE</p>
              <p class="mt-1 text-gray-700">{project.role}</p>
            </div>

            <div>
              <p>TYPE</p>
              <p class="mt-1 text-gray-700">{project.type}</p>
            </div>

            {#if project.year}
              <div>
                <p>YEAR</p>
                <p class="mt-1 text-gray-700">{project.year}</p>
              </div>
            {/if}
          </div>
        </div>
      </button>
    {/each}
  </div>

  <!-- PAGINATION -->
  {#if pagination.totalPages > 1}
    <div class="flex flex-col items-center justify-between gap-4 border-t border-gray-300 px-7 py-5 sm:flex-row">
      <p class="font-mono text-xs text-gray-500">
        Showing {(pagination.currentPage - 1) * pagination.pageSize + 1}-{Math.min(pagination.currentPage * pagination.pageSize, pagination.totalItems)} of {pagination.totalItems}
      </p>

      <div class="flex items-center gap-2">
        <button
          type="button"
          onclick={() => goToPage(pagination.currentPage - 1)}
          disabled={!pagination.hasPrevPage}
          aria-label="Previous page"
          class="inline-flex h-9 items-center justify-center rounded-lg border border-gray-200 px-3 font-mono text-xs text-gray-600 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Icon icon="lucide:chevron-left" width={16} height={16} class="mr-1" />
          Prev
        </button>

        <div class="flex items-center gap-1">
          {#each Array.from({ length: pagination.totalPages }, (_, i) => i + 1) as page}
            <button
              type="button"
              onclick={() => goToPage(page)}
              aria-label={`Page ${page}`}
              aria-current={pagination.currentPage === page ? 'page' : undefined}
              class={`inline-flex h-9 w-9 items-center justify-center rounded-lg font-mono text-xs transition-colors ${
                pagination.currentPage === page
                  ? 'bg-black font-medium text-white'
                  : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          {/each}
        </div>

        <button
          type="button"
          onclick={() => goToPage(pagination.currentPage + 1)}
          disabled={!pagination.hasNextPage}
          aria-label="Next page"
          class="inline-flex h-9 items-center justify-center rounded-lg border border-gray-200 px-3 font-mono text-xs text-gray-600 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
          <Icon icon="lucide:chevron-right" width={16} height={16} class="ml-1" />
        </button>
      </div>
    </div>
  {/if}
</section>
