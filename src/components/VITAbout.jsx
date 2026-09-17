import React from 'react';
import aboutImage from '../assets/VIT/image 3 (1).png';

export default function VITAbout() {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Text */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold text-[#111827]">
            About Vit University Online
          </h2>
          <p className="text-[13px] font-medium text-slate-800 leading-[1.8] text-justify tracking-tight">
            VIT was established with the aim of providing quality higher education on par with international standards. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis.The campus has a cosmopolitan atmosphere with students from all corners of the globe. Experienced and learned teachers are strongly encouraged to nurture the students. The global standards set at VIT in the field of teaching and research spur us on in our relentless pursuit of excellence. In fact, it has become a way of life for us. The highly motivated youngsters on the campus are a constant source of pride. Our Memoranda of Understanding with various international universities are our major strength. They provide for an exchange of students and faculty and encourage joint research projects for the mutual benefit of these universities. Many of our students, who pursue their research projects in foreign universities, bring high quality to their work and esteem to India and have done us proud. With steady steps, we continue our march forward. We look forward to meeting you here at VIT.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <img 
            src={aboutImage} 
            alt="VIT Building" 
            className="w-full h-auto object-cover rounded-[24px] shadow-sm" 
          />
        </div>
      </div>
    </section>
  );
}
