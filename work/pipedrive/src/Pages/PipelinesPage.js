import React, { useState } from 'react';
import { Search, Plus, Lightbulb, HelpCircle, Settings, MoreHorizontal, Calendar, Phone, Users } from 'lucide-react';

const PipelinesDashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('Everyone');

  const dealColumns = [
    {
      title: 'Qualified',
      subtitle: '10 000 $ • 4 deals',
      deals: [
        { name: 'Umbrella Corp deal', company: 'Umbrella Corp', value: '1 500 $', status: 'active', avatar: 'U' },
        { name: 'JMVD Inc deal', company: 'JMVD Inc', value: '4 500 $', status: 'active', avatar: 'J' },
        { name: 'Ownerate LLP deal', company: 'Ownerate LLP', value: '3 000 $', status: 'warning', avatar: 'O' },
        { name: 'Silicon Links Inc deal', company: 'Silicon Links Inc', value: '1 000 $', status: 'inactive', avatar: 'S' }
      ]
    },
    {
      title: 'Contact Made',
      subtitle: '5 350 $ • 3 deals',
      deals: [
        { name: 'Principalspace Inc deal', company: 'Principalspace Inc', value: '2 300 $', status: 'urgent', avatar: 'P' },
        { name: 'Blue Marble LLP deal', company: 'Blue Marble LLP', value: '1 900 $', status: 'active', avatar: 'B' },
        { name: 'ABC Inc deal', company: 'ABC Inc', value: '1 150 $', status: 'inactive', avatar: 'A' }
      ]
    },
    {
      title: 'Demo Scheduled',
      subtitle: '3 100 $ • 2 deals',
      deals: [
        { name: 'Moveer Limited deal', company: 'Moveer Limited', value: '1 400 $', status: 'active', avatar: 'M' },
        { name: 'Wolfs Corp deal', company: 'Wolfs Corp', value: '1 700 $', status: 'inactive', avatar: 'W' }
      ],
      activities: [
        { type: 'meeting', title: 'Pitch meeting preparation', time: 'Tomorrow • Phyllis Yang', icon: Calendar },
        { type: 'call', title: 'First pitch', time: 'Tomorrow • Phyllis Yang', icon: Phone }
      ]
    },
    {
      title: 'Proposal Made',
      subtitle: '2 700 $ • 1 deal',
      deals: [
        { name: 'Omnicorp deal', company: 'Omnicorp', value: '2 700 $', status: 'active', avatar: 'O' }
      ]
    },
    {
      title: 'Negotiations Started',
      subtitle: '4 200 $ • 2 deals',
      deals: [
        { name: 'Big Wheels Inc deal', company: 'Big Wheels Inc', value: '2 600 $', status: 'active', avatar: 'B' },
        { name: 'Mindbend LLP deal', company: 'Mindbend LLP', value: '1 600 $', status: 'won', avatar: 'M' }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'urgent': return 'bg-red-500';
      case 'warning': return 'bg-yellow-500';
      case 'won': return 'bg-green-600';
      case 'inactive': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getAvatarColor = (avatar) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500', 'bg-indigo-500'];
    return colors[avatar.charCodeAt(0) % colors.length];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-semibold text-gray-900">Deals</h1>
            <div className="flex items-center space-x-2">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">📊</button>
                <button className="text-gray-600 px-3 py-1 rounded text-sm">📋</button>
                <button className="text-gray-600 px-3 py-1 rounded text-sm">📈</button>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Plus size={16} />
                <span>Deal</span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search Pipedrive" 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-gray-600 font-medium">25 350 $ • 12 deals</div>
            <button className="flex items-center space-x-2 text-gray-600 border border-gray-300 px-3 py-2 rounded-lg">
              <Users size={16} />
              <span>Pipeline</span>
            </button>
            <Settings className="text-gray-600 cursor-pointer" size={20} />
            <div className="relative">
              <select 
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Everyone</option>
                <option>My deals</option>
                <option>Team deals</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <Lightbulb className="text-gray-600" size={20} />
              <HelpCircle className="text-gray-600" size={20} />
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">PY</span>
              </div>
              <div className="text-sm">
                <div className="font-medium">Phyllis Yang</div>
                <div className="text-gray-500">Silicon Links Inc</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deal Columns */}
      <div className="p-6">
        <div className="flex space-x-6 overflow-x-auto">
          {dealColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex-shrink-0 w-80">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                {/* Column Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{column.title}</h3>
                      <p className="text-sm text-gray-500">{column.subtitle}</p>
                    </div>
                    <MoreHorizontal className="text-gray-400" size={16} />
                  </div>
                </div>

                {/* Deals */}
                <div className="p-4 space-y-3">
                  {column.deals.map((deal, dealIndex) => (
                    <div key={dealIndex} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 cursor-pointer transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900 text-sm">{deal.name}</h4>
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(deal.status)}`}></div>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">{deal.company}</div>
                      <div className="flex items-center justify-between">
                        <div className={`w-6 h-6 rounded-full ${getAvatarColor(deal.avatar)} flex items-center justify-center`}>
                          <span className="text-xs font-medium text-white">{deal.avatar}</span>
                        </div>
                        <div className="font-medium text-gray-900">{deal.value}</div>
                      </div>
                    </div>
                  ))}

                  {/* Activities */}
                  {column.activities && (
                    <div className="space-y-2 mt-4">
                      {column.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                          <div className="flex items-center space-x-2">
                            <activity.icon className="text-blue-600" size={16} />
                            <div className="flex-1">
                              <div className="font-medium text-sm text-gray-900">{activity.title}</div>
                              <div className="text-xs text-gray-600">{activity.time}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <button className="w-full text-left text-sm text-blue-600 hover:text-blue-700 flex items-center space-x-2 mt-2">
                        <Plus size={14} />
                        <span>Schedule an activity</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PipelinesDashboard;