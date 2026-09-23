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
            JAIN (Deemed-to-be University) in Bangalore is a leading educational destination recognized across India and globally for its illustrious history of nurturing talent.
          </p>
          <p className="text-[#374151] font-medium leading-relaxed">
            Promoted by the JAIN University Trust, the institution offers a vibrant academic environment focused on education, entrepreneurship, research, and sports.
          </p>
          <p className="text-[#374151] font-medium leading-relaxed">
            With six distinct faculties spanning Commerce, Creative Arts & Design, Engineering and Technology, Management, Humanities & Social Sciences, and Sciences across ten campuses, JAIN University empowers students through an open-minded, ever-evolving educational approach designed to foster resilience and career success.
          </p>
          
          <div className="mt-4 w-full">
            <h3 className="text-lg font-bold text-[#2ca785] mb-3">Accreditations / Rankings</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>Association of Indian Universities (AIU)</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>Association of Universities of Asia and the Pacific (AUAP)</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>Network of International Business and Economics Schools (NIBES)</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>Association of Commonwealth Universities (ACU)</strong></span>
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
