import React from "react";

function Techlist({ icon }) {
  return (
    <div className="rounded-full p-2  h-24 w-24 bg-white flex flex-wrap gap-3 overflow-hidden items-center justify-center ">
      <img className="object-cover" src={icon} alt="tech-icon" />
    </div>
  );
}

export default Techlist;
