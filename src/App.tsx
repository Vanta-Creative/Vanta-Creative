/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Statement } from './components/Statement';
import { CaseStudySection } from './components/CaseStudySection';
import { FormatPlayground } from './components/FormatPlayground';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ProcessSection } from './components/ProcessSection';
import { BudgetFitSection } from './components/BudgetFitSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CAMPAIGNS, Campaign, CampaignAsset } from './data/campaigns';

export default function App() {
  const [activeAsset, setActiveAsset] = useState<CampaignAsset | null>(null);
  const [activeCampaign, setActiveCampaign] = useState<Campaign | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string>('₹2,500–₹5,000');
  const [selectedService, setSelectedService] = useState<string>('Social Media Creatives');

  const handleStartProject = (initialServiceOrConcept?: string) => {
    if (initialServiceOrConcept) {
      if (initialServiceOrConcept.includes('Concept')) {
        setSelectedService('Social Media Creatives');
      } else {
        setSelectedService(initialServiceOrConcept);
      }
    }
    const enquirySection = document.getElementById('enquiry');
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCampaign = (campaignId: string) => {
    const found = CAMPAIGNS.find((c) => c.id === campaignId);
    if (found) {
      setActiveCampaign(found);
    }
  };

  const handleSelectServiceForEnquiry = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const enquirySection = document.getElementById('enquiry');
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectBudget = (budget: string) => {
    setSelectedBudget(budget);
  };

  return (
    <div className="min-h-screen bg-[#101010] text-[#F5F5F5] font-sans selection:bg-[#C6A779] selection:text-[#101010]">
      {/* Top Header */}
      <Header onStartProject={() => handleStartProject()} />

      {/* Main Experience */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onSelectCampaign={handleSelectCampaign}
          onStartProject={() => handleStartProject()}
        />

        {/* 2. Agency Statement & The Vanta Standard */}
        <Statement />

        {/* 3. Concept Projects & Creative Demonstrations */}
        <CaseStudySection
          onSelectCampaign={handleSelectCampaign}
          onSelectAsset={(asset) => setActiveAsset(asset)}
        />

        {/* 4. Multi-Placement Format Engineering */}
        <FormatPlayground />

        {/* 5. Capabilities & Specializations */}
        <CapabilitiesSection
          onSelectServiceForEnquiry={handleSelectServiceForEnquiry}
        />

        {/* 6. Creative Process */}
        <ProcessSection />

        {/* 7. Flexible Client Budget Section: "LET'S FIND THE RIGHT FIT." */}
        <BudgetFitSection
          onSelectBudget={handleSelectBudget}
        />

        {/* 8. Project Enquiry Form */}
        <InquirySection
          initialBudget={selectedBudget}
          initialService={selectedService}
        />
      </main>

      {/* 9. Quiet Editorial Footer */}
      <Footer />

      {/* Lightbox Modal for High-Res Inspection */}
      {activeAsset && (
        <Lightbox
          asset={activeAsset}
          onClose={() => setActiveAsset(null)}
          onSelectAsset={(asset) => setActiveAsset(asset)}
          onStartProject={() => {
            setActiveAsset(null);
            handleStartProject();
          }}
        />
      )}

      {/* Concept Overview Modal */}
      {activeCampaign && (
        <CaseStudyModal
          campaign={activeCampaign}
          onClose={() => setActiveCampaign(null)}
          onSelectAsset={(asset) => setActiveAsset(asset)}
          onStartProject={(service) => {
            setActiveCampaign(null);
            handleStartProject(service);
          }}
        />
      )}
    </div>
  );
}
