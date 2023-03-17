require('dotenv').config();
const dbUser = process.env.DB_USER || 'postgres';
const dbPassword = process.env.DB_PASSWORD || '';
const dbHostname = process.env.DB_HOSTNAME || 'localhost';
const dbPort = process.env.DB_PORT || '5432';
const dbName = process.env.DB_NAME || 'movies-db';

const Pool = require('pg').Pool;

const pool = new Pool({
    user:dbUser,
    password:dbPassword,
    host:dbHostname,
    port:dbPort,
    database:dbName
})

module.exports = pool;