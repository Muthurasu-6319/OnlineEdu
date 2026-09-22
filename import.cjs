const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

if (!code.includes('JainHiringPartners')) {
  code = code.replace(
    /import JainWhyChoose from '\.\/components\/JainWhyChoose';/,
    "import JainWhyChoose from './components/JainWhyChoose';\nimport JainHiringPartners from './components/JainHiringPartners';"
  );
  fs.writeFileSync('src/App.jsx', code);
  console.log('Import added successfully');
} else {
  console.log('Import already present');
}
