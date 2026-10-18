<script lang="ts">
  import Icon from '@iconify/svelte';
  import ProfilePict from '../../assets/images/image1-1024.webp';
  import ProfilePictMedium from '../../assets/images/image1-512.webp';
  import ProfilePictSmall from '../../assets/images/image1-256.webp';
  import background from '../../assets/images/background.webp';
  import { profileData } from '$lib/data/profile';
</script>

<section class="bg-white px-7 pb-7">
  <div class="relative -mx-7 h-70 overflow-hidden">
    <img
      src={background}
      alt=""
      width="735"
      height="414"
      fetchpriority="high"
      decoding="async"
      class="absolute inset-0 z-0 h-full w-full object-cover object-[center_85%]"
    />
  </div>

  <!-- PROFILE CONTENT -->
  <div class="relative">
    <!-- OPEN TO WORK THOUGHT BUBBLE -->
    <div
      class="animate-bounce-slow absolute -top-20 left-20 z-50 drop-shadow-md sm:-top-22 sm:left-22"
    >
      <div
        data-testid="thought-bubble"
        class="max-w-[calc(100vw-10rem)] rounded-2xl rounded-bl-md border border-gray-200 bg-white px-3.5 py-2 text-xs font-medium whitespace-normal text-gray-800 shadow-sm sm:max-w-none sm:whitespace-nowrap"
      >
        Hire me bang 🙏
      </div>
      <span
        data-testid="thought-dot-lg"
        class="absolute top-full left-3 mt-1 h-3 w-3 rounded-full border border-gray-200 bg-white"
      ></span>
      <span
        data-testid="thought-dot-sm"
        class="absolute top-full left-0.5 mt-4.5 h-1.5 w-1.5 rounded-full border border-gray-200 bg-white"
      ></span>
    </div>

    <!-- PROFILE PHOTO -->
    <div class="absolute -top-16 left-0 z-40">
      <!-- PHOTO -->
      <div class="h-32 w-32 overflow-hidden rounded-3xl border-6 border-white bg-gray-200">
        <img
          src={ProfilePict}
          alt="Muhammad Attan"
          srcset={`${ProfilePictSmall} 256w, ${ProfilePictMedium} 512w, ${ProfilePict} 1024w`}
          sizes="128px"
          width="128"
          height="128"
          loading="eager"
          decoding="async"
          class="h-full w-full object-cover"
        />
      </div>
    </div>

    <!-- DOWNLOAD CV -->
    <div class="flex justify-end pt-5">
      <a
        href="https://drive.google.com/file/d/1ZUzloulgOKLxN1ImergkLxZKoKqDMCs5/view"
        target="_blank"
        download
        aria-label="Download CV"
        title="Download CV"
        class="z-40 flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
      >
        <Icon icon="lucide:download" width={20} height={20} />
      </a>
    </div>

    <!-- NAME -->
    <div class="mt-10">
      <h1 class="text-3xl font-semibold tracking-tight text-black">Muhammad Attan</h1>

      <p class="text-base text-gray-500">@attmhd</p>
    </div>

    <!-- BIO -->
    <p class="mt-6 max-w-2xl text-justify text-[17px] leading-tight text-gray-800">
      {profileData.bio}
    </p>

    <!-- METADATA -->
    <div
      class="mt-6 flex flex-col items-start gap-y-4 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:gap-x-6"
    >
      <!-- INFO ITEMS -->
      <div class="flex flex-wrap items-center gap-x-6 gap-y-3">
        <!-- ROLE -->
        <div class="flex items-center gap-2">
          <Icon icon="lucide:briefcase" width={18} height={18} />

          <span>Software Engineer</span>
        </div>

        <!-- LOCATION -->
        <div class="flex items-center gap-2">
          <Icon icon="lucide:map-pin" width={18} height={18} />

          <span>Mars</span>
        </div>
      </div>

      <!-- SOCIAL MEDIA -->
      <div class="flex w-full items-center gap-4 sm:ml-auto sm:w-auto">
        <!-- LINKEDIN -->
        <a
          href="https://linkedin.com/in/attmhd"
          aria-label="Muhammad Attan on LinkedIn"
          target="_blank"
          rel="noreferrer"
          class="flex items-center gap-2 transition hover:text-black"
        >
          <Icon icon="simple-icons:linkedin" width={18} height={18} />
        </a>

        <!-- GITHUB -->
        <a
          href="https://github.com/attmhd"
          aria-label="Muhammad Attan on GitHub"
          target="_blank"
          rel="noreferrer"
          class="flex items-center gap-2 transition hover:text-black"
        >
          <Icon icon="simple-icons:github" width={18} height={18} />
        </a>

        <!-- LEETCODE -->
        <a
          href="https://leetcode.com/u/attmhd"
          aria-label="Muhammad Attan on LeetCode"
          target="_blank"
          rel="noreferrer"
          class="flex items-center gap-2 transition hover:text-black"
        >
          <Icon icon="simple-icons:leetcode" width={18} height={18} />
        </a>

        <!-- MEDIUM -->
        <a
          href="https://attmhd.medium.com/"
          aria-label="Muhammad Attan on Medium"
          target="_blank"
          rel="noreferrer"
          class="flex items-center gap-2 transition hover:text-black"
        >
          <Icon icon="simple-icons:medium" width={18} height={18} />
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .animate-bounce-slow {
    animation: float 3s ease-in-out infinite;
  }
  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3px);
    }
  }
</style>
