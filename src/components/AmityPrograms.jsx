import React from 'react';
import { User } from 'lucide-react';

export default function AmityPrograms({ onEnquiryClick }) {
  const col1 = [
    {
      title: 'UG ARTS & HUMANITIES',
      theme: 'yellow',
      items: [
        'BA vernacular (TAMIL)',
        'BA English',
        'BA Pol Science',
        'BA Economics',
        'BA Sociology',
        'BA Journalism & Mass Communication'
      ]
    },
    {
      title: 'UG COMMERCE',
      theme: 'blue',
      items: [
        'B.COM',
        'B.COM (INT NAT FIN & ACCOUNTING)',
        'B.COM (HONOURS)'
      ]
    },
    {
      title: 'UG MANAGEMENT',
      theme: 'yellow',
      items: [
        'BBA',
        'BBA (DATA ANALYTICS)',
        'BBA (BUSSINESS ANALYTICS)'
      ]
    },
    {
      title: 'MBA WITH SPECIALIZATION',
      theme: 'blue',
      items: [
        'MBA',
        'MBA (INTERNATIONAL FINANCE)',
        'MBA (DUAL SPECIALIZATION)',
        'MBA (HOSPITAL & HEALTHCARE MANAGEMENT)',
        'MBA (GENERAL MANAGEMENT)',
        'MBA (BUSINESS ANALYTICS)',
        'MBA (DATA SCIENCE)',
        'MBA (DIGITAL MARKETING MANAGEMENT)'
      ]
    }
  ];

  const col2 = [
    {
      title: 'UG COMPUTER APPLICATION',
      theme: 'blue',
      items: [
        'BCA',
        'BCA (DATA ENGINEERING) (HCL)',
        'BCA( SOFTWARE ENGINEERING) (HCL)',
        'BCA (CLOUD AND SECURITY)',
        'BCA (DATA ANALYTICS)',
        'BCA (APPLIED DATA)',
        'BCA (FINANCIAL TECH & AI)'
      ]
    },
    {
      title: 'MCA/MSC(CS) WITH SPECIALIZATION',
      theme: 'yellow',
      items: [
        'MCA',
        'MCA (DATA ENGINEERING)',
        'MCA( SOFTWARE ENGINEERING)',
        'MCA (CLOUD AND SECURITY)',
        'MCA (DATA ANALYTICS)',
        'MCA (CYBER SECURITY) (HCL TECH)',
        'MCA (FINANCIAL TECH & AI)',
        'MSC (DATA SCIENCE)',
        'MCA (MACHINE LEARNING) (TCS ION)',
        'MCA (AR & VR) (TCS ION)',
        'MSC IT',
        'MSC EVS'
      ]
    },
    {
      title: 'PG ARTS & COMMERCE',
      theme: 'yellow',
      items: [
        'MA (JOURNALISM & MASS COMMUNICATION)',
        'MA (PUBLIC POLICY & GOVERNANCE)',
        'M.COM'
      ]
    }
  ];

  const renderCard = (card, idx) => {
    const isYellow = card.theme === 'yellow';
    return (
      <div 
        key={idx} 
        id={card.title === 'MCA/MSC(CS) WITH SPECIALIZATION' ? 'amity-mca-msc-specializations' : undefined}
        className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:bg-[#0ea5e9] hover:text-white hover:-translate-y-1 text-slate-600 overflow-hidden"
      >
        {/* Decorative Circle */}
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-blue-50/70 rounded-full group-hover:bg-white/10 transition-colors duration-300 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Card Header */}
          <div className="mb-6">
            <div className="p-3.5 rounded-xl bg-blue-50 w-fit text-[#0ea5e9] group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 mb-5">
              <User size={32} />
            </div>
            <h3 className="font-extrabold text-2xl md:text-3xl tracking-wide uppercase leading-tight text-slate-800 group-hover:text-white transition-colors duration-300">
              {card.title}
            </h3>
          </div>

          {/* List of items */}
          <ul className="space-y-4 font-semibold text-base md:text-lg leading-relaxed font-sans mb-8 flex-grow">
            {card.items.map((item, itemIdx) => (
              <li key={itemIdx} className="flex items-start gap-3">
                <span className="mt-2.5 w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0 group-hover:bg-white transition-colors duration-300"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white py-20 md:py-28 font-outfit" id="amity-programs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="text-[#1c2d76]">Explore Our Diverse </span>
            <span className="text-[#2ca785]">Academic Programs</span>
          </h2>
        </div>

        {/* Asymmetric 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {col1.map((card, idx) => renderCard(card, idx))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {col2.map((card, idx) => renderCard(card, idx))}
          </div>
        </div>

      </div>
    </section>
  );
}
