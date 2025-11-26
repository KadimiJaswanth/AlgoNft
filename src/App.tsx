/**
 * App component with React Router setup
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Index } from '@/pages/Index';
import { Mint } from '@/pages/Mint';
import { NotFound } from '@/pages/NotFound';
import { useToast } from '@/hooks';
import { ToastContainer } from '@/components/primitives';

/**
 * App component
 * Main app wrapper with routing and global providers
 */
export const App: React.FC = () => {
  const { toasts, removeToast } = useToast();

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="mint" element={<Mint />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </BrowserRouter>
  );
};

App.displayName = 'App';
