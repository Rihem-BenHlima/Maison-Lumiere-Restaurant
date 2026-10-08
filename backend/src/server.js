import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { pool } from './db.js';

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/reservations', async (req, res) => {
  const {
    name,
    email,
    phone,
    party_size,
    reservation_date,
    reservation_time,
    special_requests,
  } = req.body ?? {};

  if (!name || !email || !phone || !party_size || !reservation_date || !reservation_time) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  try {
    const [result] = await pool.execute(
      `INSERT INTO reservations
        (name, email, phone, party_size, reservation_date, reservation_time, special_requests)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        email,
        phone,
        Number(party_size),
        reservation_date,
        reservation_time,
        special_requests || null,
      ]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not save the reservation. Please try again.' });
  }
});

const port = Number(process.env.PORT) || 4000;
app.listen(port, '127.0.0.1', () => {
  console.log(`API listening on http://localhost:${port}`);
});
