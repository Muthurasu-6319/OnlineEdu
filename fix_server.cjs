const fs = require('fs');
let content = fs.readFileSync('server.js', 'utf8');

content = content.replace(
  "app.post('/api/courses', async (req, res) => {\n  const { mode, level, title, color_theme, courses_list } = req.body;\n  try {\n    const [result] = await pool.query(\n      'INSERT INTO course_categories (level, title, color_theme, courses_list) VALUES (?, ?, ?, ?)',\n      [level, title, color_theme, courses_list]\n    );",
  "app.post('/api/courses', async (req, res) => {\n  const { mode, level, title, color_theme, courses_list } = req.body;\n  try {\n    const [result] = await pool.query(\n      'INSERT INTO course_categories (mode, level, title, color_theme, courses_list) VALUES (?, ?, ?, ?, ?)',\n      [mode || 'Distance', level, title, color_theme, courses_list]\n    );"
);

content = content.replace(
  "app.post('/api/courses', async (req, res) => {\r\n  const { mode, level, title, color_theme, courses_list } = req.body;\r\n  try {\r\n    const [result] = await pool.query(\r\n      'INSERT INTO course_categories (level, title, color_theme, courses_list) VALUES (?, ?, ?, ?)',\r\n      [level, title, color_theme, courses_list]\r\n    );",
  "app.post('/api/courses', async (req, res) => {\r\n  const { mode, level, title, color_theme, courses_list } = req.body;\r\n  try {\r\n    const [result] = await pool.query(\r\n      'INSERT INTO course_categories (mode, level, title, color_theme, courses_list) VALUES (?, ?, ?, ?, ?)',\r\n      [mode || 'Distance', level, title, color_theme, courses_list]\r\n    );"
);

content = content.replace(
  "app.put('/api/courses/:id', async (req, res) => {\n  const { id } = req.params;\n  const { level, title, color_theme, courses_list } = req.body;\n  try {\n    await pool.query(\n      'UPDATE course_categories SET level = ?, title = ?, color_theme = ?, courses_list = ? WHERE id = ?',\n      [level, title, color_theme, courses_list, id]\n    );",
  "app.put('/api/courses/:id', async (req, res) => {\n  const { id } = req.params;\n  const { mode, level, title, color_theme, courses_list } = req.body;\n  try {\n    await pool.query(\n      'UPDATE course_categories SET mode = ?, level = ?, title = ?, color_theme = ?, courses_list = ? WHERE id = ?',\n      [mode || 'Distance', level, title, color_theme, courses_list, id]\n    );"
);

content = content.replace(
  "app.put('/api/courses/:id', async (req, res) => {\r\n  const { id } = req.params;\r\n  const { level, title, color_theme, courses_list } = req.body;\r\n  try {\r\n    await pool.query(\r\n      'UPDATE course_categories SET level = ?, title = ?, color_theme = ?, courses_list = ? WHERE id = ?',\r\n      [level, title, color_theme, courses_list, id]\r\n    );",
  "app.put('/api/courses/:id', async (req, res) => {\r\n  const { id } = req.params;\r\n  const { mode, level, title, color_theme, courses_list } = req.body;\r\n  try {\r\n    await pool.query(\r\n      'UPDATE course_categories SET mode = ?, level = ?, title = ?, color_theme = ?, courses_list = ? WHERE id = ?',\r\n      [mode || 'Distance', level, title, color_theme, courses_list, id]\r\n    );"
);

fs.writeFileSync('server.js', content, 'utf8');
console.log('Fixed server.js');
