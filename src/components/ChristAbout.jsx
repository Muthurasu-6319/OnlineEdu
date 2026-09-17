import React from 'react';
import aboutImage from '../assets/Christ/image 3 (3).png';

export default function ChristAbout() {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Text */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold text-[#111827]">
            About Christ University Online
          </h2>
          <p className="text-[13px] font-medium text-slate-800 leading-[1.8] text-justify tracking-tight">
            CHRIST (Deemed to be University) was established as 'Christ College' in 1969. It undertook path-breaking initiatives in Indian higher education with the introduction of innovative and modern curricula, insistence on academic discipline, imparting of Holistic Education and adoption of global higher education practices with the support of creative and dedicated staff.<br /><br />
            The University Grants Commission (UGC) of India conferred Autonomy to Christ College in 2004 and identified it as an Institution with Potential for Excellence in 2006. In 2008 under Section 3 of the UGC Act, 1956, the Ministry of Human Resource Development of the Government of India, declared the institution a Deemed to be University, in the name and style of Christ University.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <img 
            src={aboutImage} 
            alt="Christ Building" 
            className="w-full h-auto object-cover rounded-[24px] shadow-sm" 
          />
        </div>
      </div>
    </section>
  );
}
