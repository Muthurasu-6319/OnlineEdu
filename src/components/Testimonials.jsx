import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import studentReviewImg from '../assets/Rectangle 8691.png';

export default function Testimonials({ onPlayClick }) {
  const defaultTestimonials = [
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

  const [featuredVideos, setFeaturedVideos] = useState([]);
  const [textReviews, setTextReviews] = useState(defaultTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Load videos
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/videos');
        if (response.ok) {
          const allVideos = await response.json();
          const featured = allVideos.filter(v => v.featured).slice(0, 3);
          setFeaturedVideos(featured);
        }
      } catch (e) {
        console.error("Error fetching videos", e);
      }
    };
    fetchVideos();

    // Load text reviews
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/reviews');
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            setTextReviews(data);
          }
        }
      } catch (e) {
        console.error("Error fetching text reviews", e);
      }
    };
    fetchReviews();
  }, []);

  // Auto Slider
  useEffect(() => {
    if (textReviews.length <= 3) return; // No need to slide if 3 or less

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textReviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [textReviews.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % textReviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + textReviews.length) % textReviews.length);
  };

  // For responsive slider: calculating visible items
  const [itemsToShow, setItemsToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          
          {featuredVideos.length > 0 ? (
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto`}>
              {featuredVideos.map(video => (
                <div 
                  key={video.id} 
                  onClick={() => onPlayClick(video)}
                  className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer aspect-[9/16] bg-black"
                >
                  {video.isYoutube ? (
                    <img 
                      src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} 
                      alt="Student Review" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <video 
                      src={`${video.url}#t=0.5`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      preload="metadata"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-16 h-16 rounded-full bg-white/20 animate-ping opacity-75" />
                      <div className="absolute w-12 h-12 rounded-full bg-white/40 shadow-inner" />
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onPlayClick(video);
                        }}
                        className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-[#2ca785] to-[#20a4d5] flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer z-10 pl-1"
                      >
                        <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* View More Card */}
              <a 
                href="/#testimonials-page" 
                className="flex flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-[#2ca785] text-[#2ca785] hover:bg-[#2ca785] hover:text-white transition-all duration-300 aspect-[9/16] group"
              >
                <div className="w-16 h-16 rounded-full bg-[#2ca785]/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <span className="font-bold text-xl">View More</span>
              </a>
            </div>
          ) : (
            /* Fallback Video Thumbnail Card */
            <div 
              onClick={() => onPlayClick()}
              className="relative max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-2xl group cursor-pointer aspect-[21/9]"
            >
              <img 
                src={studentReviewImg} 
                alt="Student Review Video" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-24 h-24 rounded-full bg-white/20 animate-ping opacity-75" />
                  <div className="absolute w-20 h-20 rounded-full bg-white/40 shadow-inner" />
                  
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
          )}
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

        {/* Testimonials Slider */}
        <div className="relative max-w-6xl mx-auto px-12">
          {textReviews.length > itemsToShow && (
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-500 hover:text-[#2ca785] hover:border-[#2ca785] transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(calc(-${(currentIndex * 100) / itemsToShow}% - ${(currentIndex * 32) / itemsToShow}px))` }} // 32px is gap-8
            >
              {textReviews.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-[24px] p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between shrink-0"
                  style={{ width: `calc((100% - ${(itemsToShow - 1) * 32}px) / ${itemsToShow})` }} // Subtract gaps
                >
                  <div>
                    {/* User Info Row */}
                    <div className="flex items-center gap-4 mb-6">
                      {item.avatar === 'default' ? (
                        <div className="w-14 h-14 rounded-full bg-[#153fb4] flex items-center justify-center text-white shrink-0 shadow-sm border-2 border-[#20a4d5]/20">
                          <User size={24} />
                        </div>
                      ) : (
                        <img 
                          src={item.avatar} 
                          alt={item.name} 
                          className="w-14 h-14 rounded-full object-cover border-2 border-[#20a4d5]/20 shadow-sm shrink-0"
                        />
                      )}
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

          {textReviews.length > itemsToShow && (
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-500 hover:text-[#2ca785] hover:border-[#2ca785] transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Dots Indicator */}
          {textReviews.length > itemsToShow && (
            <div className="flex justify-center mt-8 gap-2">
              {textReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-[#2ca785] w-6' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
