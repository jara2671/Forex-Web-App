import React from 'react';
import { Link } from 'react-router-dom';

const TradingPlatform = () => {
  const assets = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: '$175.43', change: '+2.34%', positive: true },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: '$248.91', change: '-1.23%', positive: false },
    { symbol: 'BTC', name: 'Bitcoin', price: '$43,521', change: '+5.67%', positive: true },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: '$142.56', change: '+1.89%', positive: true },
    { symbol: 'ETH', name: 'Ethereum', price: '$2,634', change: '+3.45%', positive: true },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: '$151.23', change: '-0.78%', positive: false }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trade the World's Most Popular Assets
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Access thousands of stocks, cryptocurrencies, commodities, and forex pairs. 
              Start with as little as $10 and trade with confidence on our award-winning platform.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-etoro-green rounded-full"></div>
                <span className="text-gray-700">3,000+ stocks from 17 exchanges</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-etoro-green rounded-full"></div>
                <span className="text-gray-700">70+ cryptocurrencies including Bitcoin & Ethereum</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-etoro-green rounded-full"></div>
                <span className="text-gray-700">Commodities, indices, and forex pairs</span>
              </div>
            </div>

            <Link to="/dashboard" className="btn-primary">
              Start Trading
            </Link>
          </div>

          {/* Right Content - Asset List */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Popular Assets</h3>
              <span className="text-etoro-green text-sm font-medium">View All Markets</span>
            </div>
            
            <div className="space-y-3">
              {assets.map((asset, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {asset.symbol.slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{asset.symbol}</div>
                      <div className="text-sm text-gray-500">{asset.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{asset.price}</div>
                    <div className={`text-sm font-medium ${asset.positive ? 'text-etoro-green' : 'text-red-500'}`}>
                      {asset.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 bg-etoro-green text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              Explore All Assets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingPlatform;