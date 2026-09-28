import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis';

// Eén hash in Redis waarin alle story-statussen staan:
//   key = "sprint-<sprintNumber>-<research|user|learning>-<index>"
//   value = "Nog te doen" | "In uitvoering" | "Afgerond"
const HASH_KEY = 'story-status-overrides';
const VALID_STATUSES = ['Nog te doen', 'In uitvoering', 'Afgerond'];

function getRedis(): Redis {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) {
    throw new Error('KV_REST_API_URL / KV_REST_API_TOKEN ontbreken in de environment variables.');
  }
  return new Redis({ url, token });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Kleine CORS-vrijheid; de site en de API draaien altijd op dezelfde origin,
  // maar dit voorkomt gedoe bij lokaal testen.
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  let redis: Redis;
  try {
    redis = getRedis();
  } catch (err) {
    res.status(500).json({ error: 'Database niet geconfigureerd op de server.' });
    return;
  }

  if (req.method === 'GET') {
    try {
      const overrides = (await redis.hgetall<Record<string, string>>(HASH_KEY)) || {};
      res.status(200).json(overrides);
    } catch (err) {
      res.status(500).json({ error: 'Kon statussen niet ophalen.' });
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const key = body?.key;
      const status = body?.status;

      if (typeof key !== 'string' || !key.trim()) {
        res.status(400).json({ error: 'Ongeldige of ontbrekende key.' });
        return;
      }
      if (typeof status !== 'string' || !VALID_STATUSES.includes(status)) {
        res.status(400).json({ error: 'Ongeldige status.' });
        return;
      }

      await redis.hset(HASH_KEY, { [key]: status });
      res.status(200).json({ ok: true, key, status });
    } catch (err) {
      res.status(500).json({ error: 'Kon status niet opslaan.' });
    }
    return;
  }

  res.setHeader('Allow', 'GET, POST, OPTIONS');
  res.status(405).json({ error: 'Methode niet toegestaan.' });
}
