import React from 'react';
import { ShieldCheck, Crosshair } from 'lucide-react';

export default function Features() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-red-900/20">
            <ShieldCheck className="w-12 h-12 text-red-500 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Custom Kill Feed Picture</h3>
            <p className="text-gray-400 mb-6">
              Personalize your gaming experience with custom profile pictures and manage your profile directly through our web interface.
            </p>
            <button className="text-red-500 font-medium hover:text-red-400">
              Learn More →
            </button>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-red-900/20">
            <Crosshair className="w-12 h-12 text-red-500 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Web Based Leaderboard</h3>
            <p className="text-gray-400 mb-6">
              Track your performance with our comprehensive web-based leaderboard system. Monitor your kills, K/D ratio, and ranking.
            </p>
            <button className="text-red-500 font-medium hover:text-red-400">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}