const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

const filesToPatch = [
  'AlagappaPrograms.jsx',
  'AndhraPrograms.jsx',
  'BharathidasanPrograms.jsx',
  'ChristPrograms.jsx',
  'DayanandaPrograms.jsx',
  'ManipalPrograms.jsx',
  'SikkimManipalPrograms.jsx',
  'VITPrograms.jsx',
  'AmityPrograms.jsx'
];

filesToPatch.forEach(file => {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace text-[10px] with text-xs sm:text-sm
  content = content.replace(/className="text-\[10px\] font-bold text-slate-700 uppercase/g, 'className="text-xs sm:text-sm font-bold text-slate-700 uppercase');
  
  // Also check if any file has text-[10px] sm:text-xs
  content = content.replace(/className="text-\[10px\] sm:text-xs font-bold text-slate-700/g, 'className="text-xs sm:text-sm font-bold text-slate-700');

  // Replace split('|').map(...) with filter and •
  content = content.replace(
    /\{program\.subtitle\.split\('\|'\)\.map\(\(item,\s*index\)\s*=>\s*\(\s*<li\s+key=\{index\}>\.\s*\{item\.trim\(\)\}<\/li>\s*\)\)\}/g,
    `{program.subtitle.split('|').filter(item => item.trim() !== '').map((item, index) => (\n                        <li key={index}>• {item.trim()}</li>\n                      ))}`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Patched ${file}`);
});
