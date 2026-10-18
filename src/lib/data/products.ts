import cekrekPreview from '$lib/assets/cekrek.png';
import nanteePreview from '$lib/assets/nantee.png';
import nattaPosPreview from '$lib/assets/nattapos.png';

export const products = [
  // {
  //   id: 'cekrek-studio',
  //   title: 'cekrek.studio',
  //   category: 'Event Photo Album',
  //   description: 'Bring guest photos and the stories behind them into one shared event album. Every angle of your celebration, together in one place.',
  //   headline: 'One event. Every perspective. One shared story.',
  //   audience: 'Weddings, graduations, farewells, birthdays, and reunions.',
  //   offer: 'Cekrek is being built to help hosts collect memories from the people who were there. Guests will join an event through a QR code or link in their phone browser, then contribute their own photos and stories to a shared album.',
  //   features: ['A shared event album for photos from many guests.', 'QR code or event-link access designed for phone browsers.', 'Stories alongside photos to keep the meaning behind each moment.'],
  //   benefits: ['Keep different perspectives of the same celebration together.', 'Give spontaneous guest moments a place alongside the main event story.', 'Revisit memories with the people who helped create them.'],
  //   tags: ['Shared albums', 'QR access', 'Photo stories'],
  //   status: 'In development — explore the sample album. Event creation and photo uploads are not available yet.',
  //   cta: 'Explore the sample album',
  //   url: 'https://cekrek.studio/',
  //   image: cekrekPreview
  // },
  // {
  //   id: 'nantee',
  //   title: 'Nantee',
  //   category: 'Digital Invitations',
  //   description: 'Create a warm, personal digital invitation for your next celebration. Bring event details, photos, and guest information together in one shareable link.',
  //   headline: 'An invitation that feels like your story.',
  //   audience: 'Couples and hosts planning weddings, engagements, birthdays, graduations, and other celebrations.',
  //   offer: 'Nantee offers digital invitation templates that help you introduce your celebration beautifully and share it easily. Choose a design, add your story and event details, then send personalized invitation links to your guests.',
  //   features: ['Invitation templates for different celebrations and visual styles.', 'Personalized guest links that are easy to share through WhatsApp.', 'Event details and location directions in one place.', 'RSVP, guest wishes, photo galleries, music, and digital gift information, depending on your package.'],
  //   benefits: ['Share event information without distributing printed invitations.', 'Make each guest feel welcome with a personalized invitation.', 'Help guests find the venue and prepare for your celebration.'],
  //   tags: ['Invitation templates', 'Guest links', 'RSVP'],
  //   status: 'Explore the available templates and packages on Nantee. Features vary by package.',
  //   cta: 'Find your invitation',
  //   url: 'https://nantee.web.id/',
  //   image: nanteePreview
  // },
  {
    id: 'natta-pos',
    title: 'Natta POS',
    category: 'Point of Sale',
    description:
      'Keep everyday shop operations in one place, from your menu and checkout to transaction records and cash sessions.',
    headline: 'A practical business kit for your daily sales.',
    audience: 'Shop owners and cashiers who need a focused point-of-sale workspace.',
    offer:
      'Natta POS brings cashier operations, menu management, transactions, and cash sessions into a browser-based business kit. Keep the tools used at the counter together so your team can focus on serving customers.',
    features: [
      'A cashier workspace for recording sales.',
      'Menu management for the items your shop offers.',
      'Transaction records for reviewing sales activity.',
      'Cash sessions for organizing activity at the counter.',
    ],
    benefits: [
      'Keep sales and menu information in a single workspace.',
      'Review recorded transactions when checking daily activity.',
      'Organize cashier work around cash sessions.',
    ],
    tags: ['Cashier', 'Transactions', 'Cash sessions'],
    status: 'Visit Natta POS to explore the application and available access.',
    cta: 'Explore Natta POS',
    url: 'https://pos.natta.biz.id/',
    image: nattaPosPreview,
  },
];

export type Product = (typeof products)[number];
