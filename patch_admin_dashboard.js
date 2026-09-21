import fs from 'fs';

let content = fs.readFileSync('src/components/AdminDashboard.jsx', 'utf8');

// 1. Add import
if (!content.includes('AdminUniversityCourses')) {
  content = content.replace(
    "import React, { useState, useEffect } from 'react';",
    "import React, { useState, useEffect } from 'react';\nimport AdminUniversityCourses from './AdminUniversityCourses';"
  );
}

// 2. Add Sidebar Button
const newSidebarBtn = `          <button
            onClick={() => setActiveTab('university_courses')}
            className={\`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium \${
              activeTab === 'university_courses' ? 'bg-[#2ca785] text-white shadow-md' : 'text-slate-600 hover:bg-slate-50 hover:text-[#2ca785]'
            }\`}
          >
            <LayoutDashboard size={20} />
            New Courses
          </button>`;

if (!content.includes("setActiveTab('university_courses')")) {
  content = content.replace(
    "          <button\n            onClick={() => setActiveTab('add_course')}",
    newSidebarBtn + "\n          <button\n            onClick={() => setActiveTab('add_course')}"
  );
}


// 3. Add Tab Content
const newTabRender = `        {activeTab === 'university_courses' && <AdminUniversityCourses />}\n\n`;
if (!content.includes("<AdminUniversityCourses />")) {
  content = content.replace(
    "        {activeTab === 'add_course' && (",
    newTabRender + "        {activeTab === 'add_course' && ("
  );
}

fs.writeFileSync('src/components/AdminDashboard.jsx', content, 'utf8');
console.log('AdminDashboard patched successfully');
