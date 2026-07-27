import React from 'react';
import bduBoardImg from '../assets/Bharathithasan/image copy.png';

export default function BharathidasanDetails() {
  return (
    <section className="bg-white py-16 md:py-24 font-outfit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image Column (Portrait Card) */}
        <div className="w-full">
          <img 
            src={bduBoardImg} 
            alt="Bharathidasan University Board Sign" 
            className="w-full h-auto rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* Right Content Column */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2b6d] tracking-tight leading-tight">
            Bharathidasan University
          </h2>
          
          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed font-sans font-medium">
            <p>
              The Centre for Distance Education offers around 41 programmes including 20 UG, 21 PG in select disciplines including MCA and MBA programmes.
            </p>
            <p>
              Besides the conventional courses, the Centre for Distance Education is offering programmes in Computer Science and Applications, Information Technology, E-Commerce, Bank Management, Financial Management, Library and Information Science, Animation etc. The laboratory oriented programmes are meticulously planned and executed with the same vigor as regular programmes, without compromising the practical requirements.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
