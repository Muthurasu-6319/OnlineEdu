import React from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import vnetLogo from '../assets/vnet.png';

export default function VITContact() {
  return (
    <section className="relative w-full">
      {/* Background Top (White) and Bottom (Dark) */}
      <div className="absolute inset-0 flex flex-col z-0">
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-[#2c3241]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 flex flex-col items-center">
        
        {/* Main Card */}
        <div className="bg-white w-full rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-10 md:p-14 flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="lg:w-5/12 flex flex-col">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1f2937] mb-4">
              Let's discuss your <br /> Program
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed mb-8 font-medium">
              Choose the right online programme for your career goals. Our admission team is here to help you with programme details, eligibility, fees, admission process, and other queries.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-50">
                <div className="bg-purple-600 p-2.5 rounded-lg shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Address:</h4>
                  <p className="text-xs font-bold text-slate-800 leading-relaxed">
                    Sathy Road, Saravanampatti <br />
                    opposite Kalapatti Pirivu <br />
                    Coimbatore
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 px-4">
                <div className="bg-purple-50 p-2.5 rounded-lg shrink-0">
                  <Mail size={18} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">My Email:</h4>
                  <p className="text-xs font-bold text-slate-800">
                    info2023@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 px-4">
                <div className="bg-purple-50 p-2.5 rounded-lg shrink-0">
                  <Phone size={18} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Call Me Now:</h4>
                  <p className="text-xs font-bold text-slate-800">
                    88733 26652 | 91710 18844
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 px-4">
              <a href="#" className="bg-purple-600 p-2 rounded text-white hover:bg-purple-700 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a href="#" className="bg-purple-50 p-2 rounded text-purple-600 hover:bg-purple-100 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="bg-purple-50 p-2 rounded text-purple-600 hover:bg-purple-100 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="bg-purple-50 p-2 rounded text-purple-600 hover:bg-purple-100 transition-colors">
                <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-7/12 flex flex-col">
            <p className="text-[11px] text-slate-400 leading-relaxed mb-8 font-medium">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>

            <form className="flex flex-col gap-8 w-full">
              {/* Name */}
              <div>
                <input 
                  type="text" 
                  placeholder="Name*" 
                  className="w-full text-sm font-medium text-purple-600 placeholder:text-purple-400 pb-2 border-b-2 border-purple-300 focus:outline-none focus:border-purple-600 bg-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <input 
                  type="email" 
                  placeholder="Email*" 
                  className="w-full text-sm font-medium text-slate-800 placeholder:text-slate-400 pb-2 border-b border-slate-200 focus:outline-none focus:border-purple-600 bg-transparent"
                />
              </div>

              {/* Grid: Location & Programs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <input 
                    type="text" 
                    placeholder="Location" 
                    className="w-full text-sm font-medium text-slate-800 placeholder:text-slate-400 pb-2 border-b border-slate-200 focus:outline-none focus:border-purple-600 bg-transparent"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Programs choose" 
                    className="w-full text-sm font-medium text-slate-800 placeholder:text-slate-400 pb-2 border-b border-slate-200 focus:outline-none focus:border-purple-600 bg-transparent"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <input 
                  type="text" 
                  placeholder="Message*" 
                  className="w-full text-sm font-medium text-slate-800 placeholder:text-slate-400 pb-2 border-b border-slate-200 focus:outline-none focus:border-purple-600 bg-transparent"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button type="button" className="bg-[#a855f7] hover:bg-[#9333ea] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded flex items-center gap-2 transition-colors">
                  Submit <Send size={14} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Mini Footer / Bottom Links (inside the dark section) */}
        <div className="w-full mt-16 flex flex-col md:flex-row items-center justify-between gap-8 md:px-8">
          <div className="bg-white p-3 rounded-xl shadow-lg inline-block">
            <img src={vnetLogo} alt="VNET DISTANCE UNIVERSITY" className="h-12 w-auto object-contain" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase">Quick Link</span>
            <div className="flex items-center gap-6 text-xs text-slate-300 font-medium tracking-wide">
              <a href="#ug-courses" className="hover:text-white transition-colors">UG COURSES</a>
              <a href="#pg-courses" className="hover:text-white transition-colors">PG COURSES</a>
              <a href="#blog" className="hover:text-white transition-colors">BLOG</a>
              <a href="#contact" className="hover:text-white transition-colors">CONTACT US</a>
            </div>
          </div>
          
          {/* Empty div for flex balance if needed, or just let it flow */}
          <div className="hidden md:block w-32"></div>
        </div>

      </div>
    </section>
  );
}
