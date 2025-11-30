import React from 'react';

const UploadField: React.FC = () => {
  return (
    <label className="flex flex-col items-start gap-2">
      <div className="text-sm text-gray-300">Upload Image / Media</div>
      <input type="file" accept="image/*,video/*" className="bg-[rgba(255,255,255,0.02)] p-2 rounded" />
    </label>
  );
};

export default UploadField;
