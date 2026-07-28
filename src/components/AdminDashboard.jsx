import React, { useState, useEffect } from 'react';
import { LogOut, Plus, Trash2, Edit2, LayoutDashboard, FileText, Settings } from 'lucide-react';

const API_URL = '/api/blogs';
const COURSES_API_URL = '/api/courses';

export default function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('blogs'); // 'blogs', 'add', 'courses', 'add_course'
  const [allBlogs, setAllBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  
  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('ADMISSIONS');
  const [content, setContent] = useState('');
  const [keywords, setKeywords] = useState('');
  const [author, setAuthor] = useState('Admin User');
  const [snippet, setSnippet] = useState('');

  // Course Form State
  const [allCourses, setAllCourses] = useState([]);
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [courseLevel, setCourseLevel] = useState('UG');
  const [courseTitle, setCourseTitle] = useState('');
  const [courseColor, setCourseColor] = useState('blue');
  const [coursesList, setCoursesList] = useState('');

  // Load data from backend API
  const fetchBlogs = async () => {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setAllBlogs(data);
      }
    } catch (err) {
      console.error('Failed to fetch blogs:', err);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await fetch(COURSES_API_URL);
      if (response.ok) {
        const data = await response.json();
        setAllCourses(data);
      }
    } catch (err) {
      console.error('Failed to fetch courses:', err);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchCourses();
  }, []);

  const handlePostBlog = async (e) => {
    e.preventDefault();
    
    const blogData = {
      title,
      category,
      content,
      keywords,
      author,
      snippet: snippet || content.substring(0, 120) + '...',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    };

    try {
      if (editingId) {
        // Update existing
        await fetch(`${API_URL}/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(blogData)
        });
      } else {
        // Create new
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(blogData)
        });
      }
      
      await fetchBlogs();
      resetForm();
      setActiveTab('blogs');
    } catch (err) {
      console.error('Failed to save blog:', err);
      alert('Failed to save blog post. Please check the backend connection.');
    }
  };

  const handleEdit = (blog) => {
    setEditingId(blog.id);
    setTitle(blog.title);
    setCategory(blog.category);
    setContent(blog.content);
    setKeywords(blog.keywords || '');
    setAuthor(blog.author || 'Admin User');
    setSnippet(blog.snippet || '');
    setActiveTab('add');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        await fetchBlogs();
      } catch (err) {
        console.error('Failed to delete blog:', err);
      }
    }
  };

  // Course Handlers
  const handlePostCourse = async (e) => {
    e.preventDefault();
    
    const courseData = {
      level: courseLevel,
      title: courseTitle,
      color_theme: courseColor,
      courses_list: coursesList,
    };

    try {
      if (editingCourseId) {
        await fetch(`${COURSES_API_URL}/${editingCourseId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(courseData)
        });
      } else {
        await fetch(COURSES_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(courseData)
        });
      }
      
      await fetchCourses();
      resetCourseForm();
      setActiveTab('courses');
    } catch (err) {
      console.error('Failed to save course:', err);
      alert('Failed to save course category.');
    }
  };

  const handleEditCourse = (course) => {
    setEditingCourseId(course.id);
    setCourseLevel(course.level);
    setCourseTitle(course.title);
    setCourseColor(course.color_theme);
    setCoursesList(course.courses_list);
    setActiveTab('add_course');
  };

  const handleDeleteCourse = async (id) => {
    if (window.confirm('Are you sure you want to delete this course category?')) {
      try {
        await fetch(`${COURSES_API_URL}/${id}`, { method: 'DELETE' });
        await fetchCourses();
      } catch (err) {
        console.error('Failed to delete course:', err);
      }
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle('');
    setContent('');
    setKeywords('');
    setSnippet('');
    setCategory('ADMISSIONS');
    setAuthor('Admin User');
  };

  const resetCourseForm = () => {
    setEditingCourseId(null);
    setCourseLevel('UG');
    setCourseTitle('');
    setCourseColor('blue');
    setCoursesList('');
  };

  const handleTabChange = (tab) => {
    if (tab === 'add' && activeTab !== 'add') resetForm();
    if (tab === 'add_course' && activeTab !== 'add_course') resetCourseForm();
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-outfit">
      
      {/* Sidebar */}
      <div className="w-64 bg-[#1c2d76] text-white flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-2xl font-black tracking-tight">VNET Admin</h2>
          <p className="text-blue-200 text-xs mt-1 font-medium">Dashboard v2.0</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => handleTabChange('blogs')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors cursor-pointer ${
              activeTab === 'blogs' ? 'bg-white/10 text-white' : 'text-blue-200 hover:bg-white/5 hover:text-white'
            }`}
          >
            <LayoutDashboard size={18} />
            Manage Blogs
          </button>
          
          <button 
            onClick={() => handleTabChange('add')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors cursor-pointer ${
              activeTab === 'add' ? 'bg-white/10 text-white' : 'text-blue-200 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Plus size={18} />
            Post New Blog
          </button>

          <button 
            onClick={() => handleTabChange('courses')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors cursor-pointer ${
              activeTab === 'courses' ? 'bg-white/10 text-white' : 'text-blue-200 hover:bg-white/5 hover:text-white'
            }`}
          >
            <LayoutDashboard size={18} />
            Manage Courses
          </button>

          <button 
            onClick={() => handleTabChange('add_course')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors cursor-pointer ${
              activeTab === 'add_course' ? 'bg-white/10 text-white' : 'text-blue-200 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Plus size={18} />
            Add Course Category
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-300 hover:bg-red-500/10 hover:text-red-200 rounded-xl font-medium transition-colors cursor-pointer"
          >
            <LogOut size={18} />
            Secure Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-8">
        
        {activeTab === 'blogs' && (
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-800">Manage Blogs</h1>
                <p className="text-slate-500 mt-1 text-sm">View, edit, or delete all blog posts.</p>
              </div>
              <button 
                onClick={() => handleTabChange('add')}
                className="bg-[#2ca785] hover:bg-[#238a6d] text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <Plus size={18} />
                New Post
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              {allBlogs.length === 0 ? (
                <div className="p-12 text-center text-slate-400">
                  <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-lg font-medium">No blogs found.</p>
                </div>
              ) : (
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-bold">
                    <tr>
                      <th className="px-6 py-4">Blog Title</th>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {allBlogs.map(blog => (
                      <tr key={blog.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-800">
                          {blog.title}
                          <div className="text-xs text-slate-400 font-normal mt-1 truncate max-w-xs">{blog.keywords}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold">
                            {blog.category.replace('_', ' ')}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-500">{blog.date}</td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <button 
                            onClick={() => handleEdit(blog)}
                            className="p-2 text-blue-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors mr-2 cursor-pointer"
                            title="Edit Blog"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button 
                            onClick={() => handleDelete(blog.id)}
                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                            title="Delete Blog"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {activeTab === 'add' && (
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-800">
                {editingId ? 'Edit Blog Post' : 'Post New Blog'}
              </h1>
              <p className="text-slate-500 mt-1 text-sm">
                {editingId ? 'Update your blog and SEO meta details.' : 'Create an SEO-optimized blog to publish on the main site.'}
              </p>
            </div>

            <form onSubmit={handlePostBlog} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
              
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Blog Title</label>
                <input 
                  type="text" 
                  required 
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="E.g., Why Distance Education is the Future..." 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1c2d76] bg-slate-50 focus:bg-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Category</label>
                  <select 
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1c2d76] bg-slate-50 focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="ALL">General / Uncategorized</option>
                    <option value="ADMISSIONS">Admissions</option>
                    <option value="MBA_MCA">Distance MBA & MCA</option>
                    <option value="BOARD">Board Exams (10th/12th)</option>
                    <option value="CAREER">Career Guide</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Author Name</label>
                  <input 
                    type="text" 
                    required 
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1c2d76] bg-slate-50 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">SEO Snippet (Short Description)</label>
                <textarea 
                  rows="2" 
                  required
                  value={snippet}
                  onChange={e => setSnippet(e.target.value)}
                  placeholder="A brief 1-2 sentence summary for blog cards and SEO meta description..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1c2d76] bg-slate-50 focus:bg-white transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Content</label>
                <textarea 
                  rows="10" 
                  required
                  value={content}
                  onChange={e => setContent(e.target.value)}
                  placeholder="Write the main blog content here... (Supports basic line breaks)"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1c2d76] bg-slate-50 focus:bg-white transition-colors resize-y"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">SEO Keywords (Comma Separated)</label>
                <input 
                  type="text" 
                  required 
                  value={keywords}
                  onChange={e => setKeywords(e.target.value)}
                  placeholder="e.g., online mba, distance education, alagappa university..." 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1c2d76] bg-slate-50 focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-4">
                <button 
                  type="button"
                  onClick={() => handleTabChange('blogs')}
                  className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-[#1c2d76] hover:bg-[#15235c] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-indigo-100 transition-all duration-200 cursor-pointer"
                >
                  {editingId ? 'Update Blog' : 'Publish Blog'}
                </button>
              </div>

            </form>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-800">Manage Course Categories</h1>
                <p className="text-slate-500 mt-1 text-sm">View, edit, or delete UG & PG courses.</p>
              </div>
              <button 
                onClick={() => handleTabChange('add_course')}
                className="bg-[#2ca785] hover:bg-[#238a6d] text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <Plus size={18} />
                New Category
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              {allCourses.length === 0 ? (
                <div className="p-12 text-center text-slate-400">
                  <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-lg font-medium">No courses found.</p>
                </div>
              ) : (
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-bold">
                    <tr>
                      <th className="px-6 py-4">Level</th>
                      <th className="px-6 py-4">Title</th>
                      <th className="px-6 py-4">Theme Color</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {allCourses.map(course => (
                      <tr key={course.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-800">{course.level}</td>
                        <td className="px-6 py-4 font-semibold text-slate-800">
                          {course.title}
                          <div className="text-xs text-slate-400 font-normal mt-1 truncate max-w-xs">{course.courses_list.substring(0, 50)}...</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            course.color_theme === 'yellow' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {course.color_theme.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <button 
                            onClick={() => handleEditCourse(course)}
                            className="p-2 text-blue-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors mr-2 cursor-pointer"
                            title="Edit Course"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button 
                            onClick={() => handleDeleteCourse(course.id)}
                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                            title="Delete Course"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {activeTab === 'add_course' && (
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-800">
                {editingCourseId ? 'Edit Course Category' : 'Add Course Category'}
              </h1>
              <p className="text-slate-500 mt-1 text-sm">
                Create a colored card with a list of courses.
              </p>
            </div>

            <form onSubmit={handlePostCourse} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Level</label>
                  <select 
                    value={courseLevel}
                    onChange={e => setCourseLevel(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1c2d76] bg-slate-50 focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="UG">Undergraduate (UG)</option>
                    <option value="PG">Postgraduate (PG)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Theme Color</label>
                  <select 
                    value={courseColor}
                    onChange={e => setCourseColor(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1c2d76] bg-slate-50 focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="blue">Blue Theme</option>
                    <option value="yellow">Yellow Theme</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Category Title</label>
                <input 
                  type="text" 
                  required 
                  value={courseTitle}
                  onChange={e => setCourseTitle(e.target.value)}
                  placeholder="E.g., UG ARTS & HUMANITIES" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1c2d76] bg-slate-50 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Courses List (Comma Separated)</label>
                <textarea 
                  rows="5" 
                  required
                  value={coursesList}
                  onChange={e => setCoursesList(e.target.value)}
                  placeholder="E.g., BA English, BA Pol Science, BA Economics"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1c2d76] bg-slate-50 focus:bg-white transition-colors resize-y"
                />
                <p className="text-xs text-slate-400 mt-2">Separate each course with a comma (,). It will be displayed as a bulleted list.</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-4">
                <button 
                  type="button"
                  onClick={() => handleTabChange('courses')}
                  className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-[#1c2d76] hover:bg-[#15235c] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-indigo-100 transition-all duration-200 cursor-pointer"
                >
                  {editingCourseId ? 'Update Category' : 'Add Category'}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
