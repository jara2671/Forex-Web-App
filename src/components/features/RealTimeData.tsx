import React, { useState, useEffect } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
}

const RealTimeData: React.FC = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Simulate real-time data updates
    const symbols = ['AAPL', 'GOOGL', 'MSFT', 'TSLA', 'AMZN', 'META'];
    
    const generateInitialData = () => {
      return symbols.map(symbol => ({
        symbol,
        price: Math.random() * 500 + 100,
        change: (Math.random() - 0.5) * 20,
        changePercent: (Math.random() - 0.5) * 5,
        volume: Math.floor(Math.random() * 10000000),
      }));
    };

    setMarketData(generateInitialData());
    setIsConnected(true);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setMarketData(prevData => 
        prevData.map(item => ({
          ...item,
          price: item.price + (Math.random() - 0.5) * 2,
          change: item.change + (Math.random() - 0.5) * 0.5,
          changePercent: item.changePercent + (Math.random() - 0.5) * 0.1,
          volume: item.volume + Math.floor((Math.random() - 0.5) * 100000),
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">Live Market Data</h3>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className="text-sm text-gray-600">
            {isConnected ? 'Connected' : 'Disconnected'}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {marketData.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {item.symbol.slice(0, 2)}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{item.symbol}</div>
                <div className="text-sm text-gray-500">
                  Vol: {item.volume.toLocaleString()}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="font-semibold text-gray-900">
                ${item.price.toFixed(2)}
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                item.change >= 0 ? 'text-etoro-green' : 'text-red-500'
              }`}>
                {item.change >= 0 ? (
                  <ArrowUpIcon className="w-3 h-3" />
                ) : (
                  <ArrowDownIcon className="w-3 h-3" />
                )}
                {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)} 
                ({item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%)
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeData;