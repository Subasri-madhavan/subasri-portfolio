import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightBg, setIsLightBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check if navbar is currently hovering over a light (white) section
      const lightSections = document.querySelectorAll('.light-section');
      let overLight = false;
      lightSections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        // navbar sits roughly in the top ~80px of viewport
        if (rect.top <= 80 && rect.bottom >= 80) {
          overLight = true;
        }
      });
      setIsLightBg(overLight);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];
  const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry - Portfolio&body=Hello ${personalInfo.firstName},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`;

  const textColor = isLightBg && !isOpen ? 'text-gray-900' : 'text-white';
  const textColorMuted = isLightBg && !isOpen ? 'text-gray-700 hover:text-black' : 'text-white/80 hover:text-white';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-gradient-to-r from-violet-900 to-indigo-900 py-4'
          : isScrolled 
            ? 'bg-transparent py-4' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className={`text-2xl font-black tracking-tight whitespace-nowrap transition-colors duration-300 ${textColor}`}>
            {personalInfo.brandName}
          </a>
        </div>

        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className={`font-medium relative group transition-colors duration-300 ${textColorMuted}`}
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a 
            href={hireMeMailto}
            className={`px-6 py-2.5 rounded-full border font-semibold transition-all duration-300 backdrop-blur-md ${
              isLightBg && !isOpen
                ? 'bg-gray-900/5 border-gray-900/20 text-gray-900 hover:bg-gray-900/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.25)]'
                : 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]'
            }`}
          >
            Hire Me
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none p-2 transition-colors duration-300 ${textColor}`}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[32rem] py-4 opacity-100 bg-gradient-to-b from-violet-900 to-indigo-900 shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-violet-200 font-bold text-lg border-b border-white/20 pb-2 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-4 pb-2">
             <a 
               href={hireMeMailto}
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 rounded-full bg-white text-violet-700 font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
