import React from 'react';
import aboutImage from '../assets/Andhra/image 3 (4).png';

export default function AndhraAbout() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a304e]">
            About Andhra University Online
          </h2>
          <p className="text-[#374151] font-medium leading-relaxed">
            Andhra University is one of India's established public universities, offering a wide range of undergraduate, postgraduate, and professional education programs. Through flexible learning options, students can pursue higher education while managing work and other commitments.
          </p>
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
