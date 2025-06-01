import sanityClient from 'https://cdn.skypack.dev/@sanity/client';

export const client = sanityClient({
  projectId: 'e63aw6jk',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01'
});
