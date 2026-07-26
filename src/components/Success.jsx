import React from 'react';

export default function Success() {
  const stats = [
    { value: '15K+', label: 'Students' },
    { value: '75%', label: 'Total success' },
    { value: '35', label: 'Main questions' },
    { value: '26', label: 'Chief experts' },
    { value: '16', label: 'Years of experience' },
  ];

  return (
    <section className="bg-white py-16 xl:py-24 relative overflow-hidden font-outfit">
      
      {/* Floating decorative light blue outline circle on the left */}
      <div 
        className="absolute left-10 xl:left-24 top-[20%] w-16 h-16 xl:w-20 xl:h-20 rounded-full border-[10px] border-sky-100/60 pointer-events-none hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Heading */}
        <h2 className="text-3xl xl:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          Our Success
        </h2>
        <p className="text-sm xl:text-base text-slate-500 font-medium tracking-wide mb-12 xl:mb-16">
          Vnet Bharathidasn University at a Glance
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 items-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl xl:text-5xl font-extrabold text-[#2ca785] tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-sm xl:text-base text-slate-500 font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
