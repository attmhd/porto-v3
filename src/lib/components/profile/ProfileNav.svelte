
<script lang="ts">
  import Icon from '@iconify/svelte';
  import { onMount } from 'svelte';
  type MenuName = 'Home' | 'Projects' | 'Product' | 'Certificates';

  let {
    activeMenu
  }: {
    activeMenu: MenuName;
  } = $props();

  let soundEnabled = $state(true);
  let backgroundMusic: HTMLAudioElement;

  const menus = [
    { label: 'Home', icon: 'lucide:house' },
    { label: 'Projects', icon: 'lucide:folder-open' },
    { label: 'Product', icon: 'lucide:package' },
    { label: 'Certificates', icon: 'lucide:award' }
  ] as const;

  function playNavbarSound() {
    if (!soundEnabled) return;

    const audio = new Audio('/sound.wav');
    audio.volume = 0.25;
    audio.play().catch(() => {});
  }

  onMount(() => {
    soundEnabled = localStorage.getItem('navbar-sound') !== 'false';
    backgroundMusic.volume = 0.25;

    const interactionEvents = ['pointerdown', 'keydown', 'touchstart'];
    const stopRetrying = () => {
      for (const eventName of interactionEvents) {
        document.removeEventListener(eventName, startMusic);
      }
    };
    const startMusic = (event?: Event) => {
      if (event instanceof KeyboardEvent && event.repeat) return;

      void backgroundMusic.play().then(stopRetrying).catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'NotAllowedError') return;
        console.error('Failed to start background music:', error);
      });
    };

    for (const eventName of interactionEvents) {
      document.addEventListener(eventName, startMusic, { passive: true });
    }
    startMusic();

    return () => {
      stopRetrying();
    };
  });
</script>

<nav class="sticky top-0 z-40 border-t border-gray-300 bg-white/90 backdrop-blur-md">
  <div class="flex h-16 items-center px-3 sm:px-5">
    {#each menus as menu}
      <a href={menu.label === 'Home' ? '/' : `/${menu.label.toLowerCase()}`} onclick={playNavbarSound} aria-label={menu.label} aria-current={activeMenu === menu.label ? 'page' : undefined} class="group relative flex h-full flex-1 items-center justify-center">
        <div class={`flex items-center gap-2 transition-colors ${activeMenu === menu.label ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
          <Icon icon={menu.icon} width={20} height={20} />
          <span class="hidden text-sm font-medium sm:block">{menu.label}</span>
        </div>
        {#if activeMenu === menu.label}
          <span class="absolute bottom-0 left-1/2 h-0.5 w-12 -translate-x-1/2 bg-black sm:w-16"></span>
        {/if}
      </a>
    {/each}

  </div>
    <audio
      bind:this={backgroundMusic}
      hidden
      src="/SunKissed%20Lola%20-%20Pasilyo%20(Official%20Lyric%20Video).mp3"
      autoplay
      loop
      preload="none"
      aria-label="Background music"
    ></audio>
</nav>
