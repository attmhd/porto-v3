
<script lang="ts">
  import Icon from '@iconify/svelte';
  type MenuName = 'Home' | 'Projects' | 'Product' | 'Certificates';

  let {
    activeMenu,
    onMenuChange
  }: {
    activeMenu: MenuName;
    onMenuChange: (menu: MenuName) => void;
  } = $props();

  let settingsOpen = $state(false);
  let soundEnabled = $state(true);
  let backgroundMusic: HTMLAudioElement;

  const menus = [
    { label: 'Home', icon: 'lucide:house' },
    { label: 'Projects', icon: 'lucide:folder-open' },
    { label: 'Product', icon: 'lucide:package' },
    { label: 'Certificates', icon: 'lucide:award' }
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
    backgroundMusic.volume = 0.25;

    const stopRetrying = () => {
      document.removeEventListener('click', startMusic);
      document.removeEventListener('keydown', startMusic);
    };
    const startMusic = (event?: Event) => {
      if (event?.target instanceof Node && backgroundMusic.contains(event.target)) return;
      void backgroundMusic.play().catch(() => {});
    };

    backgroundMusic.addEventListener('play', stopRetrying, { once: true });
    document.addEventListener('click', startMusic);
    document.addEventListener('keydown', startMusic);
    startMusic();

    return () => {
      stopRetrying();
      backgroundMusic.removeEventListener('play', stopRetrying);
    };
  });
</script>

<nav class="sticky top-0 z-40 border-t border-gray-300 bg-white/90 backdrop-blur-md">
  <div class="flex h-16 items-center px-3 sm:px-5">
    {#each menus as menu}
      <button type="button" onclick={() => selectMenu(menu.label)} aria-current={activeMenu === menu.label ? 'page' : undefined} class="group relative flex h-full flex-1 items-center justify-center">
        <div class={`flex items-center gap-2 transition-colors ${activeMenu === menu.label ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
          <Icon icon={menu.icon} width={20} height={20} />
          <span class="hidden text-sm font-medium sm:block">{menu.label}</span>
        </div>
        {#if activeMenu === menu.label}
          <span class="absolute bottom-0 left-1/2 h-0.5 w-12 -translate-x-1/2 bg-black sm:w-16"></span>
        {/if}
      </button>
    {/each}

  </div>
    <audio
      bind:this={backgroundMusic}
      hidden
      src="/SunKissed%20Lola%20-%20Pasilyo%20(Official%20Lyric%20Video).mp3"
      autoplay
      loop
      preload="auto"
    ></audio>
</nav>
