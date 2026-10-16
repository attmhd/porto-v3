<script lang="ts">
  import ProjectsPage from './ProjectsPage.svelte';
  import type { Project } from '$lib/data/projects';

  let {
    onSelectProject
  }: {
    onSelectProject: (project: Project) => void;
  } = $props();
</script>

<section class="border-b border-gray-200 bg-white px-7 py-8">
  <h2 class="font-hand text-3xl text-black">Product</h2>
  <p class="mt-3 max-w-xl text-sm leading-6 text-gray-500">
    Products and digital experiences I have developed across software, AI, and culture.
  </p>
</section>

<ProjectsPage {onSelectProject} />
