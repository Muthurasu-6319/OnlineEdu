import React from 'react';
import aboutImage from '../assets/allaince/image 3 (8).png';

export default function AllianceAbout() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a304e]">
            About Alliance University Online
          </h2>
          <p className="text-[#374151] font-medium leading-relaxed">
            We began with a simple but powerful vision: to build a place where education opens doors to growth, discovery, and leadership. From a pioneering business school in 1997, we evolved into South India's first private university in 2010 — established under Karnataka Act No 34 and recognised by the UGC.
            <br/><br/>
            What followed was not expansion, but transformation. A single school grew into a dynamic, multidisciplinary university known for academic excellence, global perspectives, and a deep commitment to holistic development.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2">
          <img 
            src={aboutImage} 
            alt="About Alliance University" 
            className="w-full h-auto rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
