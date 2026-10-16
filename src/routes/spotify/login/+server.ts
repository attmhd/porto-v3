import { error } from '@sveltejs/kit';

export const GET = () => {
  error(404, 'Spotify integration is disabled');
};