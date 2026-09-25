import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function DayanandaContact() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-8 md:p-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side: Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-[#1f2937] mb-4">
                Let's discuss your<br />Program
              </h2>
              <p className="text-[#6b7280] text-sm leading-relaxed">
                Choose the right online programme for your career goals. Our admission team is here to help you with programme details, eligibility, fees, admission process, and other queries.
              </p>
            </div>

            <div className="space-y-6 bg-slate-50 p-6 rounded-xl w-full border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="bg-[#a855f7] p-2 rounded-lg text-white mt-1 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Address</p>
                  <p className="text-sm font-semibold text-slate-700">Sathy Road, Saravanampatti<br/>opposite Kalapatti Pirivu<br/>Coimbatore</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600 mt-1 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">My Email</p>
                  <p className="text-sm font-semibold text-slate-700">vnetacademy2024@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600 mt-1 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Call Me Now</p>
                  <p className="text-sm font-semibold text-slate-700">88703 95554 | 88703 25552</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <p className="text-[#6b7280] text-sm leading-relaxed mb-4">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>

            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Name*" 
                  className="w-full border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors text-slate-700 placeholder-purple-400"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email*" 
                  className="w-full border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors text-slate-700 placeholder-slate-400"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="w-full border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors text-slate-700 placeholder-slate-400"
                />
              </div>
              
              <div className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="Contact" 
                  className="w-1/2 border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors text-slate-700 placeholder-slate-400"
                />
                <select className="w-1/2 border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors text-slate-400 bg-white">
                  <option value="">Programs choose</option>
                  <option value="UG">UG</option>
                  <option value="PG">PG</option>
                </select>
              </div>

              <div>
                <textarea 
                  rows="3" 
                  placeholder="Message*" 
                  className="w-full border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors text-slate-700 placeholder-slate-400 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3 rounded text-sm font-bold shadow-lg transition-colors mt-4"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
