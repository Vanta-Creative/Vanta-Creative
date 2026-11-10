import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101010] text-[#A5A5A5] pt-16 pb-12 border-t border-[#303030]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#222222]">
          {/* Brand & Mission */}
          <div className="md:col-span-6">
            <a
              href="#"
              className="text-2xl font-extrabold tracking-wider text-[#F5F5F5] uppercase font-display inline-block mb-4"
            >
              <span>VANTA</span>
              <span className="text-[#C6A779] mx-1">/</span>
              <span className="font-light text-[#A5A5A5]">CREATIVE</span>
            </a>

            <p className="text-sm text-[#A5A5A5] leading-relaxed max-w-md mb-6">
              A contemporary creative studio specializing in Social Media Creatives, Advertising Design, 
              Brand Visuals and Campaign Design. We make brands impossible to ignore.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-[#A5A5A5] bg-[#141414] border border-[#262626] px-3.5 py-2 rounded-xs">
              <Mail className="w-3.5 h-3.5 text-[#C6A779]" />
              <span>Direct Studio Contact:</span>
              <a
                href="mailto:tanishq.vishwakarma@gmail.com"
                className="text-[#F5F5F5] hover:text-[#C6A779] font-medium transition-colors"
              >
                tanishq.vishwakarma@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-[#F5F5F5] font-bold mb-4 font-display">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#work" className="hover:text-[#F5F5F5] transition-colors">
                  Concept Projects
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#F5F5F5] transition-colors">
                  Specialized Services
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#F5F5F5] transition-colors">
                  The Studio Standard
                </a>
              </li>
              <li>
                <a href="#budget" className="hover:text-[#F5F5F5] transition-colors">
                  Pricing & Budget
                </a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-[#F5F5F5] transition-colors">
                  Project Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Creative Studio Approach */}
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-[#F5F5F5] font-bold mb-4 font-display">
              Specializations
            </div>
            <ul className="space-y-2 text-xs text-[#A5A5A5]">
              <li>· Social Media Creatives</li>
              <li>· Advertising Design</li>
              <li>· Brand Visuals</li>
              <li>· Campaign Design</li>
              <li>· Flexible Creative Collaboration</li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[#222222]">
              <a
                href="#budget"
                className="text-xs text-[#C6A779] hover:underline flex items-center gap-1 font-medium"
              >
                <span>Find Your Budget Fit</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Notice & Concept Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <div>
            © {new Date().getFullYear()} VANTA CREATIVE. All rights reserved.
          </div>
          <div className="text-[11px] text-[#777777]">
            All featured case studies are independent demonstration concept projects.
          </div>
        </div>
      </div>
    </footer>
  );
};
