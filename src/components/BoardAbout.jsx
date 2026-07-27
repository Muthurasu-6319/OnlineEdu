import React from 'react';
import boardImage from '../assets/Alagappa-University/image.png';

export default function BoardAbout() {
  return (
    <section className="bg-[#e6f2ff] py-16 md:py-24 font-outfit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col space-y-6">
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans">
            The Board of Open Schooling and Skill Education (BOSSE), Sikkim, is an open schooling board that aims to cater to the varied academic needs of the divergent group of students up to pre-degree level including Secondary/Senior Secondary, skill and vocational education. BOSSE is open schooling education board in Sikkim, was established under Act No. 14 of 2020 of the Sikkim Legislative Assembly, passed on 21-09-2020, according to the Sikkim Act 2020 to promulgate and disseminate the open schooling education at state & national level
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
            src={boardImage} 
            alt="Board of Open Schooling and Skill Education" 
            className="w-full h-auto rounded-3xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}
