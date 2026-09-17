import React from 'react';
import aboutImage from '../assets/Manipal/image 3 (2).png';

export default function ManipalAbout() {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Text */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold text-[#111827]">
            About Manipal University Online
          </h2>
          <p className="text-[13px] font-medium text-slate-800 leading-[1.8] text-justify tracking-tight">
            Manipal University Online offers flexible, industry-focused online undergraduate and postgraduate programs designed for students, working professionals, and learners looking to advance their careers. With digital learning resources, interactive classes, expert faculty, and career-oriented curriculum, students can pursue higher education from anywhere while balancing their personal and professional commitments.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <img 
            src={aboutImage} 
            alt="Manipal Building" 
            className="w-full h-auto object-cover rounded-[24px] shadow-sm" 
          />
        </div>
      </div>
    </section>
  );
}
