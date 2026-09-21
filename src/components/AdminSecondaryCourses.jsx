import React, { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, Check, Trash2 } from 'lucide-react';
import BASE_URL from '../api.js';

export default function AdminSecondaryCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const initialFormState = {
    level: '10th Standard',
    board: 'BOSSE',
    subjects: '',
    duration: '1 Year',
    mode: 'Distance / Online',
    color_theme: 'from-[#1c2d76] to-[#2d4bc4]'
  };

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/secondary-courses`);
      if (res.ok) {
        const data = await res.json();
        setCourses(data);
      }
    } catch (err) {
      console.error('Failed to fetch secondary courses', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!formData.subjects) {
      setError('Please provide at least one subject.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/api/secondary-courses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess('Secondary course added successfully!');
        setFormData(initialFormState);
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
      const res = await fetch(`${BASE_URL}/api/secondary-courses/${id}`, {
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
      {/* Add New Secondary Course Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Add Secondary Course</h2>
        
        {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm font-medium">{error}</div>}
        {success && <div className="bg-emerald-50 text-emerald-600 p-4 rounded-xl mb-6 text-sm font-medium flex items-center gap-2"><Check size={18} /> {success}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Level</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ca785] bg-slate-50"
              >
                <option value="10th Standard">10th Standard (Secondary)</option>
                <option value="12th Standard">12th Standard (Senior Secondary)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Board</label>
              <input
                type="text"
                name="board"
                value={formData.board}
                onChange={handleInputChange}
                placeholder="e.g. BOSSE, NIOS"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ca785] bg-slate-50 uppercase"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                placeholder="e.g. 1 Year"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ca785] bg-slate-50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Mode</label>
              <input
                type="text"
                name="mode"
                value={formData.mode}
                onChange={handleInputChange}
                placeholder="e.g. Distance / Online"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ca785] bg-slate-50"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-slate-700">Theme Color (Gradient)</label>
              <select
                name="color_theme"
                value={formData.color_theme}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ca785] bg-slate-50"
              >
                <option value="from-[#1c2d76] to-[#2d4bc4]">Blue Theme</option>
                <option value="from-[#2ca785] to-[#1e8c6e]">Green Theme</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Subjects (Comma Separated)</label>
            <textarea
              name="subjects"
              value={formData.subjects}
              onChange={handleInputChange}
              placeholder="e.g. Tamil, English, Mathematics, Science, Social Science"
              required
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ca785] bg-slate-50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-8 py-3.5 bg-[#2ca785] hover:bg-[#238b6f] text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70"
          >
            {loading ? 'Adding Course...' : 'Add Secondary Course'}
          </button>
        </form>
      </div>

      {/* Courses List */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Existing Secondary Courses</h2>
        
        {courses.length === 0 ? (
          <div className="text-center py-8 text-slate-500">No secondary courses added yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map(course => (
              <div key={course.id} className="relative p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <button 
                  onClick={() => handleDelete(course.id)}
                  className="absolute top-4 right-4 p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Delete Course"
                >
                  <Trash2 size={18} />
                </button>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${course.color_theme}`}>
                    {course.level.includes('10') ? <BookOpen size={24} /> : <GraduationCap size={24} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 leading-tight">{course.level}</h3>
                    <p className="text-sm font-medium text-slate-500">{course.board}</p>
                  </div>
                </div>

                <div className="mb-4 text-sm text-slate-600">
                  <span className="font-semibold text-slate-700">Subjects: </span>
                  {course.subjects.split(',').slice(0, 4).join(', ')}
                  {course.subjects.split(',').length > 4 && ' ...'}
                </div>

                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg">{course.duration}</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg">{course.mode}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
