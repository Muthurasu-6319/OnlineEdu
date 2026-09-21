const fs = require('fs');
const path = require('path');

const programsMapping = {
  'VITPrograms.jsx': { name: 'VITPrograms', uni: 'VIT Vellore' }
};

for (const [filename, info] of Object.entries(programsMapping)) {
  const filepath = path.join(__dirname, 'src', 'components', filename);
  if (!fs.existsSync(filepath)) {
    console.log(`Skipping ${filename}, file not found.`);
    continue;
  }
  
  let content = fs.readFileSync(filepath, 'utf8');

  // Replace import
  if (!content.includes('import BASE_URL')) {
    content = content.replace(
      "import { ArrowRight } from 'lucide-react';",
      "import { ArrowRight } from 'lucide-react';\nimport BASE_URL from '../api.js';"
    );
  }
  
  // Replace useState
  if (!content.includes('useEffect')) {
    content = content.replace(
      "import React, { useState } from 'react';",
      "import React, { useState, useEffect } from 'react';"
    );
  }

  // Replace component body start to the displayPrograms declaration
  const regex = new RegExp(`export default function ${info.name}\\(\\) {\\s*const \\[activeTab, setActiveTab\\] = useState\\('UG'\\);([\\s\\S]*?)(const displayPrograms = activeTab === 'UG' \\? programs\\.UG : programs\\.PG;|const displayPrograms = activeTab === 'UG' \\? programsToUse\\.UG : programsToUse\\.PG;)`);
  
  const match = content.match(regex);
  
  if (match) {
    const hardcodedProgramsStr = match[1].trim().replace(/^const programs = /, 'const hardcodedPrograms = ').replace(/;$/, ';');
    
    const newBody = `export default function ${info.name}() {
  const [activeTab, setActiveTab] = useState('UG');
  const [dbPrograms, setDbPrograms] = useState({ UG: [], PG: [] });
  const [loading, setLoading] = useState(true);

  ${hardcodedProgramsStr}

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(\`\${BASE_URL}/api/university-courses\`);
        if (res.ok) {
          const data = await res.json();
          const vitCourses = data.filter(c => c.university === '${info.uni}');
          
          const grouped = { UG: [], PG: [] };
          vitCourses.forEach(c => {
            const courseObj = {
              title: c.title,
              subtitle: c.description,
              image: \`\${BASE_URL}\${c.image_url}\`
            };
            if (c.level === 'UG') grouped.UG.push(courseObj);
            else if (c.level === 'PG') grouped.PG.push(courseObj);
          });
          
          setDbPrograms(grouped);
        }
      } catch (err) {
        console.error('Failed to fetch university courses', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourses();
  }, []);

  const programsToUse = {
    UG: dbPrograms.UG.length > 0 ? dbPrograms.UG : (hardcodedPrograms.UG || []),
    PG: dbPrograms.PG.length > 0 ? dbPrograms.PG : (hardcodedPrograms.PG || []),
  };

  const displayPrograms = activeTab === 'UG' ? programsToUse.UG : programsToUse.PG;`;
    
    content = content.replace(regex, newBody);
    
    // Replace the grid rendering to include loading state
    const gridRegex = /(<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">[\s\S]*?\{displayPrograms\.map\(\(program, index\) => \([\s\S]*?<img[\s\S]*?alt=\{program\.title\}[\s\S]*?<\/div>\s*\)\)\s*<\/div>)/;
    
    const gridMatch = content.match(gridRegex);
    if (gridMatch && !content.includes('{loading ? (')) {
      const newGrid = `{loading ? (
          <div className="text-center py-10 text-purple-600 font-semibold animate-pulse">Loading programs...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {displayPrograms.length === 0 ? (
              <div className="col-span-full text-center py-8 text-slate-500">No programs available yet.</div>
            ) : (
              displayPrograms.map((program, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-md p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] flex flex-col"
                >
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-48 object-cover rounded mb-6"
                  />
                  <div className="flex-grow flex flex-col items-start gap-2">
                    <h3 className="text-xl font-black text-purple-500 uppercase tracking-wide">
                      {program.title}
                    </h3>
                    <p className="text-[10px] font-bold text-slate-700 uppercase tracking-widest leading-relaxed">
                      {program.subtitle}
                    </p>
                  </div>
                  
                  <button className="mt-8 self-start border border-purple-300 text-purple-500 hover:bg-purple-50 font-semibold text-xs px-4 py-2 rounded flex items-center gap-2 transition-colors">
                    Apply NOW <ArrowRight size={14} />
                  </button>
                </div>
              ))
            )}
          </div>
        )}`;
      content = content.replace(gridRegex, newGrid);
    }
    
    fs.writeFileSync(filepath, content);
    console.log(`Patched ${filename}`);
  } else {
    console.log(`Regex match failed for ${filename}`);
  }
}
