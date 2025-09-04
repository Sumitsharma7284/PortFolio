import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-400 flex items-center justify-center">
          Made with <Heart size={16} className="mx-2 text-red-500" fill="currentColor" /> by Sumit Sharma
        </p>
        <p className="text-slate-500 text-sm mt-2">
          © 2025 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;