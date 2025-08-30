import React from 'react';
import { AISearchLogo } from './logos/ai-search-logo';

export const AISearchLogoHeader = () => (
  <div className="flex items-center gap-2 my-1.5">
    <AISearchLogo className="size-7" />
    <h2 className="text-xl font-normal font-be-vietnam-pro text-foreground dark:text-foreground">AI Search</h2>
  </div>
);
