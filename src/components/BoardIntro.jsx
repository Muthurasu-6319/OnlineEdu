import React from 'react';
import bannerImg from '../assets/10th&12th/image 10.png';

export default function BoardIntro() {
  return (
    <section className="bg-white py-16 md:py-24 font-outfit">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Top Headings */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1c2d76] tracking-tight">
            Class 10th & 12th Open School Admission 2025
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-extrabold text-[#2ca785] tracking-wide">
            Secure Your Future with vnet distance education
          </p>
        </div>

        {/* Center Banner Image */}
        <div className="w-full mb-12">
          <img 
            src={bannerImg} 
            alt="BOSSE Class 10th & 12th Admission Open Banner" 
            className="w-full h-auto rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* Bottom Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#1c2d76]">
            What is Open Schooling?
          </h3>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed font-sans font-medium">
            Open Schooling is a flexible learning system designed for students who cannot attend regular school. Through recognized boards like NIOS (National Institute of Open Schooling) and BOSSE (Board of Open Schooling & Skill Education), you can study at your own pace and still earn a government-recognized certificate for Class 10th (Secondary) or Class 12th (Senior Secondary).
          </p>
        </div>

      </div>
    </section>
  );
}
