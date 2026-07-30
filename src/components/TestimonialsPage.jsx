import React, { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/Testimonials/image.png';
import img2 from '../assets/Testimonials/image copy.png';
import img3 from '../assets/Testimonials/image copy 2.png';
import img4 from '../assets/Testimonials/image copy 3.png';
import img5 from '../assets/Testimonials/image copy 4.png';
import img6 from '../assets/Testimonials/image copy 5.png';
import img7 from '../assets/Testimonials/image copy 6.png';
import img8 from '../assets/Testimonials/image copy 7.png';
import img9 from '../assets/Testimonials/image copy 8.png';
import img10 from '../assets/Testimonials/image copy 9.png';

export default function TestimonialsPage({ onPlayClick }) {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [videos, setVideos] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedVideos = localStorage.getItem('studentVideos');
    if (storedVideos) {
      try {
        setVideos(JSON.parse(storedVideos));
      } catch (e) {
        setVideos([]);
      }
    }
  }, []);

  // Automatic Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50 font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight mb-4 text-[#2ca785]">
            Our Testimonials
          </h1>
          <p className="text-lg text-[#153fb4] font-bold">
            See what our successful students have to say about us
          </p>
        </div>

        {/* Video Testimonials */}
        {videos.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-[#2ca785] pl-4">
              Student Reviews (Videos)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {videos.map((video) => (
                <div 
                  key={video.id} 
                  onClick={() => onPlayClick(video)}
                  className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer aspect-[9/16] bg-black"
                >
                  {video.isYoutube ? (
                    <img 
                      src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} 
                      alt="Video Thumbnail" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <video 
                      src={`${video.url}#t=0.5`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      preload="metadata"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#2ca785]/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 pl-1">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Image Testimonials - Slider & Content */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-[#2ca785] pl-4">
            Gallery & Stories
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            {/* Left Side: Slider */}
            <div className="w-full lg:w-1/2 relative group rounded-2xl overflow-hidden shadow-lg aspect-square">
              {/* Images */}
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((src, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0">
                    <img 
                      src={src} 
                      alt={`Gallery ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentSlide === index ? 'bg-[#2ca785] w-6' : 'bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-[#153fb4] font-semibold text-sm">
                Success Stories
              </div>
              <h3 className="text-3xl xl:text-4xl font-bold text-slate-800 leading-tight">
                Empowering Students to Reach Their <span className="text-[#2ca785]">Full Potential</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Explore the unforgettable moments and the incredible journeys of our alumni. Our community is built on excellence, dedication, and the shared goal of shaping a brighter future.
              </p>
              
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#2ca785]" />
                  </div>
                  <p className="text-slate-700 font-medium">Over 10,000+ successful graduates globally.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#2ca785]" />
                  </div>
                  <p className="text-slate-700 font-medium">Recognized for outstanding academic excellence.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#2ca785]" />
                  </div>
                  <p className="text-slate-700 font-medium">Comprehensive support and placement assistance.</p>
                </li>
              </ul>

              <div className="pt-6">
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#213fbb] to-[#6c3fda] rounded-xl hover:shadow-lg hover:shadow-indigo-100 transition-all duration-200">
                  Join Our Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
