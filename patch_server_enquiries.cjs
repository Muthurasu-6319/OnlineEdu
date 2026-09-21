const fs = require('fs');
const file = 'server.js';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('CREATE TABLE IF NOT EXISTS enquiries')) {
  // Add table creation
  content = content.replace('// Create blogs table', 
    'await connection.query(`CREATE TABLE IF NOT EXISTS enquiries (id INT AUTO_INCREMENT PRIMARY KEY, type VARCHAR(50), name VARCHAR(255), email VARCHAR(255), phone VARCHAR(50), course VARCHAR(255), location VARCHAR(255), qualification VARCHAR(255), message TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`);\n\n    // Create blogs table');
  
  // Update send-email
  content = content.replace('await transporter.sendMail(mailOptions);', 
    'if (type === "enquiry") { await pool.query("INSERT INTO enquiries (type, name, email, phone, course, message) VALUES (?, ?, ?, ?, ?, ?)", [type, data.name, data.email, data.phone, data.course, data.message]); } else if (type === "contact") { await pool.query("INSERT INTO enquiries (type, name, phone, location, qualification) VALUES (?, ?, ?, ?, ?)", [type, data.name, data.phone, data.location, data.qualification]); }\n\n    await transporter.sendMail(mailOptions);');
  
  // Add API routes before app.listen
  const routes = `
// --- API Routes for Enquiries ---

// GET all enquiries
app.get('/api/enquiries', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM enquiries ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch enquiries' });
  }
});

// DELETE an enquiry
app.delete('/api/enquiries/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM enquiries WHERE id = ?', [id]);
    res.json({ message: 'Enquiry deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete enquiry' });
  }
});

`;
  
  content = content.replace('const PORT = process.env.PORT || 5000;', routes + 'const PORT = process.env.PORT || 5000;');
  
  fs.writeFileSync(file, content);
  console.log('server.js patched');
}
