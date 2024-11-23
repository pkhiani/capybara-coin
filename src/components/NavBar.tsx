import React from 'react';
import { Coins } from 'lucide-react';

export function NavBar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Coins className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">CapyCoin</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-yellow-500">About</a>
            <a href="#features" className="text-gray-700 hover:text-yellow-500">Features</a>
            <a href="#roadmap" className="text-gray-700 hover:text-yellow-500">Roadmap</a>
            <a href="#community" className="text-gray-700 hover:text-yellow-500">Community</a>
            <a href="#about">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition" >
              Connect Wallet
            </button>
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
}