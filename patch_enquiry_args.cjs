const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('Programs.jsx'));

const uniMap = {
  'ManipalPrograms.jsx': 'Manipal University',
  'ChristPrograms.jsx': 'Christ University',
  'AndhraPrograms.jsx': 'Andhra University',
  'DayanandaPrograms.jsx': 'Dayananda Sagar University',
  'AmityPrograms.jsx': 'Amity University',
  'BharathidasanPrograms.jsx': 'Bharathidasan University',
  'AlagappaPrograms.jsx': 'Alagappa University',
  'VITPrograms.jsx': 'VIT University'
};

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let code = fs.readFileSync(filePath, 'utf8');
  
  const uni = uniMap[file] || file.replace('Programs.jsx', ' University');
  
  // Need to handle both onClick={onEnquiryClick} and onClick={() => onEnquiryClick(...)}
  if (code.includes('onClick={onEnquiryClick}')) {
    code = code.replace(/onClick=\{onEnquiryClick\}/g, `onClick={() => onEnquiryClick(program.title, '${uni}')}`);
    fs.writeFileSync(filePath, code);
    console.log('Patched ' + file);
  }
}
