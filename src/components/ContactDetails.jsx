import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import contactImage from '../assets/image 18.png';

export default function ContactDetails() {
  return (
    <section className="bg-white py-16 md:py-24 font-outfit">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col items-center">
        
        {/* Banner Image */}
        <div className="w-full mb-12 rounded-3xl overflow-hidden shadow-lg border border-slate-100">
          <img 
            src={contactImage} 
            alt="Happy Graduate Student" 
            className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300"
          />
        </div>

        {/* Subheadings */}
        <div className="text-center space-y-2 mb-8">
          <p className="text-[#1c2d76] text-lg sm:text-xl font-bold font-sans">
            Get in touch with us using the contact details below
          </p>
          <p className="text-[#2ca785] text-base sm:text-lg font-bold font-sans">
            We look forward to hearing from you!
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1c2d76] tracking-tight uppercase pt-2">
            contact us
          </h2>
        </div>

        {/* Intro Paragraph */}
        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans font-medium text-center max-w-3xl mb-16">
          VNET Distance Academy is committed to making quality education accessible through flexible and affordable learning solutions. We offer a wide range of UG, PG, Diploma, Engineering, Polytechnic, and 10th & 12th programs through recognized universities and institutions. With EMI facilities, expert academic guidance, and student-focused support, we help learners achieve their educational and career goals without compromising their personal or professional commitments. At VNET Distance Academy, we believe education should be accessible to everyone, anytime and anywhere.
        </p>

        {/* Contact Info Block */}
        <div className="w-full max-w-2xl space-y-12">
          
          {/* Phone Section */}
          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-[#1c2d76] rounded-full flex items-center justify-center shrink-0 shadow-xs">
              <Phone className="w-5 h-5" />
            </div>
            <div className="space-y-4 flex-grow">
              <h3 className="text-2xl font-bold text-[#1c2d76] border-b-2 border-[#1c2d76] pb-1 w-fit">
                Phone
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-[#1c2d76] font-bold font-sans text-base sm:text-lg">
                <div>+91 – 88703 95554</div>
                <div>+91 – 88703 25552</div>
                <div>+91 – 91710 19944</div>
                <div>+91 – 98422 41991</div>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-[#1c2d76] rounded-full flex items-center justify-center shrink-0 shadow-xs">
              <Mail className="w-5 h-5" />
            </div>
            <div className="space-y-3 flex-grow">
              <h3 className="text-2xl font-bold text-[#1c2d76] border-b-2 border-[#1c2d76] pb-1 w-fit">
                EMail
              </h3>
              <p className="text-[#1c2d76] font-bold font-sans text-base sm:text-lg">
                vnet2023@gmail.com
              </p>
            </div>
          </div>

          {/* Location Section */}
          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-[#1c2d76] rounded-full flex items-center justify-center shrink-0 shadow-xs">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-6 flex-grow">
              <h3 className="text-2xl font-bold text-[#1c2d76] border-b-2 border-[#1c2d76] pb-1 w-fit">
                Location
              </h3>
              <div className="space-y-4 font-sans font-bold text-slate-700 text-sm sm:text-base leading-relaxed">
                <div className="pb-4 border-b border-slate-200">
                  137 D, 1st Floor, Vel Valagam, Sathy Road, Saravanampatti, opposite Kalapatti Pirivu , Coimbatore - 641035
                </div>
                <div className="pb-4 border-b border-slate-200">
                  Kalyan jewelers Backside, 291/1, 5th St Ext, 5th Street Extension, Gandhipuram, Coimbatore, Tamil Nadu 641012
                </div>
                <div>
                  144 Kumaran Road , Near Shiva Textiles Oppsite Shabnam Readymades , Tirupur - 641601
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
