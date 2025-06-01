import sanityClient from 'https://cdn.skypack.dev/@sanity/client';

export const client = sanityClient({
  projectId: 'e63aw6jk',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-01'
});
