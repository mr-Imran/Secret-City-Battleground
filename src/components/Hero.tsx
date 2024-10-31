import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
          alt="Gaming Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
      </div>
      <div className="relative max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-8">
          <span className="text-white">SECRET CITY</span>
          <br />
          <span className="text-red-600">BATTLEGROUND</span>
        </h1>
        <p className="text-gray-300 text-center max-w-2xl mb-12 text-lg">
          The first Bangladeshi FiveM based PvP server, offering an intense, fast-paced gaming experience with up to twenty players in urban combat scenarios.
        </p>
        <div className="flex space-x-4">
          <button className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
            Play Now
          </button>
          <button className="border border-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-600/10 transition-colors">
            Join Discord
          </button>
        </div>
      </div>
    </div>
  );
}