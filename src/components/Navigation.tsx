import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#work', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
  ];

  return (
    <nav
      className="fixed top-6 left-0 right-0 z-50 px-6 flex justify-center pointer-events-none"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={`w-full max-w-3xl pointer-events-auto transition-all duration-500 rounded-2xl flex items-center justify-between px-6 py-3 ${isScrolled
          ? 'glass py-2 scale-95 shadow-2xl translate-y-[-10px]'
          : 'bg-transparent py-4'
          }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-plus text-xl font-extrabold text-white hover:text-neon-cyan transition-colors"
          aria-label="Homepage"
        >
          MONK<span className="text-neon-cyan">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-neon-cyan transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <a
            href="mailto:officialharman69@gmail.com"
            className="px-5 py-2 glass border-neon-cyan/30 text-neon-cyan text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-neon-cyan hover:text-black transition-all"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-neon-cyan transition-colors p-2"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center glass backdrop-blur-3xl animate-fade-in pointer-events-auto">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-white"
          >
            <X size={32} />
          </button>

          <div className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-3xl font-plus font-bold text-white hover:text-neon-cyan transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:officialharman69@gmail.com"
              className="text-3xl font-plus font-bold text-white hover:text-neon-cyan transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;