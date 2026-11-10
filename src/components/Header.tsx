import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onStartProject: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onStartProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Selected Work', href: '#work' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Concept Projects', href: '#case-studies' },
    { label: 'The Standard', href: '#philosophy' },
    { label: 'Pricing & Budget', href: '#budget' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#101010]/95 backdrop-blur-md border-b border-[#303030]/80 py-4 shadow-xl shadow-black/40'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Bar Contract: 3 zones, gap-8 */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark (single text element) */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-extrabold tracking-wider text-[#F5F5F5] uppercase font-display whitespace-nowrap shrink-0 group flex items-center gap-1.5"
          >
            <span>VANTA</span>
            <span className="text-[#C6A779] transition-transform duration-300 group-hover:translate-x-0.5">/</span>
            <span className="font-light text-[#A5A5A5] group-hover:text-[#F5F5F5] transition-colors">CREATIVE</span>
          </a>

          {/* Zone 2: 4-5 single-line clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#A5A5A5]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#F5F5F5] transition-colors whitespace-nowrap shrink-0 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A779] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={onStartProject}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#101010] bg-[#C6A779] hover:bg-[#D7BC91] rounded-sm transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-95 shadow-sm shadow-[#C6A779]/20 cursor-pointer"
            >
              <span>Discuss Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#A5A5A5] hover:text-[#F5F5F5] rounded-sm transition-colors border border-[#303030] cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101010] border-b border-[#303030] px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#A5A5A5]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#F5F5F5] border-b border-[#202020] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartProject();
                }}
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#101010] bg-[#C6A779] hover:bg-[#D7BC91] rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discuss Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
