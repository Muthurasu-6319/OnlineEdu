import React, { useState, useEffect } from 'react';
import { Search, Star } from 'lucide-react';
import studentImg from '../assets/student.png';

export default function Hero() {
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
        className="relative w-full bg-[#FFCF3E] overflow-hidden hidden lg:block"
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
          
          {/* Main Purple Gradient Container */}
          <div 
            className="custom-gradient-bg text-white absolute left-0 bottom-0 flex items-center"
            style={{ 
              top: '122px',
              width: '1690px', // 1920px - 230px shapes column
              height: '811px'  // 933px - 122px header
            }}
          >
            
            {/* Left Column Content (Exactly matching Figma position) */}
            <div 
              className="absolute flex flex-col space-y-6"
              style={{ left: '115px', top: '120px', width: '680px' }}
            >
              <span className="text-sm font-bold tracking-widest text-[#a78bfa] uppercase">
                EMPOWERING EDUCATION FOR ALL
              </span>
              
              <h1 className="text-6xl font-extrabold tracking-tight leading-none text-white font-outfit">
                DISTANCE & ONLINE <br />
                <span className="text-white">EDUCATION</span>
              </h1>
              
              <p className="text-xl font-semibold tracking-wide text-indigo-100 uppercase">
                UGC APPROVED GOVERNMENT UNIVERSITIES
              </p>

              {/* View Courses & Consultation Buttons */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <button className="border-2 border-white hover:bg-white hover:text-indigo-950 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                  View Courses
                </button>
                <a href="#consultation" className="text-white hover:text-indigo-200 font-medium underline underline-offset-4 transition-colors">
                  Get Free Consultation
                </a>
              </div>

              {/* Search Bar Input */}
              <div className="pt-6 relative w-[540px]">
                <div className="bg-white p-2 rounded-2xl shadow-xl flex items-center justify-between border border-white/20">
                  <input 
                    type="text" 
                    placeholder="What do you want to learn today?" 
                    className="w-full px-4 text-slate-800 placeholder-slate-400 focus:outline-none text-base"
                  />
                  <button className="bg-gradient-to-r from-[#3b59df] to-[#513be4] text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity">
                    <Search size={18} />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Nested Arch Shapes from Figma (Aligned perfectly at left: 716px relative to 1920px screen width) */}
            <div className="absolute bottom-0 pointer-events-none z-10" style={{ left: '716px', width: '313px', height: '359px' }}>
              {/* Outer Arch */}
              <div 
                className="absolute bottom-0 left-0 border-white/30"
                style={{ 
                  width: '313px', 
                  height: '359px', 
                  borderWidth: '3px 3px 0 3px', 
                  borderRadius: '500px 500px 0 0' 
                }}
              />
              {/* Middle Arch */}
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
              {/* Inner Arch */}
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

            {/* Floating Trust Card (Left of the student, transparent layout - EXACT coordinate left: 740px, top: 303px relative to top: 122px) */}
            <div 
              className="absolute flex items-stretch gap-4 z-30"
              style={{ left: '740px', top: '303px', width: '272px', height: '145px' }}
            >
              {/* Vertical Green Line with Quote Circle */}
              <div className="relative w-[3px] bg-[#2ca785] flex-shrink-0">
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#2ca785] text-white rounded-full w-7 h-7 flex items-center justify-center border-2 border-[#153fb4]">
                  <span className="text-sm font-bold font-serif leading-none mt-1">“</span>
                </div>
              </div>

              {/* Text Content */}
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

            {/* Three Vertical Orange Dots */}
            <div className="absolute flex flex-col space-y-4 z-30" style={{ left: '1610px', top: '330px' }}>
              <div className="w-4 h-4 bg-[#FF8A00] rounded-full shadow-lg"></div>
              <div className="w-4 h-4 bg-[#FF8A00] rounded-full shadow-lg"></div>
              <div className="w-4 h-4 bg-[#FF8A00] rounded-full shadow-lg"></div>
            </div>

            {/* Glow behind Student Image (Ellipse 8319) - EXACT position */}
            <div 
              className="absolute pointer-events-none rounded-full"
              style={{
                width: '740px',
                height: '692px',
                background: '#005FFF',
                filter: 'blur(150px)', // reduced blur slightly to make the shape more visible as a circle glow
                opacity: '1',
                left: '980px',
                top: '250px',
                zIndex: 15
              }}
            />

            {/* Main Student Image (Large absolute positioning - EXACT position) */}
            <div 
              className="absolute flex items-end justify-center pointer-events-none z-20"
              style={{
                left: '1020px',
                bottom: '-60px',
                width: '658px',
                height: '908px',
              }}
            >
              <img 
                src={studentImg} 
                alt="Student with laptop" 
                className="w-full h-full object-contain object-bottom transform hover:scale-102 transition-transform duration-500 ease-out" 
              />
            </div>

          </div>

          {/* Geometric Background Shapes (Right side decoration - aligned to the right edge of the yellow parent container) */}
          <div 
            className="absolute right-0 bottom-0 w-[230px] flex flex-col select-none z-10"
            style={{ top: '122px', height: '811px' }}
          >
            {/* Shape 1: Top Green/Blue diagonal split */}
            <div 
              style={{ 
                width: '230.33px', 
                height: '234px', 
                background: 'linear-gradient(135deg, #5AB48E 50%, #0854D5 50%)' 
              }}
            />
            {/* Shape 2: Blue/Yellow split */}
            <div 
              style={{ 
                width: '230.33px', 
                height: '234px', 
                background: 'linear-gradient(to right, #206CEC 50%, #FFCF3E 50%)' 
              }}
            />
            {/* Shape 3: Solid Green */}
            <div 
              style={{ 
                width: '230.33px', 
                height: '233.97px', 
                backgroundColor: '#5AB48E' 
              }}
            />
            {/* Shape 4: Bottom Peach Triangle */}
            <div 
              style={{ 
                width: '230.33px', 
                height: '234px', 
                background: 'linear-gradient(135deg, #FFA372 50%, transparent 50%)' 
              }}
            />
          </div>

        </div>
      </section>

      {/* Mobile/Tablet Hero version (Fully aligned to match the Figma visual elements beautifully) */}
      <div className="relative w-full bg-[#FFCF3E] lg:hidden text-slate-800 font-outfit overflow-hidden">
        
        {/* Yellow admissions strip for mobile */}
        <div className="h-10 w-full flex items-center justify-center px-4 text-xs font-semibold text-slate-800">
          <span>⚡ Admissions Open for 2026-2027</span>
        </div>

        {/* Purple background container */}
        <div className="custom-gradient-bg text-white px-6 pt-10 pb-6 relative overflow-hidden">
          
          {/* Nested Arches at background */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-10 z-0" style={{ width: '220px', height: '250px' }}>
            <div className="absolute inset-0 border-[2px] border-white rounded-t-full" />
            <div className="absolute inset-4 border-[2px] border-white rounded-t-full" />
            <div className="absolute inset-8 border-[2px] border-white rounded-t-full" />
          </div>

          {/* Glowing background behind student in mobile */}
          <div 
            className="absolute rounded-full bg-[#005FFF] pointer-events-none z-10" 
            style={{
              width: '320px',
              height: '320px',
              filter: 'blur(70px)',
              opacity: '0.8',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />

          {/* Heading content */}
          <div className="relative z-10 flex flex-col space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-[#a78bfa] uppercase">
              EMPOWERING EDUCATION FOR ALL
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none">
              DISTANCE & ONLINE <br />
              <span className="text-white">EDUCATION</span>
            </h1>
            <p className="text-sm font-semibold tracking-wide text-indigo-100 uppercase">
              UGC APPROVED GOVERNMENT UNIVERSITIES
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="border-2 border-white hover:bg-white hover:text-indigo-950 text-white font-semibold px-6 py-2 rounded-xl text-sm transition-all">
                View Courses
              </button>
              <a href="#consultation" className="text-white hover:text-indigo-200 text-xs font-medium underline underline-offset-4">
                Get Free Consultation
              </a>
            </div>

            {/* Search Input */}
            <div className="pt-4 max-w-md">
              <div className="bg-white p-1.5 rounded-xl flex items-center justify-between border border-white/20">
                <input 
                  type="text" 
                  placeholder="What do you want to learn today?" 
                  className="w-full px-3 text-slate-800 placeholder-slate-400 focus:outline-none text-xs"
                />
                <button className="bg-gradient-to-r from-[#3b59df] to-[#513be4] text-white font-medium px-4 py-2 rounded-lg flex items-center gap-1 text-xs">
                  <Search size={14} />
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* Quote Card (Clean, aligned left of student) */}
            <div className="pt-6 flex gap-3 max-w-sm">
              <div className="relative w-[2px] bg-[#2ca785] flex-shrink-0">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#2ca785] text-white rounded-full w-5 h-5 flex items-center justify-center border border-indigo-950">
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

          {/* Student Image inside the purple container */}
          <div className="relative mt-8 flex justify-center z-20">
            <img 
              src={studentImg} 
              alt="Student" 
              className="w-[280px] sm:w-[320px] object-contain object-bottom" 
            />
          </div>

        </div>

      </div>
    </>
  );
}
