
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141414] border-t border-gray-800 py-6">
      <div className="container mx-auto px-6 lg:px-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} MC Hoài Thương. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;