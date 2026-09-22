import React from 'react';
import { Award, BookOpen, Briefcase, CreditCard } from 'lucide-react';

export default function ManipalWhyChoose({ universityName = 'Manipal' }) {
  const features = [
    {
      title: 'Globally recognized Prestigious Degree',
      icon: <Award size={24} className="text-white" />,
      iconBg: 'bg-purple-500',
    },
    {
      title: 'Industry relevant curriculum',
      icon: <BookOpen size={24} className="text-purple-500" />,
      iconBg: 'bg-purple-100',
    },
    {
      title: '100% placement assistance',
      icon: <Briefcase size={24} className="text-purple-500" />,
      iconBg: 'bg-purple-100',
    },
    {
      title: 'Easy Financing Options',
      icon: <CreditCard size={24} className="text-purple-500" />,
      iconBg: 'bg-purple-100',
    },
  ];

  return (
    <section className="bg-[#0b0c2a] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider uppercase">
            WHY CHOOSE {universityName}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Unlock The 360° Advantage
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 flex flex-col items-start gap-6 shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${feature.iconBg}`}>
                {feature.icon}
              </div>
              <h3 className="text-[#1f2937] font-bold text-[15px] leading-tight pr-4">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
