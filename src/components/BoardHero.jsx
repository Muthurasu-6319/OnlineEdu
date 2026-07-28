import React, { useState, useEffect } from 'react';
import boardHeroBg from '../assets/10th&12th/Rectangle 8668 (1).png';

export default function BoardHero() {
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
            src={boardHeroBg} 
            alt="10th & 12th Board Exam Hero" 
            className="absolute inset-0 w-[1920px] h-[933px] object-cover pointer-events-none"
          />
        </div>
      </section>
    </>
  );
}
