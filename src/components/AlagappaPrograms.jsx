import React from 'react';
import { BookOpen, Award, GraduationCap, Briefcase, FileText } from 'lucide-react';

export default function AlagappaPrograms() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 font-outfit" id="alagappa-programs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
            Explore Our Diverse <span className="text-[#2ca785]">Academic Programs</span>
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="space-y-6">
          
          {/* Row 1: UG Programs (3 Column Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: UG Program Arts */}
            <div className="bg-[#FFCF3E] rounded-3xl p-6 shadow-md text-slate-900 flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                  <GraduationCap size={20} className="text-slate-800" />
                </div>
                <h3 className="font-extrabold text-base uppercase tracking-wider">UG Program Arts</h3>
              </div>
              <ul className="space-y-3 font-semibold text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>UG Program Arts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>B.A. TAMIL</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>B.A. ENGLISH</span>
                </li>
              </ul>
            </div>

            {/* Card 2: UG Program Science */}
            <div className="bg-[#FFCF3E] rounded-3xl p-6 shadow-md text-slate-900 flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                  <BookOpen size={20} className="text-slate-800" />
                </div>
                <h3 className="font-extrabold text-base uppercase tracking-wider">UG Program Science</h3>
              </div>
              <ul className="space-y-3 font-semibold text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>B.SC. MATHEMATICS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>B.SC. COMPUTER SCIENCE</span>
                </li>
              </ul>
            </div>

            {/* Card 3: UG Program Management */}
            <div className="bg-[#FFCF3E] rounded-3xl p-6 shadow-md text-slate-900 flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                  <Briefcase size={20} className="text-slate-800" />
                </div>
                <h3 className="font-extrabold text-base uppercase tracking-wider">UG Program Management</h3>
              </div>
              <ul className="space-y-3 font-semibold text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>B.COM.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>B.COM. - COMPUTER APPLICATIONS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>B.B.A</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Row 2: MBA Specializations (Full-width Purple Card) */}
          <div className="w-full">
            <div className="bg-[#8b5cf6] rounded-3xl p-8 shadow-md text-white hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Award size={20} className="text-white" />
                </div>
                <h3 className="font-extrabold text-lg uppercase tracking-wider">MBA SPECIALIZATIONS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 font-semibold text-sm md:text-base leading-relaxed">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>M.B.A. (Human Resource Management)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>M.B.A. (Marketing Management)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>M.B.A. (Financial Management)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>M.B.A. (System Management)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>M.B.A - BANKING AND FINANCE</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>M.B.A. (Corporate Secretaryship)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>M.B.A. (Hospital Management)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>M.B.A. (Education Management)</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>M.B.A. (Production and Operations Management)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>M.B.A. (Technology Management)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>M.B.A. (Corporate Management)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>M.B.A. (International Business)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>M.B.A. (Project Management)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>M.B.A. (Retail Management)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>M.B.A. (Logistics Management)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>M.B.A. (Co-operative Management)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: PG Programs & Certification Programs (3/5 and 2/5 columns grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            
            {/* Card 5: PG PROGRAM ARTS (takes 3 of 5 columns) */}
            <div className="bg-[#FFCF3E] rounded-3xl p-6 md:p-8 shadow-md text-slate-900 lg:col-span-3 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                  <GraduationCap size={20} className="text-slate-800" />
                </div>
                <h3 className="font-extrabold text-base uppercase tracking-wider">PG PROGRAM ARTS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-semibold text-sm leading-relaxed">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                    <span>M.A.(English)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                    <span>M.A.(History)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                    <span>M.S.W</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                    <span>M.A.(Economics)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                    <span>M.Sc.(Botany)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                    <span>M.Sc.(Zoology)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                    <span>M.Com</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                    <span>M.Sc.(Computer Science)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                    <span>M.Sc.(Information Technology)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                    <span>Master of Computer Applications (MCA)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                    <span>M.Sc.(Chemistry)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                    <span>M.Sc.(Physics)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                    <span>M.Sc.(Zoology)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                    <span>M.Lib.I.Sc.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Certification Programs (takes 2 of 5 columns) */}
            <div className="bg-[#FFCF3E] rounded-3xl p-6 md:p-8 shadow-md text-slate-900 lg:col-span-2 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                  <Award size={20} className="text-slate-800" />
                </div>
                <h3 className="font-extrabold text-base uppercase tracking-wider">Certification Programs</h3>
              </div>
              <ul className="space-y-3 font-semibold text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>Certificate Programme in Library and Information Science</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>Certificate Programme in C Programming</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>Certificate Programme in Computer Fundamentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>Certificate Programme in Web Designing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>Certificate Programme in GST</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>Certificate Programme in Astrology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>Certificate Programme in Office Automation</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Row 4: Diploma Course (1 Column Card) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 7: Diploma Course */}
            <div className="bg-[#FFCF3E] rounded-3xl p-6 shadow-md text-slate-900 flex flex-col h-full hover:shadow-lg transition-shadow md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                  <FileText size={20} className="text-slate-800" />
                </div>
                <h3 className="font-extrabold text-base uppercase tracking-wider">Diploma Course</h3>
              </div>
              <ul className="space-y-3 font-semibold text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>Diploma in Montessori Education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>Diploma in Computer Applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>Diploma in Artificial Intelligence & Diploma in Machine Learning (AI & ML)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>Diploma in Cyber Security</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
