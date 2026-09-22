import React, { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, Briefcase, FileText, User, Award, Monitor, ArrowRight } from 'lucide-react';
import BASE_URL from '../api.js';

export default function BharathidasanPrograms({ onEnquiryClick }) {
  const [dbPrograms, setDbPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/university-courses`);
        if (res.ok) {
          const data = await res.json();
          const uniCourses = data.filter(c => c.university === 'Bharathidasan University');
          
          const formatted = uniCourses.map(c => ({
            title: c.title,
            subtitle: c.description,
            level: c.level,
            image: c.image ? (c.image.startsWith('http') || c.image.startsWith('data:') ? c.image : `${BASE_URL}${c.image}`) : ''
          }));
          
          setDbPrograms(formatted);
        }
      } catch (err) {
        console.error('Failed to fetch university courses', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourses();
  }, []);

  const cards = [
    {
      title: 'UG Program Arts',
      icon: GraduationCap,
      items: [
        'B.A Tamil',
        'B.Lit Tamil',
        'B.A. Economics',
        'B.A English',
        'B.A History',
        'B.A Public Administration',
        'B.A Political Scienc'
      ]
    },
    {
      title: 'UG Program Science',
      icon: BookOpen,
      items: [
        'B.Sc. MATHEMATICS',
        'B.Sc. Physics',
        'B.Sc. Chemistry',
        'B.Sc. Botany',
        'B.Sc. Zoology',
        'B.Sc. Geography',
        'B.Sc. Computer Science',
        'B.Sc. Information Technology'
      ]
    },
    {
      title: 'UG Program - Management & Commerce',
      icon: Briefcase,
      items: [
        'B.COM.',
        'B.com (Bank Management)',
        'B.B.A.',
        'B.B.A. (Retail Management)',
        'BLIS (one year programmes)'
      ]
    },
    {
      title: 'PG - Program Arts',
      icon: GraduationCap,
      items: [
        'M.A Tamil',
        'M.A English',
        'M.A. History',
        'M.A Ecnomics',
        'M.A Public Administration',
        'M.A Political Science',
        'M.A. Human Resources'
      ]
    },
    {
      title: 'PG Program Science',
      id: 'bharathidasan-pg-science',
      icon: BookOpen,
      items: [
        'M.sc Mathematics',
        'M.sc. Physics',
        'M.sc. Chemistry',
        'M.sc. Zoology',
        'M.sc. Botany',
        'M.sc. Geography',
        'M.sc. Computer Science'
      ]
    },
    {
      title: 'PG Commerce & Management',
      icon: Briefcase,
      items: [
        'M.COM',
        'M.com (Bank Management)',
        'M.com (Financial Management)',
        'M.B.A. (Human Resource Management)',
        'MBA (Marketing Management)',
        'MBA (Financial Management)',
        'MBA (Operations)',
        'MBA (System)'
      ]
    },
    {
      title: 'UG Program Computer Science',
      icon: Monitor,
      items: [
        'B.Sc. Computer Science',
        'B.sc. Information Technology',
        'BCA (Computer Application)'
      ]
    },
    {
      title: 'PG Program Computer Science',
      icon: Monitor,
      items: [
        'M.sc. Computer Science',
        'M.sc. Information Technology',
        'MCA (Computer Application)'
      ]
    },
    {
      title: 'UG & PG LIBRARY & INFORMATION SCIENCE (ONE Year Programme)',
      icon: FileText,
      items: [
        'BLIS',
        'MLIS (Library & Information Science)'
      ]
    }
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24 font-outfit" id="bharathidasan-programs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="text-[#1a2b6d]">Explore Our Diverse </span>
            <span className="text-[#2ca785]">Academic Programs</span>
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                id={card.id || undefined}
                className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:bg-[#0ea5e9] hover:text-white hover:-translate-y-1 text-slate-600 overflow-hidden"
              >
                {/* Decorative Circle */}
                <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-blue-50/70 rounded-full group-hover:bg-white/10 transition-colors duration-300 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Card Header with Icon */}
                  <div className="mb-6">
                    <div className="p-3.5 rounded-xl bg-blue-50 w-fit text-[#0ea5e9] group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 mb-5">
                      <Icon size={32} />
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
          })}
        </div>

        {/* Dynamically Added Courses from Admin Panel */}
        {dbPrograms.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                <span className="text-[#1a2b6d]">More </span>
                <span className="text-[#2ca785]">Programs</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dbPrograms.map((program, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-md p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] flex flex-col"
                >
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-48 object-cover rounded mb-6"
                  />
                  <div className="flex-grow flex flex-col items-start gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-2">
                      {program.level}
                    </span>
                    <h3 className="text-xl font-black text-purple-500 uppercase tracking-wide">
                      {program.title}
                    </h3>
                    <p className="text-[10px] font-bold text-slate-700 uppercase tracking-widest leading-relaxed">
                      {program.subtitle}
                    </p>
                  </div>
                  
                  <button className="mt-8 self-start border border-purple-300 text-purple-500 hover:bg-purple-50 font-semibold text-xs px-4 py-2 rounded flex items-center gap-2 transition-colors" onClick={() => onEnquiryClick(program.title, 'Bharathidasan University')}>
                    Apply NOW <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
