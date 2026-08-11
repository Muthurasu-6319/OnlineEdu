import React from 'react';
import { BookOpen, GraduationCap, Award, Clock } from 'lucide-react';

const courses = [
  {
    level: '10th Standard',
    board: 'NIOS / BOSSE',
    icon: <BookOpen className="w-7 h-7" />,
    color: 'from-[#1c2d76] to-[#2d4bc4]',
    badge: 'Secondary',
    subjects: ['Tamil', 'English', 'Mathematics', 'Science', 'Social Science'],
    duration: '1 Year',
    mode: 'Distance / Online',
  },
  {
    level: '12th Standard',
    board: 'NIOS / BOSSE',
    icon: <GraduationCap className="w-7 h-7" />,
    color: 'from-[#2ca785] to-[#1e8c6e]',
    badge: 'Senior Secondary',
    subjects: ['Tamil', 'English', 'Accountancy', 'Economics', 'Commerce', 'Biology', 'Physics'],
    duration: '1 Year',
    mode: 'Distance / Online',
  },
];

export default function BoardCourses() {
  return (
    <section id="board-courses" className="bg-white py-16 md:py-24 font-outfit">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="text-center mb-14 space-y-3">
          <span className="inline-block bg-[#e6f2ff] text-[#1c2d76] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">
            Available Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
            <span className="text-[#1c2d76]">10th &amp; 12th</span>{' '}
            <span className="text-[#2ca785]">Board Courses</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Government-recognised certificates through NIOS &amp; BOSSE — flexible, affordable, and accepted across India for jobs, higher education, and government exams.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${course.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -right-2 bottom-0 w-20 h-20 bg-white/5 rounded-full" />
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                      {course.badge}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
                      {course.level}
                    </h3>
                    <p className="text-white/80 text-sm font-medium mt-1">{course.board}</p>
                  </div>
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                    {course.icon}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="relative z-10 flex gap-6 mt-6">
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <Award className="w-4 h-4" />
                    {course.mode}
                  </div>
                </div>
              </div>

              {/* Card Body — Subjects */}
              <div className="bg-white p-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                  Key Subjects
                </h4>
                <div className="flex flex-wrap gap-2">
                  {course.subjects.map((subj, i) => (
                    <span
                      key={i}
                      className="bg-slate-50 border border-slate-100 text-slate-700 text-sm font-medium px-4 py-1.5 rounded-full hover:bg-[#e6f2ff] hover:border-[#1c2d76]/20 hover:text-[#1c2d76] transition-colors duration-200"
                    >
                      {subj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-slate-400 text-xs md:text-sm mt-10 font-medium">
          * Additional elective subjects available. Contact our counsellors for full subject list &amp; fee details.
        </p>

      </div>
    </section>
  );
}
