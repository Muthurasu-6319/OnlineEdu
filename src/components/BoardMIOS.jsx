import React from 'react';
import { BookOpen, CheckCircle, Globe, Shield, Clock, Users } from 'lucide-react';

const niosFeatures = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Secondary (10th)',
    desc: 'Complete your Class 10th education through NIOS with government-recognised certification valid across India.',
    color: 'bg-blue-50 text-blue-700 border-blue-100',
    iconBg: 'bg-blue-100 text-blue-700',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Senior Secondary (12th)',
    desc: 'Earn your Class 12th certificate through NIOS — accepted for higher education, government jobs & competitive exams.',
    color: 'bg-green-50 text-green-700 border-green-100',
    iconBg: 'bg-green-100 text-green-700',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Flexible Exam Schedule',
    desc: 'Choose your exam dates with On-Demand Examination (ODE) system — no need to wait for annual exams.',
    color: 'bg-purple-50 text-purple-700 border-purple-100',
    iconBg: 'bg-purple-100 text-purple-700',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Government Recognised',
    desc: 'NIOS is a Government of India board under Ministry of Education — fully valid for all institutions.',
    color: 'bg-orange-50 text-orange-700 border-orange-100',
    iconBg: 'bg-orange-100 text-orange-700',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Multiple Attempts',
    desc: 'Students can appear for exams multiple times to improve scores without any restrictions.',
    color: 'bg-rose-50 text-rose-700 border-rose-100',
    iconBg: 'bg-rose-100 text-rose-700',
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Subject Choice Freedom',
    desc: 'Choose from a wide range of subjects including Tamil, English, Maths, Science, Commerce & more.',
    color: 'bg-teal-50 text-teal-700 border-teal-100',
    iconBg: 'bg-teal-100 text-teal-700',
  },
];

const highlights = [
  'Accepted in all Indian Universities',
  'Valid for Government Job Applications',
  'Eligible for Competitive Exams (UPSC, TN PSC, etc.)',
  'Study from Home — No Regular School Needed',
  'Affordable Registration Fees',
  'Second Chance for Dropouts & Failed Students',
];

export default function BoardNIOS() {
  return (
    <section id="board-nios" className="bg-[#f0f4ff] py-16 md:py-24 font-outfit">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="text-center mb-14 space-y-3">
          <span className="inline-block bg-[#1c2d76] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">
            Open Schooling Board
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
            <span className="text-[#1c2d76]">NIOS</span>{' '}
            <span className="text-[#2ca785]">— National Institute of Open Schooling</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            A Government of India Board under the Ministry of Education — NIOS provides flexible, affordable and government-recognised education for 10th &amp; 12th students across India.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {niosFeatures.map((feat, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-6 ${feat.color} hover:shadow-lg transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feat.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                {feat.icon}
              </div>
              <h3 className="text-base font-extrabold mb-2">{feat.title}</h3>
              <p className="text-sm leading-relaxed opacity-80 font-medium">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlights Banner */}
        <div className="bg-gradient-to-br from-[#1c2d76] to-[#2d4bc4] rounded-3xl p-8 md:p-10 text-white">
          <h3 className="text-xl md:text-2xl font-extrabold text-center mb-8">
            Why <span className="text-[#2ca785]">NIOS Certificate</span> Matters?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#2ca785] shrink-0" />
                <span className="text-sm md:text-base font-semibold">{point}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
