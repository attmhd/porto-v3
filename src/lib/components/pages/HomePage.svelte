
<script lang="ts">
  import Experience from '../profile/Experience.svelte';
  import Stack from '../profile/Stack.svelte';
  import Projects from '../profile/Projects.svelte';

  import type { Project } from '$lib/data/projects';

  let {
    onSelectProject
  }: {
    onSelectProject: (project: Project) => void;
  } = $props();

  const separatorStyle =
    'background: repeating-linear-gradient(-45deg, #fff 0px, #fff 9px, #e5e7eb 9px, #e5e7eb 10px);';
</script>

<Experience />

<div
  class="h-10 border-y border-gray-200"
  style={separatorStyle}
></div>

<Projects {onSelectProject} />

<div
  class="h-10 border-y border-gray-200"
  style={separatorStyle}
></div>

<Stack />


