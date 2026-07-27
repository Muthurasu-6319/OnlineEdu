import React from 'react';
import { User } from 'lucide-react';

export default function AmityPrograms() {
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
        className={`rounded-3xl p-6 md:p-8 shadow-md flex flex-col hover:shadow-lg transition-all duration-300 ${
          isYellow 
            ? 'bg-[#fdbf46] text-[#1c2d76]' 
            : 'bg-[#3b59df] text-white'
        }`}
      >
        {/* Card Header with Student Avatar Icon */}
        <div className="flex items-center gap-3 mb-6 border-b pb-4 border-black/10">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border ${
            isYellow 
              ? 'bg-[#1c2d76]/10 border-[#1c2d76]/10 text-[#1c2d76]' 
              : 'bg-white/20 border-white/10 text-white'
          }`}>
            <User size={18} />
          </div>
          <h3 className="font-extrabold text-base md:text-lg tracking-wide uppercase">
            {card.title}
          </h3>
        </div>

        {/* List of items */}
        <ul className="space-y-3 font-bold text-xs md:text-sm leading-relaxed font-sans">
          {card.items.map((item, itemIdx) => (
            <li key={itemIdx} className="flex items-start gap-2.5">
              <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                isYellow ? 'bg-[#1c2d76]' : 'bg-white'
              }`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
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
