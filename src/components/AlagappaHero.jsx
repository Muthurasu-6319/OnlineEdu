import React, { useState, useEffect } from 'react';
import { Search, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import alagappaHeroBg from '../assets/Alagappa-University/hero.png';
import alagappaHeroBg2 from '../assets/Alagappa-University/image copy.png';

export default function AlagappaHero({ onEnquiryClick }) {
  const [scale, setScale] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [alagappaHeroBg, alagappaHeroBg2];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScale(width / 1920);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <section 
        className="relative w-full overflow-hidden bg-[#2a0a22]"
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
          {slides.map((slide, index) => (
            <img 
              key={index}
              src={slide} 
              alt={`Alagappa University Hero Background ${index + 1}`} 
              className={`absolute inset-0 w-[1920px] h-[933px] object-cover pointer-events-none transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
              style={{ objectPosition: 'center top' }}
            />
          ))}

          {/* Slider Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all cursor-pointer"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all cursor-pointer"
          >
            <ChevronRight size={32} />
          </button>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-[200px] left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
              />
            ))}
          </div>

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
    </>
  );
}
