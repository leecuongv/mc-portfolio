
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Trang Chủ' },
    { href: '#about', label: 'Giới Thiệu' },
    { href: '#showreel', label: 'Showreel' },
    { href: '#services', label: 'Dịch Vụ' },
    { href: '#gallery', label: 'Thư Viện Ảnh' },
    { href: '#partners', label: 'Đối Tác' },
    { href: '#contact', label: 'Liên Hệ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
        <a href="#home" className="text-2xl font-bold text-white font-display">
          Hoài Thương
        </a>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => (
             <a key={link.href} href={link.href} className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
        </nav>
        {/* Mobile menu button could be added here */}
      </div>
    </header>
  );
};

export default Header;
