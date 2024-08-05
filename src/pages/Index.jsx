import React, { useState } from 'react';
import LeadGenerationForm from '@/components/LeadGenerationForm';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [bgColor, setBgColor] = useState('bg-gray-100');
  const [textColor, setTextColor] = useState('text-gray-900');
  const [fontSize, setFontSize] = useState('text-base');

  const changeBgColor = () => {
    const colors = ['bg-gray-100', 'bg-blue-100', 'bg-green-100', 'bg-red-100', 'bg-yellow-100'];
    const newColor = colors[(colors.indexOf(bgColor) + 1) % colors.length];
    setBgColor(newColor);
  };

  const changeTextColor = () => {
    const colors = ['text-gray-900', 'text-blue-600', 'text-green-600', 'text-red-600', 'text-yellow-600'];
    const newColor = colors[(colors.indexOf(textColor) + 1) % colors.length];
    setTextColor(newColor);
  };

  const changeFontSize = () => {
    const sizes = ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl'];
    const newSize = sizes[(sizes.indexOf(fontSize) + 1) % sizes.length];
    setFontSize(newSize);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${bgColor}`}>
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Lead Generation Form</h1>
        <LeadGenerationForm />
        <div className="mt-8">
          <p className={`mb-4 ${textColor} ${fontSize}`}>Hello world</p>
          <div className="flex space-x-4">
            <Button onClick={changeBgColor}>Change Background Color</Button>
            <Button onClick={changeTextColor}>Change Font Color</Button>
            <Button onClick={changeFontSize}>Change Font Size</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
