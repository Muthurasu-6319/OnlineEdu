import React, { useState, useEffect } from 'react';
import { Search, Star } from 'lucide-react';
import bduHeroBg from '../assets/Bharathithasan/Rectangle 8668.png';

export default function BharathidasanHero({ onEnquiryClick }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScale(width / 1920);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <section 
        className="relative w-full overflow-hidden bg-white"
        style={{ height: `${933 * scale}px`, transition: 'height 0.1s ease-out' }}
      >
        <div 
          className="relative origin-top-left"
          style={{ 
            width: '1920px', 
            height: '933px',
            transform: `scale(${scale})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src={bduHeroBg} 
            alt="Bharathidasan University Hero Background" 
            className="absolute inset-0 w-[1920px] h-[933px] object-cover pointer-events-none"
          />
          
          <div 
            className="absolute flex flex-col space-y-6 z-10"
            style={{ left: '115px', top: '242px', width: '680px' }}
          >
            <span className="text-sm font-bold tracking-widest text-[#0e7490] uppercase">
              EMPOWERING EDUCATION FOR ALL
            </span>
            
            <h1 className="text-[78px] font-extrabold tracking-tight leading-none text-slate-900 font-outfit">
              Bharathidasan <br />
              <span className="text-slate-900">University</span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a 
                href="#course" 
                className="border-2 border-slate-400 hover:bg-slate-900 hover:text-white text-slate-800 font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 inline-block text-center bg-white/20"
              >
                View Courses
              </a>
              <button 
                onClick={onEnquiryClick}
                className="text-slate-700 hover:text-slate-950 font-semibold underline underline-offset-4 transition-colors cursor-pointer bg-transparent border-none outline-none"
              >
                Get Free Consultation
              </button>
            </div>

            <div className="pt-6 relative w-[540px]">
              <div className="bg-white p-2 rounded-2xl shadow-xl flex items-center justify-between border border-slate-200">
                <input 
                  type="text" 
                  placeholder="What do you want to learn today?" 
                  className="w-full px-4 text-slate-800 placeholder-slate-400 focus:outline-none text-base"
                />
                <button className="bg-gradient-to-r from-[#213fbb] to-[#6c3fda] text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <Search size={18} />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 pointer-events-none z-10" style={{ left: '716px', width: '313px', height: '359px' }}>
            <div 
              className="absolute bottom-0 left-0 border-slate-400/20"
              style={{ 
                width: '313px', 
                height: '359px', 
                borderWidth: '3px 3px 0 3px', 
                borderRadius: '500px 500px 0 0' 
              }}
            />
            <div 
              className="absolute bottom-0 border-slate-400/20"
              style={{ 
                width: '271px', 
                height: '338px', 
                left: '21px',
                borderWidth: '3px 3px 0 3px', 
                borderRadius: '500px 500px 0 0' 
              }}
            />
            <div 
              className="absolute bottom-0 border-slate-400/20"
              style={{ 
                width: '225px', 
                height: '318px', 
                left: '44px',
                borderWidth: '3px 3px 0 3px', 
                borderRadius: '500px 500px 0 0' 
              }}
            />
          </div>

          <div 
            className="absolute flex items-stretch gap-4 z-30"
            style={{ left: '840px', top: '425px', width: '272px', height: '145px' }}
          >
            <div className="relative w-[3px] bg-[#2ca785] flex-shrink-0">
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#2ca785] text-white rounded-full w-7 h-7 flex items-center justify-center border-2 border-slate-100">
                <span className="text-sm font-bold font-serif leading-none mt-1">“</span>
              </div>
            </div>

            <div className="flex flex-col justify-between w-[240px]">
              <p className="text-[13px] text-slate-700 leading-normal font-sans">
                Vnet bharathidasan University and Educational Trust helps learners continue their education with recognized courses and easy EMI options.
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm font-bold text-[#2ca785]">4.9</span>
                <div className="flex text-[#2ca785] gap-0.5">
                  <Star size={12} fill="currentColor" className="stroke-none" />
                  <Star size={12} fill="currentColor" className="stroke-none" />
                  <Star size={12} fill="currentColor" className="stroke-none" />
                  <Star size={12} fill="currentColor" className="stroke-none" />
                  <Star size={12} fill="currentColor" className="stroke-none" opacity={0.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
