import React from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';

const NewsFeed = () => {
  const news = [
    {
      title: 'Apple Reports Strong Q4 Earnings',
      summary: 'Apple Inc. exceeded expectations with record iPhone sales...',
      time: '2 hours ago',
      source: 'Reuters',
      impact: 'positive'
    },
    {
      title: 'Tesla Stock Drops on Production Concerns',
      summary: 'Tesla shares fell after reports of production delays...',
      time: '4 hours ago',
      source: 'Bloomberg',
      impact: 'negative'
    },
    {
      title: 'Bitcoin Reaches New Monthly High',
      summary: 'Cryptocurrency markets surge as institutional adoption grows...',
      time: '6 hours ago',
      source: 'CoinDesk',
      impact: 'positive'
    },
    {
      title: 'Fed Signals Potential Rate Changes',
      summary: 'Federal Reserve hints at monetary policy adjustments...',
      time: '8 hours ago',
      source: 'WSJ',
      impact: 'neutral'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Market News</h3>
      
      <div className="space-y-4">
        {news.map((item, index) => (
          <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full mt-2 ${
                item.impact === 'positive' ? 'bg-etoro-green' :
                item.impact === 'negative' ? 'bg-red-500' : 'bg-gray-400'
              }`}></div>
              
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1 hover:text-etoro-green cursor-pointer">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mb-2">{item.summary}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="font-medium">{item.source}</span>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-3 h-3" />
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-etoro-green font-semibold hover:text-green-600 transition-colors">
        View All News
      </button>
    </div>
  );
};

export default NewsFeed;