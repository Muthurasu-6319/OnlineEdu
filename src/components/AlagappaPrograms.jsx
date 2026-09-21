import React from 'react';
import { BookOpen, Award, GraduationCap, Briefcase, FileText, User } from 'lucide-react';

export default function AlagappaPrograms({ onEnquiryClick }) {
  const cards = [
    {
      title: 'UG Program Arts',
      icon: GraduationCap,
      colSpan: 1,
      items: ['B.A. TAMIL', 'B.A. ENGLISH', 'B.COM.', 'B.COM. - COMPUTER APPLICATIONS', 'B.B.A']
    },
    {
      title: 'UG Program Science',
      icon: BookOpen,
      colSpan: 1,
      items: ['B.SC. MATHEMATICS', 'B.SC. COMPUTER SCIENCE']
    },
    {
      title: 'MBA SPECIALIZATIONS',
      icon: Award,
      colSpan: 2, // Full width for MBA
      isMba: true,
      items: [
        'M.B.A. (Human Resource Management)', 'M.B.A. (Marketing Management)', 'M.B.A. (Financial Management)', 'M.B.A. (System Management)', 'M.B.A - BANKING AND FINANCE', 'M.B.A. (Corporate Secretaryship)', 'M.B.A. (Hospital Management)', 'M.B.A. (Education Management)',
        'M.B.A. (Production and Operations Management)', 'M.B.A. (Technology Management)', 'M.B.A. (Corporate Management)', 'M.B.A. (International Business)', 'M.B.A. (Project Management)', 'M.B.A. (Retail Management)', 'M.B.A. (Logistics Management)', 'M.B.A. (Co-operative Management)'
      ]
    },
    {
      title: 'PG PROGRAM ARTS',
      icon: GraduationCap,
      colSpan: 'lg:col-span-3',
      items: [
        'M.A.(English)', 'M.A.(History)', 'M.S.W', 'M.A.(Economics)', 'M.Sc.(Botany)', 'M.Sc.(Zoology)', 'M.Com',
        'M.Sc.(Computer Science)', 'M.Sc.(Information Technology)', 'Master of Computer Applications (MCA)', 'M.Sc.(Chemistry)', 'M.Sc.(Physics)', 'M.Sc.(Zoology)', 'M.Lib.I.Sc.'
      ]
    },
    {
      title: 'Certification Programs',
      icon: Award,
      colSpan: 'lg:col-span-2',
      items: [
        'Certificate Programme in Library and Information Science', 'Certificate Programme in C Programming', 'Certificate Programme in Computer Fundamentals', 'Certificate Programme in Web Designing', 'Certificate Programme in GST', 'Certificate Programme in Astrology', 'Certificate Programme in Office Automation'
      ]
    },
    {
      title: 'Diploma Course',
      icon: FileText,
      colSpan: 'md:col-span-1',
      items: [
        'Diploma in Montessori Education', 'Diploma in Computer Applications', 'Diploma in Artificial Intelligence & Diploma in Machine Learning (AI & ML)', 'Diploma in Cyber Security'
      ]
    }
  ];

  const renderCard = (card, idx) => {
    const Icon = card.icon;
    const isMba = card.isMba;
    
    return (
      <div 
        key={idx} 
        id={isMba ? 'alagappa-mba-specializations' : undefined}
        className={`group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:bg-[#0ea5e9] hover:text-white hover:-translate-y-1 text-slate-600 overflow-hidden ${card.colSpan !== 1 ? (typeof card.colSpan === 'string' ? card.colSpan : 'md:col-span-2 w-full') : ''}`}
      >
        {/* Decorative Circle */}
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-blue-50/70 rounded-full group-hover:bg-white/10 transition-colors duration-300 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Card Header */}
          <div className="mb-6">
            <div className="p-3.5 rounded-xl bg-blue-50 w-fit text-[#0ea5e9] group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 mb-5">
              <Icon size={32} />
            </div>
            <h3 className="font-extrabold text-2xl md:text-3xl tracking-wide uppercase leading-tight text-slate-800 group-hover:text-white transition-colors duration-300">
              {card.title}
            </h3>
          </div>

          {/* List of items */}
          <div className={`mb-8 flex-grow ${isMba || card.title === 'PG PROGRAM ARTS' ? 'grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4' : 'space-y-4'}`}>
            {(isMba || card.title === 'PG PROGRAM ARTS') ? (
              <>
                <ul className="space-y-4 font-semibold text-base md:text-lg leading-relaxed font-sans">
                  {card.items.slice(0, Math.ceil(card.items.length / 2)).map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0 group-hover:bg-white transition-colors duration-300"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4 font-semibold text-base md:text-lg leading-relaxed font-sans">
                  {card.items.slice(Math.ceil(card.items.length / 2)).map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0 group-hover:bg-white transition-colors duration-300"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <ul className="space-y-4 font-semibold text-base md:text-lg leading-relaxed font-sans">
                {card.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <span className="mt-2.5 w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0 group-hover:bg-white transition-colors duration-300"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24 font-outfit" id="alagappa-programs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
            Explore Our Diverse <span className="text-[#2ca785]">Academic Programs</span>
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="space-y-6">
          {/* Row 1: UG Programs (2 Column Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderCard(cards[0], 0)}
            {renderCard(cards[1], 1)}
          </div>

          {/* Row 2: MBA Specializations (Full-width) */}
          <div className="w-full">
            {renderCard(cards[2], 2)}
          </div>

          {/* Row 3: PG Programs & Certification Programs (3/5 and 2/5 columns grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {renderCard(cards[3], 3)}
            {renderCard(cards[4], 4)}
          </div>

          {/* Row 4: Diploma Course (1 Column Card) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {renderCard(cards[5], 5)}
          </div>
        </div>
      </div>
    </section>
  );
}
