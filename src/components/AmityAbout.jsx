import React from 'react';
import amityCampusImg from '../assets/Amity/Rectangle 20 (4).png';

export default function AmityAbout() {
  return (
    <section className="bg-[#e6f2ff] py-16 md:py-24 font-outfit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image Column */}
        <div className="w-full">
          <img 
            src={amityCampusImg} 
            alt="Amity University Campus" 
            className="w-full h-auto rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* Right Content Column */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2b6d] tracking-tight">
            Amity University ABOUT US
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans font-medium">
            Amity is a leading education provider in India with 29 campuses across India and offers 240 programmes. It has more than 4,000 faculty and 95,000 students studying in various disciplines from school to Post- Doctoral levels. Its campuses are spread across National and International locations such as London, New York, Singapore, San Francisco Dubai, Romania, Taiwan and Mauritius.a Amity has to its credit prestigious National and International recognitions and accreditations which are the testimony of Amity's adherence to global standards. It has received the ACBSP (USA), a global business accreditation for management degrees. Amity University, Noida which became the first Indian University to become the IET's Academic Partner and to receive the prestigious IET UK Accreditation for its B.Tech programmes, is now accredited with Grade 'A' by National Assessment & Accreditation Council (NAAC) India
          </p>
        </div>

      </div>
    </section>
  );
}
