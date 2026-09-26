import React from 'react';
import { Download } from 'lucide-react';
import vitHeroBg from '../assets/VIT/About Picture & social Media.png';
import nirfLogo from '../assets/VIT/image 2 (1).png';
import aicteLogo from '../assets/VIT/aicte_rectangle 1.png';

export default function VITHero({ onEnquiryClick }) {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Image */}
        <div className="lg:w-1/2 w-full">
          <img src={vitHeroBg} alt="VIT University Campus" className="w-full h-auto object-cover shadow-sm" />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6 items-start">
          {/* Logos */}
          <div className="flex items-center gap-6 mb-2">
            <img src={nirfLogo} alt="NIRF Logo" className="h-12 object-contain" />
            <img src={aicteLogo} alt="AICTE Logo" className="h-16 object-contain" />
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-2 w-full">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-[#1f2937] leading-tight">
              NAAC A++ Accredited <br />
              Online Degree From
            </h1>
            <div className="bg-[#00b4ff] inline-block px-4 py-3 mt-2 self-start">
              <h2 className="text-2xl lg:text-[28px] font-extrabold text-black leading-tight">
                Vellore Institute <br /> of Technology
              </h2>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-[11px] lg:text-xs font-semibold text-slate-500 uppercase tracking-widest leading-relaxed mt-4">
            RANKING AND RECOGNITION · VIT National & <br />
            Global Rankings · VIT 119 Best Institution of <br />
            the world in the Engineering and Technology
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-4">
            <button 
              onClick={onEnquiryClick}
              className="bg-[#a855f7] hover:bg-[#9333ea] text-white font-medium px-8 py-2 rounded shadow-sm text-sm transition-colors"
            >
              Enquire
            </button>
            <button className="border border-[#a855f7] text-[#a855f7] hover:bg-[#a855f7]/10 font-medium px-6 py-2 rounded shadow-sm text-sm flex items-center gap-2 transition-colors">
              <Download size={16} />
              Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
