import pool from '../index.js';

await pool.query('Insert into bry (email, todos) values ($1,$2)', [
  'brycensoc@gmail.com',
  ['wash dishes', 'hope for sun'],
]);
