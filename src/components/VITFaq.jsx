import React from 'react';

export default function VITFaq() {
  const faqs = [
    {
      question: 'What online programmes does VIT offer?',
      answer: 'VIT Online offers flexible online degree programmes designed for students, working professionals, and learners who want to pursue higher education remotely.',
      active: true,
    },
    {
      question: 'Are VIT Online programmes UGC entitled?',
      answer: 'Yes. Eligible VIT Online degree programmes are offered under the applicable UGC entitlement framework.',
      active: false,
    },
    {
      question: 'Can working professionals study through VIT Online?',
      answer: 'Yes. The online learning format allows working professionals to continue their careers while pursuing their degree.',
      active: false,
    }
  ];

  return (
    <section className="bg-[#f4f5f7] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Side */}
        <div className="lg:w-5/12 w-full flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#374151] leading-tight">
            VIT Online Programmes <br />
            FAQ Section
          </h2>
          <p className="text-sm font-semibold text-slate-600 leading-relaxed max-w-md">
            Find answers to the most common questions about VIT Online programmes, including eligibility, admission, learning methods, examinations, programme duration, academic support, and more.
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
