import React, { useState, useEffect } from 'react';
import aboutHeroBg from '../assets/About/image 20.png';

export default function AboutHero({ onEnquiryClick }) {
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
        className="relative w-full overflow-hidden bg-[#001e78]"
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
            src={aboutHeroBg} 
            alt="About Us Hero Background" 
            className="absolute inset-0 w-[1920px] h-[933px] object-cover pointer-events-none"
          />

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
    </>
  );
}

