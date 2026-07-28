import React, { useState, useEffect } from 'react';
import { Search, Star } from 'lucide-react';
import studentImg from '../assets/student.png';

export default function Hero({ onEnquiryClick }) {
  const [scale, setScale] = useState(1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showMobileSuggestions, setShowMobileSuggestions] = useState(false);

  const suggestions = [
    { label: 'UG Degrees (B.A, B.Sc, B.Com, BBA, BCA)', link: '#alagappa' },
    { label: 'PG Degrees (M.A, M.Sc, M.Com, MBA, MCA)', link: '#alagappa' },
    { label: '10th & 12th NIOS/BOSSE Exams', link: '#board' },
  ];

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
      {/* Desktop View (auto-scaled canvas) */}
      <section 
        className="relative w-full bg-[#FFCF3E] overflow-hidden"
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
                <a 
                  href="#course" 
                  className="border-2 border-white hover:bg-white hover:text-[#31108f] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 inline-block text-center"
                >
                  View Courses
                </a>
                <button 
                  onClick={onEnquiryClick}
                  className="text-white hover:text-indigo-200 font-medium underline underline-offset-4 transition-colors cursor-pointer bg-transparent border-none outline-none"
                >
                  Get Free Consultation
                </button>
              </div>

              {/* Search Bar Input */}
              <div className="pt-6 relative w-[540px]" style={{ zIndex: 40 }}>
                <div className="bg-white p-2 rounded-2xl shadow-xl flex items-center justify-between border border-white/20">
                  <input 
                    type="text" 
                    placeholder="What do you want to learn today?"
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                    className="w-full px-4 text-slate-800 placeholder-slate-400 focus:outline-none text-base"
                  />
                  <button className="bg-gradient-to-r from-[#3b59df] to-[#513be4] text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity">
                    <Search size={18} />
                    <span>Search</span>
                  </button>
                </div>
                {/* Suggestion Dropdown */}
                {showSuggestions && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                    {suggestions.map((s, i) => (
                      <a
                        key={i}
                        href={s.link}
                        onMouseDown={(e) => e.preventDefault()}
                        className="flex items-center gap-3 px-5 py-3.5 hover:bg-indigo-50 transition-colors border-b border-slate-50 last:border-0 group"
                      >
                        <Search size={14} className="text-indigo-400 shrink-0" />
                        <span className="text-slate-700 text-sm font-semibold group-hover:text-indigo-700 transition-colors">{s.label}</span>
                      </a>
                    ))}
                  </div>
                )}
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
    </>
  );
}
