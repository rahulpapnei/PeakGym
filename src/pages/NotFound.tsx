import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-9xl font-bold text-black mb-4">404</h1>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-gray-600 text-lg">
            Oops! Looks like you've wandered off the fitness path.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 w-full sm:w-auto"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 w-full sm:w-auto sm:ml-4"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>

        <div className="mt-12 space-y-2">
          <p className="text-gray-600">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;