import React from 'react';
import { Users, TrendingUp, AlertCircle, Activity } from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    {
      label: 'Total Members',
      value: '486',
      change: '+12%',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      label: 'Active Today',
      value: '76',
      change: '+5%',
      icon: Activity,
      color: 'bg-green-500',
    },
    {
      label: 'New Joins',
      value: '24',
      change: '+18%',
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
    {
      label: 'Expiring Soon',
      value: '12',
      change: '-3%',
      icon: AlertCircle,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <h3 className="text-xl md:text-2xl font-bold mt-1">{stat.value}</h3>
              <span className={`text-xs md:text-sm ${
                stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.change} from last month
              </span>
            </div>
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;