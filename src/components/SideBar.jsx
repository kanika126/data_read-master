import React from 'react';

function Sidebar({ handleOptionClick }) {
  return (
    <div className="bg-gray-200 w-1/6 h-screen md:flex flex-col items-center">
      <ul className="text-gray-900 w-full md:w-absolute">
        <div >
          <button
            className="w-full hover:bg-gray-300  text-center h-20 text-2xl rounded-1xl"
            onClick={() => handleOptionClick('auc')}
          >
            AUC Value
          </button>
        </div>
        <div>
          <button
            className="w-full hover:bg-gray-300 text-center h-20 text-2xl rounded-1xl"
            onClick={() => handleOptionClick('replicates')}
          >
            Replicates
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
