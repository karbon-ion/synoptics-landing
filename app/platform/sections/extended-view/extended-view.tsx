'use client';

import { useState } from 'react';
import AgentsSection from './agents-section';
import EnterpriseSearchSection from './enterprise-search-section';
import SecuritySection from './security-section';

export default function ExtendedView() {
  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <div className="space-y-8">
          <AgentsSection />
          <EnterpriseSearchSection />
          <SecuritySection />
        </div>
      </div>
    </div>
  );
}
