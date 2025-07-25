import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TradingChart = () => {
  const [selectedAsset, setSelectedAsset] = useState('AAPL');
  const [orderType, setOrderType] = useState('buy');
  const [amount, setAmount] = useState('');

  const chartData = [
    { time: '09:00', price: 170.50 },
    { time: '10:00', price: 172.30 },
    { time: '11:00', price: 171.80 },
    { time: '12:00', price: 174.20 },
    { time: '13:00', price: 175.10 },
    { time: '14:00', price: 173.90 },
    { time: '15:00', price: 175.43 },
  ];

  const assets = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 175.43, change: '+2.34%' },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.91, change: '-1.23%' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.56, change: '+1.89%' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 415.26, change: '+0.87%' },
  ];

  return (
    <div className="space-y-6">
      {/* Asset Selection */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Trading</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {assets.map((asset) => (
            <button
              key={asset.symbol}
              onClick={() => setSelectedAsset(asset.symbol)}
              className={`p-4 rounded-lg border-2 transition-colors ${
                selectedAsset === asset.symbol
                  ? 'border-etoro-green bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-semibold text-gray-900">{asset.symbol}</div>
              <div className="text-sm text-gray-500">{asset.name}</div>
              <div className="font-semibold text-gray-900">${asset.price}</div>
              <div className={`text-sm ${asset.change.startsWith('+') ? 'text-etoro-green' : 'text-red-500'}`}>
                {asset.change}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">{selectedAsset} Price Chart</h3>
            <div className="flex gap-2">
              {['1D', '1W', '1M', '3M', '1Y'].map((period) => (
                <button
                  key={period}
                  className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis domain={['dataMin - 1', 'dataMax + 1']} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#00C896" 
                  strokeWidth={2}
                  dot={{ fill: '#00C896', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Order Panel */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Place Order</h3>
          
          <div className="space-y-4">
            {/* Buy/Sell Toggle */}
            <div className="flex rounded-lg border border-gray-300 overflow-hidden">
              <button
                onClick={() => setOrderType('buy')}
                className={`flex-1 py-3 font-semibold transition-colors ${
                  orderType === 'buy'
                    ? 'bg-etoro-green text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setOrderType('sell')}
                className={`flex-1 py-3 font-semibold transition-colors ${
                  orderType === 'sell'
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Sell
              </button>
            </div>

            {/* Amount Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount ($)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-etoro-green focus:border-transparent"
              />
            </div>

            {/* Order Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Order Type
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-etoro-green focus:border-transparent">
                <option>Market Order</option>
                <option>Limit Order</option>
                <option>Stop Loss</option>
              </select>
            </div>

            {/* Leverage */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Leverage
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-etoro-green focus:border-transparent">
                <option>1x</option>
                <option>2x</option>
                <option>5x</option>
                <option>10x</option>
              </select>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Asset:</span>
                <span className="font-semibold">{selectedAsset}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Current Price:</span>
                <span className="font-semibold">$175.43</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Estimated Shares:</span>
                <span className="font-semibold">
                  {amount ? (parseFloat(amount) / 175.43).toFixed(4) : '0'}
                </span>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              className={`w-full py-4 rounded-lg font-semibold text-white transition-colors ${
                orderType === 'buy'
                  ? 'bg-etoro-green hover:bg-green-600'
                  : 'bg-red-500 hover:bg-red-600'
              }`}
            >
              {orderType === 'buy' ? 'Place Buy Order' : 'Place Sell Order'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingChart;