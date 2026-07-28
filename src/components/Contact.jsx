import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import contactBg from '../assets/Alagappa-University/hero.png';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', location: '', qualification: '' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', data: form })
      });
    } catch (err) {
      console.error('Failed to send contact email', err);
    }
    
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setForm({ name: '', phone: '', location: '', qualification: '' });
    }, 3000);
  };

  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 font-outfit bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${contactBg})` }}
    >
      <div className="relative z-10 w-full max-w-2xl text-center text-white">
        
        {/* Headings */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
          Having Trouble Finding <br /> The Right Program?
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-bold tracking-wide text-slate-200 mb-10">
          Book a free call with our counselor now
        </p>

        {success ? (
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 flex flex-col items-center justify-center animate-fade-in">
            <CheckCircle className="w-16 h-16 text-[#2ca785] mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-white mb-2">Request Submitted!</h3>
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              Our academic counselors will get back to you shortly to help you find the perfect program.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name and Phone side-by-side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                required 
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                placeholder="Full Name...." 
                className="w-full px-6 py-4 rounded-full border-2 border-blue-500 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-semibold"
              />
              <input 
                type="tel" 
                required 
                value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value})}
                placeholder="Contact Number" 
                className="w-full px-6 py-4 rounded-full border-2 border-blue-500 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-semibold"
              />
            </div>

            {/* Location */}
            <input 
              type="text" 
              required 
              value={form.location}
              onChange={(e) => setForm({...form, location: e.target.value})}
              placeholder="Your Current Location" 
              className="w-full px-6 py-4 rounded-full border-2 border-blue-500 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-semibold"
            />

            {/* Highest Qualification */}
            <input 
              type="text" 
              required 
              value={form.qualification}
              onChange={(e) => setForm({...form, qualification: e.target.value})}
              placeholder="Highest Qualification" 
              className="w-full px-6 py-4 rounded-full border-2 border-blue-500 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-semibold"
            />

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="bg-[#48b0a9] hover:bg-[#3ba29b] text-white font-extrabold uppercase tracking-widest px-10 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-xs cursor-pointer"
              >
                Submit Form
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}
