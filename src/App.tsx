import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardStats from './components/DashboardStats';
import MemberList from './components/MemberList';
import { Menu } from 'lucide-react';

// Mock data remains the same
const mockMembers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    membershipType: 'premium',
    joinDate: new Date('2023-01-15'),
    expiryDate: new Date('2024-01-15'),
    status: 'active',
    lastCheckIn: new Date('2024-03-15T08:30:00'),
    photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1234567891',
    membershipType: 'basic',
    joinDate: new Date('2023-02-20'),
    expiryDate: new Date('2024-02-20'),
    status: 'expired',
    lastCheckIn: new Date('2024-03-14T17:45:00'),
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    phone: '+1234567892',
    membershipType: 'platinum',
    joinDate: new Date('2023-03-10'),
    expiryDate: new Date('2024-03-10'),
    status: 'active',
    lastCheckIn: new Date('2024-03-15T12:15:00'),
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  }
] as const;

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-900 text-white"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-50 lg:z-0`}
        >
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 overflow-y-auto pt-16">
            <div className="container mx-auto p-4 lg:p-8">
              <Routes>
                <Route path="/" element={<Navigate to="/members" replace />} />
                
                <Route path="/members" element={
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                      <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Add New Member
                      </button>
                    </div>
                    
                    <DashboardStats />
                    
                    <div className="mt-8">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Members</h2>
                      <MemberList members={mockMembers} />
                    </div>
                  </div>
                } />
                
                <Route path="/attendance" element={
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
                  </div>
                } />
                
                <Route path="/payments" element={
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
                  </div>
                } />
                
                <Route path="/reports" element={
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
                  </div>
                } />
                
                <Route path="/notifications" element={
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                  </div>
                } />
                
                <Route path="/settings" element={
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                  </div>
                } />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;