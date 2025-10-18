import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed z-50 w-full bg-white/80 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-12 md:h-16" />
          <span className="hidden md:block font-bold text-[#1D3557] text-lg md:text-xl">
            Vertical Techniques Ltd.
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6 text-[#1D3557] font-medium">
          <Link to="/projects" className="hover:text-[#F67E17] transition">Projects</Link>
          <button onClick={() => handleScroll('about')} className="hover:text-[#F67E17] transition">About</button>
          <button onClick={() => handleScroll('services')} className="hover:text-[#F67E17] transition">Services</button>
          <button onClick={() => handleScroll('why')} className="hover:text-[#F67E17] transition">Why Us?</button>
          <button onClick={() => handleScroll('contact')} className="hover:text-[#F67E17] transition">Contact</button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#1D3557]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col items-center p-4 space-y-4 text-[#1D3557] font-medium">
            <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-[#F67E17]">Projects</Link>
            <button onClick={() => handleScroll('about')} className="hover:text-[#F67E17]">About</button>
            <button onClick={() => handleScroll('services')} className="hover:text-[#F67E17]">Services</button>
            <button onClick={() => handleScroll('why')} className="hover:text-[#F67E17]">Why Us</button>
            <button onClick={() => handleScroll('contact')} className="hover:text-[#F67E17]">Contact</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
