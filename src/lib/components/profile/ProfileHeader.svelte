<script lang="ts">
  import Icon from '@iconify/svelte';
  import ProfilePict from '../../assets/images/image1.jpg';
  import ProfileMascot from './ProfileMascot.svelte';
  import SpotifyNowPlaying from './SpotifyNowPlaying.svelte';
  import background from '../../assets/images/background.jpg';
  import { profileData } from '$lib/data/profile';
</script>

<section class="bg-white px-7 pb-7">


<div class="relative -mx-7 h-70 overflow-hidden">
  <img
    src={background}
    alt=""
    class="absolute inset-0 z-0 h-full w-full object-cover object-[center_85%]"
  />
  <!-- FOX MASCOT -->
  <div class="absolute inset-0 z-30">
    <ProfileMascot />
  </div>
</div>



  <!-- PROFILE CONTENT -->
  <div class="relative">

    <!-- PROFILE PHOTO -->
    <div class="absolute -top-16 left-0 z-40">

      <!-- SPOTIFY NOTE -->
      <div class="absolute bottom-30 left-20 z-50 mb-3 -translate-x-1/2">
        <SpotifyNowPlaying />
      </div>

      <!-- PHOTO -->
      <div class="h-32 w-32 overflow-hidden rounded-3xl border-6 border-white bg-gray-200">

        <img
          src={ProfilePict}
          alt="Muhammad Attan"
          class="h-full w-full object-cover"
        />

      </div>

    </div>


    <!-- DOWNLOAD CV -->
    <div class="flex justify-end pt-5">

      <a
        href="/cv-muhammad-attan.txt"
        download
        aria-label="Download CV"
        title="Download CV"
        class="z-40 flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
      >
        <Icon
          icon="lucide:download"
          width={20}
          height={20}
        />

      </a>

    </div>


    <!-- NAME -->
    <div class="mt-10">

      <h1 class="text-3xl font-semibold tracking-tight text-black">
        Muhammad Attan
      </h1>

      <p class="text-base text-gray-500">
        @attmhd
      </p>

    </div>


    <!-- BIO -->
    <p class="mt-6 max-w-2xl text-justify text-[17px] leading-tight text-gray-800">
      {profileData.bio}
    </p>


    <!-- METADATA -->
    <div class="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-sm text-gray-500">

      <!-- INFO ITEMS -->
      <div class="flex flex-wrap items-center gap-x-6 gap-y-3">
        <!-- ROLE -->
        <div class="flex items-center gap-2">
          <Icon
            icon="lucide:briefcase"
            width={18}
            height={18}
          />

          <span>Software Engineer</span>
        </div>

        <!-- LOCATION -->
        <div class="flex items-center gap-2">
          <Icon
            icon="lucide:map-pin"
            width={18}
            height={18}
          />

          <span>Mars</span>
        </div>

      </div>

      <!-- SOCIAL MEDIA -->
      <div class="ml-auto flex items-center gap-4">
        <!-- LINKEDIN -->
        <a
          href="https://linkedin.com/in/attmhd"
          target="_blank"
          rel="noreferrer"
          class="flex items-center gap-2 transition hover:text-black"
        >
          <Icon
            icon="simple-icons:linkedin"
            width={18}
            height={18}
          />
        </a>

        <!-- GITHUB -->
        <a
          href="https://github.com/attmhd"
          target="_blank"
          rel="noreferrer"
          class="flex items-center gap-2 transition hover:text-black"
        >
          <Icon
            icon="simple-icons:github"
            width={18}
            height={18}
          />
        </a>

        <!-- MEDIUM -->
        <a
          href="https://attmhd.medium.com/"
          target="_blank"
          rel="noreferrer"
          class="flex items-center gap-2 transition hover:text-black"
        >
          <Icon
            icon="simple-icons:medium"
            width={18}
            height={18}
          />
        </a>
      </div>

    </div>

  </div>

</section>
