import React from 'react';
import { ArrowRight } from 'lucide-react';
import BASE_URL from '../api.js';

export default function UniversityCourseCard({ course, onApplyClick }) {
  // Use absolute URL for images if not already absolute
  const imageUrl = course.image ? (course.image.startsWith('http') || course.image.startsWith('data:') ? course.image : `${BASE_URL}${course.image}`) : '';

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-4 font-sans flex flex-col h-full transition-shadow duration-300">
      {/* Image */}
      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gray-50">
        <img 
          src={imageUrl} 
          alt={course.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-1" style={{ color: '#a232f0' }}>
          {course.title}
        </h3>
        
        <div className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wide mb-6 flex-grow">
          {course.university !== 'Amity University' && course.description ? (
            <ul className="space-y-1">
              {course.description.split('|').filter(item => item.trim() !== '').map((item, index) => (
                <li key={index}>• {item.trim()}</li>
              ))}
            </ul>
          ) : (
            <p>{course.description}</p>
          )}
        </div>

        {/* Action Button */}
        <div>
          <button 
            onClick={() => onApplyClick && onApplyClick(course)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded text-sm font-medium transition-colors"
            style={{ 
              color: '#a232f0',
              border: '1px solid #e9d5ff', 
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#faf5ff';
              e.currentTarget.style.borderColor = '#d8b4fe';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#e9d5ff';
            }}
          >
            Apply NOW <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
