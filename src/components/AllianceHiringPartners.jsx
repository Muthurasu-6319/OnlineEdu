import React from 'react';

export default function AllianceHiringPartners() {
  const partners = [
    'Aditya Birla', 'Altair', 'CavinKare', 'Cafe Coffee Day', 
    'Exide', 'CBRE', 'GoMMT', 'FactSet', 'Digit'
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1f2937] mb-4 tracking-tight">
            Our Placement & Hiring Partners
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed font-medium">
            Collaborating with leading companies to create career opportunities for skilled and industry-ready professionals.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 shadow-sm px-6 py-3 rounded-xl hover:shadow-md hover:border-[#2ca785] transition-all cursor-default flex items-center justify-center min-w-[140px]"
            >
              <span className="font-bold text-slate-700">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
