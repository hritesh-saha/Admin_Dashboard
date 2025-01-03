//import React from 'react'

const Plan = () => {
  return (
    <div className="flex fixed bottom-0 flex-col h-12 border-t px-2 mb-4 border-stone-300 justify-end text-xs">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">Enterprise</p>
          <p className="text-stone-500">Pay as you go</p>
        </div>

        <button className="px-2 py-1.5 ml-16 font-medium bg-stone-200 hover:bg-stone-300 transition-colors rounded">
          Support
        </button>
      </div>
    </div>
  );
};

export default Plan