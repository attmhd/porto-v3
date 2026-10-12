
<script lang="ts">
  import {
    House,
    FolderOpen,
    NotebookText,
    Image,
    Settings,
    ChevronDown,
    Volume2,
    VolumeX
  } from 'lucide-svelte';
  type MenuName = 'Home' | 'Projects' | 'Blog' | 'Gallery';

  let {
    activeMenu,
    onMenuChange
  }: {
    activeMenu: MenuName;
    onMenuChange: (menu: MenuName) => void;
  } = $props();

  let settingsOpen = $state(false);
  let soundEnabled = $state(true);

  const menus = [
    { label: 'Home', icon: House },
    { label: 'Projects', icon: FolderOpen },
    { label: 'Blog', icon: NotebookText },
    { label: 'Gallery', icon: Image }
  ] as const;

  function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('navbar-sound', String(soundEnabled));
  }

  function playNavbarSound() {
    if (!soundEnabled) return;

    const audio = new Audio('/sound.wav');
    audio.volume = 0.25;
    audio.play().catch(() => {});
  }

  function selectMenu(menu: MenuName) {
    playNavbarSound();
    onMenuChange(menu);
  }

  import { onMount } from 'svelte';

  onMount(() => {
    soundEnabled = localStorage.getItem('navbar-sound') !== 'false';
  });
</script>

<nav class="sticky top-0 z-40 border-t border-gray-300 bg-white/90 backdrop-blur-md">
  <div class="flex h-16 items-center px-3 sm:px-5">
    {#each menus as menu}
      {@const Icon = menu.icon}
      <button type="button" onclick={() => selectMenu(menu.label)} aria-current={activeMenu === menu.label ? 'page' : undefined} class="group relative flex h-full flex-1 items-center justify-center">
        <div class={`flex items-center gap-2 transition-colors ${activeMenu === menu.label ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
          <Icon size={20} strokeWidth={1.8} />
          <span class="hidden text-sm font-medium sm:block">{menu.label}</span>
        </div>
        {#if activeMenu === menu.label}
          <span class="absolute bottom-0 left-1/2 h-0.5 w-12 -translate-x-1/2 bg-black sm:w-16"></span>
        {/if}
      </button>
    {/each}

    <div class="relative flex h-full flex-1 items-center justify-center">
      <button type="button" onclick={() => settingsOpen = !settingsOpen} aria-expanded={settingsOpen} aria-label="Settings" class="flex items-center gap-1.5 text-gray-500 hover:text-black">
        <Settings size={20} strokeWidth={1.8} />
        <ChevronDown size={15} class={`transition-transform ${settingsOpen ? 'rotate-180' : ''}`} />
      </button>

      {#if settingsOpen}
        <div class="absolute right-0 top-full z-50 mt-2 w-52 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
          <p class="px-3 py-2 text-xs font-medium uppercase tracking-wider text-gray-400">Preferences</p>
          <button type="button" onclick={toggleSound} class="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-700 hover:bg-gray-100">
            {#if soundEnabled}
              <Volume2 size={18} />
              <span>Sound on</span>
            {:else}
              <VolumeX size={18} />
              <span>Sound off</span>
            {/if}
            <span class="ml-auto text-xs text-gray-400">{soundEnabled ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      {/if}
    </div>
  </div>
</nav>
