import React from 'react';
import GlassCard from './GlassCard';

const SecurityBenefits: React.FC = () => {
  const cards = [
    { title: 'Secure Protocol', emoji: '🔒' },
    { title: 'Fast Transactions', emoji: '⚡' },
    { title: 'Carbon-negative', emoji: '🌱' },
    { title: 'Low fees', emoji: '💸' },
  ];
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold">Security & Benefits</h3>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {cards.map((c) => (
          <GlassCard key={c.title}>
            <div className="text-2xl">{c.emoji}</div>
            <div className="font-medium mt-1">{c.title}</div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default SecurityBenefits;
