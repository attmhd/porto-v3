<script lang="ts">
  import { onMount } from 'svelte';
  import ProfileHeader from '$lib/components/profile/ProfileHeader.svelte';
  import ProfileNav from '$lib/components/profile/ProfileNav.svelte';
  import HomePage from '$lib/components/pages/HomePage.svelte';
  import ProjectsPage from '$lib/components/pages/ProjectsPage.svelte';
  import ProductPage from '$lib/components/pages/ProductPage.svelte';
  import CertificatesPage from '$lib/components/pages/CertificatesPage.svelte';
  import ProductDetail from '$lib/components/profile/ProductDetail.svelte';
  import ProjectDetail from '$lib/components/profile/ProjectDetail.svelte';
  import AchievementDetail from '$lib/components/profile/AchievementDetail.svelte';
  import Footer from '$lib/components/profile/Footer.svelte';

  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
  const selectedAchievement = $derived(data.achievement);
  const activeMenu = $derived(data.menu);
  const selectedProduct = $derived(data.product);
  const selectedProject = $derived(data.project);

  let PixelBlast = $state<typeof import('$lib/components/PixelBlast.svelte').default | null>(null);

  onMount(() => {
    const idle = window.setTimeout(async () => {
      PixelBlast = (await import('$lib/components/PixelBlast.svelte')).default;
    }, 2000);
    return () => window.clearTimeout(idle);
  });

  const separatorStyle =
    'background: repeating-linear-gradient(-45deg, #fff 0px, #fff 9px, #e5e7eb 9px, #e5e7eb 10px);';
</script>

{#if PixelBlast}
  <PixelBlast
    variant="circle"
    pixelSize={3.5}
    color="#949494"
    patternScale={10}
    patternDensity={1.9}
    pixelSizeJitter={8}
    speed={0.3}
    edgeFade={0}
    transparent
  />
{/if}

<main class="relative z-10 border-x border-gray-200">
  <div class="mx-auto max-w-3xl bg-white">
    <ProfileHeader />

    <ProfileNav {activeMenu} />

    {#if !selectedAchievement && !selectedProject && !selectedProduct && activeMenu !== 'Home'}
      <h2 class="sr-only">{activeMenu}</h2>
    {/if}
    {#if selectedAchievement}
      <AchievementDetail achievement={selectedAchievement} />
    {:else if selectedProduct}
      <ProductDetail product={selectedProduct} />
    {:else if selectedProject}
      <ProjectDetail project={selectedProject} />
    {:else if activeMenu === 'Home'}
      <HomePage />
    {:else if activeMenu === 'Projects'}
      <ProjectsPage />
    {:else if activeMenu === 'Product'}
      <ProductPage />
    {:else if activeMenu === 'Certificates'}
      <CertificatesPage />
    {/if}
    <div class="h-10 border-y border-gray-200" style={separatorStyle}></div>
    <Footer />
    <div class="h-10 border-y border-gray-200" style={separatorStyle}></div>
  </div>
</main>
