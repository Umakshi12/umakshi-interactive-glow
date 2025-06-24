
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Eye, Clock, MapPin, Smartphone, Monitor, Tablet } from 'lucide-react';

const Analytics = () => {
  const [selectedMetric, setSelectedMetric] = useState('visitors');
  const [timeRange, setTimeRange] = useState('7d');

  // Mock analytics data
  const visitorData = [
    { name: 'Mon', visitors: 125, pageViews: 340, engagement: 65 },
    { name: 'Tue', visitors: 189, pageViews: 445, engagement: 72 },
    { name: 'Wed', visitors: 156, pageViews: 380, engagement: 68 },
    { name: 'Thu', visitors: 203, pageViews: 520, engagement: 78 },
    { name: 'Fri', visitors: 234, pageViews: 610, engagement: 82 },
    { name: 'Sat', visitors: 178, pageViews: 420, engagement: 71 },
    { name: 'Sun', visitors: 145, pageViews: 350, engagement: 66 }
  ];

  const deviceData = [
    { name: 'Desktop', value: 45, color: '#8b5cf6' },
    { name: 'Mobile', value: 35, color: '#06b6d4' },
    { name: 'Tablet', value: 20, color: '#10b981' }
  ];

  const topSections = [
    { section: 'Projects', views: 1240, percentage: 28 },
    { section: 'About', views: 980, percentage: 22 },
    { section: 'Tech Stack', views: 850, percentage: 19 },
    { section: 'Experience', views: 720, percentage: 16 },
    { section: 'Contact', views: 450, percentage: 10 },
    { section: 'Blog', views: 320, percentage: 5 }
  ];

  const stats = [
    {
      label: 'Total Visitors',
      value: '12.4K',
      change: '+18%',
      trend: 'up',
      icon: Users,
      color: 'purple'
    },
    {
      label: 'Page Views',
      value: '28.7K',
      change: '+22%',
      trend: 'up',
      icon: Eye,
      color: 'cyan'
    },
    {
      label: 'Avg. Session',
      value: '3:24',
      change: '+8%',
      trend: 'up',
      icon: Clock,
      color: 'green'
    },
    {
      label: 'Bounce Rate',
      value: '34%',
      change: '-5%',
      trend: 'down',
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  const getColorByName = (colorName: string) => {
    const colors: { [key: string]: string } = {
      purple: 'from-purple-500 to-purple-600',
      cyan: 'from-cyan-500 to-cyan-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colors[colorName] || colors.purple;
  };

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case 'Desktop': return Monitor;
      case 'Mobile': return Smartphone;
      case 'Tablet': return Tablet;
      default: return Monitor;
    }
  };

  return (
    <section id="analytics" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-extralight mb-8 tracking-widest">
              <span className="bg-gradient-to-r from-purple-100 via-gray-100 to-purple-100 bg-clip-text text-transparent">
                ANALYTICS
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 font-light max-w-2xl mx-auto">
              Real-time insights into portfolio performance and visitor engagement
            </p>
          </div>

          {/* Time range selector */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-gray-800/50 p-1 rounded-full border border-purple-500/20">
              {['24h', '7d', '30d', '90d'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-full text-sm font-light transition-all duration-300 ${
                    timeRange === range
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                      : 'text-gray-400 hover:text-purple-400'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 backdrop-blur-sm group hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getColorByName(stat.color)}`}>
                    <stat.icon size={20} className="text-white" />
                  </div>
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Visitor trends chart */}
            <div className="lg:col-span-2 p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-purple-500/20 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-light text-white">Visitor Trends</h3>
                <div className="flex space-x-2">
                  {['visitors', 'pageViews', 'engagement'].map((metric) => (
                    <button
                      key={metric}
                      onClick={() => setSelectedMetric(metric)}
                      className={`px-3 py-1 rounded-full text-xs transition-all duration-200 ${
                        selectedMetric === metric
                          ? 'bg-purple-500/20 text-purple-300'
                          : 'text-gray-400 hover:text-purple-400'
                      }`}
                    >
                      {metric.charAt(0).toUpperCase() + metric.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={visitorData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 24, 39, 0.9)', 
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey={selectedMetric} 
                    stroke="#8b5cf6" 
                    strokeWidth={2}
                    dot={{ fill: '#8b5cf6', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Device breakdown */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-6">Device Breakdown</h3>
              <div className="space-y-4">
                {deviceData.map((device, index) => {
                  const Icon = getDeviceIcon(device.name);
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon size={16} className="text-gray-400" />
                        <span className="text-gray-300 text-sm">{device.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full"
                            style={{ 
                              width: `${device.value}%`, 
                              backgroundColor: device.color 
                            }}
                          />
                        </div>
                        <span className="text-sm text-gray-400">{device.value}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Top sections */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-xl font-light text-white mb-6">Most Viewed Sections</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topSections.map((section, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30">
                  <div>
                    <h4 className="text-white font-medium">{section.section}</h4>
                    <p className="text-gray-400 text-sm">{section.views} views</p>
                  </div>
                  <div className="text-right">
                    <span className="text-purple-400 font-medium">{section.percentage}%</span>
                    <div className="w-12 h-1 bg-gray-700 rounded-full mt-1">
                      <div 
                        className="h-full bg-purple-500 rounded-full"
                        style={{ width: `${section.percentage * 4}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
