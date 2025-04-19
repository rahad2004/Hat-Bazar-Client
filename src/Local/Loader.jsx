import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-60 space-x-2">
        <div className="w-4 h-4 bg-[#ff3811] rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-[#ff3811] rounded-full animate-bounce [animation-delay:0.2s]"></div>
        <div className="w-4 h-4 bg-[#ff3811] rounded-full animate-bounce [animation-delay:0.4s]"></div>
      </div>
    </div>
  );
};

export default Loader;
