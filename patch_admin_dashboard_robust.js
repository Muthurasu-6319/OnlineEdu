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
  const parts = content.split("onClick={() => handleTabChange('add_course')}");
  if (parts.length > 1) {
    // Find the '<button' right before it
    const beforePart = parts[0];
    const buttonIndex = beforePart.lastIndexOf('<button');
    
    if (buttonIndex !== -1) {
      const part1 = beforePart.substring(0, buttonIndex);
      const part2 = beforePart.substring(buttonIndex);
      
      content = part1 + newSidebarBtn + part2 + "onClick={() => handleTabChange('add_course')}" + parts[1];
      fs.writeFileSync('src/components/AdminDashboard.jsx', content, 'utf8');
      console.log('Successfully injected button using robust matching.');
    }
  } else {
    console.log('Target string not found.');
  }
} else {
  console.log('Already injected.');
}
