import fs from 'fs';
import path from 'path';

const serverFile = path.join(process.cwd(), 'server.js');
let content = fs.readFileSync(serverFile, 'utf8');

// 1. Update initialCourses array objects to have mode: 'Distance'
content = content.replace(/level: 'UG',/g, "mode: 'Distance',\n    level: 'UG',");
content = content.replace(/level: 'PG',/g, "mode: 'Distance',\n    level: 'PG',");

// 2. Add mode to CREATE TABLE
content = content.replace(
  "level VARCHAR(10) NOT NULL, -- 'UG' or 'PG'",
  "mode VARCHAR(20) DEFAULT 'Distance',\n        level VARCHAR(10) NOT NULL, -- 'UG' or 'PG'"
);

// 3. Add mode to initial INSERT
content = content.replace(
  "'INSERT INTO course_categories (level, title, color_theme, courses_list) VALUES (?, ?, ?, ?)',\n          [course.level, course.title, course.color_theme, course.courses_list]",
  "'INSERT INTO course_categories (mode, level, title, color_theme, courses_list) VALUES (?, ?, ?, ?, ?)',\n          [course.mode || 'Distance', course.level, course.title, course.color_theme, course.courses_list]"
);

// 4. Add mode to POST api
content = content.replace(
  "const { level, title, color_theme, courses_list } = req.body;",
  "const { mode, level, title, color_theme, courses_list } = req.body;"
);
content = content.replace(
  "'INSERT INTO course_categories (level, title, color_theme, courses_list) VALUES (?, ?, ?, ?)',\n      [level, title, color_theme, courses_list]",
  "'INSERT INTO course_categories (mode, level, title, color_theme, courses_list) VALUES (?, ?, ?, ?, ?)',\n      [mode || 'Distance', level, title, color_theme, courses_list]"
);

// 5. Add mode to PUT api
content = content.replace(
  "const { id } = req.params;\n  const { level, title, color_theme, courses_list } = req.body;",
  "const { id } = req.params;\n  const { mode, level, title, color_theme, courses_list } = req.body;"
);
content = content.replace(
  "'UPDATE course_categories SET level = ?, title = ?, color_theme = ?, courses_list = ? WHERE id = ?',\n      [level, title, color_theme, courses_list, id]",
  "'UPDATE course_categories SET mode = ?, level = ?, title = ?, color_theme = ?, courses_list = ? WHERE id = ?',\n      [mode || 'Distance', level, title, color_theme, courses_list, id]"
);

fs.writeFileSync(serverFile, content);
console.log('server.js patched successfully');
