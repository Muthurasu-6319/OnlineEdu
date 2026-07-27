import React, { useState, useEffect } from 'react';
import aboutHeroBg from '../assets/About/image 20.png';

export default function AboutHero({ onEnquiryClick }) {
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
          {/* Full background image containing background waves and graduate student */}
          <img 
            src={aboutHeroBg} 
            alt="About Us Hero Background" 
            className="absolute inset-0 w-[1920px] h-[933px] object-cover pointer-events-none"
          />

          {/* Ellipse 8319: Blue Glow Blur Overlay */}
          <div 
            className="absolute rounded-full pointer-events-none mix-blend-normal"
            style={{
              width: '1311px',
              height: '1014px',
              left: '-325px',
              top: '215px',
              background: '#005FFF',
              filter: 'blur(300px)',
              opacity: 0.85,
              zIndex: 5
            }}
          />
          
          {/* Left Column Content overlay */}
          <div 
            className="absolute flex flex-col space-y-6 z-10 text-white"
            style={{ left: '115px', top: '242px', width: '780px' }}
          >
            <span className="text-sm font-bold tracking-widest text-[#2ca785] uppercase">
              EMPOWERING EDUCATION FOR ALL
            </span>
            
            <h1 className="text-[78px] font-extrabold tracking-tight leading-none text-white font-outfit">
              ABOUT US <br />
              VNET DISTANCE <br />
              <span className="text-white">ACADEMY</span>
            </h1>

            <p className="text-lg font-bold tracking-wide text-white font-sans max-w-xl leading-relaxed mt-2">
              INDIA'S FIRST UNIVERSITY TO GET APPROVAL TO OFFER ONLINE DEGREE
            </p>
          </div>

          {/* Nested Arch Shapes decoration */}
          <div className="absolute bottom-0 pointer-events-none z-10" style={{ left: '716px', width: '313px', height: '359px' }}>
            <div 
              className="absolute bottom-0 left-0 border-white/20"
              style={{ 
                width: '313px', 
                height: '359px', 
                borderWidth: '3px 3px 0 3px', 
                borderRadius: '500px 500px 0 0' 
              }}
            />
            <div 
              className="absolute bottom-0 border-white/20"
              style={{ 
                width: '271px', 
                height: '338px', 
                left: '21px',
                borderWidth: '3px 3px 0 3px', 
                borderRadius: '500px 500px 0 0' 
              }}
            />
            <div 
              className="absolute bottom-0 border-white/20"
              style={{ 
                width: '225px', 
                height: '318px', 
                left: '44px',
                borderWidth: '3px 3px 0 3px', 
                borderRadius: '500px 500px 0 0' 
              }}
            />
          </div>

        </div>
      </section>

      {/* Mobile/Tablet Hero version */}
      <div className="relative w-full lg:hidden text-white font-outfit overflow-hidden">
        
        {/* Container with background image */}
        <div 
          className="px-6 pt-12 pb-12 relative overflow-hidden flex flex-col justify-between"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 95, 255, 0.75) 0%, rgba(0, 0, 0, 0.35) 100%), url(${aboutHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '450px'
          }}
        >
          
          {/* Nested Arches at background */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-10 z-0" style={{ width: '220px', height: '250px' }}>
            <div className="absolute inset-0 border-[2px] border-white rounded-t-full" />
            <div className="absolute inset-4 border-[2px] border-white rounded-t-full" />
            <div className="absolute inset-8 border-[2px] border-white rounded-t-full" />
          </div>

          {/* Heading content */}
          <div className="relative z-10 flex flex-col space-y-4 my-auto">
            <span className="text-[10px] font-bold tracking-widest text-[#2ca785] uppercase">
              EMPOWERING EDUCATION FOR ALL
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none text-white">
              ABOUT US <br />
              VNET DISTANCE <br />
              <span>ACADEMY</span>
            </h1>

            <p className="text-sm font-bold tracking-wide text-white font-sans max-w-md leading-relaxed">
              INDIA'S FIRST UNIVERSITY TO GET APPROVAL TO OFFER ONLINE DEGREE
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
