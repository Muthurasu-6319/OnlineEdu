import React from 'react';
import aboutImage from '../assets/dayananda university/image 3 (5).png';

export default function DayanandaAbout() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a304e]">
            About Dayananda University Online
          </h2>
          <p className="text-[#374151] font-medium leading-relaxed">
            DSU Online provides learners with a blend of traditional teaching-learning experience along with innovative techniques to enhance the process of learning. By integrating Information & Communication Technology, DSU Online elevates learning to meet the ever-evolving demands of the rapidly changing industry requirements. It fosters a collaborative learning environment, with a dedicated faculty to ensure that students achieve their full potential. The platform creates learning opportunities for students and enables them to forge careers in the corporate sector, public and social fields, and research.
          </p>
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
