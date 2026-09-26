import React from 'react';
import boardImage from '../assets/nios/about_image.png';

export default function NiosAbout() {
  return (
    <section className="bg-[#e6f2ff] py-16 md:py-24 font-outfit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col space-y-6">
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans">
            The National Institute of Open Schooling (NIOS) is an autonomous institution under the Ministry of Education, Government of India. It caters to the varied academic needs of students up to the pre-degree level including Secondary and Senior Secondary education. NIOS is the largest open schooling system in the world, providing a flexible, affordable, and fully recognized alternative to formal schooling for millions of learners nationwide.
          </p>
          <a 
            href="/#course"
            className="bg-[#48b0a9] hover:bg-[#3ba29b] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 w-fit text-center shadow-md hover:shadow-teal-100/50 text-sm"
          >
            View courses
          </a>
        </div>

        {/* Right Image Column */}
        <div className="w-full">
          <img 
            src={boardImage} 
            alt="National Institute of Open Schooling" 
            className="w-full h-auto rounded-3xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}
