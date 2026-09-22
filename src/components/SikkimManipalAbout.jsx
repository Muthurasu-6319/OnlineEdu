import React from 'react';
import aboutImage from '../assets/Sikkim Manipal/image 3 (2).png';

export default function SikkimManipalAbout() {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Text */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold text-[#111827]">
            About Sikkim Manipal University (Campus & Online)
          </h2>
          <p className="text-[13px] font-medium text-slate-800 leading-[1.8] text-justify tracking-tight">
            Sikkim Manipal University (SMU), delivered through Online Manipal, brings quality higher education within reach through 100% flexible digital degree programs. Recognized as the top private university in North East India and holding a prestigious NAAC A+ accreditation, SMU offers UGC-entitled undergraduate and postgraduate courses—including MBA, BBA, MCA, MA, BCom, and MCom—that carry equal weight to on-campus degrees.
          </p>
          <p className="text-[13px] font-medium text-slate-800 leading-[1.8] text-justify tracking-tight">
            Designed for both aspiring students and working professionals, SMU’s online platform combines an industry-relevant curriculum with experienced faculty mentorship and access to the vast Manipal alumni network. To ensure seamless learning, the university provides affordable tuition starting at low monthly EMIs, attractive scholarship opportunities, and comprehensive 100% placement support to help learners advance their careers globally.
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
                <span><strong>UGC-Entitled & AICTE Compliant</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>NIRF Rank 151-200</strong> (Amongst India's Top 200 Universities)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>Rank 1:</strong> Top Private University in North East India</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>Rank 1:</strong> Top Private Multidisciplinary Universities in Eastern India</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>Rank 330:</strong> Amongst South Asia's Top Universities</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>Rank 373:</strong> Global Top 500 Innovative Universities</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>Rank 801+:</strong> Asia University Rankings</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>Degrees Evaluated by WES</strong> (World Education Services)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <img 
            src={aboutImage} 
            alt="Sikkim Manipal Building" 
            className="w-full h-auto object-cover rounded-[24px] shadow-sm" 
          />
        </div>
      </div>
    </section>
  );
}
