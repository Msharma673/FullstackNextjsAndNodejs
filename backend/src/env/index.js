const path = require('path');
const dotenv = require('dotenv');

const envPath = process.env.ENV_FILE ?? path.resolve(process.cwd(), '.env');

dotenv.config({
  path: envPath,
  override: true
});

const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 4000),
  db: {
    host: process.env.DB_HOST ?? '127.0.0.1',
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_NAME ?? 'form_crud_db'
  },
  jwt: {
    secret: process.env.JWT_SECRET ?? 'change_me',
    expiresIn: process.env.JWT_EXPIRES_IN ?? '1h'
  }
};

module.exports = env;

