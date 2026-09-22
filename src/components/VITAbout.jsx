import React from 'react';
import aboutImage from '../assets/VIT/image 3 (1).png';

export default function VITAbout() {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Text */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold text-[#111827]">
            About Vellore Institute of Technology (VIT)
          </h2>
          <p className="text-[13px] font-medium text-slate-800 leading-[1.8] text-justify tracking-tight">
            Vellore Institute of Technology (VIT) is a top-ranked private deemed university based in Vellore, Tamil Nadu, India. Established in 1984, the institution offers a wide array of undergraduate, postgraduate, integrated, and doctoral programs across engineering, science, management, architecture, and humanities.
          </p>
          <p className="text-[13px] font-medium text-slate-800 leading-[1.8] text-justify tracking-tight">
            Recognized as an Institution of Eminence by the Government of India, VIT is accredited with a NAAC 'A++' Grade and consistently ranks among the top engineering and research universities in India (ranked 16th in Engineering and 14th in University Category by NIRF). The university is renowned for its global partnerships, advanced research centers, flexible credit system, and strong placement records with major national and international recruiters.
          </p>
          
          <div className="mt-4">
            <h3 className="text-lg font-bold text-[#2ca785] mb-3">Accreditations / Rankings</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>NAAC A++ Accredited</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>NIRF Rankings:</strong> #14 in University Category, #14 in Research, #16 in Engineering, #21 in Overall Category</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>Shanghai ARWU:</strong> Top 2 in India (501–600 Globally)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>QS World University Rankings:</strong> 119th globally in Engineering & Technology</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <img 
            src={aboutImage} 
            alt="VIT Building" 
            className="w-full h-auto object-cover rounded-[24px] shadow-sm" 
          />
        </div>
      </div>
    </section>
  );
}
