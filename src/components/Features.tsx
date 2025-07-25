import React from 'react';
import { 
  UserGroupIcon, 
  ChartBarIcon, 
  ShieldCheckIcon, 
  GlobeAltIcon,
  CurrencyDollarIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      icon: UserGroupIcon,
      title: 'Social Trading',
      description: 'Follow and copy the trades of successful investors automatically.',
      color: 'bg-blue-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Advanced Analytics',
      description: 'Professional trading tools and real-time market analysis.',
      color: 'bg-etoro-green'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Regulated & Secure',
      description: 'Licensed and regulated by top-tier financial authorities.',
      color: 'bg-purple-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Markets',
      description: 'Trade stocks, crypto, commodities, and forex from around the world.',
      color: 'bg-orange-500'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Zero Commission',
      description: 'Trade stocks with zero commission on all major exchanges.',
      color: 'bg-red-500'
    },
    {
      icon: AcademicCapIcon,
      title: 'Trading Education',
      description: 'Learn from experts with our comprehensive trading academy.',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose eToro?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join millions of users who trust eToro as their preferred social trading platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="trading-card p-8 rounded-xl card-hover">
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;