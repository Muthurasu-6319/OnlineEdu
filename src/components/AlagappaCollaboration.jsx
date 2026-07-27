import React from 'react';
import alagappaEntranceImg from '../assets/Alagappa-University/Rectangle 20 (1).png';

export default function AlagappaCollaboration() {
  return (
    <section className="bg-white py-16 md:py-24 font-outfit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Image Column */}
        <div className="w-full md:col-span-5">
          <img 
            src={alagappaEntranceImg} 
            alt="Alagappa University Campus Entrance" 
            className="w-full h-auto rounded-[32px] shadow-md object-cover"
          />
        </div>

        {/* Right Content Column */}
        <div className="flex flex-col space-y-6 md:col-span-7">
          <div className="space-y-2">
            <span className="text-[#2ca785] font-bold text-lg block">
              Collaboration!
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2b6d] tracking-tight leading-tight">
              Association with Alagappa University
            </h2>
          </div>
          
          <div className="text-slate-600 text-sm leading-relaxed space-y-4 font-sans">
            <p>
              Alagappa University was brought into existence by a Special Act of the Government of Tamil Nadu in May 1985 with the objective of fostering research, development and dissemination of knowledge in various branches of learning. Alagappa University is recognized by the University Grants Commission (UGC) of India. The University has 44 Departments, 3 Academic Centres and 2 Constituent Colleges (AUCE, AUCPE) on its campus. 45 Colleges located in the districts of Sivaganga and Ramanathapuram are Affiliated to the University. The University is offering UG & PG programmes in the four Faculties (Arts, Science, Education, Management).
            </p>
            <p>
              The University offers education through Regular, Distance, Online and Collaborative modes. Through all modes of education, the University caters to the needs of the student community of around 1.12 lakhs. As a member of the Association of Indian Universities (AIU), as well as the member of the Association of Commonwealth Universities (ACU), it has rewarding relations with other academic institutions, research laboratories and industrial establishments that promise a spectacular future.
            </p>
            <p>
              The University is having International Collaborations with Universities / Institutions of Higher Learning in countries like U.S.A, UK, Australia, Singapore, China, Malaysia and South Korea.
            </p>
            <p className="italic font-medium">
              The University's motto is "Excellence in Action" and the University keeps before it the vision of excellence in all spheres of its action.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
