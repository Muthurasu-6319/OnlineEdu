import React, { useState } from 'react';
import { Heart, User, Search, ChevronDown, Menu, X } from 'lucide-react';

export default function Header({ wishlistCount, onWishlistClick, onEnquiryClick, searchQuery, setSearchQuery }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - OnlineEdu */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-xl md:text-2xl font-black tracking-wider text-slate-800 flex items-center gap-1.5">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2ca785] to-[#20a4d5] flex items-center justify-center text-white font-black text-base shadow-md">O</span>
              OnlineEdu
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-[#2ca785] font-semibold text-base transition-colors duration-200">
              Home
            </a>
            
            {/* Universities Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-slate-800 hover:text-[#2ca785] font-bold text-base flex items-center gap-1 transition-colors duration-200"
              >
                Universities
                <ChevronDown size={16} className={`transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="absolute left-0 mt-3 w-64 rounded-xl bg-white shadow-xl border border-gray-100 py-2 z-50">
                  <a href="#alagappa" className="block px-5 py-3 text-base text-slate-800 hover:bg-slate-50 hover:text-[#2ca785] transition-colors font-medium">Alagappa University</a>
                  <a href="#bharathidasan" className="block px-5 py-3 text-base text-slate-800 hover:bg-slate-50 hover:text-[#2ca785] transition-colors font-medium">Bharathidasan University</a>
                  <a href="#amity" className="block px-5 py-3 text-base text-slate-800 hover:bg-slate-50 hover:text-[#2ca785] transition-colors font-medium">Amity University</a>
                  <a href="#board" className="block px-5 py-3 text-base text-slate-800 hover:bg-slate-50 hover:text-[#2ca785] transition-colors font-medium">10th & 12th Board Exam</a>
                </div>
              )}
            </div>

            <a href="#about" className="text-slate-700 hover:text-[#2ca785] font-semibold text-base transition-colors duration-200">
              About
            </a>
            <a href="#testimonials" className="text-slate-700 hover:text-[#2ca785] font-semibold text-base transition-colors duration-200">
              Testimonials
            </a>
            <a href="#contact" className="text-slate-700 hover:text-[#2ca785] font-semibold text-base transition-colors duration-200">
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

            {/* Wishlist with badge */}
            <button 
              onClick={onWishlistClick}
              className="relative p-2.5 text-slate-600 hover:text-[#2ca785] hover:bg-slate-50 rounded-full cursor-pointer transition-all"
            >
              <Heart size={22} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#2ca785] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

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
              onClick={onWishlistClick}
              className="relative p-2.5 text-slate-600"
            >
              <Heart size={22} />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-[#2ca785] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            
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
              <a href="#alagappa" className="block px-3 py-2 text-sm text-slate-500 hover:text-[#2ca785]">Alagappa University</a>
              <a href="#bharathidasan" className="block px-3 py-2 text-sm text-slate-500 hover:text-[#2ca785]">Bharathidasan University</a>
              <a href="#amity" className="block px-3 py-2 text-sm text-slate-500 hover:text-[#2ca785]">Amity University</a>
              <a href="#board" className="block px-3 py-2 text-sm text-slate-500 hover:text-[#2ca785]">10th & 12th Board Exam</a>
            </div>
          )}
          <a href="#about" className="block px-3 py-2 rounded-md text-slate-600 font-medium text-base">
            About
          </a>
          <a href="#testimonials" className="block px-3 py-2 rounded-md text-slate-600 font-medium text-base">
            Testimonials
          </a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-slate-600 font-medium text-base">
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
