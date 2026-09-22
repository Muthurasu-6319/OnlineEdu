import React from 'react';
import { Award, BookOpen, Video, Users } from 'lucide-react';

export default function AndhraWhyChoose() {
  const reasons = [
    {
      title: "NAAC A++ Accreditation & 23rd NIRF Ranking",
      icon: <Award className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Flexible & Convenient Online Pedagogy",
      icon: <BookOpen className="w-6 h-6 text-purple-200" />
    },
    {
      title: "Live Interactive Lectures & 24x7 LMS Resources",
      icon: <Video className="w-6 h-6 text-purple-100" />
    },
    {
      title: "Networking Opportunities with Industry Mentors",
      icon: <Users className="w-6 h-6 text-purple-300" />
    }
  ];

  return (
    <section className="bg-[#0b0432] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 uppercase tracking-wide">
            FACILITIES AT ANDHRA UNIVERSITY
          </h2>
          <p className="text-slate-300 text-lg">
            Unlock The 360° Advantage
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 flex flex-col items-start gap-4 shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-purple-100/50 p-3 rounded-md">
                {reason.icon}
              </div>
              <h3 className="text-slate-800 font-bold text-sm">
                {reason.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
