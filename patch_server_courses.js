import fs from 'fs';

let content = fs.readFileSync('server.js', 'utf8');

// 1. Add imports
content = content.replace(
  "import { initialBlogPosts } from './src/data/blogData.js';",
  "import multer from 'multer';\nimport path from 'path';\nimport { initialBlogPosts } from './src/data/blogData.js';"
);

// 2. Add multer and static route
content = content.replace(
  "app.use(express.json());",
  `app.use(express.json());\n\n// Serve uploaded files statically\napp.use('/uploads', express.static('public/uploads'));\n\n// Configure multer for file uploads\nconst storage = multer.diskStorage({\n  destination: function (req, file, cb) {\n    cb(null, 'public/uploads/courses')\n  },\n  filename: function (req, file, cb) {\n    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)\n    cb(null, uniqueSuffix + path.extname(file.originalname))\n  }\n});\nconst upload = multer({ storage: storage });`
);

// 3. Add university_courses table
content = content.replace(
  "    // Create student_videos table",
  `    // Create university_courses table\n    await connection.query(\`\n      CREATE TABLE IF NOT EXISTS university_courses (\n        id INT AUTO_INCREMENT PRIMARY KEY,\n        mode VARCHAR(50) NOT NULL,\n        university VARCHAR(255) NOT NULL,\n        level VARCHAR(50) NOT NULL,\n        image_url VARCHAR(500) NOT NULL,\n        title VARCHAR(255) NOT NULL,\n        description TEXT NOT NULL,\n        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP\n      )\n    \`);\n\n    // Create student_videos table`
);

// 4. Add API endpoints for university courses
const newEndpoints = `
// --- API Routes for University Courses ---

// GET all university courses
app.get('/api/university-courses', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM university_courses ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch university courses' });
  }
});

// POST a new university course with image upload
app.post('/api/university-courses', upload.single('image'), async (req, res) => {
  const { mode, university, level, title, description } = req.body;
  
  if (!req.file) {
    return res.status(400).json({ error: 'Image file is required' });
  }

  const image_url = '/uploads/courses/' + req.file.filename;

  try {
    const [result] = await pool.query(
      'INSERT INTO university_courses (mode, university, level, image_url, title, description) VALUES (?, ?, ?, ?, ?, ?)',
      [mode, university, level, image_url, title, description]
    );
    res.status(201).json({ id: result.insertId, mode, university, level, image_url, title, description });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add university course' });
  }
});

// DELETE a university course
app.delete('/api/university-courses/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM university_courses WHERE id = ?', [id]);
    res.json({ message: 'University course deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete university course' });
  }
});

`;

content = content.replace(
  "const PORT = process.env.PORT || 5000;",
  newEndpoints + "const PORT = process.env.PORT || 5000;"
);

fs.writeFileSync('server.js', content, 'utf8');
console.log('server.js patched successfully');
