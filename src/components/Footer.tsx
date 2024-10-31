import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black/95 border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">News</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500">Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Forums</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Copyright</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-red-900/30 text-center">
          <p className="text-gray-400">© 2024 Secret City Battleground. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}