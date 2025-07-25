import React, { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import Sidebar from '../components/dashboard/Sidebar';
import Portfolio from '../components/dashboard/Portfolio';
import Watchlist from '../components/dashboard/Watchlist';
import TradingChart from '../components/dashboard/TradingChart';
import NewsFeed from '../components/dashboard/NewsFeed';
import SocialFeed from '../components/dashboard/SocialFeed';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('portfolio');

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-6">
              {activeTab === 'portfolio' && <Portfolio />}
              {activeTab === 'watchlist' && <Watchlist />}
              {activeTab === 'trade' && <TradingChart />}
              {activeTab === 'social' && <SocialFeed />}
            </div>
            
            {/* Right Sidebar */}
            <div className="space-y-6">
              <NewsFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;