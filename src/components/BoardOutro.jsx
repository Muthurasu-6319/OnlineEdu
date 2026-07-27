import React from 'react';

export default function BoardOutro({ onEnquiryClick }) {
  return (
    <section className="bg-[#e6f2ff] py-16 md:py-24 font-outfit">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-8 text-center">
        
        {/* Two Highlight Cards */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg shadow-blue-100/50 border border-white">
            <p className="text-lg md:text-xl font-bold text-[#2ca785] leading-relaxed">
              NIOS & BOSSE certificates are valid across India for jobs, higher education, and government exams.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg shadow-blue-100/50 border border-white">
            <p className="text-lg md:text-xl font-bold text-[#2ca785] leading-relaxed">
              Open schooling offers freedom — no daily classes, no strict schedules, and multiple exam chances.
            </p>
          </div>
        </div>

        {/* CTA Area */}
        <div className="pt-6 space-y-6">
          <h3 className="text-xl md:text-2xl font-extrabold text-[#1c2d76] tracking-tight">
            Take the First Step Today – Contact vnet distance academy
          </h3>
          <button 
            onClick={onEnquiryClick}
            className="bg-[#48b0a9] hover:bg-[#3ba29b] text-white font-extrabold px-10 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-teal-100/50 text-sm tracking-wider uppercase inline-block cursor-pointer"
          >
            Apply Now
          </button>
        </div>

      </div>
    </section>
  );
}
