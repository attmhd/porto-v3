<script lang="ts">
  import Experience from '../profile/Experience.svelte';
  import Stack from '../profile/Stack.svelte';
  import Achievements from '../profile/Achievements.svelte';

  const separatorStyle =
    'background: repeating-linear-gradient(-45deg, #fff 0px, #fff 9px, #e5e7eb 9px, #e5e7eb 10px);';
</script>

<Experience />

<div class="h-10 border-y border-gray-200" style={separatorStyle}></div>

<Stack />

<div class="h-10 border-y border-gray-200" style={separatorStyle}></div>

<Achievements />
