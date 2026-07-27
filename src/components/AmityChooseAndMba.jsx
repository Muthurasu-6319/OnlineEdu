import React from 'react';
import { FileText } from 'lucide-react';
import amityBuildingBanner from '../assets/Amity/Group 1000014996.png';

export default function AmityChooseAndMba() {
  const chooseCards = [
    { title: 'FLEXIBLE LEARNING' },
    { title: 'MOCKTEST & INTERVIEW PREPARATION' },
    { title: 'RECORDED VIDEO SECTION' },
    { title: '100% PLACEMENT ASSISTANCE' },
    { title: '100% PLACEMENT ASSISTANCE' },
    { title: '600+ TOP HIRING PARTNERS' }
  ];

  return (
    <>
      {/* Why Choose Section */}
      <section className="bg-gradient-to-br from-[#1d3cbd] to-[#4c2bb8] py-20 md:py-28 font-outfit text-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              WHY CHOOSE Amity University
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 pt-6">
            {chooseCards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-8 pt-12 pb-10 shadow-lg relative flex flex-col justify-center items-center text-center hover:scale-[1.02] transition-transform duration-300 min-h-[140px]"
              >
                {/* Floating Circle Icon */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#4d69ec] text-white rounded-full flex items-center justify-center shadow-md">
                  <FileText className="w-5 h-5" />
                </div>

                {/* Card Title */}
                <h3 className="text-sm md:text-base font-extrabold text-[#1c2d76] tracking-wide uppercase leading-snug">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MBA Specialisations Section */}
      <section className="bg-[#f4f8fc] py-16 md:py-24 font-outfit">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          
          {/* Centered Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-[#1c2d76]">MBA </span>
              <span className="text-[#2ca785]">SPECIALISATIONS</span>
            </h2>
          </div>

          {/* Description Paragraph */}
          <p className="text-slate-600 text-sm md:text-base leading-relaxed text-center font-sans font-medium mb-12 max-w-4xl mx-auto">
            Amity University Online is a step by Amity, to offer elective online learning for people seeking to improve competency, build expertise, and enhance skills, across diverse disciplines and career paths. Amity's online MBA program is a globally accredited two-year (4 semesters) course with 12 specialization areas and in-built project work designed to prepare graduates for varied career opportunities in business administration. Amity's online degrees are the most preferred online degrees by employers and recruiters globally.
          </p>

          {/* Building Banner Image */}
          <div className="w-full">
            <img 
              src={amityBuildingBanner} 
              alt="Amity University Campus Building Modern Facade" 
              className="w-full h-auto rounded-3xl shadow-lg object-cover"
            />
          </div>

        </div>
      </section>
    </>
  );
}
