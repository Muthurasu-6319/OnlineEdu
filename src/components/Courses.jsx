import React from 'react';
import { Heart } from 'lucide-react';
import img21 from '../assets/Course-Img/image 21.png';
import img22 from '../assets/Course-Img/image 22.png';
import img23 from '../assets/Course-Img/image 23.png';
import img24 from '../assets/Course-Img/image 24.png';
import img25 from '../assets/Course-Img/image 25.png';
import img26 from '../assets/Course-Img/image 26.png';

export default function Courses({ toggleLike, wishlist, searchQuery, setSearchQuery, activeFilter, setActiveFilter }) {
  const courseData = [
    {
      title: 'UG DEGREE',
      category: 'UG',
      students: '5,957 Students',
      duration: '01h 49m',
      image: img21,
      link: '#ug-courses'
    },
    {
      title: 'PG DEGREE',
      category: 'PG',
      students: '5,957 Students',
      duration: '01h 49m',
      image: img22,
      link: '#pg-courses'
    },
    {
      title: 'MBA Specializations',
      category: 'PG',
      students: '5,957 Students',
      duration: '01h 49m',
      image: img23,
      link: '#alagappa-mba-specializations'
    },
    {
      title: 'MCA Specializations',
      category: 'PG',
      students: '5,957 Students',
      duration: '01h 49m',
      image: img25,
      link: '#amity-mca-msc-specializations'
    },
    {
      title: '10th & 12th Board Exams',
      category: 'BOARD',
      students: '5,957 Students',
      duration: '01h 49m',
      image: img26,
      link: '#board'
    },
    {
      title: 'All Science Groups',
      category: 'SCIENCE',
      students: '5,957 Students',
      duration: '01h 49m',
      image: img24,
      link: '#bharathidasan-pg-science'
    }
  ];

  const categories = [
    { label: 'All Courses', value: 'ALL' },
    { label: 'UG Degrees', value: 'UG' },
    { label: 'PG Degrees', value: 'PG' },
    { label: 'Board Exams', value: 'BOARD' },
    { label: 'Science', value: 'SCIENCE' }
  ];

  const filteredCourses = courseData.filter(course => {
    const matchesFilter = activeFilter === 'ALL' || course.category === activeFilter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="bg-slate-50 py-16 xl:py-24 font-outfit" id="course">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl xl:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured <span className="text-[#2ca785]">Courses</span>
          </h2>
          <p className="text-slate-500 mt-2 text-sm xl:text-base">Explore top university degrees and certifications online</p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === cat.value
                  ? 'bg-[#2ca785] text-white shadow-md shadow-emerald-100'
                  : 'bg-white text-slate-600 hover:bg-slate-100/70 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 shadow-xs">
            <p className="text-lg text-slate-500 font-medium mb-1">No courses found</p>
            <p className="text-sm text-slate-400">Try adjusting your filters or search keywords.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => {
              const isInWishlist = wishlist.some(item => item.title === course.title);
              return (
                <a 
                  key={index} 
                  href={course.link}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full group"
                >
                  
                  {/* Card Image Container */}
                  <div className="w-full h-56 bg-slate-100 relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Course Info Body */}
                  <div className="p-6 flex flex-col flex-grow">
                    
                    {/* Stats Row */}
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-400 mb-3">
                      <span>{course.students}</span>
                      <span>{course.duration}</span>
                    </div>

                    {/* Course Title */}
                    <h3 className="text-lg font-bold text-[#1e293b] group-hover:text-[#2ca785] transition-colors duration-200 mb-6 line-clamp-1">
                      {course.title}
                    </h3>

                    {/* Footer Section */}
                    <div className="mt-auto pt-4 border-t border-gray-50 flex justify-end">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleLike(course);
                        }}
                        className={`p-2.5 rounded-full transition-all duration-200 transform active:scale-95 border cursor-pointer ${
                          isInWishlist
                            ? 'bg-rose-50 text-rose-600 border-rose-100'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-400 border-slate-100'
                        }`}
                        title={isInWishlist ? 'Unlike' : 'Like'}
                      >
                        <Heart size={18} className={isInWishlist ? 'fill-rose-600 text-rose-600' : 'text-slate-400'} />
                      </button>
                    </div>

                  </div>

                </a>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
