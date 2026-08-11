import React, { useState } from 'react';
import { Heart, User, Search, ChevronDown, Menu, X } from 'lucide-react';
import vnetLogo from '../assets/vnet.png';

export default function Header({ wishlistCount, onWishlistClick, onEnquiryClick, searchQuery, setSearchQuery }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [boardDropdownOpen, setBoardDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - VNET */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-2">
              <img src={vnetLogo} alt="VNET DISTANCE ACADEMY" className="h-12 w-auto object-contain" />
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-[#2ca785] font-semibold text-sm transition-colors duration-200">
              Home
            </a>
            
            {/* Universities Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-slate-800 hover:text-[#2ca785] font-semibold text-sm flex items-center gap-1 transition-colors duration-200"
              >
                Universities
                <ChevronDown size={14} className={`transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="absolute left-0 mt-3 w-64 rounded-xl bg-white shadow-xl border border-gray-100 py-2 z-50">
                  <a href="#alagappa" onClick={() => setDropdownOpen(false)} className="block px-5 py-3 text-sm text-slate-800 hover:bg-slate-50 hover:text-[#2ca785] transition-colors font-medium">Alagappa University</a>
                  <a href="#bharathidasan" onClick={() => setDropdownOpen(false)} className="block px-5 py-3 text-sm text-slate-800 hover:bg-slate-50 hover:text-[#2ca785] transition-colors font-medium">Bharathidasan University</a>
                  <a href="#amity" onClick={() => setDropdownOpen(false)} className="block px-5 py-3 text-sm text-slate-800 hover:bg-slate-50 hover:text-[#2ca785] transition-colors font-medium">Amity University</a>
                </div>
              )}
            </div>

            {/* Courses Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                className="text-slate-800 hover:text-[#2ca785] font-semibold text-sm flex items-center gap-1 transition-colors duration-200"
              >
                Courses
                <ChevronDown size={14} className={`transform transition-transform ${coursesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {coursesDropdownOpen && (
                <div className="absolute left-0 mt-3 w-48 rounded-xl bg-white shadow-xl border border-gray-100 py-2 z-50">
                  <a href="#ug-courses" onClick={() => setCoursesDropdownOpen(false)} className="block px-5 py-3 text-sm text-slate-800 hover:bg-slate-50 hover:text-[#2ca785] transition-colors font-medium">UG Courses</a>
                  <a href="#pg-courses" onClick={() => setCoursesDropdownOpen(false)} className="block px-5 py-3 text-sm text-slate-800 hover:bg-slate-50 hover:text-[#2ca785] transition-colors font-medium">PG Courses</a>
                </div>
              )}
            </div>

            {/* 10th & 12th Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setBoardDropdownOpen(!boardDropdownOpen)}
                className="text-slate-800 hover:text-[#2ca785] font-semibold text-sm flex items-center gap-1 transition-colors duration-200 whitespace-nowrap"
              >
                10th &amp; 12th
                <ChevronDown size={14} className={`transform transition-transform ${boardDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {boardDropdownOpen && (
                <div className="absolute left-0 mt-3 w-48 rounded-xl bg-white shadow-xl border border-gray-100 py-2 z-50">
                  <a href="#board" onClick={() => setBoardDropdownOpen(false)} className="block px-5 py-3 text-sm text-slate-800 hover:bg-slate-50 hover:text-[#2ca785] transition-colors font-medium">BOSSE</a>
                  <a href="#nios" onClick={() => setBoardDropdownOpen(false)} className="block px-5 py-3 text-sm text-slate-800 hover:bg-slate-50 hover:text-[#2ca785] transition-colors font-medium">NIOS</a>
                </div>
              )}
            </div>

            <a href="#about" className="text-slate-700 hover:text-[#2ca785] font-semibold text-sm transition-colors duration-200">
              About
            </a>
            <a href="#testimonials-page" className="text-slate-700 hover:text-[#2ca785] font-semibold text-sm transition-colors duration-200">
              Testimonials
            </a>
            <a href="#contact" className="text-slate-700 hover:text-[#2ca785] font-semibold text-sm transition-colors duration-200 whitespace-nowrap">
              Contact Us
            </a>
          </nav>

          {/* Right Action Icons & Button */}
          <div className="hidden md:flex items-center space-x-4">
            
            {/* Search Input inline */}
            <div className="relative">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses..."
                className="w-40 xl:w-56 bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-sm text-slate-700 px-4 py-2.5 pl-10 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ca785] focus:border-transparent transition-all"
              />
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>

            {/* Enquiry Button */}
            <button 
              onClick={onEnquiryClick}
              className="bg-gradient-to-r from-[#213fbb] to-[#6c3fda] text-white font-medium px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-indigo-100 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              Enquiry
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-[#2ca785] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-3 bg-white border-t border-gray-50 shadow-lg font-outfit">
          
          {/* Mobile Search */}
          <div className="relative my-2">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses..."
              className="w-full bg-slate-50 text-sm text-slate-700 px-4 py-2.5 pl-10 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ca785]"
            />
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>

          <a href="#home" className="block px-3 py-2 rounded-md text-[#2ca785] font-semibold text-base">
            Home
          </a>
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex justify-between items-center px-3 py-2 rounded-md text-slate-600 font-medium text-base"
          >
            Universities
            <ChevronDown size={16} className={`transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {dropdownOpen && (
            <div className="pl-6 space-y-1">
              <a href="#alagappa" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-500 hover:text-[#2ca785]">Alagappa University</a>
              <a href="#bharathidasan" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-500 hover:text-[#2ca785]">Bharathidasan University</a>
              <a href="#amity" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-500 hover:text-[#2ca785]">Amity University</a>
            </div>
          )}

          <button 
            onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
            className="w-full flex justify-between items-center px-3 py-2 rounded-md text-slate-600 font-medium text-base"
          >
            Courses
            <ChevronDown size={16} className={`transform ${coursesDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {coursesDropdownOpen && (
            <div className="pl-6 space-y-1">
              <a href="#ug-courses" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-500 hover:text-[#2ca785]">UG Courses</a>
              <a href="#pg-courses" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-500 hover:text-[#2ca785]">PG Courses</a>
            </div>
          )}
          
          <button 
            onClick={() => setBoardDropdownOpen(!boardDropdownOpen)}
            className="w-full flex justify-between items-center px-3 py-2 rounded-md text-slate-600 font-medium text-base whitespace-nowrap"
          >
            10th &amp; 12th
            <ChevronDown size={16} className={`transform ${boardDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {boardDropdownOpen && (
            <div className="pl-6 space-y-1">
              <a href="#board" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-500 hover:text-[#2ca785]">BOSSE</a>
              <a href="#nios" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-slate-500 hover:text-[#2ca785]">NIOS</a>
            </div>
          )}

          <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-slate-600 font-medium text-base">
            About
          </a>
          <a href="#testimonials-page" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-slate-600 font-medium text-base">
            Testimonials
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-slate-600 font-medium text-base">
            Contact Us
          </a>
          
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <button 
              onClick={() => {
                setIsOpen(false);
                onEnquiryClick();
              }}
              className="w-full bg-gradient-to-r from-[#213fbb] to-[#6c3fda] text-white font-medium py-3 rounded-xl shadow-md"
            >
              Enquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
