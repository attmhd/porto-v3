
<script lang="ts">
  import PixelBlast from '$lib/components/PixelBlast.svelte';
  import Intro from '$lib/components/Intro.svelte';
  import ProfileHeader from '$lib/components/profile/ProfileHeader.svelte';
  import ProfileNav from '$lib/components/profile/ProfileNav.svelte';
  import HomePage from '$lib/components/pages/HomePage.svelte';
  import ProjectsPage from '$lib/components/pages/ProjectsPage.svelte';
  import BlogPage from '$lib/components/pages/BlogPage.svelte';
  import GalleryPage from '$lib/components/pages/GalleryPage.svelte';
  import ProjectDetail from '$lib/components/profile/ProjectDetail.svelte';
  import Footer from '$lib/components/profile/Footer.svelte';

  import type { Project } from '$lib/data/projects';

  type MenuName = 'Home' | 'Projects' | 'Blog' | 'Gallery';

  let activeMenu = $state<MenuName>('Home');
  let selectedProject = $state<Project | null>(null);

  function changeMenu(menu: MenuName) {
    activeMenu = menu;
    selectedProject = null;
  }

  function openProject(project: Project) {
    selectedProject = project;
  }

  function backToProjects() {
    selectedProject = null;
    activeMenu = 'Projects';
  }

  const separatorStyle =
    'background: repeating-linear-gradient(-45deg, #fff 0px, #fff 9px, #e5e7eb 9px, #e5e7eb 10px);';
</script>

<PixelBlast
  variant="circle"
  pixelSize={3.5}
  color="#949494"
  patternScale={10}
  patternDensity={1.5}
  pixelSizeJitter={8}
  speed={0.3}
  edgeFade={0.35}
  transparent
/>

<Intro />

<main class="relative z-10 border-x border-gray-200">
  <div class="mx-auto max-w-3xl bg-white">
    <ProfileHeader />

    <ProfileNav
      activeMenu={activeMenu}
      onMenuChange={changeMenu}
    />

    <div
      class="h-10 border-y border-gray-200"
      style={separatorStyle}
    ></div>

    {#if selectedProject}
      <ProjectDetail
        project={selectedProject}
        onBack={backToProjects}
      />
    {:else if activeMenu === 'Home'}
      <HomePage onSelectProject={openProject} />
    {:else if activeMenu === 'Projects'}
      <ProjectsPage onSelectProject={openProject} />
    {:else if activeMenu === 'Blog'}
      <BlogPage />
    {:else if activeMenu === 'Gallery'}
      <GalleryPage />
    {/if}
      <div
  class="h-10 border-y border-gray-200"
  style={separatorStyle}
></div>
<Footer />
      <div
  class="h-10 border-y border-gray-200"
  style={separatorStyle}
></div>
  </div>
</main>