import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from 'react-router-dom';
import { navItems } from '@/nav-items';

const Infos = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-md p-4">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link 
                to={item.to} 
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Hero Banner */}
      <div className="relative h-96">
        <img 
          src="https://images.unsplash.com/photo-1517994112540-009c47ea476b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="F1 Car" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">F1's Fastest Cars</h1>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">The Evolution of Speed: F1's Fastest Cars from 1990 to 2020</h1>
        <p className="mb-4">
          From 1990 to 2020, Formula 1 witnessed an incredible evolution in speed and technology. 
          The fastest cars of this era pushed the boundaries of engineering and human capability, 
          with top speeds increasing from around 330 km/h in the early 1990s to over 370 km/h by 2020.
        </p>
        <p className="mb-4">
          Notable mentions include the McLaren MP4/4 of the early 90s, the Ferrari F2004 which 
          dominated in 2004, and the Mercedes W11 of 2020, which is often considered one of the 
          most dominant F1 cars ever built.
        </p>
        <Button onClick={() => navigate('/')} className="mt-4">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Infos;
