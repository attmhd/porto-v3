
<script lang="ts">
  import Icon from '@iconify/svelte';
  import { projects, type Project } from '$lib/data/projects';

  let {
    onSelectProject
  }: {
    onSelectProject: (project: Project) => void;
  } = $props();

  const projectsPerPage = 6;
  let currentPage = $state(1);
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const visibleProjects = $derived(
    projects.slice(
      (currentPage - 1) * projectsPerPage,
      currentPage * projectsPerPage
    )
  );
</script>

<section class="bg-white">
  <div class="grid grid-cols-1 sm:grid-cols-2">
    {#each visibleProjects as project, index (project.id)}
      <button
        type="button"
        onclick={() => onSelectProject(project)}
        aria-label={`View project details: ${project.title}`}
        class={`group flex min-w-0 flex-col border-b border-gray-200 p-5 text-left transition-colors hover:bg-gray-50 sm:p-6 ${
          index % 2 === 0 ? 'sm:border-r' : ''
        }`}
      >
        <!-- PROJECT TITLE -->
        <div class="flex min-h-14 items-start justify-between gap-3">
          <h3 class="text-lg font-semibold leading-tight text-gray-800">
            {project.title}
          </h3>

          <Icon
            icon="lucide:arrow-up-right"
            width={19}
            height={19}
            class="shrink-0 text-gray-400 transition-transform duration-300 group-hover:rotate-360 group-hover:text-black"
          />
        </div>

        <!-- PROJECT DESCRIPTION -->
        <p class="min-h-20 text-sm leading-6 text-gray-600 text-justify">
          {project.description}
        </p>

        <!-- PROJECT IMAGE -->
        <div class="relative mt-4 aspect-4/2.5 w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-500"
          />
        </div>

        <!-- TECHNOLOGIES -->
        <div class="mt-4 flex flex-wrap gap-2">
          {#each project.technologies as technology}
            <span
              class="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 font-mono text-xs text-gray-500"
            >
              {technology}
            </span>
          {/each}
        </div>
      </button>
    {/each}
  </div>

  {#if totalPages > 1}
    <div class="flex items-center justify-between border-t border-gray-200 px-5 py-4 sm:px-6">
      <button
        type="button"
        onclick={() => (currentPage = Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        class="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
      >
        <Icon icon="lucide:arrow-left" width={16} height={16} />
        Previous
      </button>

      <div class="flex items-center gap-1.5" aria-label="Project pages">
        {#each Array(totalPages) as _, index}
          <button
            type="button"
            onclick={() => (currentPage = index + 1)}
            aria-label={`Go to project page ${index + 1}`}
            aria-current={currentPage === index + 1 ? 'page' : undefined}
            class={`flex h-8 w-8 items-center justify-center rounded-lg text-sm transition ${
              currentPage === index + 1
                ? 'bg-black text-white'
                : 'text-gray-500 hover:bg-gray-100 hover:text-black'
            }`}
          >
            {index + 1}
          </button>
        {/each}
      </div>

      <button
        type="button"
        onclick={() => (currentPage = Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        class="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
      >
        Next
        <Icon icon="lucide:arrow-right" width={16} height={16} />
      </button>
    </div>
  {/if}
</section>
