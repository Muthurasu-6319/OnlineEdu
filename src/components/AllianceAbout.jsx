import React from 'react';
import aboutImage from '../assets/allaince/image 3 (8).png';

export default function AllianceAbout() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a304e]">
            About Alliance University
          </h2>
          <p className="text-[#374151] font-medium leading-relaxed">
            Alliance University, established in 2010 in Bengaluru, is Karnataka's first private university. It is a multidisciplinary institution offering undergraduate, postgraduate, and doctoral degree programs across business, engineering, law, liberal arts, design, and economics.
          </p>
          <p className="text-[#374151] font-medium leading-relaxed">
            The university emphasizes transdisciplinary learning, research innovation, and a strong global outlook with over 80 international university partnerships offering semester exchanges, dual-degree pathways, and international internships. Recognized by the UGC and accredited with a NAAC 'A+' Grade, Alliance University features state-of-the-art campus infrastructure and active industry linkages to support high student employability.
          </p>
          
          <div className="mt-4 w-full">
            <h3 className="text-lg font-bold text-[#2ca785] mb-3">Accreditations / Rankings</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>NAAC A+ Accredited</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>NIRF Rankings:</strong> #20 in Law, #71 in Management, 151–200 Band in University Category</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>UGC Recognized:</strong> First Private University in Karnataka</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>QS Asia University Rankings:</strong> Ranked #851–900 in Asia</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>QS I-GAUGE:</strong> Overall Diamond Rating</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#374151]">
                <span className="text-[#2ca785] font-bold mt-0.5">•</span>
                <span><strong>Times Ranking:</strong> #7 in Engineering</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2">
          <img 
            src={aboutImage} 
            alt="About Alliance University" 
            className="w-full h-auto rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
