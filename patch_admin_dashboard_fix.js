import fs from 'fs';

let content = fs.readFileSync('src/components/AdminDashboard.jsx', 'utf8');

const newSidebarBtn = `          <button 
            onClick={() => handleTabChange('university_courses')}
            className={\`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors cursor-pointer \${
              activeTab === 'university_courses' ? 'bg-white/10 text-white' : 'text-blue-200 hover:bg-white/5 hover:text-white'
            }\`}
          >
            <LayoutDashboard size={18} />
            New Courses
          </button>\n\n`;

if (!content.includes("handleTabChange('university_courses')")) {
  content = content.replace(
    "          <button \n            onClick={() => handleTabChange('add_course')}",
    newSidebarBtn + "          <button \n            onClick={() => handleTabChange('add_course')}"
  );
}

fs.writeFileSync('src/components/AdminDashboard.jsx', content, 'utf8');
console.log('AdminDashboard patched successfully');
