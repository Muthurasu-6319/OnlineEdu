const fs = require('fs');
const file = 'server.js';
let content = fs.readFileSync(file, 'utf8');

// Replace the old insertion logic which didn't use explicit created_at
const oldLogic = `if (type === "enquiry") { await pool.query("INSERT INTO enquiries (type, name, email, phone, course, message) VALUES (?, ?, ?, ?, ?, ?)", [type, data.name, data.email, data.phone, data.course, data.message]); } else if (type === "contact") { await pool.query("INSERT INTO enquiries (type, name, phone, location, qualification) VALUES (?, ?, ?, ?, ?)", [type, data.name, data.phone, data.location, data.qualification]); }`;
const newLogic = `const now = new Date(); if (type === "enquiry") { await pool.query("INSERT INTO enquiries (type, name, email, phone, course, message, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)", [type, data.name, data.email, data.phone, data.course, data.message, now]); } else if (type === "contact") { await pool.query("INSERT INTO enquiries (type, name, phone, location, qualification, created_at) VALUES (?, ?, ?, ?, ?, ?)", [type, data.name, data.phone, data.location, data.qualification, now]); }`;

if (content.includes(oldLogic)) {
  content = content.replace(oldLogic, newLogic);
  fs.writeFileSync(file, content);
  console.log('server.js time insert patched');
} else {
  console.log('Could not find old logic to replace');
}
