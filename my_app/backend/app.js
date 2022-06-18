import express from 'express';
import cors from 'cors';
import pool from './db/index.js';
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.listen(PORT);

app.get('/', async (req, res) => {
  if (req.query) {
    let data = await pool.query('Select todos from bry where email = $1', [
      req.query.email,
    ]);
    let items = data.rows[0].todos;
    let adjusted = items.replace('}', '');
    let adjusted2 = adjusted.replace('{', '');
    let string = adjusted2.split(',');
    return res.json({ sucess: true, payload: string });
  }

  res.json({ sucess: true, payload: 'Hello home page' });
});
