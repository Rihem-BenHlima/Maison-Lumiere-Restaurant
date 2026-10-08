import { readFile } from 'node:fs/promises';
import mysql from 'mysql2/promise';
import 'dotenv/config';

// Creates the database and tables from schema.sql.
const schema = await readFile(new URL('../schema.sql', import.meta.url), 'utf8');

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  multipleStatements: true,
});

await connection.query(schema);
await connection.end();
console.log('Database initialised.');
