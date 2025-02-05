import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 flex items-center justify-center">
        <FontAwesomeIcon
          icon={icon}
          className="text-5xl text-gray-400 hover:text-white transition-colors"
        />
      </div>
      <p className="text-sm text-gray-400 mt-2">{label}</p>
    </div>
  );
};

export default SkillItem;