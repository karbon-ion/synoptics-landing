'use client';

import { useState } from 'react';
import AgentsSection from './agents-section';
import EnterpriseSearchSection from './enterprise-search-section';
import SecuritySection from './security-section';

export default function ExtendedView() {
  return (
    <div className="relative left-1/2 -translate-x-1/2 w-[95vw] max-w-[1800px]">
      <div>
        <div className="p-8 border border-gray-200 rounded-lg mt-4 overflow-x-auto" style={{
          background: 'linear-gradient(196.25deg, rgba(255, 255, 255, 0.4) 9.13%, rgba(219, 234, 254, 0.28) 92.56%)'
        }}>
          <div className="max-w-[1400px] mx-auto space-y-8">
            <AgentsSection />
            <EnterpriseSearchSection />
            <SecuritySection />
          </div>
        </div>
      </div>
    </div>
  );
}
