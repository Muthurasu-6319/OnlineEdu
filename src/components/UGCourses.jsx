import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import ugHero from '../assets/ug_hero.png';

import BASE_URL from '../api.js';

const COURSES_API_URL = `${BASE_URL}/api/courses`;

export default function UGCourses({ mode = 'Distance' }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(COURSES_API_URL);
        if (response.ok) {
          const data = await response.json();
          // Filter only UG courses
          setCourses(data.filter(c => c.level === 'UG' && c.mode === mode));
        }
      } catch (err) {
        console.error('Failed to fetch UG courses:', err);
      }
    };
    fetchCourses();
  }, [mode]);

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-outfit">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-slate-900 overflow-hidden">
        <img 
          src={ugHero} 
          alt="Undergraduate Courses" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            {mode} Undergraduate <span className="text-yellow-400">Programs</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl font-medium">
            Build a strong foundation for your career with our industry-aligned, UGC-approved undergraduate degrees. Flexible learning tailored for ambitious minds.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c2d76] mb-3">Explore Our {mode} UG Categories</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        {courses.length === 0 ? (
          <div className="text-center text-slate-500 py-12">
            Loading courses or no courses available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  const isYellow = course.color_theme === 'yellow';
  
  // Parse comma separated list
  const courseListArray = course.courses_list
    .split(',')
    .map(item => item.trim())
    .filter(item => item.length > 0);

  return (
    <div className={`group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 h-full overflow-hidden transition-all duration-300 hover:text-white hover:-translate-y-1 text-slate-600 ${isYellow ? 'hover:bg-yellow-400' : 'hover:bg-[#0ea5e9]'}`}>
      {/* Decorative Circle */}
      <div className={`absolute -bottom-16 -right-16 w-40 h-40 rounded-full group-hover:bg-white/10 transition-colors duration-300 pointer-events-none ${isYellow ? 'bg-yellow-50/70' : 'bg-blue-50/70'}`}></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6">
          <div className={`p-3.5 rounded-xl w-fit group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 mb-5 ${isYellow ? 'bg-yellow-50 text-yellow-500' : 'bg-blue-50 text-[#0ea5e9]'}`}>
            <User size={32} />
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 group-hover:text-white transition-colors duration-300 leading-tight">
            {course.title}
          </h3>
        </div>

        {/* List */}
        <ul className="space-y-4 px-1">
          {courseListArray.map((item, index) => (
            <li key={index} className="flex items-start gap-3 font-semibold text-base md:text-lg">
              <span className={`mt-2.5 w-2 h-2 rounded-full shrink-0 group-hover:bg-white transition-colors duration-300 ${isYellow ? 'bg-yellow-400' : 'bg-[#0ea5e9]'}`}></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
