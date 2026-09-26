import React from 'react';

export default function DayanandaFaq() {
  const faqs = [
    {
      q: "What online UG and PG programs does Dayananda Sagar University offer?",
      a: "Dayananda Sagar University offers career-focused undergraduate and postgraduate programs in areas such as management, computer applications, commerce, and other disciplines, depending on the current program portfolio."
    },
    {
      q: "Is DSU Online approved by the UGC?",
      a: "Yes. DSU Online (Dayananda Sagar University) is a private university established by the Karnataka State Act and is officially recognized by the UGC. It operates under full regulatory compliance."
    },
    {
      q: "Is DSU a government-recognized university?",
      a: "Yes. All online degree programs offered by DSU Online are UGC-Entitled, ensuring they are recognized and equivalent to regular on-campus degrees."
    }
  ];

  return (
    <section className="bg-[#f0f2f5] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Side: Title */}
        <div className="w-full lg:w-1/3 flex flex-col items-start gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1f2937] leading-tight">
            Dayananda Online programs FAQ Section
          </h2>
          <p className="text-[#4b5563] text-sm leading-relaxed font-medium">
            Get answers to frequently asked questions about Dayananda Sagar University Online programs, including UG and PG courses, eligibility, admission process, course duration, online learning, examinations, and career opportunities.
          </p>
          <button className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3 rounded text-sm font-bold shadow-lg transition-colors mt-4">
            See All(99)
          </button>
        </div>

        {/* Right Side: FAQ Cards */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm font-bold text-slate-800 mb-3">{faq.q}</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
