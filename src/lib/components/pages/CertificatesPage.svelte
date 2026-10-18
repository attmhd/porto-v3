<script lang="ts">
  import Icon from '@iconify/svelte';
  import { certificates, toEmbedUrl, type Certificate } from '$lib/data/certificates';

  let dialog: HTMLDialogElement;
  let active = $state<Certificate | null>(null);

  function openPdf(cert: Certificate) {
    active = cert;
    dialog.showModal();
  }
</script>

<section class="bg-white">
  <div class="grid grid-cols-1 md:grid-cols-2">
    {#each certificates as item, index (item.id)}
      <article
        class={`flex min-w-0 flex-col border-b border-gray-200 p-5 transition-colors hover:bg-gray-50 sm:p-6 ${
          index % 2 === 0 ? 'md:border-r' : ''
        }`}
      >
        <!-- PREVIEW / BADGE CONTAINER -->
        {#if item.pdf}
          <button
            type="button"
            onclick={() => openPdf(item)}
            aria-label={`Open ${item.title} PDF`}
            class="group relative aspect-16/10 w-full cursor-zoom-in overflow-hidden rounded-xl border border-gray-200 bg-gray-100"
          >
            <iframe
              src={`${toEmbedUrl(item.pdf)}#toolbar=0&navpanes=0&view=FitH`}
              title={item.title}
              loading="lazy"
              tabindex="-1"
              class="pointer-events-none h-full w-full"
            ></iframe>
            <span
              class="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/30 group-hover:opacity-100"
            >
              <Icon icon="lucide:maximize-2" width={28} height={28} class="text-white" />
            </span>
          </button>
        {:else}
          <div
            class="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100"
          >
            {#if item.image}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            {:else}
              <div
                class="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-400"
              >
                <Icon icon="lucide:award" width={40} height={40} class="text-gray-400" />
                <span class="text-xs font-mono text-gray-500">{item.issuer}</span>
              </div>
            {/if}
          </div>
        {/if}

        <!-- TITLE + YEAR -->
        <div class="mt-5 flex items-start justify-between gap-3">
          <h3 class="text-base font-semibold leading-snug text-black">
            {item.title}
          </h3>
          <span class="shrink-0 font-mono text-xs text-gray-400">
            {item.issueDate}
          </span>
        </div>

        <!-- ISSUER -->
        <div class="mt-1 flex items-center justify-between gap-3">
          <p class="flex items-center gap-1.5 text-xs font-medium text-gray-600">
            <Icon icon="lucide:badge-check" width={14} height={14} class="shrink-0 text-gray-500" />
            <span>{item.issuer}</span>
          </p>
          {#if item.credentialUrl}
            <a
              href={item.credentialUrl}
              target="_blank"
              rel="noreferrer"
              class="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-gray-700 transition hover:text-black"
            >
              <span>View Credential</span>
              <Icon icon="lucide:arrow-up-right" width={13} height={13} />
            </a>
          {/if}
        </div>

        <!-- DESCRIPTION -->
        <p class="mt-3 flex-1 text-sm leading-6 text-justify text-gray-600">
          {item.description}
        </p>

        <!-- SKILLS / TAGS -->
        <div class="mt-4 flex flex-wrap gap-1.5">
          {#each item.skills as skill}
            <span
              class="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 font-mono text-[11px] text-gray-600"
            >
              {skill}
            </span>
          {/each}
        </div>
      </article>
    {/each}
  </div>
</section>

<dialog
  bind:this={dialog}
  onclose={() => (active = null)}
  onclick={(e) => e.target === dialog && dialog.close()}
  class="m-auto h-[90vh] w-[min(95vw,64rem)] overflow-hidden rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
>
  {#if active?.pdf}
    <div class="flex h-full flex-col">
      <div class="flex items-center justify-between gap-3 border-b border-gray-200 px-4 py-3">
        <h3 class="truncate text-sm font-semibold text-black">{active.title}</h3>
        <div class="flex items-center gap-3 text-gray-500">
          <a
            href={active.pdf}
            target="_blank"
            rel="noreferrer"
            aria-label="Open in new tab"
            class="hover:text-black"
          >
            <Icon icon="lucide:external-link" width={18} height={18} />
          </a>
          <button
            type="button"
            onclick={() => dialog.close()}
            aria-label="Close"
            class="hover:text-black"
          >
            <Icon icon="lucide:x" width={20} height={20} />
          </button>
        </div>
      </div>
      <iframe src={toEmbedUrl(active.pdf)} title={active.title} class="w-full flex-1"></iframe>
    </div>
  {/if}
</dialog>
