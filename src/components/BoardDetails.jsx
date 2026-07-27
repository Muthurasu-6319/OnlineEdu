import React from 'react';
import studentsImg from '../assets/10th&12th/Rectangle 20 (3).png';

export default function BoardDetails() {
  return (
    <section className="bg-white py-16 md:py-24 font-outfit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image Column */}
        <div className="w-full order-2 md:order-1">
          <img 
            src={studentsImg} 
            alt="Open School Students studying together" 
            className="w-full h-auto rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* Right Content Column */}
        <div className="flex flex-col space-y-6 order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2b6d] tracking-tight leading-tight">
            Open School Admission 2026 for Class 10th & 12th – Start Your Future with
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans font-medium">
            Education is the foundation of a successful life. But sometimes, students face challenges – failing in exams, dropping out due to personal reasons, or missing school because of work or responsibilities. Does that mean their dreams end? Absolutely not. Thanks to Open Schooling, every student gets a second chance to complete their Class 10th and 12th education — and with Edusolver, the journey becomes easy, stress-free, and future-ready.
          </p>
        </div>

      </div>
    </section>
  );
}
