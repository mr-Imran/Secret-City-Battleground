import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-black/90 fixed w-full z-50 border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-red-600 font-bold text-xl">SCB</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#" className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
              <a href="#" className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Cloud</a>
              <a href="#" className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700">Connect</a>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-gray-400 hover:text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}