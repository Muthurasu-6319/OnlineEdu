import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import contactImage from '../assets/image 18.png';

export default function ContactDetails() {
  return (
    <section className="bg-white py-16 md:py-24 font-outfit">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center">
        
        {/* Banner Image */}
        <div className="w-full max-w-4xl mb-12 rounded-3xl overflow-hidden shadow-lg border border-slate-100">
          <img 
            src={contactImage} 
            alt="Happy Graduate Student" 
            className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300"
          />
        </div>

        {/* Subheadings */}
        <div className="text-center space-y-2 mb-8 max-w-4xl">
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
        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans font-medium text-center max-w-4xl mb-16">
          VNET Distance Academy is committed to making quality education accessible through flexible and affordable learning solutions. We offer a wide range of UG, PG, Diploma, Engineering, Polytechnic, and 10th & 12th programs through recognized universities and institutions. With EMI facilities, expert academic guidance, and student-focused support, we help learners achieve their educational and career goals without compromising their personal or professional commitments. At VNET Distance Academy, we believe education should be accessible to everyone, anytime and anywhere.
        </p>

        {/* Two Column Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
          
          {/* Left Column: Contact Info (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-12 bg-slate-50/50 p-6 sm:p-8 rounded-3xl border border-slate-100">
            
            {/* Phone Section */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-white border border-slate-100 text-[#1c2d76] rounded-full flex items-center justify-center shrink-0 shadow-xs">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-4 flex-grow">
                <h3 className="text-xl font-bold text-[#1c2d76] border-b-2 border-[#1c2d76] pb-1 w-fit">
                  Phone
                </h3>
                <div className="grid grid-cols-1 gap-2 text-[#1c2d76] font-bold font-sans text-[15px] sm:text-base">
                  <div>+91 – 88703 95554</div>
                  <div>+91 – 88703 25552</div>
                  <div>+91 – 91710 19944</div>
                  <div>+91 – 98422 41991</div>
                </div>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-white border border-slate-100 text-[#1c2d76] rounded-full flex items-center justify-center shrink-0 shadow-xs">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-3 flex-grow">
                <h3 className="text-xl font-bold text-[#1c2d76] border-b-2 border-[#1c2d76] pb-1 w-fit">
                  EMail
                </h3>
                <p className="text-[#1c2d76] font-bold font-sans text-[15px] sm:text-base">
                  vnet2023@gmail.com
                </p>
              </div>
            </div>

            {/* Location Section */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-white border border-slate-100 text-[#1c2d76] rounded-full flex items-center justify-center shrink-0 shadow-xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-6 flex-grow">
                <h3 className="text-xl font-bold text-[#1c2d76] border-b-2 border-[#1c2d76] pb-1 w-fit">
                  Location
                </h3>
                <div className="space-y-4 font-sans font-bold text-slate-700 text-[13px] sm:text-[14px] leading-relaxed">
                  <div className="pb-3 border-b border-slate-200">
                    <span className="block text-[#1c2d76] font-extrabold mb-1">Branch 1: Saravanampatti</span>
                    137 D, 1st Floor, Vel Valagam, Sathy Road, Saravanampatti, opposite Kalapatti Pirivu , Coimbatore - 641035
                  </div>
                  <div className="pb-3 border-b border-slate-200">
                    <span className="block text-[#1c2d76] font-extrabold mb-1">Branch 2: Gandhipuram</span>
                    Kalyan jewelers Backside, 291/1, 5th St Ext, 5th Street Extension, Gandhipuram, Coimbatore, Tamil Nadu 641012
                  </div>
                  <div>
                    <span className="block text-[#1c2d76] font-extrabold mb-1">Main Branch: Tirupur</span>
                    144 Kumaran Road , Near Shiva Textiles Oppsite Shabnam Readymades , Tirupur - 641601
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Maps (Spans 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-[#1c2d76] border-b-2 border-[#1c2d76] pb-1 w-fit mb-6">
              Our Locations on Google Maps
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              {/* Map 1: Main branch Tirupur */}
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-5 shadow-xs hover:shadow-md transition-shadow">
                <h4 className="font-extrabold text-[#1c2d76] text-sm mb-3">
                  Main Branch: V NET Distance Education Centre Tirupur
                </h4>
                <div className="rounded-2xl overflow-hidden h-[240px] border border-slate-200/60 shadow-inner">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.1098486246938!2d77.3411319737007!3d11.105190353046273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9073ccabd0227%3A0xfd8b52a0fa5efec6!2sV%20NET%20Distance%20Education%20Centre%20Tirupur!5e0!3m2!1sen!2sin!4v1785251629814!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>
              </div>

              {/* Map 2: Branch 1 */}
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-5 shadow-xs hover:shadow-md transition-shadow">
                <h4 className="font-extrabold text-[#1c2d76] text-sm mb-3">
                  Branch 1: V NET Academy (Saravanampatti)
                </h4>
                <div className="rounded-2xl overflow-hidden h-[240px] border border-slate-200/60 shadow-inner">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.71991767226223!2d77.00155127646731!3d11.074667463099681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f73576737aa1%3A0x68f560459c897774!2sV%20Net%20Academy!5e0!3m2!1sen!2sin!4v1785251705629!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>
              </div>

              {/* Map 3: Branch 2 */}
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-5 shadow-xs hover:shadow-md transition-shadow">
                <h4 className="font-extrabold text-[#1c2d76] text-sm mb-3">
                  Branch 2: Vnet Bharathidasan University (Gandhipuram)
                </h4>
                <div className="rounded-2xl overflow-hidden h-[240px] border border-slate-200/60 shadow-inner">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.241807323512!2d76.96460797369949!3d11.020475754647473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85988e0580557%3A0xf602524942ac0cc!2sVnet%20Bharathidasn%20University!5e0!3m2!1sen!2sin!4v1785251813970!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
