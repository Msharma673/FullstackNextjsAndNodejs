/* eslint-disable no-console */
const pool = require('../src/config/database');

const seedData = async () => {
  try {
    const applicants = [
      ['Aman Sharma', 'aman@example.com', '+9100001111', 'Delhi', 'India', 'MBA', 'B.Com', 'Canada'],
      ['Priya Patel', 'priya@example.com', '+9100002222', 'Ahmedabad', 'India', 'MS CS', 'B.Tech CS', 'USA'],
      ['John Doe', 'john@example.com', '+14086667777', 'Austin', 'USA', 'Data Science', 'BSc Math', 'UK']
    ];

    await pool.query('TRUNCATE TABLE applicants');

    const sql = `
      INSERT INTO applicants
        (name, email, phone, city, country, course_apply_for, education, target_country)
      VALUES ?
    `;

    await pool.query(sql, [applicants]);
    console.log('✅ Seed data inserted');
  } catch (error) {
    console.error('❌ Failed to seed data', error);
  } finally {
    pool.end();
  }
};

seedData();

