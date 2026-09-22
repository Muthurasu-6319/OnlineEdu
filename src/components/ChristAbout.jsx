import React from 'react';
import aboutImage from '../assets/Christ/image 3 (3).png';

export default function ChristAbout() {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Text */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold text-[#111827]">
            About CHRIST (Deemed to be University)
          </h2>
          <p className="text-[13px] font-medium text-slate-800 leading-[1.8] text-justify tracking-tight">
            CHRIST (Deemed to be University) was established in 1969 as Christ College and was declared a Deemed to be University by the Ministry of HRD, Government of India, in 2008. Built on a vision of "Excellence and Service," it is one of India's premier multi-disciplinary higher education institutions, offering comprehensive undergraduate, postgraduate, and doctoral programs across campuses in Bengaluru, Delhi-NCR, and Pune.
          </p>
          <p className="text-[13px] font-medium text-slate-800 leading-[1.8] text-justify tracking-tight">
            CHRIST emphasizes industry-integrated education, holistic development, and global academic partnerships. Recognized globally and nationally for academic rigor, the university consistently ranks among top institutions in major evaluations, including the Times Higher Education (THE) Asia Rankings, QS World & Asia University Rankings, WURI (World University Rankings for Innovation), and India Today-MDRA Best Colleges survey.
          </p>
          
          <div className="mt-4">
            <h3 className="text-lg font-bold text-[#2ca785] mb-3">Accreditations / Rankings</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>NAAC A+ Accredited</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>NIRF Rankings:</strong> Ranked #63 among Universities in India</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>UGC & AICTE Approved:</strong> UGC Deemed-to-be University with AICTE, BCI, and COA approvals</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>THE Asia Rankings 2026:</strong> Ranked in Times Higher Education Asia University Rankings</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>WURI 2026:</strong> World University Rankings for Innovation</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>QS Global MBA Rankings 2027:</strong> Ranked 51= in Asia</span>
              </li>
            </ul>
          </div>
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
