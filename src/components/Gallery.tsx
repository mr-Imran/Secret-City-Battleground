import React from 'react';

export default function Gallery() {
  return (
    <div className="bg-black/95 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Special Weapons</h2>
          <p className="text-gray-400">Limited edition weapons available now</p>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-red-900/20 p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&q=80"
                alt="SCAR-L"
                className="rounded-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">SCAR-L</h3>
              <p className="text-red-500 font-medium">Stock Limited: Only 2 Left</p>
              <p className="text-gray-400">
                The SCAR-L is a highly versatile assault rifle known for its accuracy and reliability in combat situations.
              </p>
              <button className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}