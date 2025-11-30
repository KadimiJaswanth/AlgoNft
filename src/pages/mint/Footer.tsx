import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 text-sm text-gray-400">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} Algonft</div>
        <div className="flex gap-4">
          <a href="#">Terms of service</a>
          <a href="#">Privacy policy</a>
          <a href="#">Smart contract</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
