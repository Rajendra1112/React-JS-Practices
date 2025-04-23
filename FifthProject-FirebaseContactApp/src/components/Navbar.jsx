import React from "react";

function Navbar() {
  return (
    <div className="h-[60px] bg-white rounded-lg my-4 flex justify-center items-center gap-2">
      <img
        src="/images/logos_firebase.svg"
        alt="logo of firebase contact app"
      />
      <h1 className="text-xl font-medium">Firebase Contact App</h1>
    </div>
  );
}

export default Navbar;
