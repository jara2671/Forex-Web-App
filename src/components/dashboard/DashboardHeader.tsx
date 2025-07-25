import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BellIcon, 
  MagnifyingGlassIcon, 
  UserCircleIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const DashboardHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-etoro-green">eToro</div>
            <span className="ml-2 text-sm text-gray-500">Dashboard</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search stocks, crypto, people..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-etoro-green focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Portfolio Value */}
            <div className="text-right">
              <div className="text-sm text-gray-500">Portfolio Value</div>
              <div className="text-lg font-semibold text-gray-900">$12,847.32</div>
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <BellIcon className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Settings */}
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Cog6ToothIcon className="h-6 w-6" />
            </button>

            {/* Profile */}
            <button className="flex items-center space-x-2 p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <UserCircleIcon className="h-8 w-8" />
              <span className="font-medium">John Doe</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;