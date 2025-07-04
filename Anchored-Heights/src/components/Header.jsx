import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="absolute z-40 w-full text-white bg-transparent">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link to="/" className="flex items-center text-2xl font-bold font-quicksand">
          <img src="/logo.png" alt="Vertical Techniques Logo" className="h-16 md:h-20" />
          Vertical Techniques Ltd.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex text-lg">
          <Link to="/projects" className="hover:text-[#F67E17] transition-colors">Projects</Link>
          <button onClick={() => handleScroll('about')} className="hover:text-[#F67E17] transition-colors">About</button>
          <button onClick={() => handleScroll('services')} className="hover:text-[#F67E17] transition-colors">Services</button>
          <button onClick={() => handleScroll('why')} className="hover:text-[#F67E17] transition-colors">Why Us?</button>
          <button onClick={() => handleScroll('contact')} className="hover:text-[#F67E17] transition-colors">Contact</button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {/* ... (SVG icon code remains the same) ... */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1D3557] bg-opacity-90">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-[#F67E17] transition-colors px-4">Projects</Link>
            <button onClick={() => handleScroll('about')} className="hover:text-[#F67E17] transition-colors px-4">About</button>
            <button onClick={() => handleScroll('services')} className="hover:text-[#F67E17] transition-colors px-4">Services</button>
            <button onClick={() => handleScroll('why')} className="hover:text-[#F67E17] transition-colors px-4">Why Us</button>
            <button onClick={() => handleScroll('contact')} className="hover:text-[#F67E17] transition-colors px-4">Contact</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;