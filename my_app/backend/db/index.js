import pg from 'pg';

export default new pg.Pool({
  user: '',
  host: '',
  database: '',
  password: '',
  port: 5432,
  ssl: { rejectUnauthorized: false },
});
