import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About CapyCoin</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CapyCoin is a community-driven meme coin spreading joy, promoting relaxation, 
            and contributing to wildlife conservation. Just like our spirit animal, 
            we believe in taking life easy while making a positive impact.
          </p>
        </div>
        <div className='align-center justify-center flex'>
        <a href="https://fun.virtuals.io/agents/0x52FfF1bFDF071A43F79A3Eb45739107Fd000DbA8">
            <button className=" bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition" >
              Connect Wallet
            </button>
            </a>
        </div>

      </div>
    </section>
  );
}