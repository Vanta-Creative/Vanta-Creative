import React, { useState, useEffect } from 'react';
import { Mail, Check, Copy, ExternalLink, AlertCircle, Info, Send } from 'lucide-react';

interface InquirySectionProps {
  initialBudget?: string;
  initialService?: string;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  initialBudget,
  initialService
}) => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    contactMethod: '',
    service: initialService || 'Social Media Creatives',
    budget: initialBudget || '₹2,500–₹5,000',
    requirements: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showDispatchModal, setShowDispatchModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync props if changed
  useEffect(() => {
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, budget: initialBudget }));
    }
  }, [initialBudget]);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const budgetOptions = [
    'Under ₹1,000',
    '₹1,000–₹2,500',
    '₹2,500–₹5,000',
    '₹5,000+',
    'Not sure yet — let\'s discuss'
  ];

  const serviceOptions = [
    'Social Media Creatives',
    'Advertising Design',
    'Brand Visuals',
    'Campaign Design',
    'Creative Collaboration / Other'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.contactMethod.trim()) {
      errs.contactMethod = 'Please provide an email or preferred contact method';
    }
    if (!formData.requirements.trim()) {
      errs.requirements = 'Please describe your project requirements';
    }
    return errs;
  };

  const getFormattedEnquiryText = () => {
    return `VANTA CREATIVE — PROJECT ENQUIRY
----------------------------------------
Client Name: ${formData.name}
Business / Brand: ${formData.brand.trim() || 'Not specified (Independent / Creator)'}
Contact Method: ${formData.contactMethod}
Type of Service: ${formData.service}
Client Budget Preference: ${formData.budget} (Indicates client preference; not a fixed contract quote)

Project Requirements & Brief:
${formData.requirements}
----------------------------------------`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setShowDispatchModal(true);
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(getFormattedEnquiryText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Enquiry: ${formData.service} — ${formData.name}`);
    const body = encodeURIComponent(getFormattedEnquiryText());
    return `mailto:tanishq.vishwakarma@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="enquiry" className="py-24 bg-[#101010] border-b border-[#303030]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-widest text-[#C6A779] font-medium mb-3">
              Start The Conversation
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-display text-[#F5F5F5] tracking-tight mb-4">
              Project Enquiry.
            </h2>
            <p className="text-sm text-[#A5A5A5] leading-relaxed mb-8">
              Tell us what you're building, what creative support you need, and what budget you're comfortable with. 
              We'll discuss the scope, explore creative avenues, and find an approach that works for both sides.
            </p>

            {/* Genuine Contact Box */}
            <div className="p-6 bg-[#181818] border border-[#282828] rounded-sm space-y-4 mb-8">
              <div className="text-xs uppercase tracking-wider text-[#C6A779] font-semibold">
                Direct Contact
              </div>
              <p className="text-xs text-[#A5A5A5] leading-relaxed">
                Prefer direct email? You can reach us directly without filling the form:
              </p>
              <a
                href="mailto:tanishq.vishwakarma@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#F5F5F5] hover:text-[#C6A779] transition-colors bg-[#101010] border border-[#303030] px-3.5 py-2 rounded-xs"
              >
                <Mail className="w-4 h-4 text-[#C6A779]" />
                <span>tanishq.vishwakarma@gmail.com</span>
              </a>
            </div>

            {/* Budget Preference Clarification */}
            <div className="p-4 bg-[#141414] border border-[#222222] rounded-xs text-xs text-[#A5A5A5] space-y-1.5">
              <div className="text-[#F5F5F5] font-semibold flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#C6A779]" />
                <span>Budget Preferences</span>
              </div>
              <p className="leading-relaxed">
                Selecting an approximate budget helps us calibrate scope and possibilities. 
                It does not automatically confirm a quotation or project agreement.
              </p>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#282828] rounded-sm p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Brand Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Sharma"
                    className={`w-full bg-[#181818] border text-xs text-[#F5F5F5] px-4 py-3 rounded-xs focus:outline-none focus:border-[#C6A779] transition-colors ${
                      errors.name ? 'border-red-500/80' : 'border-[#303030]'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] font-semibold mb-2">
                    Business or Brand Name <span className="text-[#666666] font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    placeholder="e.g. Apex Living (or leave blank)"
                    className="w-full bg-[#181818] border border-[#303030] text-xs text-[#F5F5F5] px-4 py-3 rounded-xs focus:outline-none focus:border-[#C6A779] transition-colors"
                  />
                </div>
              </div>

              {/* Email or Preferred Contact */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] font-semibold mb-2">
                  Email or Preferred Contact Method *
                </label>
                <input
                  type="text"
                  value={formData.contactMethod}
                  onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                  placeholder="e.g. yourname@gmail.com, @instagram_handle, or phone / WhatsApp"
                  className={`w-full bg-[#181818] border text-xs text-[#F5F5F5] px-4 py-3 rounded-xs focus:outline-none focus:border-[#C6A779] transition-colors ${
                    errors.contactMethod ? 'border-red-500/80' : 'border-[#303030]'
                  }`}
                />
                {errors.contactMethod && (
                  <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.contactMethod}
                  </span>
                )}
              </div>

              {/* Service & Budget Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] font-semibold mb-2">
                    Type of Service Required *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#181818] border border-[#303030] text-xs text-[#F5F5F5] px-3 py-3 rounded-xs focus:outline-none focus:border-[#C6A779] cursor-pointer"
                  >
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] font-semibold mb-2">
                    Approximate Budget Preference *
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#181818] border border-[#303030] text-xs text-[#F5F5F5] px-3 py-3 rounded-xs focus:outline-none focus:border-[#C6A779] cursor-pointer"
                  >
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Requirements Description */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] font-semibold mb-2">
                  Project Requirements / Description *
                </label>
                <textarea
                  rows={4}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Describe what you need designed, target timeline, aesthetic preferences, or any questions you have..."
                  className={`w-full bg-[#181818] border text-xs text-[#F5F5F5] p-4 rounded-xs focus:outline-none focus:border-[#C6A779] transition-colors leading-relaxed ${
                    errors.requirements ? 'border-red-500/80' : 'border-[#303030]'
                  }`}
                />
                {errors.requirements && (
                  <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.requirements}
                  </span>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-[#101010] bg-[#C6A779] hover:bg-[#D7BC91] rounded-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#C6A779]/10"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Project Enquiry</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Transparent Dispatch Modal (Complies with Requirement 3) */}
      {showDispatchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#141414] border border-[#303030] rounded-sm p-6 sm:p-8 text-left shadow-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C6A779] font-mono mb-2">
              <Info className="w-4 h-4 text-[#C6A779]" />
              <span>Direct Enquiry Transmission</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F5F5F5] mb-3">
              Ready to Send Your Brief
            </h3>

            {/* Explanation of integration requirement */}
            <div className="p-4 bg-[#181818] border border-[#2a2a2a] rounded-xs text-xs text-[#A5A5A5] leading-relaxed mb-6 space-y-2">
              <p>
                <strong className="text-[#F5F5F5]">Form Integration Notice: </strong>
                This website currently operates without an automated third-party form backend service (such as Formspree, Resend, or a cloud email relay).
              </p>
              <p>
                To ensure your enquiry is never lost, we have compiled your brief and formatted it for direct dispatch to our genuine studio inbox at:
              </p>
              <div className="text-sm font-semibold text-[#C6A779] font-mono py-1">
                tanishq.vishwakarma@gmail.com
              </div>
            </div>

            {/* Summary Preview */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-[11px] text-[#A5A5A5] mb-2 font-mono">
                <span>FORMATTED ENQUIRY BRIEF</span>
                <span>{formData.service}</span>
              </div>
              <pre className="p-4 bg-[#101010] border border-[#222222] rounded-xs text-[11px] text-[#E0E0E0] font-mono whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed">
                {getFormattedEnquiryText()}
              </pre>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={getMailtoUrl()}
                className="w-full sm:w-auto flex-1 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#101010] bg-[#C6A779] hover:bg-[#D7BC91] rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email Client</span>
              </a>

              <button
                type="button"
                onClick={handleCopyText}
                className="w-full sm:w-auto py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] bg-[#1a1a1a] hover:bg-[#242424] border border-[#303030] rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Brief Details'}</span>
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-[#222222] flex justify-end">
              <button
                type="button"
                onClick={() => setShowDispatchModal(false)}
                className="text-xs text-[#A5A5A5] hover:text-[#F5F5F5] transition-colors cursor-pointer"
              >
                Close & Return to Form
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
