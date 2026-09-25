const fs = require('fs');
const files = [
  'AlagappaPrograms.jsx',
  'AndhraPrograms.jsx',
  'BharathidasanPrograms.jsx',
  'ChristPrograms.jsx',
  'DayanandaPrograms.jsx',
  'ManipalPrograms.jsx',
  'SikkimManipalPrograms.jsx',
  'VITPrograms.jsx'
];

const replacement = `<div className="text-[10px] font-bold text-slate-700 uppercase tracking-widest leading-relaxed w-full">
                  {program.subtitle && program.subtitle.includes('|') ? (
                    <ul className="space-y-1 w-full">
                      {program.subtitle.split('|').map((item, index) => (
                        <li key={index}>. {item.trim()}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="whitespace-pre-line">{program.subtitle}</p>
                  )}
                </div>`;

files.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const newContent = content.replace(
      /<p className="text-\[10px\] font-bold text-slate-700 uppercase tracking-widest leading-relaxed">\s*\{program\.subtitle\}\s*<\/p>/g,
      replacement
    );
    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log('Updated', file);
    } else {
      console.log('No match found in', file);
    }
  }
});
