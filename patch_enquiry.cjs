const fs = require('fs');
const path = require('path');

// 1. Patch App.jsx
const appPath = path.join(__dirname, 'src', 'App.jsx');
let appCode = fs.readFileSync(appPath, 'utf8');
appCode = appCode.replace(/<([A-Za-z]+Programs)([^>]*?)\/>/g, (match, p1, p2) => {
    if (match.includes('onEnquiryClick')) return match;
    return `<${p1}${p2} onEnquiryClick={() => setEnquiryOpen(true)} />`;
});
fs.writeFileSync(appPath, appCode);

// 2. Patch all *Programs.jsx files
const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('Programs.jsx'));

for (const file of files) {
    const filePath = path.join(componentsDir, file);
    let code = fs.readFileSync(filePath, 'utf8');
    let patched = false;
    
    if (!code.includes('onEnquiryClick')) {
        // Find default export function
        code = code.replace(/export default function ([A-Za-z]+)\((.*?)\) \{/, (match, funcName, args) => {
            if (args.trim() === '') {
                return `export default function ${funcName}({ onEnquiryClick }) {`;
            } else if (args.includes('{')) {
                return `export default function ${funcName}(${args.replace('{', '{ onEnquiryClick, ')}) {`;
            } else {
                return match; 
            }
        });
        
        // Add onClick to Apply NOW button
        code = code.replace(/<button([^>]*)>\s*Apply NOW/g, '<button$1 onClick={onEnquiryClick}>\n                Apply NOW');
        
        fs.writeFileSync(filePath, code);
        console.log('Patched ' + file);
    }
}
