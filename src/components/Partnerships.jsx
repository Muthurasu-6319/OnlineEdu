import React from 'react';
import rectangle20 from '../assets/Rectangle 20.png';
import alagappaPartnerImg from '../assets/Alagappa-University/Rectangle 20 (1).png';
import amityPartnerImg from '../assets/Amity/Rectangle 20 (4).png';

export default function Partnerships() {
  const partners = [
    {
      name: 'Bharathidasan University',
      image: rectangle20
    },
    {
      name: 'Alagappa University',
      image: alagappaPartnerImg
    },
    {
      name: 'Amity University',
      image: amityPartnerImg
    }
  ];

  return (
    <section className="bg-[#eef5fc] py-16 xl:py-24 px-4 sm:px-6 lg:px-8 font-outfit">
      <div className="max-w-7xl mx-auto">

        {/* Title & Description */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl xl:text-4xl font-extrabold tracking-tight mb-6">
            <span className="text-[#153fb4]">UNIVERSITY</span>{' '}
            <span className="text-[#2ca785]">PARTNERSHIPS</span>
          </h2>
          <p className="text-sm xl:text-base text-slate-500 font-medium leading-relaxed">
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
          </p>
        </div>

        {/* Partnerships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="relative h-64 sm:h-72 md:h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between p-8 cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={partner.image}
                alt={partner.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-10" />

              {/* Top content: University Name Label */}
              <div className="relative z-20">
                <span className="text-xs font-bold tracking-widest text-[#2ca785] uppercase block mb-1">
                  PARTNER CAMPUS
                </span>
                <h3 className="text-xl font-bold text-white leading-snug drop-shadow-sm">
                  {partner.name}
                </h3>
              </div>

              {/* Centered Button Overlay - Shows on Hover */}
              <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px]">
                <a 
                  href="#course" 
                  className="bg-[#2ca785] hover:bg-[#238a6d] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 transform scale-90 group-hover:scale-100 cursor-pointer text-center"
                >
                  View Course
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

