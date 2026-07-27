import React from 'react';
import bduGateImg from '../assets/Bharathithasan/image.png';

export default function BharathidasanCollaboration() {
  return (
    <section className="bg-white py-12 md:py-16 font-outfit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image Column */}
        <div className="w-full">
          <img 
            src={bduGateImg} 
            alt="Bharathidasan University Entrance Gate" 
            className="w-full h-auto rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* Right Content Column */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <span className="text-[#2ca785] font-extrabold text-lg md:text-xl block">
              Collaboration!
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2b6d] tracking-tight leading-tight">
              Association with Bharathidasan University
            </h2>
          </div>
          
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans font-medium">
            Bharathidasan University established in February 1982, and was named after the great revolutionary Tamil Poet, <span className="underline decoration-slate-400">Bharathidasan</span> The Centre for Distance Education (CDE) of Bharathidasan University (BDU) was established in the year 1992 to serve the students who could not enter the regular colleges for higher education. As the educational programmes offered and the degrees awarded through distance mode are on par with the regular mode, qualitatively there is a demand for the programmes offered by the CDE of Bharathidasan University.
          </p>
        </div>

      </div>
    </section>
  );
}
