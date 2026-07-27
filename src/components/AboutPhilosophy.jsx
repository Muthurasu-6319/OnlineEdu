import React from 'react';
import philosophyImage from '../assets/About/Rectangle 20 (7).png';

export default function AboutPhilosophy() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 font-outfit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Left Text Column */}
        <div className="flex flex-col space-y-6 text-[#1c2d76]">
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans font-medium">
            We believe that education should never be limited by age, location, or personal commitments. Whether you are a working professional, entrepreneur, homemaker, school dropout, or a student looking to pursue higher education, VNET Distance Academy provides the right guidance to help you build a successful future.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans font-medium">
            Our academy offers admission guidance for Undergraduate (UG), Postgraduate (PG), Open Schooling, Diploma, Polytechnic, and Engineering programs through recognized universities and institutions. From course selection and admissions to academic support, our experienced counselors are committed to assisting students at every stage of their educational journey.
          </p>
        </div>

        {/* Right Image Column */}
        <div className="w-full">
          <img 
            src={philosophyImage} 
            alt="Graduate holding degree" 
            className="w-full h-auto rounded-3xl shadow-lg object-cover hover:scale-[1.01] transition-transform duration-300"
          />
        </div>

      </div>
    </section>
  );
}
