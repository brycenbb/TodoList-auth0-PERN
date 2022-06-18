import pool from '../index.js';

await pool.query(
  'Create table if not exists bry (id int primary key generated always as identity, email text, todos text [])'
);
