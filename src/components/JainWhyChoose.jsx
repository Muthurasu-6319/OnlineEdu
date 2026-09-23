import React from 'react';
import { Award, Laptop, Users, Briefcase, CreditCard, Globe } from 'lucide-react';

export default function JainWhyChoose() {
  const features = [
    {
      title: '10 Thriving Campuses',
      icon: <Award size={24} className="text-white" />,
      iconBg: 'bg-purple-500',
    },
    {
      title: '35,000+ Graduates Placed',
      icon: <Laptop size={24} className="text-purple-500" />,
      iconBg: 'bg-purple-100',
    },
    {
      title: '400+ Top Recruiters',
      icon: <Users size={24} className="text-purple-500" />,
      iconBg: 'bg-purple-100',
    },
    {
      title: '197 National & International MoUs',
      icon: <Briefcase size={24} className="text-purple-500" />,
      iconBg: 'bg-purple-100',
    },
    {
      title: '140+ Undergraduate & Postgraduate Programs',
      icon: <CreditCard size={24} className="text-purple-500" />,
      iconBg: 'bg-purple-100',
    },
    {
      title: 'Global Student Body from 54+ Countries',
      icon: <Globe size={24} className="text-purple-500" />,
      iconBg: 'bg-purple-100',
    }
  ];

  return (
    <section className="bg-[#0b0c2a] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider uppercase">
            WHY CHOOSE JAIN UNIVERSITY
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Unlock The 360° Advantage
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
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
