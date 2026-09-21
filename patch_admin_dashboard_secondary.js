import fs from 'fs';

let content = fs.readFileSync('src/components/AdminDashboard.jsx', 'utf8');

// 1. Add import
if (!content.includes('AdminSecondaryCourses')) {
  content = content.replace(
    "import AdminUniversityCourses from './AdminUniversityCourses';",
    "import AdminUniversityCourses from './AdminUniversityCourses';\nimport AdminSecondaryCourses from './AdminSecondaryCourses';"
  );
}

// 2. Add Sidebar Button
const newSidebarBtn = `          <button 
            onClick={() => handleTabChange('secondary_courses')}
            className={\`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors cursor-pointer \${
              activeTab === 'secondary_courses' ? 'bg-white/10 text-white' : 'text-blue-200 hover:bg-white/5 hover:text-white'
            }\`}
          >
            <LayoutDashboard size={18} />
            Secondary Courses
          </button>\n\n`;

const targetButtonStr = `          <button 
            onClick={() => handleTabChange('university_courses')}`;

if (!content.includes("handleTabChange('secondary_courses')")) {
  content = content.replace(targetButtonStr, newSidebarBtn + targetButtonStr);
}

// 3. Add Tab Content
const newTabRender = `        {activeTab === 'secondary_courses' && <AdminSecondaryCourses />}\n\n`;
const targetRenderStr = `        {activeTab === 'university_courses' && <AdminUniversityCourses />}`;

if (!content.includes("<AdminSecondaryCourses />")) {
  content = content.replace(targetRenderStr, newTabRender + targetRenderStr);
}

fs.writeFileSync('src/components/AdminDashboard.jsx', content, 'utf8');
console.log('AdminDashboard patched successfully for secondary courses');
