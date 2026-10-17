# Portfolio

Personal portfolio website template built with SvelteKit. It includes profile information, experience, projects, achievements, certificates, and technology stack sections.

Built with SvelteKit, TypeScript, Tailwind CSS, and Iconify.

This project was developed from [rasyidMuhammad12/rsydspace](https://github.com/rasyidMuhammad12/rsydspace).

## Features

- Profile header with CV download and social links
- Experience and technology stack sections
- Project showcase with pagination and project detail views
- Achievements and certificates
- Responsive layout for desktop and mobile
- Static local assets for images and fallback project previews

## Requirements

- Node.js 22.18+ (or 24+)
- pnpm

## Development

Install dependencies:

```sh
pnpm install
```

Start the development server:

```sh
pnpm dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Validation

Run the Svelte type and template checks:

```sh
pnpm run check
```

## Production

Build the application:

```sh
pnpm run build
```

Preview the production build locally:

```sh
pnpm preview
```

The project uses SvelteKit's adapter-auto. Configure a deployment adapter if the target hosting platform requires one.
