const pool = require('../config/database');

const serializeApplicant = (row) => ({
  id: row.id,
  name: row.name,
  email: row.email,
  phone: row.phone,
  city: row.city,
  country: row.country,
  courseApplyFor: row.course_apply_for,
  education: row.education,
  targetCountry: row.target_country,
  createdAt: row.created_at,
  updatedAt: row.updated_at
});

const createApplicant = async (applicant) => {
  const sql = `
    INSERT INTO applicants
      (name, email, phone, city, country, course_apply_for, education, target_country)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const params = [
    applicant.name,
    applicant.email,
    applicant.phone,
    applicant.city,
    applicant.country,
    applicant.courseApplyFor,
    applicant.education,
    applicant.targetCountry
  ];
  const [result] = await pool.execute(sql, params);
  return findById(result.insertId);
};

const findAll = async () => {
  const sql = 'SELECT * FROM applicants ORDER BY created_at DESC';
  const [rows] = await pool.query(sql);
  return rows.map(serializeApplicant);
};

const findById = async (id) => {
  const sql = 'SELECT * FROM applicants WHERE id = ? LIMIT 1';
  const [rows] = await pool.execute(sql, [id]);
  return rows[0] ? serializeApplicant(rows[0]) : null;
};

const updateApplicant = async (id, payload) => {
  const sql = `
    UPDATE applicants
    SET name = ?, email = ?, phone = ?, city = ?, country = ?, course_apply_for = ?, education = ?, target_country = ?
    WHERE id = ?
  `;
  const params = [
    payload.name,
    payload.email,
    payload.phone,
    payload.city,
    payload.country,
    payload.courseApplyFor,
    payload.education,
    payload.targetCountry,
    id
  ];
  await pool.execute(sql, params);
  return findById(id);
};

const deleteApplicant = async (id) => {
  const sql = 'DELETE FROM applicants WHERE id = ?';
  const [result] = await pool.execute(sql, [id]);
  return result.affectedRows > 0;
};

module.exports = {
  createApplicant,
  findAll,
  findById,
  updateApplicant,
  deleteApplicant
};

