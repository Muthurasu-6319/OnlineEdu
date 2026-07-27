import React from 'react';
import { FileText, Calendar, Users } from 'lucide-react';

export default function Gateway() {
  const cards = [
    {
      title: 'Recognized Courses',
      text: 'Vnet Distance Education offers 10th, 12th, UG, and PG programs through BOSSE, NIOS, and top Indian universities.',
      icon: <FileText className="w-6 h-6 text-white" />,
      iconBg: 'bg-[#5b73e8]'
    },
    {
      title: 'Learn from Home',
      text: 'Study at your own pace with flexible, home-based learning designed for working professionals and re-entry students.',
      icon: <Calendar className="w-6 h-6 text-white" />,
      iconBg: 'bg-[#00c5a2]'
    },
    {
      title: 'Easy EMI Options',
      text: 'Affordable education is made possible with convenient EMI plans for all programs.',
      icon: <Users className="w-6 h-6 text-white" />,
      iconBg: 'bg-[#19b5fe]'
    }
  ];

  return (
    <section className="bg-white py-16 xl:py-24 px-4 sm:px-6 lg:px-8 font-outfit">
      
      {/* Blue-to-purple gradient container card */}
      <div className="max-w-7xl mx-auto rounded-[32px] custom-gradient-bg text-white relative overflow-hidden px-6 py-16 md:px-12 md:py-20 shadow-2xl">
        
        {/* Nested decorative arches on the left edge */}
        <div className="absolute left-[-60px] top-[15%] pointer-events-none opacity-20 hidden lg:block" style={{ width: '180px', height: '220px' }}>
          <div className="absolute inset-0 border-[3px] border-white rounded-r-full" />
          <div className="absolute inset-4 border-[3px] border-white rounded-r-full" />
          <div className="absolute inset-8 border-[3px] border-white rounded-r-full" />
        </div>

        {/* Header content */}
        <div className="text-center relative z-10 max-w-4xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-indigo-200 uppercase block mb-3">
            Your Gateway to Global Education
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            Comprehensive Overseas Education Services & Solutions
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-8 relative z-10">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 pt-12 text-slate-800 relative flex flex-col justify-start items-center text-center shadow-lg border border-white/10 hover:shadow-xl transition-shadow duration-300"
            >
              
              {/* Floating top circular icon */}
              <div className={`absolute top-0 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${card.iconBg}`}>
                {card.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-2.5 font-outfit">
                {card.title}
              </h3>

              {/* Card Text */}
              <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[240px]">
                {card.text}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
