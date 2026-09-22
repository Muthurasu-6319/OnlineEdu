import React from 'react';
import aboutImage from '../assets/Manipal/image 3 (2).png';

export default function ManipalAbout() {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Text */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold text-[#111827]">
            About Manipal University Jaipur (Campus & Online)
          </h2>
          <p className="text-[13px] font-medium text-slate-800 leading-[1.8] text-justify tracking-tight">
            Manipal University Jaipur (MUJ) was established in 2011 on an invitation from the Government of Rajasthan as a self-financed State Private University. Built on the 70+ year academic legacy of the world-renowned Manipal Education Group, MUJ is Rajasthan’s first NAAC A+ accredited private university and is ranked among India's top institutions for quality education, research, and innovation.
          </p>
          <p className="text-[13px] font-medium text-slate-800 leading-[1.8] text-justify tracking-tight">
            The university offers UGC-entitled undergraduate, postgraduate, and doctoral degrees across multiple disciplines—including Management, Computer Applications, Engineering, Law, Design, and Humanities. Through its digital platform, Online Manipal, MUJ extends these programs fully online to learners and working professionals nationwide. Students gain access to industry-aligned curricula, expert faculty, globally recognized accreditations (WES, ICAS, IQAS), 100% placement assistance, and a global network of over 175,000 alumni.
          </p>
          
          <div className="mt-4">
            <h3 className="text-lg font-bold text-[#2ca785] mb-3">Accreditations / Rankings</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>NAAC A+ Accredited:</strong> Rajasthan's 1st NAAC A+ accredited private university.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>NIRF Rank 58:</strong> Ranked 58th among India's top universities.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>UGC-Entitled & AICTE Compliant:</strong> Online degrees are equivalent to on-campus degrees and meet all AICTE norms.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>Globally Evaluated:</strong> Degrees are evaluated and recognized by WES, ICAS, IQAS, and ACU.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <img 
            src={aboutImage} 
            alt="Manipal Building" 
            className="w-full h-auto object-cover rounded-[24px] shadow-sm" 
          />
        </div>
      </div>
    </section>
  );
}
