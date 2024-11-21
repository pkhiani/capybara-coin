import React from 'react';
import { Coins, FileText, HelpCircle, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Coins className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold">CapyCoin</span>
            </div>
            <p className="mt-4 text-gray-400">The chillest cryptocurrency in the world.</p>
          </div>
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 flex items-center">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 CapyCoin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}