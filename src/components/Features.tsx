import React from 'react';
import { Users, Palette, TreePine } from 'lucide-react';

export function Features() {
  const features = [
    {
      title: "Community Rewards",
      description: "Earn rewards just for being part of our chill community",
      icon: <Users className="h-12 w-12 text-yellow-500" />
    },
    {
      title: "CapyNFTs",
      description: "Exclusive NFT collections featuring our favorite relaxed creatures",
      icon: <Palette className="h-12 w-12 text-yellow-500" />
    },
    {
      title: "Eco-Conscious",
      description: "Part of all transactions goes to wildlife conservation",
      icon: <TreePine className="h-12 w-12 text-yellow-500" />
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Features</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}