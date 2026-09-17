import React from 'react';
import whyChooseImage from '../assets/Jain/image 9 (1).png';

export default function JainWhyChoose() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <img 
          src={whyChooseImage} 
          alt="Why Choose Jain University" 
          className="w-full h-auto rounded-2xl shadow-lg object-contain"
        />
      </div>
    </section>
  );
}
