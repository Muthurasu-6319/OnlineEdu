import React from 'react';
import bharathidasanLogo from '../assets/About/image 11.png';
import alagappaLogo from '../assets/About/image 12.png';
import amityLogo from '../assets/About/image 13.png';
import boardLogo from '../assets/About/image 14.png';

export default function AboutPartnerships() {
  const partners = [
    { name: 'Bharathidasan University', logo: bharathidasanLogo },
    { name: 'Alagappa University', logo: alagappaLogo },
    { name: 'Amity University Online', logo: amityLogo },
    { name: 'Board of Open Schooling & Skill Education', logo: boardLogo },
  ];

  return (
    <section className="bg-white py-16 md:py-24 font-outfit">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col items-center">
        
        {/* Title & Description */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            <span className="text-[#1c2d76]">UNIVERSITY</span>{' '}
            <span className="text-[#2ca785]">PARTNERSHIPS</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
          </p>
        </div>

        {/* 2x2 Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-100 rounded-2xl p-6 flex items-center justify-center shadow-xs hover:shadow-md transition-shadow duration-300 min-h-[140px]"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-[80px] max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Text and Courses Details */}
        <div className="w-full max-w-4xl space-y-6 text-[#1c2d76]">
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans font-medium">
            We offer a wide range of Undergraduate, Postgraduate, Diploma, Polytechnic, Engineering, and School Education Programs through Distance Education, Online Learning, and Part-Time Study Modes. Our programs are designed to meet the evolving needs of today’s learners while maintaining high academic standards. VNET Distance Academy is associated with UGC-DEB approved and government-recognized universities, providing students with credible qualifications that are widely accepted for higher education, employment, and career growth.
          </p>

          <h3 className="text-xl font-bold text-[#1c2d76] pt-4">
            Our Academic Programs
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {/* Undergraduate Column */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-slate-700 text-sm md:text-base tracking-wide uppercase">
                Undergraduate Courses
              </h4>
              <ul className="list-disc list-inside text-slate-600 text-sm md:text-base font-sans font-medium space-y-1 pl-2">
                <li>B.A.</li>
                <li>B.Com.</li>
                <li>B.B.A.</li>
                <li>B.Sc.</li>
              </ul>
            </div>

            {/* Postgraduate Column */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-slate-700 text-sm md:text-base tracking-wide uppercase">
                Postgraduate Courses
              </h4>
              <ul className="list-disc list-inside text-slate-600 text-sm md:text-base font-sans font-medium space-y-1 pl-2">
                <li>M.A.</li>
                <li>M.Com.</li>
                <li>M.Sc.</li>
                <li>MBA and other career-oriented programs</li>
              </ul>
            </div>
          </div>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans font-medium pt-4">
            We also provide educational opportunities for students pursuing 8th Standard, 10th Standard, +1, and +2 through recognized open schooling systems, helping learners continue or restart their education with confidence.
          </p>
        </div>

      </div>
    </section>
  );
}
