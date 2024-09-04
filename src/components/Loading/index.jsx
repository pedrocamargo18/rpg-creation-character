import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center fixed inset-0 h-full bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="animate-spin rounded-full h-36 w-36 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Loading;
