import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-bold text-[#d4a574]">BrandCrafters</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Crafting connections through thoughtful, branded gifts.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">SOLUTIONS</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Corporate Gifting</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Promotional Items</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Employee Recognition</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">LEGAL</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          &copy; 2024 BrandCrafters, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
