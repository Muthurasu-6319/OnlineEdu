import React from 'react';
import { Star } from 'lucide-react';
import studentReviewImg from '../assets/Rectangle 8691.png';

export default function Testimonials({ onPlayClick }) {
  const testimonials = [
    {
      name: 'Ronald Richards',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      rating: 4
    },
    {
      name: 'Wade Warren',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      text: 'Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Reprehenderit in voluptate velit esse',
      rating: 4
    },
    {
      name: 'Jacob Jones',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      text: 'Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit',
      rating: 4
    }
  ];

  return (
    <section className="bg-slate-50 py-16 xl:py-24 px-4 sm:px-6 lg:px-8 font-outfit relative overflow-hidden" id="testimonials">
      {/* Decorative semi-circle on the left */}
      <div className="absolute left-0 bottom-[30%] w-24 h-48 bg-[#b4cbfb]/30 rounded-r-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Student Review Section */}
        <div className="mb-24 text-center">
          <h2 className="text-3xl xl:text-4xl font-extrabold tracking-tight mb-12 text-[#2ca785]">
            Student Review
          </h2>
          
          {/* Video Thumbnail Card */}
          <div 
            onClick={onPlayClick}
            className="relative max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-2xl group cursor-pointer aspect-[16/9]"
          >
            <img 
              src={studentReviewImg} 
              alt="Student Review Video" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
            
            {/* Glowing Play Button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* Outermost Ring */}
                <div className="absolute w-24 h-24 rounded-full bg-white/20 animate-ping opacity-75" />
                {/* Middle Ring */}
                <div className="absolute w-20 h-20 rounded-full bg-white/40 shadow-inner" />
                
                {/* Play Button */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlayClick();
                  }}
                  className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-[#2ca785] to-[#20a4d5] flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer z-10 pl-1"
                >
                  <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl xl:text-4xl font-extrabold tracking-tight mb-4 text-[#2ca785]">
            Testimonials
          </h2>
          <p className="text-lg text-[#153fb4] font-bold">
            What our student say about us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[24px] p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                {/* User Info Row */}
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#20a4d5]/20 shadow-sm"
                  />
                  <h3 className="text-lg font-bold text-slate-800">
                    {item.name}
                  </h3>
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-slate-500 font-normal leading-relaxed mb-6">
                  {item.text}
                </p>
              </div>

              {/* Rating Star Row */}
              <div className="flex items-center gap-1 border-t border-slate-100 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${
                      i < item.rating 
                        ? 'fill-amber-400 text-amber-400' 
                        : 'fill-slate-200 text-slate-200'
                    }`} 
                  />
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
