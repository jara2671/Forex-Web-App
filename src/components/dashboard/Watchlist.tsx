import React from 'react';
import { PlusIcon, StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

const Watchlist = () => {
  const watchlistItems = [
    { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 875.43, change: '+12.34', changePercent: '+1.43%', positive: true, starred: true },
    { symbol: 'MSFT', name: 'Microsoft Corporation', price: 415.26, change: '-2.18', changePercent: '-0.52%', positive: false, starred: false },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 151.23, change: '+3.45', changePercent: '+2.33%', positive: true, starred: true },
    { symbol: 'META', name: 'Meta Platforms Inc.', price: 487.91, change: '+8.76', changePercent: '+1.83%', positive: true, starred: false },
    { symbol: 'NFLX', name: 'Netflix Inc.', price: 598.34, change: '-5.67', changePercent: '-0.94%', positive: false, starred: true },
    { symbol: 'AMD', name: 'Advanced Micro Devices', price: 187.45, change: '+4.32', changePercent: '+2.36%', positive: true, starred: false },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Watchlist</h2>
          <button className="flex items-center gap-2 bg-etoro-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            <PlusIcon className="w-5 h-5" />
            Add Asset
          </button>
        </div>
        <p className="text-gray-600">Track your favorite assets and stay updated with real-time prices</p>
      </div>

      {/* Watchlist Items */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="space-y-4">
          {watchlistItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-etoro-green transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <button className="text-gray-400 hover:text-yellow-500 transition-colors">
                  {item.starred ? (
                    <StarSolidIcon className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <StarIcon className="w-5 h-5" />
                  )}
                </button>
                
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {item.symbol.slice(0, 2)}
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">{item.symbol}</div>
                  <div className="text-sm text-gray-500">{item.name}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-semibold text-gray-900 text-lg">${item.price}</div>
                <div className={`text-sm font-medium ${item.positive ? 'text-etoro-green' : 'text-red-500'}`}>
                  {item.change} ({item.changePercent})
                </div>
              </div>

              <div className="flex gap-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                  Sell
                </button>
                <button className="bg-etoro-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Movers */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Movers</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Top Gainers</h4>
            <div className="space-y-2">
              {[
                { symbol: 'ROKU', change: '+15.67%' },
                { symbol: 'SNAP', change: '+12.34%' },
                { symbol: 'UBER', change: '+8.91%' }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span className="font-medium">{item.symbol}</span>
                  <span className="text-etoro-green font-semibold">{item.change}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Top Losers</h4>
            <div className="space-y-2">
              {[
                { symbol: 'PYPL', change: '-8.45%' },
                { symbol: 'ZOOM', change: '-6.78%' },
                { symbol: 'SHOP', change: '-5.23%' }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-red-50 rounded">
                  <span className="font-medium">{item.symbol}</span>
                  <span className="text-red-500 font-semibold">{item.change}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;