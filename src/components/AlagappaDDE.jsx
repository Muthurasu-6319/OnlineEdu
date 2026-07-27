import React from 'react';
import alagappaFlagImg from '../assets/Alagappa-University/Rectangle 20 (2).png';

export default function AlagappaDDE() {
  return (
    <section className="bg-[#e6f2ff] py-16 md:py-24 font-outfit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col space-y-6 md:col-span-7">
          <div className="space-y-2">
            <span className="text-[#2ca785] font-bold text-lg block">
              Collaboration!
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2b6d] tracking-tight leading-tight">
              Association with Alagappa University
            </h2>
          </div>
          
          <div className="text-slate-600 text-sm leading-relaxed space-y-4 font-sans">
            <p>
              As per UGC-DEB Regulations 2020, the DDE was renamed as Centre for Distance and Online Education (CDOE). Under CDOE, both Open & Distance Learning (ODL) and Online Learning (OL) wings are in operation. Distance Education
            </p>
            <p>
              The Directorate of Distance Education was established in the University during the year 1992. The Directorate offers Under Graduate and Post Graduate Programmes in the disciplines of Arts, Science, Education and Management.
            </p>
            <p>
              The Directorate offers various innovative, job-oriented and socially relevant academic programmes in the field of Arts, Science, Education and Management. It has an excellent network of many Learning Centres for providing effective service to the student community.
            </p>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="w-full md:col-span-5">
          <img 
            src={alagappaFlagImg} 
            alt="Alagappa University Flag and Main Building" 
            className="w-full h-auto rounded-[32px] shadow-md object-cover"
          />
        </div>

      </div>
    </section>
  );
}
