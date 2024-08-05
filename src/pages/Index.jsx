import React from 'react';
import LeadGenerationForm from '@/components/LeadGenerationForm';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Lead Generation Form</h1>
        <LeadGenerationForm />
      </div>
    </div>
  );
};

export default Index;
