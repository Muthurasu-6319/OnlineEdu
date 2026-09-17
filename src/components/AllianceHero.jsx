import React from 'react';
import { Download } from 'lucide-react';
import heroImage from '../assets/allaince/image 8 (5).png';
import allianceLogo from '../assets/allaince/au-logo 1.png';

export default function AllianceHero({ onEnquiryClick }) {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Image with overlaid Logo */}
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl relative group">
          <img 
            src={heroImage} 
            alt="Alliance University Campus" 
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlaid Logo */}
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm z-10 border border-white/40">
            <img src={allianceLogo} alt="Alliance University Logo" className="h-12 object-contain" />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
          <div className="flex items-center gap-4 mb-2 flex-wrap">
             <div className="font-bold text-blue-800 border-2 border-blue-800 px-3 py-1 rounded">NIRF</div>
             <div className="font-bold text-orange-600 border-2 border-orange-600 px-3 py-1 rounded flex items-center gap-2">AICTE <span className="text-sm">Approved</span></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1f2937] leading-tight">
            NAAC A++ Acrediated <br />
            Online Degree From
          </h1>
          
          <div className="bg-[#00a8ff] text-white px-6 py-3 font-bold text-xl rounded shadow-md inline-block">
            Alliance University Online
          </div>
          
          <p className="text-slate-500 text-sm leading-relaxed max-w-lg font-medium">
            RANKING AND RECOGNITION -Bangalore university Global Rankings - Bangalore Best Institution of the world in the Engineering and Technology
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button 
              onClick={onEnquiryClick}
              className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3 rounded text-sm font-bold shadow-lg transition-colors"
            >
              Brochure
            </button>
            <button 
              onClick={onEnquiryClick}
              className="border border-[#a855f7] text-[#a855f7] hover:bg-purple-50 px-8 py-3 rounded text-sm font-bold flex items-center gap-2 transition-colors"
            >
              <Download size={16} /> Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
