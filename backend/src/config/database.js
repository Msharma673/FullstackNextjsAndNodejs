const mysql = require('mysql2/promise');
const env = require('../env');
const logger = require('./logger');

const pool = mysql.createPool({
  host: env.db.host,
  port: env.db.port,
  user: env.db.user,
  password: env.db.password,
  database: env.db.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then((connection) => {
    logger.info('✅ MySQL connection pool configured');
    connection.release();
  })
  .catch((error) => {
    logger.error({ err: error }, '❌ Failed to initialize MySQL pool');
  });

module.exports = pool;

