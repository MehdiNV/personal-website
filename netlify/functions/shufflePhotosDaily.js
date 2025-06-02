import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'e63aw6jk',
  dataset: 'production',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2023-12-01'
});

const SHUFFLE_TRACKER_ID = 'shuffle-tracker';

export async function handler() {
  try {
    // Get last shuffle date
    const tracker = await client.getDocument(SHUFFLE_TRACKER_ID);
    const today = new Date().toISOString().slice(0, 10); // e.g. "2025-05-31"

    if (tracker?.lastRun === today) {
      return {
        statusCode: 200,
        body: JSON.stringify({ skipped: true, reason: 'Already shuffled today' })
      };
    }

    // Proceed to shuffle
    const docs = await client.fetch(`*[_type == "photo"]{_id}`);
    const mutations = docs.map(doc => ({
      patch: {
        id: doc._id,
        set: { sortOrder: Math.random() }
      }
    }));

    // Track the date we shuffled the dataset
    mutations.push({
      patch: {
        id: SHUFFLE_TRACKER_ID,
        set: { _id: SHUFFLE_TRACKER_ID, _type: 'shuffleTracker', lastRun: today }
      }
    });

    await client.transaction(mutations).commit();

    return {
      statusCode: 200,
      body: JSON.stringify({ shuffled: true, count: docs.length })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
