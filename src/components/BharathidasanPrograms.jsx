import React from 'react';

export default function BharathidasanPrograms() {
  const cards = [
    {
      title: 'UG Program Arts',
      theme: 'yellow',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&h=100&q=80',
      items: [
        '• B.A Tamil',
        '• B.Lit Tamil',
        '• B.A. Economics',
        '• B.A English',
        '• B.A History',
        '• B.A Public Administration',
        '• B.A Political Scienc'
      ]
    },
    {
      title: 'UG Program Science',
      theme: 'purple',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80',
      items: [
        '• B.Sc. MATHEMATICS',
        '• B.Sc. Physics',
        '• B.Sc. Chemistry',
        '• B.Sc. Botany',
        '• B.Sc. Zoology',
        '• B.Sc. Geography',
        '• B.Sc. Computer Science',
        '• B.Sc. Information Technology'
      ]
    },
    {
      title: 'UG Program - Management & Commerce',
      theme: 'yellow',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80',
      items: [
        '• B.COM.',
        '• B.com (Bank Management)',
        '• B.B.A.',
        '• B.B.A. (Retail Management)',
        '• BLIS (one year programmes)'
      ]
    },
    {
      title: 'PG - Program Arts',
      theme: 'yellow',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',
      items: [
        '• M.A Tamil',
        '• M.A English',
        '• M.A. History',
        '• M.A Ecnomics',
        '• M.A Public Administration',
        '• M.A Political Science',
        '• M.A. Human Resources'
      ]
    },
    {
      title: 'PG Program Science',
      theme: 'purple',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
      items: [
        '• M.sc Mathematics',
        '• M.sc. Physics',
        '• M.sc. Chemistry',
        '• M.sc. Zoology',
        '• M.sc. Botany',
        '• M.sc. Geography',
        '• M.sc. Computer Science'
      ]
    },
    {
      title: 'PG Commerce & Management',
      theme: 'yellow',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
      items: [
        '• M.COM',
        '• M.com (Bank Management)',
        '• M.com (Financial Management)',
        '• M.B.A. (Human Resource Management)',
        '• MBA (Marketing Management)',
        '• MBA (Financial Management)',
        '• MBA (Operations)',
        '• MBA (System)'
      ]
    },
    {
      title: 'UG Program Computer Science',
      theme: 'yellow',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',
      items: [
        '• B.Sc. Computer Science',
        '• B.sc. Information Technology',
        '• BCA (Computer Application)'
      ]
    },
    {
      title: 'PG Program Computer Science',
      theme: 'purple',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80',
      items: [
        '• M.sc. Computer Science',
        '• M.sc. Information Technology',
        '• MCA (Computer Application)'
      ]
    },
    {
      title: 'UG & PG LIBRARY & INFORMATION SCIENCE (ONE Year Programme)',
      theme: 'yellow',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80',
      items: [
        '• BLIS',
        '• MLIS (Library & Information Science)'
      ]
    }
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24 font-outfit" id="bharathidasan-programs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="text-[#1a2b6d]">Explore Our Diverse </span>
            <span className="text-[#2ca785]">Academic Programs</span>
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const isYellow = card.theme === 'yellow';
            return (
              <div 
                key={idx} 
                className={`rounded-[32px] p-8 shadow-md flex flex-col hover:shadow-lg transition-all duration-300 ${
                  isYellow 
                    ? 'bg-[#FFCF3E] text-[#1a2b6d]' 
                    : 'bg-[#8050e6] text-white'
                }`}
              >
                {/* Card Header with Student Avatar Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 ${
                    isYellow 
                      ? 'border-[#1a2b6d]' 
                      : 'border-[#FFCF3E]'
                  }`}>
                    <img 
                      src={card.avatar} 
                      alt="Student Avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className={`font-extrabold text-base md:text-[17px] tracking-wide uppercase leading-snug ${
                    isYellow ? 'text-[#1a2b6d]' : 'text-[#FFCF3E]'
                  }`}>
                    {card.title}
                  </h3>
                </div>

                {/* List of items */}
                <ul className="space-y-3 font-extrabold text-[13px] md:text-[14px] leading-relaxed font-sans">
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-1">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
