import React from 'react';
import { FileText } from 'lucide-react';
import thumbsUpImg from '../assets/10th&12th/Rectangle 8707.png';

export default function BoardSteps() {
  const steps = [
    {
      title: 'Free Counselling',
      description: 'Free counselling for all learners to decide the right course as per their interest & as per market demand.'
    },
    {
      title: 'College Selection',
      description: 'We have wide range colleges to select from, Student can choose as per their eligibility.'
    },
    {
      title: 'Fee Payment',
      description: 'Students have option to pay fees through both online & offline medium'
    },
    {
      title: 'Onboarding Kit',
      description: 'On Admission completion students get an onboarding kit which includes all the required material'
    },
    {
      title: 'Classes Start',
      description: 'At last your classes begins as per the schedule provided'
    }
  ];

  return (
    <section className="bg-[#e6f2ff] py-16 md:py-24 font-outfit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Image Column */}
        <div className="w-full">
          <img 
            src={thumbsUpImg} 
            alt="Smiling students holding folders giving thumbs up" 
            className="w-full h-auto rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* Right Content Column (Steps List) */}
        <div className="flex flex-col space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              {/* Blue Circle Icon */}
              <div className="w-10 h-10 bg-[#4d69ec] text-white rounded-full flex items-center justify-center shrink-0 shadow-sm mt-1">
                <FileText className="w-5 h-5" />
              </div>
              
              {/* Text content */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#1c2d76]">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
