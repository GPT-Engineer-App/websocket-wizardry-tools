import React from 'react';
import { Link } from 'react-router-dom';
import LeadGenerationForm from '@/components/LeadGenerationForm';
import { navItems } from '@/nav-items';
import { Mail, Bell, Gift, Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-500 to-purple-600">
      <nav className="bg-white text-gray-800 shadow-md p-4">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link 
                to={item.to} 
                className="flex items-center space-x-2 text-gray-800 hover:text-blue-600"
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <h1 className="text-4xl font-bold mb-6 text-blue-600">Join Our Newsletter!</h1>
              <p className="mb-6 text-gray-700">Stay updated with our latest news, offers, and more!</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Mail className="text-blue-500 mr-2" />
                  <span>Weekly Updates</span>
                </div>
                <div className="flex items-center">
                  <Bell className="text-purple-500 mr-2" />
                  <span>Important Alerts</span>
                </div>
                <div className="flex items-center">
                  <Gift className="text-green-500 mr-2" />
                  <span>Exclusive Offers</span>
                </div>
                <div className="flex items-center">
                  <Star className="text-yellow-500 mr-2" />
                  <span>VIP Content</span>
                </div>
              </div>
              <LeadGenerationForm />
            </div>
            <div className="md:w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
