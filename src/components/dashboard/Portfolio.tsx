import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

const Portfolio = () => {
  const holdings = [
    { symbol: 'AAPL', name: 'Apple Inc.', shares: 10, avgPrice: 150.00, currentPrice: 175.43, value: 1754.30 },
    { symbol: 'TSLA', name: 'Tesla Inc.', shares: 5, avgPrice: 250.00, currentPrice: 248.91, value: 1244.55 },
    { symbol: 'BTC', name: 'Bitcoin', shares: 0.1, avgPrice: 40000, currentPrice: 43521, value: 4352.10 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 8, avgPrice: 140.00, currentPrice: 142.56, value: 1140.48 },
    { symbol: 'ETH', name: 'Ethereum', shares: 2, avgPrice: 2500, currentPrice: 2634, value: 5268.00 },
  ];

  const totalValue = holdings.reduce((sum, holding) => sum + holding.value, 0);
  const totalCost = holdings.reduce((sum, holding) => sum + (holding.shares * holding.avgPrice), 0);
  const totalGainLoss = totalValue - totalCost;
  const totalGainLossPercent = ((totalGainLoss / totalCost) * 100);

  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-gray-900">${totalValue.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Total Value</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className={`text-3xl font-bold flex items-center justify-center ${totalGainLoss >= 0 ? 'text-etoro-green' : 'text-red-500'}`}>
              {totalGainLoss >= 0 ? <ArrowUpIcon className="w-6 h-6 mr-1" /> : <ArrowDownIcon className="w-6 h-6 mr-1" />}
              ${Math.abs(totalGainLoss).toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">Total Gain/Loss</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className={`text-3xl font-bold ${totalGainLossPercent >= 0 ? 'text-etoro-green' : 'text-red-500'}`}>
              {totalGainLossPercent >= 0 ? '+' : ''}{totalGainLossPercent.toFixed(2)}%
            </div>
            <div className="text-sm text-gray-500">Return</div>
          </div>
        </div>
      </div>

      {/* Holdings */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Holdings</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Asset</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Shares</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Avg Price</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Current Price</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Value</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Gain/Loss</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((holding, index) => {
                const gainLoss = holding.value - (holding.shares * holding.avgPrice);
                const gainLossPercent = ((gainLoss / (holding.shares * holding.avgPrice)) * 100);
                
                return (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          {holding.symbol.slice(0, 2)}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{holding.symbol}</div>
                          <div className="text-sm text-gray-500">{holding.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right py-4 px-4 text-gray-900">{holding.shares}</td>
                    <td className="text-right py-4 px-4 text-gray-900">${holding.avgPrice.toFixed(2)}</td>
                    <td className="text-right py-4 px-4 text-gray-900">${holding.currentPrice.toFixed(2)}</td>
                    <td className="text-right py-4 px-4 font-semibold text-gray-900">${holding.value.toFixed(2)}</td>
                    <td className={`text-right py-4 px-4 font-semibold ${gainLoss >= 0 ? 'text-etoro-green' : 'text-red-500'}`}>
                      {gainLoss >= 0 ? '+' : ''}${gainLoss.toFixed(2)}
                      <div className="text-sm">({gainLossPercent >= 0 ? '+' : ''}{gainLossPercent.toFixed(2)}%)</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;