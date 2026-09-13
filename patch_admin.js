import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'components', 'AdminDashboard.jsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Add state
content = content.replace(
  "const [courseLevel, setCourseLevel] = useState('UG');",
  "const [courseMode, setCourseMode] = useState('Distance');\n  const [courseLevel, setCourseLevel] = useState('UG');"
);

// 2. handlePostCourse
content = content.replace(
  "const courseData = {\n      level: courseLevel,",
  "const courseData = {\n      mode: courseMode,\n      level: courseLevel,"
);

// 3. handleEditCourse
content = content.replace(
  "setCourseLevel(course.level);",
  "setCourseMode(course.mode || 'Distance');\n    setCourseLevel(course.level);"
);

// 4. resetCourseForm
content = content.replace(
  "setCourseLevel('UG');",
  "setCourseMode('Distance');\n    setCourseLevel('UG');"
);

// 5. Form UI: Need to find where the level select is. It usually looks like `<select value={courseLevel}` or similar.
// Let's replace the level select div to include a mode select div right before it.
const levelSelectRegex = /(<div[^>]*>[\s\n]*<label[^>]*>Level<\/label>[\s\n]*<select[\s\S]*?<\/select>[\s\n]*<\/div>)/;
const modeSelectHTML = `
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Mode</label>
                  <select 
                    value={courseMode}
                    onChange={(e) => setCourseMode(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2ca785] focus:border-transparent font-medium"
                  >
                    <option value="Distance">Distance</option>
                    <option value="Online">Online</option>
                  </select>
                </div>
`;
content = content.replace(levelSelectRegex, modeSelectHTML + "\n$1");

// 6. Courses list display: search for `[{course.level}]` and replace with `[{course.mode || 'Distance'} - {course.level}]`
content = content.replace(/\[\{course\.level\}\]/g, "[{course.mode || 'Distance'} - {course.level}]");

// Additional check if there's any hardcoded grid cols that need adjusting in the form, 
// usually `grid grid-cols-1 md:grid-cols-2 gap-6`. If there are 3 fields now, it's fine.

fs.writeFileSync(file, content);
console.log('AdminDashboard.jsx patched successfully');
