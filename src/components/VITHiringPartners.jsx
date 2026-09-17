import React from 'react';

export default function VITHiringPartners() {
  const partners = [
    { name: 'TCS', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tata_Consultancy_Services_old_logo.svg' },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
    { name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
    { name: 'HCL', logo: 'https://www.logo.wine/a/logo/HCL_Technologies/HCL_Technologies-Logo.wine.svg' },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-white">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/40 via-transparent to-cyan-50/40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1f2937] mb-4 tracking-tight">
            Our Hiring Partners
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed font-medium">
            Collaborating with leading companies to create career opportunities for skilled and industry-ready professionals.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 w-full items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center w-full h-16 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 cursor-pointer opacity-80 hover:opacity-100">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="max-w-[120px] max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
