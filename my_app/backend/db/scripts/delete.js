import pool from '../index.js';

await pool.query('Drop table if exists bry');
