import React from 'react';
import aboutImage from '../assets/Jain/image 3 (9).png';

export default function JainAbout() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a304e]">
            About Jain University Online
          </h2>
          <p className="text-[#374151] font-medium leading-relaxed">
            Ranked among the top universities in India and considered a cerebral destination for students across the world and Bangalore in particular, for its illustrious history of developing talent, JAIN (Deemed-to-be University) is a hub for learning in every sense of the word.
            <br/><br/>
            The University which is based in Bangalore – the Silicon Valley of India, offers a conducive environment for learning, be it academically or extracurricular activities. Known for its emphasis on education, entrepreneurship, research and sports, JAIN (Deemed-to-be University) has some of the best minds in the educational and research fields, and centers that inspire entrepreneurship and groundbreaking work to simplify and manage life better.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2">
          <img 
            src={aboutImage} 
            alt="About Jain University" 
            className="w-full h-auto rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
