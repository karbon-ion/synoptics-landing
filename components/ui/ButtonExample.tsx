'use client';

import React from 'react';
import { Button } from './Button';

const ButtonExample = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
          <Button size="xl">Extra Large Button</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Link Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button href="/demo">Internal Link</Button>
          <Button href="https://example.com" external>External Link</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Full Width Button</h2>
        <Button fullWidth>Full Width Button</Button>
      </div>
    </div>
  );
};

export default ButtonExample;
