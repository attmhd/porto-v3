
<script lang="ts">
  import Icon from '@iconify/svelte';
  import { projects, type Project } from '$lib/data/projects';

  let {
    onSelectProject
  }: {
    onSelectProject: (project: Project) => void;
  } = $props();
</script>

<section class="bg-white">
  <div class="grid grid-cols-1 sm:grid-cols-2">
    {#each projects as project, index (project.id)}
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
            class="h-full w-full object-cover transition-transform duration-500 "
          />
        </div>

        <!-- TECHNOLOGIES -->
        <div class="mt-4 flex flex-wrap gap-2">
          <span class="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 font-mono text-xs text-gray-500">
            {project.year}
          </span>

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
</section>
