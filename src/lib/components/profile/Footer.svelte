
<script lang="ts">
  import Icon from '@iconify/svelte';
  import footer from '../../assets/bawah.mp4';
</script>

<footer class="relative isolate h-80 overflow-hidden bg-black text-white">
  <!-- BACKGROUND VIDEO -->
  <!-- svelte-ignore a11y_media_has_caption -->
  <video
    src={footer}
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    class="absolute inset-0 object-bottom  -z-20 h-full w-full object-cover"
  ></video>

  <!-- DARK GRADIENT OVERLAY -->
<div class="absolute inset-0 -z-10 bg-linear-to-t from-black via-black/20 to-transparent"></div>

  <!-- CONTENT -->
  <div class="relative flex h-full items-end pb-9 px-6 sm:px-10 lg:px-16 ">
    <div class="max-w-5xl">
      <h2 class="max-w-4xl  font-semibold sm:text-xl lg:text-2xl">
        Building the future with data, AI, and code.
      </h2>

      <p class="mt-1 max-w-3xl text-sm leading-6 text-white/85">
        Exploring practical machine learning systems, data products, and full-stack software.
      </p>

      <a
        href="mailto:attmhd2.work@gmail.com"
        class="group mt-2 inline-flex items-center gap-2 text-xs rounded-lg bg-white px-4 py-2 font-medium text-black transition hover:bg-gray-100"
      >
        Get in touch
        <Icon
          icon="lucide:arrow-up-right"
          width={15}
          height={15}
          class="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>
    </div>
  </div>
</footer>
