import React, { useState, useEffect, useRef } from 'react';
import { Upload, X, Check, Trash2, Image as ImageIcon } from 'lucide-react';
import BASE_URL from '../api.js';

export default function AdminUniversityCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const fileInputRef = useRef(null);

  const initialFormState = {
    mode: 'Online',
    university: '',
    level: 'UG',
    title: '',
    description: '',
    image: null
  };
  
  const [formData, setFormData] = useState(initialFormState);
  const [imagePreview, setImagePreview] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const onlineUniversities = [
    'VIT Vellore',
    'Alliance Bangalore',
    'Christ Bangalore',
    'Andhra University Vishakapatnam',
    'Jain University',
    'Sikkim Manipal University',
    'Manipal University Jaipur',
    'Dhayananth Sagar University Bangalore'
  ];

  const distanceUniversities = [
    'Alagappa University',
    'Bharathidasan University',
    'Amity University',
    'BOSSE',
    'NIOS'
  ];

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/university-courses`);
      if (res.ok) {
        const data = await res.json();
        setCourses(data);
      }
    } catch (err) {
      console.error('Failed to fetch university courses', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const clearImage = () => {
    setFormData({ ...formData, image: null });
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleEdit = (course) => {
    setEditingId(course.id);
    setFormData({
      mode: course.mode,
      university: course.university,
      level: course.level,
      title: course.title,
      description: course.description,
      image: null
    });
    setImagePreview(course.image ? (course.image.startsWith('http') || course.image.startsWith('data:') ? course.image : `${BASE_URL}${course.image}`) : null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData(initialFormState);
    clearImage();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!editingId && !formData.image) {
      setError('Please upload an image for the course.');
      setLoading(false);
      return;
    }

    if (!formData.university) {
      setError('Please select or type a university name.');
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append('mode', formData.mode);
    data.append('university', formData.university);
    data.append('level', formData.level);
    data.append('title', formData.title);
    data.append('description', formData.description);
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
      const url = editingId ? `${BASE_URL}/api/university-courses/${editingId}` : `${BASE_URL}/api/university-courses`;
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        body: data,
      });

      if (res.ok) {
        setSuccess(editingId ? 'Course updated successfully!' : 'Course added successfully!');
        setFormData(initialFormState);
        setEditingId(null);
        clearImage();
        fetchCourses();
      } else {
        const errData = await res.json();
        setError(errData.error || 'Failed to add course');
      }
    } catch (err) {
      setError('Server error occurred while adding course');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    
    try {
      const res = await fetch(`${BASE_URL}/api/university-courses/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        fetchCourses();
      }
    } catch (err) {
      console.error('Failed to delete course', err);
    }
  };

  return (
    <div className="space-y-8 font-outfit">
      {/* Add New Course Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            {editingId ? 'Edit University Course' : 'Add New University Course'}
          </h2>
          {editingId && (
            <button 
              onClick={cancelEdit}
              className="px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Cancel Edit
            </button>
          )}
        </div>
        
        {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm font-medium">{error}</div>}
        {success && <div className="bg-emerald-50 text-emerald-600 p-4 rounded-xl mb-6 text-sm font-medium flex items-center gap-2"><Check size={18} /> {success}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Mode</label>
              <select
                name="mode"
                value={formData.mode}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ca785] bg-slate-50"
              >
                <option value="Online">Online</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Level</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ca785] bg-slate-50"
              >
                <option value="UG">UG</option>
                <option value="PG">PG</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">University</label>
              <select
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ca785] bg-slate-50"
              >
                <option value="">Select a University</option>
                {(formData.mode === 'Online' ? onlineUniversities : distanceUniversities).map((uni, idx) => (
                  <option key={idx} value={uni}>{uni}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Course Title (e.g. BBA)</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter course abbreviation"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ca785] bg-slate-50 uppercase"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Short Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="e.g. BACHELOR OF BUSINESS ADMINISTRATION"
              required
              rows={2}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ca785] bg-slate-50 uppercase"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Course Image</label>
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <label className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-[#2ca785] hover:bg-[#2ca785]/5 transition-colors bg-slate-50">
                  <div className="flex flex-col items-center">
                    <Upload className="w-8 h-8 text-slate-400 mb-2" />
                    <span className="text-sm text-slate-500 font-medium">
                      {editingId ? 'Click to change image (optional)' : 'Click to upload image'}
                    </span>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                  />
                </label>
              </div>
              
              {imagePreview ? (
                <div className="relative w-32 h-32 rounded-xl overflow-hidden border border-slate-200 shadow-sm shrink-0 group">
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  <button 
                    type="button"
                    onClick={clearImage}
                    className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={24} />
                  </button>
                </div>
              ) : (
                <div className="w-32 h-32 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center shrink-0 text-slate-300">
                  <ImageIcon size={32} />
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-8 py-3.5 bg-[#2ca785] hover:bg-[#238b6f] text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70"
          >
            {loading ? (editingId ? 'Updating...' : 'Adding Course...') : (editingId ? 'Update Course' : 'Add Course')}
          </button>
        </form>
      </div>

      {/* Courses List */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Existing Courses</h2>
        
        {courses.length === 0 ? (
          <div className="text-center py-8 text-slate-500">No courses added yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-100 text-slate-500 text-sm">
                  <th className="pb-3 font-semibold">Image</th>
                  <th className="pb-3 font-semibold">Title</th>
                  <th className="pb-3 font-semibold">University</th>
                  <th className="pb-3 font-semibold">Mode / Level</th>
                  <th className="pb-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {courses.map(course => (
                  <tr key={course.id} className="hover:bg-slate-50">
                    <td className="py-4">
                      <img src={course.image ? (course.image.startsWith('http') || course.image.startsWith('data:') ? course.image : `${BASE_URL}${course.image}`) : ''} alt={course.title} className="w-16 h-10 object-cover rounded-md border border-slate-200" />
                    </td>
                    <td className="py-4">
                      <p className="font-bold text-slate-800">{course.title}</p>
                      <p className="text-xs text-slate-500 max-w-[200px] truncate">{course.description}</p>
                    </td>
                    <td className="py-4 font-medium text-slate-700">{course.university}</td>
                    <td className="py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                        {course.mode}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {course.level}
                      </span>
                    </td>
                    <td className="py-4 text-right space-x-2">
                      <button 
                        onClick={() => handleEdit(course)}
                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit Course"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                      </button>
                      <button 
                        onClick={() => handleDelete(course.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Course"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
