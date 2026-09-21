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
            onClick={() => handleTabChange('university_courses')}
            className={\`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors cursor-pointer \${
              activeTab === 'university_courses' ? 'bg-white/10 text-white' : 'text-blue-200 hover:bg-white/5 hover:text-white'
            }\`}
          >
            <LayoutDashboard size={18} />
            New Courses
          </button>\n\n`;

const targetButtonStr = `          <button 
            onClick={() => handleTabChange('add_course')}
            className={\`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors cursor-pointer \${
              activeTab === 'add_course' ? 'bg-white/10 text-white' : 'text-blue-200 hover:bg-white/5 hover:text-white'
            }\`}
          >`;

if (!content.includes("handleTabChange('university_courses')")) {
  content = content.replace(targetButtonStr, newSidebarBtn + targetButtonStr);
}

// 3. Add Tab Content
const newTabRender = `        {activeTab === 'university_courses' && <AdminUniversityCourses />}\n\n`;
const targetRenderStr = `        {activeTab === 'add_course' && (`;

if (!content.includes("<AdminUniversityCourses />")) {
  content = content.replace(targetRenderStr, newTabRender + targetRenderStr);
}

fs.writeFileSync('src/components/AdminDashboard.jsx', content, 'utf8');
console.log('AdminDashboard patched successfully');
