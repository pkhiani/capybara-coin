import React from 'react';

export function Roadmap() {
  const milestones = [
    { phase: "Phase 1", title: "Launch", description: "Initial token launch and community building" },
    { phase: "Phase 2", title: "NFT Integration", description: "Release of exclusive CapyNFT collections" },
    { phase: "Phase 3", title: "Partnerships", description: "Conservation partnerships and ecosystem expansion" },
    { phase: "Phase 4", title: "Global Impact", description: "Worldwide adoption and conservation projects" }
  ];

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Roadmap</h2>
        </div>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-32 text-right font-bold text-yellow-500">
                {milestone.phase}
              </div>
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="flex-grow bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}