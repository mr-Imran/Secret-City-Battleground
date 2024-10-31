import React from 'react';
import { Cloud as CloudIcon } from 'lucide-react';

export default function CloudSection() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <CloudIcon className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">SCB CLOUD</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Store and share your gaming assets with our free cloud hosting service. Get 1GB storage and share up to 100GB with others at no cost.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {['Free Storage', 'Fast Upload', 'Secure'].map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-red-900/20">
              <h3 className="text-xl font-bold text-white mb-2">{feature}</h3>
              <p className="text-gray-400">Experience premium cloud features without any cost.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}