const fs = require('fs');
const appPath = 'src/App.jsx';
let appCode = fs.readFileSync(appPath, 'utf8');
appCode = appCode.replace(/\(\) => setEnquiryOpen\(true\)/g, 'handleEnquiryClick');
fs.writeFileSync(appPath, appCode);
