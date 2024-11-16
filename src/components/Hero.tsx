import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-teal-400 to-yellow-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Chill and Earn
              <span className="block text-yellow-300">the Capy Way!</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Join the most relaxed cryptocurrency community. Where laid-back vibes meet serious gains.
            </p>
            <button className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-100 transition-all transform hover:scale-105 flex items-center">
              Join the Chill Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="flex justify-center">
            <img 
              src="/hero-capy.png" 
              alt="CapyCoin Mascot" 
              className="w-full max-w-md transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}