import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the mobile menu after clicking a link
    }
  };

  return (
    <header className="absolute z-50 w-full text-white bg-transparent shadow-md">
      <div className="container flex items-center justify-between px-4 py-4 mt-0 ml-0">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#home" className='flex'>
            <img src="/logo.png" alt="Anchored Heights Logo" className="h-8" />
            Anchored Heights
          </a>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden space-x-8 md:flex">
          <button onClick={() => handleScroll('about')} className="hover:text-[#00A8E8] transition-colors">About</button>
          <button onClick={() => handleScroll('services')} className="hover:text-[#00A8E8] transition-colors">Services</button>
          <button onClick={() => handleScroll('equipment')} className="hover:text-[#00A8E8] transition-colors">Equipment</button>
          <button onClick={() => handleScroll('contact')} className="hover:text-[#00A8E8] transition-colors">Contact</button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1D3557]">
          <nav className="flex flex-col py-4 space-y-4">
            <button onClick={() => handleScroll('about')} className="hover:text-[#00A8E8] transition-colors px-4">About</button>
            <button onClick={() => handleScroll('services')} className="hover:text-[#00A8E8] transition-colors px-4">Services</button>
            <button onClick={() => handleScroll('equipment')} className="hover:text-[#00A8E8] transition-colors px-4">Equipment</button>
            <button onClick={() => handleScroll('contact')} className="hover:text-[#00A8E8] transition-colors px-4">Contact</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
