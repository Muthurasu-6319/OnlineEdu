import React from 'react';
import aboutImage from '../assets/dayananda university/image 3 (5).png';

export default function DayanandaAbout() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a304e]">
            About Dayananda Sagar University
          </h2>
          <p className="text-[#374151] font-medium leading-relaxed">
            Dayananda Sagar University (DSU) was established in 2014 under a Karnataka State Act, building on the legacy of Dayananda Sagar Institutions founded in the 1960s by late Sri R. Dayananda Sagar. Located near Harohalli, just 45 km from Bengaluru, the university’s modern 130-acre campus offers a scenic, pollution-free environment equipped for hands-on, experiential learning. DSU comprises eight distinct academic and research schools spanning Engineering, Commerce & Management, Computer Applications, Design, Law, Health Sciences, Journalism, and Basic Sciences.
          </p>
          <p className="text-[#374151] font-medium leading-relaxed">
            Designed for the digital era, DSU offers cutting-edge undergraduate and postgraduate programs that prepare students to become next-generation leaders and innovators. Students can specialize in high-demand fields such as Artificial Intelligence & Machine Learning, Data Science, Cyber Security, AI & Robotics, Product Design, and Game Design. Additionally, its advanced management programs provide specialized training in Business Analytics, Fintech, and AI to equip graduates for data-driven global leadership.
          </p>
          
          <div className="mt-6">
            <h3 className="text-xl font-bold text-[#2ca785] mb-4">Accolades</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-1">•</span>
                <span>NAAC A+ Accredited University</span>
              </li>
              <li className="flex items-start gap-3 text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-1">•</span>
                <span>Ranked #4 among new universities in Karnataka by KSURF</span>
              </li>
              <li className="flex items-start gap-3 text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-1">•</span>
                <span>Top Private University according to NIRF & QS I-Gauge (Rated for Teaching, Employability, and Innovation)</span>
              </li>
              <li className="flex items-start gap-3 text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-1">•</span>
                <span>Top Business School: Ranked #9 in Karnataka & #39 Nationally by IIRF; Top 5 B-School in Bangalore by Business World</span>
              </li>
              <li className="flex items-start gap-3 text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-1">•</span>
                <span>Top Engineering & Innovation: Ranked #1 Emerging Engineering Institute by Times of India; recognized for Innovation & Entrepreneurship by ARIIA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2">
          <img 
            src={aboutImage} 
            alt="About Dayananda University" 
            className="w-full h-auto rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
