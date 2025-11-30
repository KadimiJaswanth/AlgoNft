import React from 'react';
import Header from './mint/Header';
import NFTPreview from './mint/NFTPreview';
import MintOptionsForm from './mint/MintOptionsForm';
import BlockchainSidebar from './mint/BlockchainSidebar';
import MintButtonSection from './mint/MintButtonSection';
import RecentGallery from './mint/RecentGallery';
import SecurityBenefits from './mint/SecurityBenefits';
import Footer from './mint/Footer';

const MintPage: React.FC = () => {
  return (
    <div className="mint-page min-h-screen bg-gradient-to-b from-[#061021] to-[#08122a] p-8 text-white">
      <Header />
      <main className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-6">
          <NFTPreview />
          <MintOptionsForm />
          <MintButtonSection />
          <RecentGallery />
          <SecurityBenefits />
        </section>
        <aside className="lg:col-span-1">
          <BlockchainSidebar />
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default MintPage;
