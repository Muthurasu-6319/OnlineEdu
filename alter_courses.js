import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true
  },
});

async function run() {
  try {
    const connection = await pool.getConnection();
    
    try {
      await connection.query('ALTER TABLE course_categories ADD COLUMN mode VARCHAR(20) DEFAULT "Distance"');
      console.log('Successfully added mode column to course_categories');
    } catch (err) {
      if (err.code === 'ER_DUP_FIELDNAME') {
        console.log('Column mode already exists in course_categories');
      } else {
        throw err;
      }
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

run();
