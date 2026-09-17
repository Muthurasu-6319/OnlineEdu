import React from 'react';

export default function AndhraFaq() {
  const faqs = [
    {
      q: "What online programs does Andhra University offer?",
      a: "Andhra University offers a range of online and distance-learning programs across undergraduate, postgraduate, and other academic disciplines. Program availability may vary by admission cycle."
    },
    {
      q: "Who can apply for Andhra University Online UG programs?",
      a: "Students who have completed their 10+2 or equivalent qualification can apply for eligible UG programs, subject to the specific requirements of the chosen course."
    },
    {
      q: "How can I apply for admission?",
      a: "Students can select their preferred program, verify eligibility, complete the online application, submit the required documents, and follow the university's admission procedure."
    }
  ];

  return (
    <section className="bg-[#f0f2f5] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Side: Title */}
        <div className="w-full lg:w-1/3 flex flex-col items-start gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1f2937] leading-tight">
            Andhra Online Programmes FAQ Section
          </h2>
          <p className="text-[#4b5563] text-sm leading-relaxed font-medium">
            Find answers to frequently asked questions about Andhra University Online programs, including eligibility, admission, course duration, examinations, learning methods, fees, and career opportunities.
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
