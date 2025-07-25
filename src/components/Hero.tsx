import React from 'react';
import { Link } from 'react-router-dom';
import { PlayIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-etoro-green min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-etoro-green rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Join the Social
              <span className="text-etoro-green"> Trading </span>
              Revolution
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Discover, follow and copy the trades of leading investors from around the world. 
              Start your trading journey with the world's leading social trading platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/dashboard" className="btn-primary text-lg px-8 py-4">
                Start Trading Now
              </Link>
              <button className="flex items-center justify-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                <PlayIcon className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white border-opacity-20">
              <div>
                <div className="text-3xl font-bold text-etoro-green">30M+</div>
                <div className="text-sm text-gray-300">Registered Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-etoro-green">140+</div>
                <div className="text-sm text-gray-300">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-etoro-green">$1T+</div>
                <div className="text-sm text-gray-300">Trading Volume</div>
              </div>
            </div>
          </div>

          {/* Right Content - Trading Interface Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">Popular Investors</h3>
                <span className="text-etoro-green text-sm">View All</span>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'JaynemesisFX', gain: '+12.34%', followers: '15.2K', avatar: '👨‍💼' },
                  { name: 'CryptoKing', gain: '+8.91%', followers: '22.1K', avatar: '👑' },
                  { name: 'StockMaster', gain: '+15.67%', followers: '18.7K', avatar: '📈' }
                ].map((investor, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-etoro-green rounded-full flex items-center justify-center text-white">
                        {investor.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{investor.name}</div>
                        <div className="text-sm text-gray-500">{investor.followers} followers</div>
                      </div>
                    </div>
                    <div className="text-etoro-green font-semibold">{investor.gain}</div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 bg-etoro-green text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Copy Investors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;