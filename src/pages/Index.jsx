import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [bgColor, setBgColor] = useState('bg-gray-100');
  const [textColor, setTextColor] = useState('text-gray-900');
  const [fontSize, setFontSize] = useState('text-base');

  const changeBgColor = () => {
    const colors = ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100'];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(newColor);
  };

  const changeTextColor = () => {
    const colors = ['text-red-600', 'text-blue-600', 'text-green-600', 'text-yellow-600', 'text-purple-600'];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setTextColor(newColor);
  };

  const changeFontSize = () => {
    const sizes = ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl'];
    const newSize = sizes[Math.floor(Math.random() * sizes.length)];
    setFontSize(newSize);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${bgColor}`}>
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Style Changer</h1>
        <div className="flex justify-center space-x-4 mb-8">
          <Button onClick={changeBgColor}>Change Background</Button>
          <Button onClick={changeTextColor}>Change Text Color</Button>
          <Button onClick={changeFontSize}>Change Font Size</Button>
        </div>
        <p className={`text-center ${textColor} ${fontSize}`}>
          Hello World!
        </p>
      </div>
    </div>
  );
};

export default Index;
