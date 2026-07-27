import React from 'react';
import bduImage from '../assets/Alagappa-University/image.png';

export default function BharathidasanAbout() {
  return (
    <section className="bg-[#e6f2ff] py-16 md:py-24 font-outfit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2b6d] tracking-tight">
            Course Offerd
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans font-medium">
            Bharathidasan University is a reputed State Government University located in Karaikudi, Tamil Nadu. Known for its commitment to academic excellence, quality education, innovation, and research, the university provides a supportive learning environment that helps students enhance their knowledge, skills, and career opportunities
          </p>
          <a 
            href="#course"
            className="bg-[#48b0a9] hover:bg-[#3ba29b] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 w-fit text-center shadow-md hover:shadow-teal-100/50 text-sm"
          >
            View courses
          </a>
        </div>

        {/* Right Image Column */}
        <div className="w-full">
          <img 
            src={bduImage} 
            alt="Bharathidasan University Laptop Classroom" 
            className="w-full h-auto rounded-3xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}
