import React from 'react';
import { FileText } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      title: 'Lowest Fees',
      description: "Affordable education with the lowest fees, ensuring cost won't stop your learning."
    },
    {
      title: 'Govt. Exam Classes',
      description: 'Expert-led classes to help you crack government exams & secure a govt. job.'
    },
    {
      title: 'Study Material',
      description: 'Comprehensive B.Ed study materials, including textbooks and practice papers.'
    },
    {
      title: 'Direct Admission',
      description: 'Fast and hassle-free admission process to get you enrolled quickly without any entrance B.Ed Admission 2025 exam.'
    },
    {
      title: 'Placement Guidance',
      description: 'Career support with resume help, interview tips, and job placement advice.'
    },
    {
      title: 'Passing Assurance',
      description: 'Focused strategies and tips to help you pass exams with our study material.'
    }
  ];

  return (
    <section className="bg-slate-50/50 py-20 md:py-28 font-outfit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-20 space-y-3">
          <h2 className="text-lg md:text-xl font-extrabold text-[#29388c] uppercase tracking-wider">
            WHY CHOOSE US ?
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-800 max-w-4xl mx-auto leading-tight">
            vnet Distance education Provides Best Services With Low Fees....
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 pt-6">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-8 pt-12 pb-10 shadow-lg shadow-slate-100/80 border border-slate-50 relative flex flex-col text-center hover:shadow-xl hover:shadow-indigo-50/40 transition-all duration-300"
            >
              {/* Floating Circle Icon */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#4d69ec] text-white rounded-full flex items-center justify-center shadow-md shadow-indigo-100">
                <FileText className="w-6 h-6" />
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold text-[#1c2d76] mb-4">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-slate-500 text-sm leading-relaxed font-sans font-medium">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
