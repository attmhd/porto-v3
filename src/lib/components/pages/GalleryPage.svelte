
<script lang="ts">

  type GalleryItem = {
    title: string;
    year: string;
    description: string;
    category: string;
    image: string;
  };
import Conference from '../../assets/images/conference.jpg';

  const gallery: GalleryItem[] = [
    {
      title: 'Exchange Student at Camtech University, Cambodia',
      year: '2025',
      description:
        'On-stage presentation and live gameplay demonstration of Base Realms at the Coinbase Hackathon Indonesia 2025, introducing an onchain RPG with seamless QR onboarding.',
      category: 'Top 5 Finalist · Coinbase Hackathon',
      image:"https://itp.ac.id/assets/images/img_blog/2025/250522041528.jpg"
    },
    {
      title: '4th Bienial CESCam Conference, Cambodia',
      year: '2025',
      description:
        'On-stage presentation and live gameplay demonstration of Base Realms at the Coinbase Hackathon Indonesia 2025, introducing an onchain RPG with seamless QR onboarding.',
      category: 'Top 5 Finalist · Coinbase Hackathon',
      image:Conference
    },
  ];
</script>

<section class="bg-white">

  <!-- GALLERY GRID -->
  <div class="grid grid-cols-1 md:grid-cols-2">
    {#each gallery as item, index}
      <article class={`min-w-0 border-b border-gray-200 p-5 sm:p-6 ${index % 2 === 0 ? 'md:border-r' : ''}`}>
        <!-- IMAGE -->
        <div class="aspect-[1.2/1] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>

        <!-- TITLE + YEAR -->
        <div class="mt-5 flex items-start justify-between gap-4">
          <h3 class="min-w-0 lg:text-md font-medium leading-7 tracking-tight text-black ">
            {item.title}
          </h3>
          <span class="shrink-0 pt-1 font-mono text-sm text-gray-500 ">
            {item.year}
          </span>
        </div>

        <!-- DESCRIPTION -->
        <p class="mt-3 text-sm leading-5 text-justify text-gray-500 ">
          {item.description}
        </p>
        <!-- CATEGORY -->
        <p class="mt-5 font-mono text-xs leading-6 text-gray-400 sm:text-sm">
          {item.category}
        </p>
      </article>
    {/each}
  </div>
</section>
