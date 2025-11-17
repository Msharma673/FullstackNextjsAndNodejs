const pool = require('../config/database');

const insertUser = async ({ name, email, passwordHash }) => {
  const sql = `
    INSERT INTO users (name, email, password_hash)
    VALUES (?, ?, ?)
  `;
  const [result] = await pool.execute(sql, [name, email, passwordHash]);
  return { id: result.insertId, name, email };
};

const findByEmail = async (email) => {
  const sql = 'SELECT id, name, email, password_hash AS passwordHash FROM users WHERE email = ? LIMIT 1';
  const [rows] = await pool.execute(sql, [email]);
  return rows[0];
};

module.exports = {
  insertUser,
  findByEmail
};

