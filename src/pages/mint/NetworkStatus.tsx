import React from 'react';

const NetworkStatus: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-300">Network</div>
          <div className="font-medium">Algorand - MainNet</div>
        </div>
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>
    </div>
  );
};

export default NetworkStatus;
