import React from 'react';

export default function ManipalFaq() {
  const faqs = [
    {
      question: 'What online UG and PG programs are offered by Manipal University Online?',
      answer: 'Manipal University Online offers a wide range of undergraduate and postgraduate programs, including BBA, BCA, B.Com, MBA, MCA, M.Com, MA Economics, MA Journalism & Mass Communication, and M.Sc Mathematics.',
      active: true,
    },
    {
      question: 'Are Manipal University Online degrees UGC entitled?',
      answer: 'Yes. The online degree programs offered by Manipal University Jaipur are UGC-entitled and designed to provide a recognized higher education qualification.',
      active: false,
    },
    {
      question: 'Who can apply for online UG programs?',
      answer: 'Students who have completed their 10+2 or equivalent qualification can apply for eligible undergraduate programs, subject to the specific admission requirements of the chosen course.',
      active: false,
    }
  ];

  return (
    <section className="bg-[#f4f5f7] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Side */}
        <div className="lg:w-5/12 w-full flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#374151] leading-tight">
            Manipal Online programs <br />
            FAQ Section
          </h2>
          <p className="text-sm font-semibold text-slate-600 leading-relaxed max-w-md">
            Find answers to common questions about Manipal University Online programs, eligibility, admission process, course duration, fees, examinations, and career opportunities.
          </p>
          <button className="bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold text-sm px-8 py-3 rounded-md shadow-sm transition-colors w-max mt-2">
            Say Hello!
          </button>
        </div>

        {/* Right Side (FAQs) */}
        <div className="lg:w-7/12 w-full flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-md p-6 shadow-sm relative overflow-hidden flex flex-col gap-2 ${
                faq.active ? 'pl-8' : 'pl-6'
              }`}
            >
              {faq.active && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#a855f7]"></div>
              )}
              <h3 className="text-[15px] font-bold text-[#1f2937]">
                {faq.question}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
