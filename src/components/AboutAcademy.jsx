import React from 'react';
import academyImage from '../assets/About/Rectangle 8710.png';

export default function AboutAcademy() {
  return (
    <section className="bg-white py-16 md:py-24 font-outfit">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        
        {/* Title Heading with custom underline styling */}
        <div className="relative mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1c2d76] tracking-tight uppercase">
            About Us Vnet Distance Academy
          </h2>
          <div className="mt-3 mx-auto w-40 h-[4px] bg-blue-500 rounded-full relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-xs" />
          </div>
        </div>

        {/* Intro Paragraph */}
        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans max-w-3xl mb-12">
          VNET Distance Academy is a trusted educational guidance and admission support center dedicated to making quality education accessible, flexible, and career-oriented for students from all walks of life. With branches in Saravanampatti (Coimbatore), Gandhipuram (Coimbatore), and Tiruppur, we have been helping students achieve their academic goals through recognized distance, online, and part-time education programs.
        </p>

        {/* Main Banner Image */}
        <div className="w-full mb-12 rounded-3xl overflow-hidden shadow-lg border border-slate-100">
          <img 
            src={academyImage} 
            alt="Students collaborating at VNET Distance Academy" 
            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Highlight Card containing the core message */}
        <div className="w-full bg-[#ebf5ff] rounded-2xl p-6 sm:p-8 md:p-10 border border-blue-100/50 shadow-xs text-left">
          <p className="text-[#1c2d76] text-sm md:text-base leading-relaxed font-sans font-medium">
            VNET Distance Academy is a trusted educational guidance and admission support center dedicated to making quality education accessible, flexible, and career-oriented for students from all walks of life. With branches in Saravanampatti (Coimbatore), Gandhipuram (Coimbatore), and Tiruppur, we have been helping students achieve their academic goals through recognized distance, online, and part-time education programs.
          </p>
        </div>

      </div>
    </section>
  );
}
