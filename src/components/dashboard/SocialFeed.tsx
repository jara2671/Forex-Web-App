import React from 'react';
import { HeartIcon, ChatBubbleLeftIcon, ShareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const SocialFeed = () => {
  const posts = [
    {
      id: 1,
      user: {
        name: 'JaynemesisFX',
        avatar: '👨‍💼',
        verified: true,
        followers: '15.2K',
        gain: '+12.34%'
      },
      content: 'Just opened a new position in $AAPL. The fundamentals look strong and I expect continued growth in the services segment. What do you think?',
      timestamp: '2 hours ago',
      likes: 47,
      comments: 12,
      shares: 8,
      liked: false,
      tags: ['AAPL', 'Tech', 'LongTerm']
    },
    {
      id: 2,
      user: {
        name: 'CryptoKing',
        avatar: '👑',
        verified: true,
        followers: '22.1K',
        gain: '+8.91%'
      },
      content: 'Bitcoin breaking through resistance levels! 🚀 This could be the start of the next bull run. Remember to always manage your risk and never invest more than you can afford to lose.',
      timestamp: '4 hours ago',
      likes: 89,
      comments: 23,
      shares: 15,
      liked: true,
      tags: ['BTC', 'Crypto', 'Bullish']
    },
    {
      id: 3,
      user: {
        name: 'StockMaster',
        avatar: '📈',
        verified: false,
        followers: '8.7K',
        gain: '+15.67%'
      },
      content: 'Diversification is key! My portfolio is spread across tech, healthcare, and renewable energy. Here\'s my current allocation breakdown...',
      timestamp: '6 hours ago',
      likes: 34,
      comments: 7,
      shares: 5,
      liked: false,
      tags: ['Portfolio', 'Diversification', 'Strategy']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Social Trading Feed</h2>
        <p className="text-gray-600 mb-6">Follow top traders and learn from their strategies</p>
        
        {/* Create Post */}
        <div className="border border-gray-200 rounded-lg p-4 mb-6">
          <textarea
            placeholder="Share your trading insights..."
            className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-etoro-green focus:border-transparent"
            rows={3}
          />
          <div className="flex justify-between items-center mt-3">
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
                #AAPL
              </button>
              <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
                #BTC
              </button>
            </div>
            <button className="bg-etoro-green text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-sm p-6">
            {/* User Info */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-etoro-green rounded-full flex items-center justify-center text-white text-lg">
                  {post.user.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">{post.user.name}</span>
                    {post.user.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{post.user.followers} followers</span>
                    <span className="text-etoro-green font-semibold">{post.user.gain}</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">{post.timestamp}</div>
            </div>

            {/* Content */}
            <p className="text-gray-800 mb-4 leading-relaxed">{post.content}</p>

            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  {post.liked ? (
                    <HeartSolidIcon className="w-5 h-5 text-red-500" />
                  ) : (
                    <HeartIcon className="w-5 h-5" />
                  )}
                  <span className="text-sm">{post.likes}</span>
                </button>
                
                <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <ChatBubbleLeftIcon className="w-5 h-5" />
                  <span className="text-sm">{post.comments}</span>
                </button>
                
                <button className="flex items-center gap-2 text-gray-500 hover:text-etoro-green transition-colors">
                  <ShareIcon className="w-5 h-5" />
                  <span className="text-sm">{post.shares}</span>
                </button>
              </div>
              
              <button className="bg-etoro-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm">
                Copy Trade
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialFeed;