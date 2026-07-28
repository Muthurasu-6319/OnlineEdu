import React, { useState, useEffect } from 'react';
import amityHeroBg from '../assets/Amity/image 19.png';
import logo1 from '../assets/Amity/image 2.png'; // IBM
import logo2 from '../assets/Amity/image 3.png'; // wipro
import logo3 from '../assets/Amity/image 4.png'; // THE TIMES OF INDIA
import logo4 from '../assets/Amity/image 5.png'; // SAMSUNG
import logo5 from '../assets/Amity/image 6.png'; // NOKIA
import logo6 from '../assets/Amity/image 7.png'; // SBI Life
import logo7 from '../assets/Amity/image 8.png'; // Paytm
import logo8 from '../assets/Amity/image 9.png'; // HDB FINANCIAL SERVICES

export default function AmityHero() {
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

  const partnerLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <>
      <section 
        className="relative w-full overflow-hidden bg-white"
        style={{ height: `${1104 * scale}px`, transition: 'height 0.1s ease-out' }}
      >
        <div 
          className="relative origin-top-left"
          style={{ 
            width: '1920px', 
            height: '1104px',
            transform: `scale(${scale})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src={amityHeroBg} 
            alt="Amity University Online Hero" 
            className="absolute inset-0 w-[1920px] h-[1104px] object-cover pointer-events-none"
          />
        </div>
      </section>

      {/* Yellow Partners Banner (shows on both desktop and mobile below hero) */}
      <div className="bg-[#ffcb05] py-6 border-b border-yellow-400">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="h-10 md:h-12 flex items-center justify-center bg-white px-4 py-2 rounded-lg shadow-sm border border-yellow-200">
              <img 
                src={logo} 
                alt={`Amity Partner Logo ${index + 1}`} 
                className="max-h-full max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
