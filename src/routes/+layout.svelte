<script lang="ts">
  import './layout.css';
  import icon from '$lib/assets/images/tangent.webp';
  import profileImage from '$lib/assets/images/image1-1024.webp';
  import CustomCursor from '$lib/components/CustomCursor.svelte';

  const siteUrl = 'https://attmhd.me';
  const siteTitle = 'Muhammad Attan | Software Engineer';
  const siteDescription =
    'Muhammad Attan is a software engineer focused on backend systems, AI/ML, DevOps, MLOps, and practical digital products.';
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Muhammad Attan',
        alternateName: 'Attan',
        url: siteUrl,
        image: `${siteUrl}${profileImage}`,
        jobTitle: 'Software Engineer',
        description: siteDescription,
        sameAs: [
          'https://github.com/attmhd',
          'https://linkedin.com/in/attmhd',
          'https://attmhd.medium.com/'
        ],
        knowsAbout: ['Backend Engineering', 'Artificial Intelligence', 'Machine Learning', 'DevOps', 'MLOps']
      },
      {
        '@type': 'WebSite',
        name: siteTitle,
        url: siteUrl,
        description: siteDescription,
        author: { '@type': 'Person', name: 'Muhammad Attan' }
      }
    ]
  };

  let { children } = $props();
</script>

<svelte:head>
  <title>{siteTitle}</title>
  <meta name="description" content={siteDescription} />
  <meta name="author" content="Muhammad Attan" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#ffffff" />
  <link rel="canonical" href={siteUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:title" content={siteTitle} />
  <meta property="og:description" content={siteDescription} />
  <meta property="og:image" content={`${siteUrl}${profileImage}`} />
  <meta property="og:image:alt" content="Muhammad Attan profile portrait" />
  <meta property="og:site_name" content="Muhammad Attan" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={siteTitle} />
  <meta name="twitter:description" content={siteDescription} />
  <meta name="twitter:image" content={`${siteUrl}${profileImage}`} />
  <meta name="twitter:image:alt" content="Muhammad Attan profile portrait" />
  <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
  <link
    rel="icon"
    href={icon}
  />
</svelte:head>
<CustomCursor />
{@render children()}
