import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { initialBlogPosts } from './src/data/blogData.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Create DB connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

const initialCourses = [
  {
    level: 'UG',
    title: 'UG ARTS & HUMANITIES',
    color_theme: 'yellow',
    courses_list: 'B.A Tamil, B.A English, B.A History, B.A Economics, B.A Public Administration, B.A Political Science'
  },
  {
    level: 'UG',
    title: 'UG COMMERCE',
    color_theme: 'blue',
    courses_list: 'B.Com General, B.Com Computer Applications, BBA (Bachelor of Business Administration)'
  },
  {
    level: 'UG',
    title: 'UG SCIENCE & IT',
    color_theme: 'yellow',
    courses_list: 'B.Sc Mathematics, B.Sc Computer Science, B.Sc Psychology, BCA (Bachelor of Computer Applications)'
  },
  {
    level: 'PG',
    title: 'PG ARTS & HUMANITIES',
    color_theme: 'blue',
    courses_list: 'M.A Tamil, M.A English, M.A History, M.A Economics, M.A Political Science'
  },
  {
    level: 'PG',
    title: 'PG COMMERCE & MANAGEMENT',
    color_theme: 'yellow',
    courses_list: 'M.Com, MBA General, MBA Human Resource, MBA Finance, MBA Marketing, MBA Hospital Management'
  },
  {
    level: 'PG',
    title: 'PG SCIENCE & IT',
    color_theme: 'blue',
    courses_list: 'M.Sc Mathematics, M.Sc Computer Science, M.Sc Psychology, MCA (Master of Computer Applications)'
  }
];

// Initialize database table and populate initial data if empty
async function initDb() {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to TiDB successfully!');
    
    // Create blogs table if it doesn't exist
    await connection.query(`
      CREATE TABLE IF NOT EXISTS blogs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        category VARCHAR(50) NOT NULL,
        author VARCHAR(100) NOT NULL,
        snippet TEXT,
        content LONGTEXT NOT NULL,
        keywords VARCHAR(255),
        date VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Create course_categories table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS course_categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        level VARCHAR(10) NOT NULL, -- 'UG' or 'PG'
        title VARCHAR(255) NOT NULL,
        color_theme VARCHAR(50) NOT NULL, -- 'yellow' or 'blue'
        courses_list TEXT NOT NULL, -- comma separated or JSON
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Create student_reviews table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS student_reviews (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        avatar VARCHAR(255) DEFAULT 'default',
        text TEXT NOT NULL,
        rating INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Create student_videos table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS student_videos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        url VARCHAR(500) NOT NULL,
        isYoutube BOOLEAN DEFAULT FALSE,
        videoId VARCHAR(100),
        featured BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    
    // Check if blogs empty
    const [blogRows] = await connection.query('SELECT COUNT(*) as count FROM blogs');
    if (blogRows[0].count === 0) {
      console.log('Blogs table is empty, inserting initial blogs...');
      for (const blog of initialBlogPosts) {
        await connection.query(
          'INSERT INTO blogs (title, category, author, snippet, content, keywords, date) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [blog.title, blog.category, blog.author, blog.snippet, blog.content, blog.keywords, blog.date]
        );
      }
    }

    // Check if courses empty
    const [courseRows] = await connection.query('SELECT COUNT(*) as count FROM course_categories');
    if (courseRows[0].count === 0) {
      console.log('Course Categories table is empty, inserting initial courses...');
      for (const course of initialCourses) {
        await connection.query(
          'INSERT INTO course_categories (level, title, color_theme, courses_list) VALUES (?, ?, ?, ?)',
          [course.level, course.title, course.color_theme, course.courses_list]
        );
      }
    }

    // Check if reviews empty
    const [reviewRows] = await connection.query('SELECT COUNT(*) as count FROM student_reviews');
    if (reviewRows[0].count === 0) {
      console.log('Student Reviews table is empty, inserting initial reviews...');
      const defaultTestimonials = [
        {
          name: 'Ronald Richards',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
          text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          rating: 4
        },
        {
          name: 'Wade Warren',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
          text: 'Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Reprehenderit in voluptate velit esse',
          rating: 4
        },
        {
          name: 'Jacob Jones',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
          text: 'Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit',
          rating: 4
        }
      ];
      for (const review of defaultTestimonials) {
        await connection.query(
          'INSERT INTO student_reviews (name, avatar, text, rating) VALUES (?, ?, ?, ?)',
          [review.name, review.avatar, review.text, review.rating]
        );
      }
    }

    // Check if videos empty
    const [videoRows] = await connection.query('SELECT COUNT(*) as count FROM student_videos');
    if (videoRows[0].count === 0) {
      console.log('Student Videos table is empty, inserting initial video...');
      await connection.query(
        'INSERT INTO student_videos (url, isYoutube, videoId, featured) VALUES (?, ?, ?, ?)',
        ['https://www.youtube.com/watch?v=LXb3EKWsInQ', 1, 'LXb3EKWsInQ', 1]
      );
    }
    
    connection.release();
    console.log('Database initialization complete.');
  } catch (err) {
    console.error('Error connecting to or initializing database:', err);
  }
}

initDb();

// --- API Routes for Blogs ---

// GET all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM blogs ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// POST a new blog
app.post('/api/blogs', async (req, res) => {
  const { title, category, author, snippet, content, keywords, date } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO blogs (title, category, author, snippet, content, keywords, date) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [title, category, author, snippet, content, keywords, date]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add blog' });
  }
});

// PUT (update) an existing blog
app.put('/api/blogs/:id', async (req, res) => {
  const { id } = req.params;
  const { title, category, author, snippet, content, keywords } = req.body;
  try {
    await pool.query(
      'UPDATE blogs SET title = ?, category = ?, author = ?, snippet = ?, content = ?, keywords = ? WHERE id = ?',
      [title, category, author, snippet, content, keywords, id]
    );
    res.json({ id, ...req.body });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update blog' });
  }
});

// DELETE a blog
app.delete('/api/blogs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM blogs WHERE id = ?', [id]);
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
});

// --- API Routes for Courses ---

// GET all courses
app.get('/api/courses', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM course_categories ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// POST a new course category
app.post('/api/courses', async (req, res) => {
  const { level, title, color_theme, courses_list } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO course_categories (level, title, color_theme, courses_list) VALUES (?, ?, ?, ?)',
      [level, title, color_theme, courses_list]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add course category' });
  }
});

// PUT (update) a course category
app.put('/api/courses/:id', async (req, res) => {
  const { id } = req.params;
  const { level, title, color_theme, courses_list } = req.body;
  try {
    await pool.query(
      'UPDATE course_categories SET level = ?, title = ?, color_theme = ?, courses_list = ? WHERE id = ?',
      [level, title, color_theme, courses_list, id]
    );
    res.json({ id, ...req.body });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update course category' });
  }
});

// DELETE a course category
app.delete('/api/courses/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM course_categories WHERE id = ?', [id]);
    res.json({ message: 'Course category deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete course category' });
  }
});

// --- API Routes for Student Reviews ---

// GET all reviews
app.get('/api/reviews', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM student_reviews ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// POST a new review
app.post('/api/reviews', async (req, res) => {
  const { name, avatar, text, rating } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO student_reviews (name, avatar, text, rating) VALUES (?, ?, ?, ?)',
      [name, avatar || 'default', text, rating]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add review' });
  }
});

// PUT (update) a review
app.put('/api/reviews/:id', async (req, res) => {
  const { id } = req.params;
  const { name, avatar, text, rating } = req.body;
  try {
    await pool.query(
      'UPDATE student_reviews SET name = ?, avatar = ?, text = ?, rating = ? WHERE id = ?',
      [name, avatar || 'default', text, rating, id]
    );
    res.json({ id, ...req.body });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update review' });
  }
});

// DELETE a review
app.delete('/api/reviews/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM student_reviews WHERE id = ?', [id]);
    res.json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete review' });
  }
});

// --- API Routes for Student Videos ---

// GET all videos
app.get('/api/videos', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM student_videos ORDER BY id DESC');
    // Convert isYoutube and featured from tinyint to boolean for frontend compatibility
    const formattedRows = rows.map(r => ({
      ...r,
      isYoutube: !!r.isYoutube,
      featured: !!r.featured
    }));
    res.json(formattedRows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
});

// POST a new video
app.post('/api/videos', async (req, res) => {
  const { url, isYoutube, videoId, featured } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO student_videos (url, isYoutube, videoId, featured) VALUES (?, ?, ?, ?)',
      [url, isYoutube ? 1 : 0, videoId, featured ? 1 : 0]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add video' });
  }
});

// PUT (update) a video's featured status
app.put('/api/videos/:id', async (req, res) => {
  const { id } = req.params;
  const { featured } = req.body;
  try {
    await pool.query(
      'UPDATE student_videos SET featured = ? WHERE id = ?',
      [featured ? 1 : 0, id]
    );
    res.json({ id, featured });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update video' });
  }
});

// DELETE a video
app.delete('/api/videos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM student_videos WHERE id = ?', [id]);
    res.json({ message: 'Video deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete video' });
  }
});

// --- API Routes for Email ---

// POST send-email (Enquiry and Contact Forms)
app.post('/api/send-email', async (req, res) => {
  const { type, data } = req.body;
  
  let subject = '';
  let text = '';
  
  if (type === 'enquiry') {
    subject = 'New Course Enquiry from VNET';
    text = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCourse: ${data.course}\nMessage: ${data.message}`;
  } else if (type === 'contact') {
    subject = 'New Contact Request from VNET';
    text = `Name: ${data.name}\nPhone: ${data.phone}\nLocation: ${data.location}\nQualification: ${data.qualification}`;
  } else {
    return res.status(400).json({ error: 'Invalid form type' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Admin receives the emails
    subject: subject,
    text: text,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// POST forgot-password (Admin Login)
app.post('/api/forgot-password', async (req, res) => {
  const { email } = req.body;
  
  if (email === 'admin@vnet.com') {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'admin@vnet.com',
      subject: 'VNET Admin Password Recovery',
      text: 'Your VNET Admin password is: vnet@admin123',
    };
    
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Password recovery email sent' });
    } catch (error) {
      console.error('Error sending password recovery email:', error);
      res.status(500).json({ error: 'Failed to send recovery email' });
    }
  } else {
    // For security, always return success even if email is wrong
    res.status(200).json({ message: 'If the email exists, a recovery email was sent.' });
  }
});

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
  });
}

export default app;
