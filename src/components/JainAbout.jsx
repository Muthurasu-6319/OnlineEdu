import React from 'react';
import aboutImage from '../assets/Jain/image 3 (9).png';

export default function JainAbout() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a304e]">
            About JAIN (Deemed-to-be University)
          </h2>
          <p className="text-[#374151] font-medium leading-relaxed">
            JAIN (Deemed-to-be University) Centre for Distance and Online Education offers career-focused, globally recognized undergraduate and postgraduate degree programs designed for ambitious students and working professionals.
          </p>
          <p className="text-[#374151] font-medium leading-relaxed">
            Accredited with an A++ grade by NAAC and entitled by UGC-DEB, our programs feature a 100% flexible self-paced learning management system (LMS), live weekend masterclasses, and dedicated placement support—enabling learners to elevate their careers anytime, anywhere without interrupting their professional journey.
          </p>
          
          <div className="mt-4 w-full">
            <h3 className="text-lg font-bold text-[#2ca785] mb-3">Accreditations / Rankings</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>NAAC A++ Grade</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>UGC-DEB Entitled</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>NIRF Top 100</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>AICTE Approved</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>QS World Ranked</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>AIU Member</strong></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2">
          <img 
            src={aboutImage} 
            alt="About Jain University" 
            className="w-full h-auto rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
