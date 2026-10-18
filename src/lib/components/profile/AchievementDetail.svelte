<script lang="ts">
  import galleryFallback from '$lib/assets/images/404.webp';
  import Icon from '@iconify/svelte';
  import { onMount } from 'svelte';
  import type { Achievement } from '$lib/data/achievements';
  let { achievement }: { achievement: Achievement } = $props();
  let activePhoto = $state(0);
  let galleryPaused = $state(false);

  function showPhoto(index: number) {
    activePhoto = (index + achievement.gallery.length) % achievement.gallery.length;
  }

  onMount(() => {
    if (achievement.gallery.length < 2) return;

    const interval = window.setInterval(() => {
      if (!galleryPaused) showPhoto(activePhoto + 1);
    }, 4500);

    return () => window.clearInterval(interval);
  });
</script>

<section class="bg-white text-black">
  <div class="flex items-center justify-between gap-4 border-b border-gray-100 px-6 py-4 sm:px-8">
    <a
      href="/#achievements"
      class="flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
    >
      <Icon icon="lucide:arrow-left" width={15} height={15} /> Achievements
    </a>
    <span class="font-mono text-xs text-gray-400">{achievement.year}</span>
  </div>
  <div class="px-6 py-10 sm:px-10 sm:py-14">
    <p class="flex items-center gap-2 text-sm text-gray-600">
      <Icon icon="lucide:trophy" width={18} height={18} />{achievement.title}
    </p>
    <h1 class="mt-5 text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
      {achievement.projectName}
    </h1>
    <p class="mt-3 text-sm text-gray-400">{achievement.event} · {achievement.year}</p>
    <p class="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">{achievement.summary}</p>
    <div class="mt-7 flex flex-wrap gap-x-6 gap-y-4">
      <a
        href={`/projects/${achievement.projectId}`}
        class="inline-flex items-center gap-2 border-b border-black pb-1 text-sm transition hover:text-gray-500"
        >Explore the project <Icon icon="lucide:arrow-up-right" width={15} height={15} /></a
      >
      {#if achievement.url}
        <a
          href={achievement.url}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 border-b border-gray-300 pb-1 text-sm text-gray-600 transition hover:text-black"
          >{achievement.id === 'pidi-semifinalist' ? 'Innovation profile' : 'Award announcement'}
          <Icon icon="lucide:external-link" width={15} height={15} /></a
        >
      {/if}
      {#if achievement.liveUrl}
        <a
          href={achievement.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 border-b border-gray-300 pb-1 text-sm text-gray-600 transition hover:text-black"
        >
          Live website
          <Icon icon="lucide:external-link" width={15} height={15} />
        </a>
      {/if}
    </div>
  </div>
  {#key achievement.id}
    <div class="px-6 pb-9 sm:px-10">
      <h2 class="mb-5 text-lg font-medium tracking-tight">Team gallery</h2>
      <div
        class="overflow-hidden rounded-xl border border-gray-200 bg-gray-50"
        role="region"
        aria-label={`${achievement.projectName} team gallery`}
        onmouseenter={() => (galleryPaused = true)}
        onmouseleave={() => (galleryPaused = false)}
        onfocusin={() => (galleryPaused = true)}
        onfocusout={() => (galleryPaused = false)}
      >
        <div
          class="flex transition-transform duration-500 ease-out"
          style={`transform: translateX(-${activePhoto * 100}%);`}
        >
          {#each achievement.gallery as photo, index}
            <div
              id={`${achievement.id}-photo-${index}`}
              class="w-full shrink-0"
              role="group"
              aria-label={`Photo ${index + 1} of ${achievement.gallery.length}`}
              aria-hidden={activePhoto !== index}
            >
              <img
                src={photo.src ?? galleryFallback}
                alt={photo.alt}
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
                class="aspect-video w-full object-contain"
              />
            </div>
          {/each}
        </div>
      </div>
      {#if achievement.gallery.length > 1}
        <div class="mt-4 flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Choose gallery photo" class="flex gap-2">
            {#each achievement.gallery as _, index}
              <button
                type="button"
                onclick={() => showPhoto(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-current={activePhoto === index ? 'true' : undefined}
                class={`flex h-8 w-8 items-center justify-center rounded-lg border font-mono text-xs transition hover:border-black hover:text-black ${
                  activePhoto === index
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200 text-gray-600'
                }`}>{String(index + 1).padStart(2, '0')}</button
              >
            {/each}
          </nav>
        </div>
      {/if}
    </div>
  {/key}
  {#each [{ title: 'The problem', text: achievement.problem }, { title: 'What we built', text: achievement.solution }, { title: 'The vision', text: achievement.vision }] as section}
    <div class="border-t border-gray-100 px-6 py-9 sm:px-10">
      <h2 class="text-lg font-medium tracking-tight">{section.title}</h2>
      <p class="mt-5 text-sm leading-7 text-gray-600">{section.text}</p>
    </div>
  {/each}
  <div class="border-t border-gray-100 px-6 py-9 sm:px-10">
    <h2 class="text-lg font-medium tracking-tight">The team</h2>
    <p class="mt-3 text-sm font-medium text-gray-800">{achievement.teamName}</p>
    <p class="mt-3 text-sm leading-7 text-gray-600">{achievement.teamSummary}</p>
    <ul class="mt-5 divide-y divide-gray-100">
      {#each achievement.teamMembers as member}
        <li class="flex items-start gap-4 py-4">
          {#if member.avatar}
            <img
              src={member.avatar}
              alt={`${member.name} profile photo`}
              width="40"
              height="40"
              loading="lazy"
              decoding="async"
              class="h-10 w-10 shrink-0 rounded-full border border-gray-200 object-cover object-top"
            />
          {:else}
            <span
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-500"
              aria-hidden="true"><Icon icon="lucide:user-round" width={18} height={18} /></span
            >
          {/if}
          <div class="min-w-0 flex-1">
            <p class="text-sm font-medium text-gray-800">
              {#if member.url}
                <a
                  href={member.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 hover:underline"
                  >{member.name}<Icon icon="lucide:arrow-up-right" width={14} height={14} /></a
                >
              {:else}
                {member.name}
              {/if}
            </p>
            <p class="mt-1 text-sm leading-6 text-gray-500">{member.role}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
  <div class="border-t border-gray-100 px-6 py-9 sm:px-10">
    <h2 class="text-lg font-medium tracking-tight">My role & contributions</h2>
    <p class="mt-3 text-sm font-medium text-gray-800">{achievement.role}</p>
    <ul class="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-gray-600 marker:text-gray-400">
      {#each achievement.contributions as contribution}<li class="pl-1">{contribution}</li>{/each}
    </ul>
  </div>
</section>
