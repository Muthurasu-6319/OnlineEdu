import fs from 'fs';

let content = fs.readFileSync('server.js', 'utf8');

// 1. Add secondary_courses table
const tableSQL = `    // Create secondary_courses table
    await connection.query(\`
      CREATE TABLE IF NOT EXISTS secondary_courses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        level VARCHAR(50) NOT NULL,
        board VARCHAR(100) NOT NULL,
        subjects TEXT NOT NULL,
        duration VARCHAR(50) NOT NULL,
        mode VARCHAR(50) NOT NULL,
        color_theme VARCHAR(50) DEFAULT 'blue',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    \`);\n\n`;

if (!content.includes('CREATE TABLE IF NOT EXISTS secondary_courses')) {
  content = content.replace(
    "    // Create student_videos table",
    tableSQL + "    // Create student_videos table"
  );
}

// 2. Add API endpoints for secondary courses
const endpoints = `
// --- API Routes for Secondary Courses ---

// GET all secondary courses
app.get('/api/secondary-courses', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM secondary_courses ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch secondary courses' });
  }
});

// POST a new secondary course
app.post('/api/secondary-courses', async (req, res) => {
  const { level, board, subjects, duration, mode, color_theme } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO secondary_courses (level, board, subjects, duration, mode, color_theme) VALUES (?, ?, ?, ?, ?, ?)',
      [level, board, subjects, duration, mode, color_theme || 'blue']
    );
    res.status(201).json({ id: result.insertId, level, board, subjects, duration, mode, color_theme });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add secondary course' });
  }
});

// DELETE a secondary course
app.delete('/api/secondary-courses/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM secondary_courses WHERE id = ?', [id]);
    res.json({ message: 'Secondary course deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete secondary course' });
  }
});

`;

if (!content.includes("app.get('/api/secondary-courses'")) {
  content = content.replace(
    "const PORT = process.env.PORT || 5000;",
    endpoints + "const PORT = process.env.PORT || 5000;"
  );
}

fs.writeFileSync('server.js', content, 'utf8');
console.log('server.js patched successfully for secondary courses');
