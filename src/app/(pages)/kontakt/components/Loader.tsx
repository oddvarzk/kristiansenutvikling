import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-6">
      <div className="w-12 h-12 rounded-full border-4 border-zinc-700 border-t-cyan-400 animate-spin" />
      <p className="text-gray-400 text-sm tracking-wide">Sender melding...</p>
    </div>
  );
};

export default Loader;
