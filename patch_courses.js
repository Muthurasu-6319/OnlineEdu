import fs from 'fs';
import path from 'path';

function patchApp() {
  const file = path.join(process.cwd(), 'src', 'App.jsx');
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    '<UGCourses />',
    "<UGCourses mode={currentHash.includes('online') ? 'Online' : 'Distance'} />"
  );
  content = content.replace(
    '<PGCourses />',
    "<PGCourses mode={currentHash.includes('online') ? 'Online' : 'Distance'} />"
  );
  fs.writeFileSync(file, content);
  console.log('App.jsx patched');
}

function patchCourseComponent(filename, level, heroTitleText) {
  const file = path.join(process.cwd(), 'src', 'components', filename);
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Add mode to props
  content = content.replace(`export default function ${filename.split('.')[0]}() {`, `export default function ${filename.split('.')[0]}({ mode = 'Distance' }) {`);
  
  // 2. Add mode to useEffect dependency array
  content = content.replace('}, []);', '}, [mode]);');
  
  // 3. Filter by mode in useEffect
  content = content.replace(
    `setCourses(data.filter(c => c.level === '${level}'));`,
    `setCourses(data.filter(c => c.level === '${level}' && c.mode === mode));`
  );
  
  // 4. Update the hero text to include the Mode (e.g. "Distance Undergraduate Programs")
  content = content.replace(
    `${heroTitleText} <span className="text-yellow-400">Programs</span>`,
    `{mode} ${heroTitleText} <span className="text-yellow-400">Programs</span>`
  );
  
  // 5. Update the Explore title
  content = content.replace(
    `Explore Our ${level} Categories`,
    `Explore Our {mode} ${level} Categories`
  );

  fs.writeFileSync(file, content);
  console.log(`${filename} patched`);
}

patchApp();
patchCourseComponent('UGCourses.jsx', 'UG', 'Undergraduate');
patchCourseComponent('PGCourses.jsx', 'PG', 'Postgraduate');
