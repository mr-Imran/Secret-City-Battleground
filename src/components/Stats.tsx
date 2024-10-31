import React from 'react';
import { Users, Wifi, Trophy, Users2 } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Users, label: 'Active Players', value: '6' },
    { icon: Users2, label: 'Discord Active', value: '529' },
    { icon: Trophy, label: 'Headshot Mode', value: '5+' },
    { icon: Wifi, label: 'Server Mods', value: '10+' },
  ];

  return (
    <div className="bg-black/95 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg border border-red-900/20">
              <stat.icon className="w-8 h-8 text-red-500 mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}