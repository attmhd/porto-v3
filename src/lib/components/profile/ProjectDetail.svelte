
<script lang="ts">
  import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    CodeXml,
    ExternalLink
  } from 'lucide-svelte';

  import type { Project } from '$lib/data/projects';

  let { project, onBack }: {
    project: Project;
    onBack: () => void;
  } = $props();

  let activeImage = $state(0);
</script>

<section class="bg-white text-black">
  <!-- HEADER -->
  <div
    class="flex items-center justify-between border-b border-gray-100 px-6 py-4 sm:px-8"
  >
    <button
      type="button"
      onclick={onBack}
      class="group flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
    >
      <ArrowLeft size={15} class="transition-transform group-hover:-translate-x-1" />
      <span>Projects</span>
    </button>

    <span class="text-xs text-gray-400">
      {project.category}
    </span>
  </div>

  <!-- INTRO -->
  <div class="px-6 py-10 sm:px-10 sm:py-14">
    <div class="flex items-center gap-3 text-xs text-gray-400">
      <span class="font-mono">{project.number}</span>
      <span class="h-px w-6 bg-gray-300"></span>
      <span>{project.year}</span>
    </div>

    <h1
      class="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl"
    >
      {project.title}
    </h1>

    <p class="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
      {project.details}
    </p>

    <!-- LINKS -->
    {#if project.demoUrl || project.repositoryUrl}
      <div class="mt-7 flex flex-wrap items-center gap-5">
        {#if project.demoUrl}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 border-b border-black pb-1 text-sm transition hover:text-gray-500 hover:border-gray-300"
          >
            <ExternalLink size={15} />
            Live Demo
            <ArrowUpRight size={14} />
          </a>
        {/if}

        {#if project.repositoryUrl}
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 border-b border-gray-300 pb-1 text-sm text-gray-600 transition hover:border-black hover:text-black"
          >
            <CodeXml size={15} />
            View Repository
            <ArrowUpRight size={14} />
          </a>
        {/if}
      </div>
    {/if}
  </div>

  <!-- IMAGE CAROUSEL -->
  <div class="px-4 sm:px-8">
    {#if project.gallery.length > 0}
      <div class="relative">
        <div
          class="flex aspect-video items-center justify-center overflow-hidden bg-gray-50 rounded-xl border border-gray-200"
        >
          <img
            src={project.gallery[activeImage]}
            alt={`${project.title} preview ${activeImage + 1}`}
            class="aspect-video object-cover py-7"
          />
        </div>

        {#if project.gallery.length > 1}
          <!-- PREVIOUS -->
          <button
            type="button"
            aria-label="Previous image"
            onclick={() => {
              activeImage =
                (activeImage - 1 + project.gallery.length) %
                project.gallery.length;
            }}
            class="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-700 transition hover:bg-white hover:text-black sm:left-4"
          >
            <ArrowLeft size={17} strokeWidth={1.5} />
          </button>

          <!-- NEXT -->
          <button
            type="button"
            aria-label="Next image"
            onclick={() => {
              activeImage =
                (activeImage + 1) % project.gallery.length;
            }}
            class="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-700 transition hover:bg-white hover:text-black sm:right-4"
          >
            <ArrowRight size={17} strokeWidth={1.5} />
          </button>
        {/if}
      </div>

      <!-- CAROUSEL FOOTER -->
      <div class="flex items-center justify-between py-4">
        <span class="text-xs text-gray-400">
          Project Preview
        </span>

        {#if project.gallery.length > 1}
          <div class="flex items-center gap-2">
            {#each project.gallery as image, index}
              <button
                type="button"
                aria-label={`Show image ${index + 1}`}
                aria-current={activeImage === index ? 'true' : undefined}
                onclick={() => {
                  activeImage = index;
                }}
                class={`h-1.5 rounded-full transition-all duration-200 ${
                  activeImage === index
                    ? 'w-5 bg-black'
                    : 'w-1.5 bg-gray-300 hover:bg-gray-500'
                }`}
              ></button>
            {/each}
          </div>

          <span class="font-mono text-xs text-gray-400">
            {String(activeImage + 1).padStart(2, '0')} / {String(project.gallery.length).padStart(2, '0')}
          </span>
        {:else}
          <span class="text-xs text-gray-400">01 / 01</span>
        {/if}
      </div>
    {:else}
      <div class="flex aspect-video items-center justify-center bg-gray-50">
        <span class="text-sm text-gray-400">Preview coming soon</span>
      </div>
    {/if}
  </div>

  <!-- PROJECT INFORMATION -->
  <div class="mt-5 border-y border-gray-100 ">
    <div class="grid grid-cols-2 gap-y-7 px-6 py-7 sm:grid-cols-3 sm:px-10">
      <div>
        <p class="text-xs text-gray-400">Ownership</p>
        <p class="mt-2 text-sm text-gray-800">{project.ownership}</p>
      </div>

      <div>
        <p class="text-xs text-gray-400">Role</p>
        <p class="mt-2 text-sm text-gray-800">{project.role}</p>
      </div>

      <div class="col-span-2 sm:col-span-1">
        <p class="text-xs text-gray-400">Team</p>
        <p class="mt-2 text-sm text-gray-800">{project.team}</p>
      </div>
    </div>
  </div>

  <!-- RESPONSIBILITIES -->
  <div class="px-9 py-9 ">
    <h2 class="text-lg font-medium tracking-tight">My Role</h2>

    <ol class="mt-5 divide-y divide-gray-100">
      {#each project.responsibilities as responsibility, index}
        <li class="flex gap-5 py-4 text-sm leading-6 text-gray-600">
          <span class="shrink-0 font-mono text-xs text-gray-400">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span>{responsibility}</span>
        </li>
      {/each}
    </ol>
  </div>

  <!-- FEATURES -->
  <div class="border-t border-gray-100 px-6 py-9 sm:px-10 sm:py-10">
    <h2 class="text-lg font-medium tracking-tight">Features</h2>

    <ol class="mt-5 divide-y divide-gray-100">
      {#each project.features as feature, index}
        <li class="flex gap-5 py-4 text-sm leading-6 text-gray-600">
          <span class="shrink-0 font-mono text-xs text-gray-400">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span>{feature}</span>
        </li>
      {/each}
    </ol>
  </div>

  <!-- IMPACT -->
  <div class="border-t border-gray-100 px-6 py-9 sm:px-10 sm:py-10">
    <h2 class="text-lg font-medium tracking-tight">Impact</h2>

    <ul class="mt-5 space-y-3">
      {#each project.impacts as impact}
        <li class="flex gap-3 text-sm leading-6 text-gray-600">
          <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400"></span>
          <span>{impact}</span>
        </li>
      {/each}
    </ul>
  </div>

  <!-- TECH STACK -->
  <div class="border-t border-gray-100 px-6 py-9 sm:px-10 sm:py-10">
    <h2 class="text-lg font-medium tracking-tight">Tech Stack</h2>

    <div class="mt-5 flex flex-wrap gap-x-5 gap-y-3">
      {#each project.technologies as technology}
        <span class="text-sm text-gray-500">{technology}</span>
      {/each}
    </div>
  </div>
</section>