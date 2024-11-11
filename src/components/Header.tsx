import React from 'react';
import { LogOut } from 'lucide-react';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 fixed w-full z-30">
      <div className="flex items-center justify-between px-4 lg:px-8 h-16">
        {/* Logo/Project Name */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-gray-900">ActiveHub</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-4 lg:mx-8">
          <SearchBar />
        </div>

        {/* Sign Out Button */}
        <button
          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => console.log('Sign out clicked')}
        >
          <LogOut className="w-5 h-5" />
          <span className="hidden sm:inline">Sign Out</span>
        </button>
      </div>
    </header>
  );
};

export default Header;