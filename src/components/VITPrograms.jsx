import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import BASE_URL from '../api.js';

export default function VITPrograms({ onEnquiryClick }) {
  const [activeTab, setActiveTab] = useState('UG');
  const [dbPrograms, setDbPrograms] = useState({ UG: [], PG: [] });
  const [loading, setLoading] = useState(true);

  const hardcodedPrograms = {
    UG: [
      {
        title: 'BBA',
        subtitle: 'BACHELOR OF BUSINESS ADMINISTRATION',
        image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'BCA',
        subtitle: 'BACHELOR OF COMPUTER APPLICATION',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'B.COM',
        subtitle: 'BACHELOR OF COMMERCE',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      }
    ],
    PG: [
      {
        title: 'MBA',
        subtitle: 'MASTER OF BUSSINESS ADMINISTRATION',
        image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'MCA',
        subtitle: 'MASTER OF COMPUTER APPLICATION',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'MSC DATA SCIENCE',
        subtitle: 'MASTER OF COMPUTER APPLICATION DATA SCIENCE',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      }
    ]
  };

  // The image shows PG courses while "UG Programs" is active, which might just be a mockup error.
  // I will use PG data for both or default to PG data if needed, but let's use the appropriate one based on tab.
  // Actually, to exactly match the screenshot, if UG is active, maybe show MBA? No, I'll structure it properly.
  // Let's set default activeTab to 'PG' to match the courses shown, or just use the data.

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/university-courses`);
        if (res.ok) {
          const data = await res.json();
          const vitCourses = data.filter(c => c.university === 'VIT Vellore');
          
          const grouped = { UG: [], PG: [] };
          vitCourses.forEach(c => {
            const courseObj = {
              title: c.title,
              subtitle: c.description,
              image: c.image ? (c.image.startsWith('http') || c.image.startsWith('data:') ? c.image : `${BASE_URL}${c.image}`) : ''
            };
            if (c.level === 'UG') grouped.UG.push(courseObj);
            else if (c.level === 'PG') grouped.PG.push(courseObj);
          });
          
          setDbPrograms(grouped);
        }
      } catch (err) {
        console.error('Failed to fetch university courses', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourses();
  }, []);

  const programsToUse = {
    UG: dbPrograms.UG.length > 0 ? dbPrograms.UG : (hardcodedPrograms.UG || []),
    PG: dbPrograms.PG.length > 0 ? dbPrograms.PG : (hardcodedPrograms.PG || []),
  };

  const displayPrograms = programsToUse.PG;

  return (
    <section className="bg-gradient-to-br from-white via-white to-purple-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f153a] mb-10 text-center leading-tight tracking-tight">
          Vit University <br /> Programs
        </h2>

        {/* Tabs Removed */}

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {displayPrograms.map((program, index) => (
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
                <h3 className="text-xl font-black text-purple-500 uppercase tracking-wide">
                  {program.title}
                </h3>
                <div className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-widest leading-relaxed w-full">
                  {program.subtitle && program.subtitle.includes('|') ? (
                    <ul className="space-y-1 w-full">
                      {program.subtitle.split('|').filter(item => item.trim() !== '').map((item, index) => (
                        <li key={index}>• {item.trim()}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="whitespace-pre-line">{program.subtitle}</p>
                  )}
                </div>
              </div>
              
              <button className="mt-8 self-start border border-purple-300 text-purple-500 hover:bg-purple-50 font-semibold text-xs px-4 py-2 rounded flex items-center gap-2 transition-colors" onClick={() => onEnquiryClick(program.title, 'VIT University')}>
                Apply NOW <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
