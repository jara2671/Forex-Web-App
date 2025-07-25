import React from 'react';
import { 
  ChartPieIcon,
  EyeIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  NewspaperIcon,
  AcademicCapIcon,
  CogIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'portfolio', label: 'Portfolio', icon: ChartPieIcon },
    { id: 'watchlist', label: 'Watchlist', icon: EyeIcon },
    { id: 'trade', label: 'Trade', icon: ArrowTrendingUpIcon },
    { id: 'social', label: 'Social', icon: UserGroupIcon },
    { id: 'news', label: 'News', icon: NewspaperIcon },
    { id: 'academy', label: 'Academy', icon: AcademicCapIcon },
    { id: 'settings', label: 'Settings', icon: CogIcon },
  ];

  return (
    <aside className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-etoro-green text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;