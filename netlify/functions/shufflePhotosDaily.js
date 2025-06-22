import { createClient } from '@sanity/client';

// Utility necessary for logging and debugging...
function getTimestamp() {
  const now = new Date();
  const pad = (n, len = 2) => n.toString().padStart(len, '0');

  const day = pad(now.getDate());
  const month = pad(now.getMonth() + 1);
  const year = now.getFullYear().toString().slice(-2);
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());
  const millis = pad(now.getMilliseconds(), 3);

  return `[${day}/${month}/${year} ${hours}:${minutes}:${seconds}.${millis}]:`;
}

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
      console.log(`${getTimestamp()} Already shuffled today - skipping as a result...`);

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

    console.log(`${getTimestamp()} Mutating dataset by shuffling it around...`);

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
