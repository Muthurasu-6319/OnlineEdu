import React, { useState, useEffect } from 'react';
import { Search, Star } from 'lucide-react';
import alagappaHeroBg from '../assets/Alagappa-University/hero.png';

export default function AlagappaHero({ onEnquiryClick }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1920) {
        setScale(Math.max(0.5, width / 1920));
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Desktop View (auto-scaled canvas) */}
      <section 
        className="relative w-full overflow-hidden hidden lg:block"
        style={{ height: `${933 * scale}px`, transition: 'height 0.1s ease-out' }}
      >
        {/* 1920px Centered Canvas Container with Dynamic Scale */}
        <div 
          className="relative origin-top-left"
          style={{ 
            width: '1920px', 
            height: '933px',
            transform: `scale(${scale})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Full background image containing background, grid, and student */}
          <img 
            src={alagappaHeroBg} 
            alt="Alagappa University Hero Background" 
            className="absolute inset-0 w-[1920px] h-[933px] object-cover pointer-events-none"
          />
          
          {/* Left Column Content overlay */}
          <div 
            className="absolute flex flex-col space-y-6 z-10"
            style={{ left: '115px', top: '242px', width: '680px' }}
          >
            <span className="text-sm font-bold tracking-widest text-[#f472b6] uppercase">
              EMPOWERING EDUCATION FOR ALL
            </span>
            
            <h1 className="text-[78px] font-extrabold tracking-tight leading-none text-white font-outfit">
              Alagappa <br />
              <span className="text-white">University</span>
            </h1>
            
            <p className="text-xl font-semibold tracking-wide text-rose-100 uppercase">
              UGC APPROVED GOVERNMENT UNIVERSITIES
            </p>

            {/* View Courses & Consultation Buttons */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a 
                href="#course" 
                className="border-2 border-white hover:bg-white hover:text-[#7C1844] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 inline-block text-center"
              >
                View Courses
              </a>
              <button 
                onClick={onEnquiryClick}
                className="text-white hover:text-rose-200 font-medium underline underline-offset-4 transition-colors cursor-pointer bg-transparent border-none outline-none"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Search Bar Input */}
            <div className="pt-6 relative w-[540px]">
              <div className="bg-white p-2 rounded-2xl shadow-xl flex items-center justify-between border border-white/20">
                <input 
                  type="text" 
                  placeholder="What do you want to learn today?" 
                  className="w-full px-4 text-slate-800 placeholder-slate-400 focus:outline-none text-base"
                />
                <button className="bg-gradient-to-r from-[#7C1844] to-[#3F1560] text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <Search size={18} />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>

          {/* Nested Arch Shapes decoration */}
          <div className="absolute bottom-0 pointer-events-none z-10" style={{ left: '716px', width: '313px', height: '359px' }}>
            <div 
              className="absolute bottom-0 left-0 border-white/30"
              style={{ 
                width: '313px', 
                height: '359px', 
                borderWidth: '3px 3px 0 3px', 
                borderRadius: '500px 500px 0 0' 
              }}
            />
            <div 
              className="absolute bottom-0 border-white/30"
              style={{ 
                width: '271px', 
                height: '338px', 
                left: '21px',
                borderWidth: '3px 3px 0 3px', 
                borderRadius: '500px 500px 0 0' 
              }}
            />
            <div 
              className="absolute bottom-0 border-white/30"
              style={{ 
                width: '225px', 
                height: '318px', 
                left: '44px',
                borderWidth: '3px 3px 0 3px', 
                borderRadius: '500px 500px 0 0' 
              }}
            />
          </div>

          {/* Floating Trust Card */}
          <div 
            className="absolute flex items-stretch gap-4 z-30"
            style={{ left: '840px', top: '425px', width: '272px', height: '145px' }}
          >
            <div className="relative w-[3px] bg-[#2ca785] flex-shrink-0">
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#2ca785] text-white rounded-full w-7 h-7 flex items-center justify-center border-2 border-[#7C1844]">
                <span className="text-sm font-bold font-serif leading-none mt-1">“</span>
              </div>
            </div>

            <div className="flex flex-col justify-between w-[240px]">
              <p className="text-[13px] text-slate-100 leading-normal font-sans">
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

      {/* Mobile/Tablet Hero version */}
      <div className="relative w-full lg:hidden text-slate-800 font-outfit overflow-hidden">
        
        {/* Container with background image */}
        <div 
          className="text-white px-6 pt-10 pb-0 relative overflow-hidden flex flex-col justify-between"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${alagappaHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          
          {/* Nested Arches at background */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-10 z-0" style={{ width: '220px', height: '250px' }}>
            <div className="absolute inset-0 border-[2px] border-white rounded-t-full" />
            <div className="absolute inset-4 border-[2px] border-white rounded-t-full" />
            <div className="absolute inset-8 border-[2px] border-white rounded-t-full" />
          </div>

          {/* Heading content */}
          <div className="relative z-10 flex flex-col space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-[#f472b6] uppercase">
              EMPOWERING EDUCATION FOR ALL
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none">
              Alagappa <br />
              <span className="text-white">University</span>
            </h1>
            <p className="text-sm font-semibold tracking-wide text-rose-100 uppercase">
              UGC APPROVED GOVERNMENT UNIVERSITIES
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#course" 
                className="border-2 border-white hover:bg-white hover:text-indigo-950 text-white font-semibold px-6 py-2 rounded-xl text-sm transition-all inline-block text-center"
              >
                View Courses
              </a>
              <button 
                onClick={onEnquiryClick}
                className="text-white hover:text-indigo-200 text-xs font-medium underline underline-offset-4 cursor-pointer bg-transparent border-none outline-none"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Search Input */}
            <div className="pt-4 max-w-md">
              <div className="bg-white p-1.5 rounded-xl flex items-center justify-between border border-white/20">
                <input 
                  type="text" 
                  placeholder="What do you want to learn today?" 
                  className="w-full px-3 text-slate-800 placeholder-slate-400 focus:outline-none text-xs"
                />
                <button className="bg-gradient-to-r from-[#7C1844] to-[#3F1560] text-white font-medium px-4 py-2 rounded-lg flex items-center gap-1 text-xs">
                  <Search size={14} />
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* Quote Card */}
            <div className="pt-6 pb-12 flex gap-3 max-w-sm">
              <div className="relative w-[2px] bg-[#2ca785] flex-shrink-0">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#2ca785] text-white rounded-full w-5 h-5 flex items-center justify-center border border-rose-950">
                  <span className="text-[10px] font-bold font-serif leading-none mt-0.5">“</span>
                </div>
              </div>
              <div>
                <p className="text-[11px] text-slate-200 leading-relaxed">
                  Vnet bharathidasan University and Educational Trust helps learners continue their education with recognized courses and easy EMI options.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs font-bold text-[#2ca785]">4.9</span>
                  <div className="flex text-[#2ca785] gap-0.5">
                    <Star size={10} fill="currentColor" className="stroke-none" />
                    <Star size={10} fill="currentColor" className="stroke-none" />
                    <Star size={10} fill="currentColor" className="stroke-none" />
                    <Star size={10} fill="currentColor" className="stroke-none" />
                    <Star size={10} fill="currentColor" className="stroke-none" opacity={0.5} />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
