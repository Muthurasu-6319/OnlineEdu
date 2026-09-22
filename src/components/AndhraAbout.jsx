import React from 'react';
import aboutImage from '../assets/Andhra/image 3 (4).png';

export default function AndhraAbout() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a304e]">
            About Andhra University - Online Degree Programs
          </h2>
          <p className="text-[#374151] font-medium leading-relaxed">
            Andhra University, established in 1926, boasts nearly a century of academic excellence. Re-accredited with a prestigious NAAC 'A++' Grade and ranked 23rd in the NIRF University Category, the institution offers top-tier higher education. Through its dedicated digital distance-learning platform, Andhra University provides UGC-entitled online postgraduate degree programs—including MBA, MCA, and M.A. in Sociology.
          </p>
          <p className="text-[#374151] font-medium leading-relaxed">
            Designed specifically for working professionals and learners needing flexibility, these online programs combine live interactive lectures, 24/7 access to learning resources via a dedicated LMS, and networking opportunities with industry experts and faculty. The curriculum equips students with practical domain expertise while matching the academic rigor of traditional on-campus degrees.
          </p>
          
          <div className="mt-4 w-full">
            <h3 className="text-lg font-bold text-[#2ca785] mb-3">Accreditations / Rankings</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>NIRF Rank 23</strong> (University Category)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>NAAC A++ Accredited</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>UGC-Entitled</strong> Online Degree Programs</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>ISO 9001:2015 Certified</strong></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2">
          <img 
            src={aboutImage} 
            alt="About Andhra University" 
            className="w-full h-auto rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
