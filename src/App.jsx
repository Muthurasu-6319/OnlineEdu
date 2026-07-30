import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AlagappaHero from './components/AlagappaHero';
import AlagappaAbout from './components/AlagappaAbout';
import AlagappaCollaboration from './components/AlagappaCollaboration';
import AlagappaDDE from './components/AlagappaDDE';
import AlagappaPrograms from './components/AlagappaPrograms';
import BharathidasanHero from './components/BharathidasanHero';
import BharathidasanAbout from './components/BharathidasanAbout';
import BharathidasanCollaboration from './components/BharathidasanCollaboration';
import BharathidasanDetails from './components/BharathidasanDetails';
import BharathidasanPrograms from './components/BharathidasanPrograms';
import AmityHero from './components/AmityHero';
import AmityAbout from './components/AmityAbout';
import AmityChooseAndMba from './components/AmityChooseAndMba';
import AmityPrograms from './components/AmityPrograms';
import BoardHero from './components/BoardHero';
import BoardAbout from './components/BoardAbout';
import WhyChooseUs from './components/WhyChooseUs';
import BoardDetails from './components/BoardDetails';
import BoardSteps from './components/BoardSteps';
import BoardIntro from './components/BoardIntro';
import BoardOutro from './components/BoardOutro';
import AboutHero from './components/AboutHero';
import AboutAcademy from './components/AboutAcademy';
import AboutPhilosophy from './components/AboutPhilosophy';
import AboutPartnerships from './components/AboutPartnerships';
import Contact from './components/Contact';
import ContactDetails from './components/ContactDetails';
import Success from './components/Success';
import Courses from './components/Courses';
import Gateway from './components/Gateway';
import Partnerships from './components/Partnerships';
import Testimonials from './components/Testimonials';
import TestimonialsPage from './components/TestimonialsPage';
import Footer from './components/Footer';
import Blog from './components/Blog';
import UGCourses from './components/UGCourses';
import PGCourses from './components/PGCourses';
import { X, CheckCircle, Trash2 } from 'lucide-react';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#home');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Page-level hashes that should always scroll to the very top (hero section)
  const PAGE_HASHES = ['#home', '#alagappa', '#bharathidasan', '#amity', '#board', '#about', '#contact', '#blog', '#course', '#testimonials-page', '#ug-courses', '#pg-courses'];

  useEffect(() => {
    if (!currentHash || currentHash === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If it's a top-level page hash, scroll to very top so the hero is visible
    const isPageHash = PAGE_HASHES.some(p => currentHash === p);
    if (isPageHash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Otherwise it's a sub-section anchor — scroll to the specific element
    const id = currentHash.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Allow time for target components to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (currentHash.includes('-')) {
          // Check if there is a part after the first dash to fallback to
          const parts = id.split('-');
          const subId = parts.slice(1).join('-');
          const subEl = document.getElementById(subId);
          if (subEl) {
            subEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 300);
    }
  }, [currentHash]);


  const toggleLike = (course) => {
    if (wishlist.find(item => item.title === course.title)) {
      setWishlist(wishlist.filter(item => item.title !== course.title));
    } else {
      setWishlist([...wishlist, course]);
    }
  };

  const removeFromWishlist = (title) => {
    setWishlist(wishlist.filter(item => item.title !== title));
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'enquiry', data: enquiryForm })
      });
    } catch (err) {
      console.error('Failed to send email', err);
    }
    
    setEnquirySuccess(true);
    setTimeout(() => {
      setEnquirySuccess(false);
      setEnquiryOpen(false);
      setEnquiryForm({ name: '', email: '', phone: '', course: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative">
      {/* Header */}
      <Header 
        wishlistCount={wishlist.length} 
        onWishlistClick={() => setWishlistOpen(true)} 
        onEnquiryClick={() => setEnquiryOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {currentHash.startsWith('#alagappa') ? (
          <>
            <AlagappaHero onEnquiryClick={() => setEnquiryOpen(true)} />
            <AlagappaAbout />
            <AlagappaCollaboration />
            <AlagappaDDE />
            <AlagappaPrograms />
          </>
        ) : currentHash.startsWith('#bharathidasan') ? (
          <>
            <BharathidasanHero onEnquiryClick={() => setEnquiryOpen(true)} />
            <BharathidasanAbout />
            <BharathidasanCollaboration />
            <BharathidasanDetails />
            <BharathidasanPrograms />
          </>
        ) : currentHash.startsWith('#amity') ? (
          <>
            <AmityHero />
            <AmityAbout />
            <AmityChooseAndMba />
            <AmityPrograms />
          </>
        ) : currentHash.startsWith('#board') ? (
          <>
            <BoardHero />
            <BoardAbout />
            <WhyChooseUs />
            <BoardDetails />
            <BoardSteps />
            <BoardIntro />
            <BoardOutro onEnquiryClick={() => setEnquiryOpen(true)} />
          </>
        ) : currentHash.startsWith('#about') ? (
          <>
            <AboutHero onEnquiryClick={() => setEnquiryOpen(true)} />
            <AboutAcademy />
            <AboutPhilosophy />
            <AboutPartnerships />
          </>
        ) : currentHash.startsWith('#contact') ? (
          <>
            <Contact />
            <ContactDetails />
          </>
        ) : currentHash.startsWith('#blog') ? (
          <>
            <Blog />
          </>
        ) : currentHash.startsWith('#ug-courses') ? (
          <>
            <UGCourses />
          </>
        ) : currentHash.startsWith('#pg-courses') ? (
          <>
            <PGCourses />
          </>
        ) : currentHash.startsWith('#testimonials-page') ? (
          <>
            <TestimonialsPage onPlayClick={(video) => setActiveVideoUrl(video || { isYoutube: true, url: 'dQw4w9WgXcQ' })} />
          </>
        ) : (
          <>
            <Hero onEnquiryClick={() => setEnquiryOpen(true)} />
            <Success />
            <Courses 
              toggleLike={toggleLike} 
              wishlist={wishlist}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
            <Gateway />
            <Partnerships />
            <Testimonials onPlayClick={(video) => setActiveVideoUrl(video || { isYoutube: true, url: 'dQw4w9WgXcQ' })} />
          </>
        )}
      </main>

      {/* Custom Footer */}
      <Footer />

      {/* WISHLIST SIDEBAR MODAL */}
      {wishlistOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity" onClick={() => setWishlistOpen(false)} />
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col font-outfit">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-800">Liked Courses ({wishlist.length})</h2>
                <button onClick={() => setWishlistOpen(false)} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-4">
                {wishlist.length === 0 ? (
                  <div className="text-center py-12 text-slate-400">
                    <p className="text-lg font-medium mb-2">No liked courses</p>
                    <p className="text-sm">Explore our courses and hit the Like button on ones you love.</p>
                  </div>
                ) : (
                  wishlist.map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                      <div className="flex-grow flex items-center">
                        <h4 className="font-bold text-sm text-slate-800 line-clamp-1">{item.title}</h4>
                      </div>
                      <button 
                        onClick={() => removeFromWishlist(item.title)} 
                        className="text-slate-400 hover:text-red-500 transition-colors self-center p-2 rounded-full hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {wishlist.length > 0 && (
                <div className="p-6 border-t border-slate-100 bg-slate-50">
                  <button 
                    onClick={() => {
                      setWishlistOpen(false);
                      setEnquiryOpen(true);
                    }}
                    className="w-full bg-[#2ca785] hover:bg-[#238a6d] text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-emerald-100 transition-all duration-200"
                  >
                    Enquire Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ENQUIRY MODAL */}
      {enquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setEnquiryOpen(false)} />
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative z-10 font-outfit">
            
            <div className="absolute right-4 top-4">
              <button onClick={() => setEnquiryOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            {enquirySuccess ? (
              <div className="p-12 text-center flex flex-col items-center justify-center">
                <CheckCircle className="w-20 h-20 text-[#2ca785] animate-bounce mb-6" />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Enquiry Submitted!</h3>
                <p className="text-slate-500 text-sm max-w-sm">
                  Our counselors will call you within 24 business hours to guide you through your admissions.
                </p>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Admissions & Course Enquiry</h3>
                <p className="text-sm text-slate-500 mb-6">Fill in details below to receive a direct call back from our academic advisors.</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({...enquiryForm, name: e.target.value})}
                      placeholder="e.g., Jane Doe" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ca785] focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email ID</label>
                      <input 
                        type="email" 
                        required 
                        value={enquiryForm.email}
                        onChange={(e) => setEnquiryForm({...enquiryForm, email: e.target.value})}
                        placeholder="name@domain.com" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ca785] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        value={enquiryForm.phone}
                        onChange={(e) => setEnquiryForm({...enquiryForm, phone: e.target.value})}
                        placeholder="+91 XXXXX XXXXX" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ca785] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Select Course Interest</label>
                    <select 
                      required
                      value={enquiryForm.course}
                      onChange={(e) => setEnquiryForm({...enquiryForm, course: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ca785] focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Choose Course Level</option>
                      <option value="UG">UG Degrees (B.A, B.Sc, B.Com, BBA, BCA)</option>
                      <option value="PG">PG Degrees (M.A, M.Sc, M.Com, MBA, MCA)</option>
                      <option value="10th_12th">10th & 12th NIOS/BOSSE Exams</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                    <textarea 
                      rows="3" 
                      value={enquiryForm.message}
                      onChange={(e) => setEnquiryForm({...enquiryForm, message: e.target.value})}
                      placeholder="Write your doubts/questions here..." 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ca785] focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#153fb4] hover:bg-[#123599] text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-indigo-100 transition-all duration-200 mt-6"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* VIDEO PLAYER MODAL */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xs" onClick={() => setActiveVideoUrl(null)} />
          <div className={`bg-black rounded-3xl w-full overflow-hidden shadow-2xl relative z-10 border border-white/10 ${
            activeVideoUrl.isYoutube === false 
              ? "max-w-[400px] aspect-[9/16]" 
              : "max-w-4xl aspect-[16/9]"
          }`}>
            <button onClick={() => setActiveVideoUrl(null)} className="absolute right-4 top-4 p-2 bg-black/40 hover:bg-black/80 rounded-full transition-colors text-white z-20">
              <X className="w-5 h-5" />
            </button>
            {activeVideoUrl.isYoutube === false ? (
              <video 
                className="w-full h-full outline-none object-cover"
                src={activeVideoUrl.url}
                controls
                autoPlay
              />
            ) : (
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideoUrl.videoId || activeVideoUrl.url}?autoplay=1`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
