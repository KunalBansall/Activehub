import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Users, 
  Calendar, 
  CreditCard, 
  BarChart3, 
  Bell, 
  Settings,
  Dumbbell,
  X
} from 'lucide-react';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const navItems = [
    { icon: Users, label: 'Members', path: '/members' },
    { icon: Calendar, label: 'Attendance', path: '/attendance' },
    { icon: CreditCard, label: 'Payments', path: '/payments' },
    { icon: BarChart3, label: 'Reports', path: '/reports' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-6 relative">
      {/* Close button - visible only on mobile */}
      <button
        onClick={onClose}
        className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="flex items-center gap-3 mb-8">
        <Dumbbell className="w-8 h-8 text-blue-400" />
        <h1 className="text-xl font-bold">ActiveHub</h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;