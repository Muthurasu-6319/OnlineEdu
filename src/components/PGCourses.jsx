import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import pgHero from '../assets/pg_hero.png';

const COURSES_API_URL = 'http://localhost:5000/api/courses';

export default function PGCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(COURSES_API_URL);
        if (response.ok) {
          const data = await response.json();
          // Filter only PG courses
          setCourses(data.filter(c => c.level === 'PG'));
        }
      } catch (err) {
        console.error('Failed to fetch PG courses:', err);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-outfit">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-slate-900 overflow-hidden">
        <img 
          src={pgHero} 
          alt="Postgraduate Courses" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Postgraduate <span className="text-blue-400">Programs</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl font-medium">
            Elevate your expertise and leadership skills with our premium postgraduate degrees. Designed for professionals aiming for the top.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c2d76] mb-3">Explore Our PG Categories</h2>
          <div className="w-24 h-1 bg-[#3b60e4] mx-auto rounded-full"></div>
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
    <div className={`rounded-3xl p-8 shadow-sm h-full ${
      isYellow ? 'bg-[#ffc84b] text-black' : 'bg-[#3b60e4] text-white'
    }`}>
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 border-b border-black/10 pb-4">
        <div className={`p-3 rounded-full ${
          isYellow ? 'bg-black/10' : 'bg-white/20'
        }`}>
          <User size={24} className={isYellow ? 'text-black' : 'text-white'} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide">
          {course.title}
        </h3>
      </div>

      {/* List */}
      <ul className="space-y-4 px-2">
        {courseListArray.map((item, index) => (
          <li key={index} className="flex items-start gap-3 font-bold text-sm md:text-base">
            <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
              isYellow ? 'bg-black' : 'bg-white'
            }`}></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
