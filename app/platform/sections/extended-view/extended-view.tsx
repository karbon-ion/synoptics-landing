'use client';

import { useState } from 'react';
import AgentsSection from './agents-section';
import EnterpriseSearchSection from './enterprise-search-section';
import SecuritySection from './security-section';

export default function ExtendedView() {
  return (
    <div className="relative left-1/2 -translate-x-1/2 w-[95vw] max-w-[1800px]">
      <div>
        <div className="p-8 rounded-lg mt-4 overflow-x-auto" style={{
          background: ''
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
