import React from 'react';
import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

const stats = [
  { icon: <Award className="w-8 h-8" />, value: '100%', label: 'Placement Assistance', color: 'from-[#1c2d76] to-[#2d4bc4]' },
  { icon: <Users className="w-8 h-8" />, value: '5000+', label: 'Students Enrolled', color: 'from-[#2ca785] to-[#1e8c6e]' },
  { icon: <TrendingUp className="w-8 h-8" />, value: '98%', label: 'Pass Rate', color: 'from-[#8b5cf6] to-[#6d28d9]' },
  { icon: <CheckCircle className="w-8 h-8" />, value: '10+', label: 'Years of Excellence', color: 'from-[#f59e0b] to-[#d97706]' },
];

const features = [
  'Resume Building & Interview Coaching',
  'Job Portal Access for Graduates',
  'Career Counselling Sessions',
  'Government Exam Guidance',
  'Higher Education Pathways',
  'Industry Connect Programs',
];

export default function BoardPlacement() {
  return (
    <section id="board-placement" className="bg-white py-16 md:py-24 font-outfit">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-14 space-y-3">
          <span className="inline-block bg-[#e6f2ff] text-[#1c2d76] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            Career Support
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            <span className="text-[#1c2d76]">100%</span>{' '}
            <span className="text-[#2ca785]">Placement Assistance</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            We don't just help you pass exams — we help you build a future. Every student gets dedicated placement support and career guidance after completing their 10th &amp; 12th.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex justify-center mb-3 opacity-90">{stat.icon}</div>
              <p className="text-2xl md:text-3xl font-black">{stat.value}</p>
              <p className="text-xs md:text-sm font-semibold mt-1 opacity-85">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features Banner */}
        <div className="bg-gradient-to-br from-[#f0f4ff] to-[#e6f2ff] rounded-3xl p-8 md:p-10 border border-[#1c2d76]/10">
          <h3 className="text-lg md:text-xl font-extrabold text-[#1c2d76] text-center mb-8">
            What's Included in Our Placement Support?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feat, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-sm border border-slate-100">
                <CheckCircle className="w-5 h-5 text-[#2ca785] shrink-0" />
                <span className="text-sm font-semibold text-slate-700">{feat}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
