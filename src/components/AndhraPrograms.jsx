import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function AndhraPrograms() {
  const [activeTab, setActiveTab] = useState('UG');

  const programs = {
    UG: [
      {
        title: 'BBA',
        subtitle: 'BACHELOR OF BUSINESS ADMINISTRATION',
        image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'BCA',
        subtitle: 'BACHELOR OF COMPUTER APPLICATIONS',
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
        subtitle: 'MASTER OF BUSINESS ADMINISTRATION',
        image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'MCA',
        subtitle: 'MASTER OF COMPUTER APPLICATIONS',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      }
    ]
  };

  const displayPrograms = activeTab === 'UG' ? programs.UG : programs.PG;

  return (
    <section className="bg-gradient-to-br from-white via-white to-purple-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f153a] mb-10 text-center leading-tight tracking-tight">
          Andhra University <br /> Programmes
        </h2>

        {/* Tabs */}
        <div className="flex items-center gap-4 mb-16">
          <button 
            onClick={() => setActiveTab('UG')}
            className={`px-8 py-3 font-bold text-lg transition-colors ${
              activeTab === 'UG' 
                ? 'bg-[#0b0c2a] text-white' 
                : 'bg-gray-200 text-[#1f2937] hover:bg-gray-300'
            }`}
          >
            UG Programs
          </button>
          <button 
            onClick={() => setActiveTab('PG')}
            className={`px-8 py-3 font-bold text-lg transition-colors ${
              activeTab === 'PG' 
                ? 'bg-[#0b0c2a] text-white' 
                : 'bg-gray-200 text-[#1f2937] hover:bg-gray-300'
            }`}
          >
            PG Programs
          </button>
        </div>

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
                <p className="text-[10px] font-bold text-slate-700 uppercase tracking-widest leading-relaxed">
                  {program.subtitle}
                </p>
              </div>
              
              <button className="mt-8 self-start border border-purple-300 text-purple-500 hover:bg-purple-50 font-semibold text-xs px-4 py-2 rounded flex items-center gap-2 transition-colors">
                Apply NOW <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
