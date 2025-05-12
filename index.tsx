import React from 'react';
import PriceHistoryWidget from './PriceHistoryWidget';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Flight Price History Feature
        </h1>
        
        <div className="flex flex-col space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                New York to London
              </h2>
              <p className="text-sm text-gray-500">
                Dec 15 - Dec 22 • Economy • 1 Adult
              </p>
            </div>
            
            <PriceHistoryWidget />
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out">
                Continue to booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;