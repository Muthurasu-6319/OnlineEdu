import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import vnetLogo from '../assets/vnet.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#31108f] via-[#4d24c0] to-[#5d30d9] text-white py-16 px-4 sm:px-6 lg:px-8 font-outfit">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12">
          
          {/* Logo */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-3">
            <a href="#home">
              <img src={vnetLogo} alt="VNET Distance Academy" className="h-16 w-auto object-contain brightness-0 invert" />
            </a>
            <p className="text-sm text-indigo-200 leading-relaxed font-medium max-w-xs text-center md:text-left">
              Trusted guidance center for Distance, Online & Part-time education. Branches in Saravanampatti, Gandhipuram (Coimbatore) & Tiruppur.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-indigo-100 font-medium">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#blog" className="hover:text-white transition-colors">Blog</a>
              <a href="#course" className="hover:text-white transition-colors">Course</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact Us & Address */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4">
            {/* Contact Details */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contact us</h3>
              <ul className="space-y-4 text-sm text-indigo-100 font-medium">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-indigo-200 shrink-0" />
                  <a href="tel:+918870395554" className="hover:text-white transition-colors">+91 88703 95554</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-indigo-200 shrink-0" />
                  <a href="tel:+918870325552" className="hover:text-white transition-colors">+91 88703 25552</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-indigo-200 shrink-0" />
                  <a href="mailto:vnetacademy2024@gmail.com" className="hover:text-white transition-colors">
                    vnetacademy2024@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white opacity-0 hidden sm:block">Address</h3>
              <div className="flex gap-3 text-sm text-indigo-100 font-medium">
                <MapPin className="w-5 h-5 text-indigo-200 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Kalyan jewelers Backside, 291/1, 5th St Ext, 5th Street Extension, Gandhipuram, Coimbatore, Tamil Nadu 641012
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-white/20 my-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm text-indigo-200">
          <p>Copyright 2026 | All Rights Reserved</p>
          <a 
            href="https://genzneuralx.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors font-medium"
          >
            Developed by Gen Z Neural - X
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors p-1" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors p-1" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors p-1" aria-label="Instagram">
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* Behance Logo */}
            <a href="#" className="hover:text-white transition-colors p-1 font-bold text-[11px] leading-none" aria-label="Behance">
              Bē
            </a>
            <a href="#" className="hover:text-white transition-colors p-1" aria-label="Website">
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
