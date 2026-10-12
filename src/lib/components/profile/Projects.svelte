
<script lang="ts">
  import { ArrowUpRight } from 'lucide-svelte';
  import { projects } from '$lib/data/projects';
  import type { Project } from '$lib/data/projects';

  let {
    onSelectProject
  }: {
    onSelectProject: (project: Project) => void;
  } = $props();
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
    {#each projects as project, index (project.id)}
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

              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
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

            <div>
              <p>YEAR</p>
              <p class="mt-1 text-gray-700">{project.year}</p>
            </div>
          </div>
        </div>
      </button>
    {/each}
  </div>
</section>
