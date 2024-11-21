import React from 'react';
import { Twitter, MessageCircle } from 'lucide-react';

export function Community() {
  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join the Chillest Community in Crypto!</h2>
          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://x.com/capybara_base" className="p-4 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
              <Twitter className="h-8 w-8 text-blue-400" />
            </a>
            <a href="https://t.me/+eshgw4kwl9FlMDI5" className="p-4 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
              <MessageCircle className="h-8 w-8 text-indigo-500" />
            </a>
          </div>
          <div className="flex justify-center">
            <img 
              src="/capy-logo.png" 
              alt="CapyCoin Logo" 
              className="w-full max-w-md transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}