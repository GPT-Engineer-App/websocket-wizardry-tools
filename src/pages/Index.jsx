import React from 'react';
import { Link } from 'react-router-dom';
import LeadGenerationForm from '@/components/LeadGenerationForm';
import { Button } from "@/components/ui/button";
import { navItems } from '@/nav-items';
import { Trophy, Flag, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-600 to-red-800">
      <nav className="bg-black text-white shadow-md p-4">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link 
                to={item.to} 
                className="flex items-center space-x-2 text-white hover:text-red-400"
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
              <h1 className="text-4xl font-bold mb-6 text-red-600">Join the F1 Fan Club!</h1>
              <p className="mb-6 text-gray-700">Get exclusive updates, ticket pre-sales, and more!</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Trophy className="text-yellow-500 mr-2" />
                  <span>Exclusive Content</span>
                </div>
                <div className="flex items-center">
                  <Flag className="text-red-500 mr-2" />
                  <span>Race Updates</span>
                </div>
                <div className="flex items-center">
                  <Clock className="text-blue-500 mr-2" />
                  <span>Live Timing</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="text-green-500 mr-2" />
                  <span>Win Prizes</span>
                </div>
              </div>
              <LeadGenerationForm />
            </div>
            <div className="md:w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1541773367336-d3f7cca0e58f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
