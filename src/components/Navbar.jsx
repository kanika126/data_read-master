import React from 'react';

function Navbar() {
  return (
    <nav className="bg-black text-white md:py-2 px-6 flex justify-between items-center">
      <div className="font-bold text-xl m-2">
        The Sengupta
        <div className="block">Laboratory</div>
      </div>
      <div className="flex items-center text-lg">
        <a href="#" className="mr-4">Home</a>
        <a href="#" className="mr-4">Research</a>
        <a href="#" className="mr-4">Publications</a>
        <a href="#" className="mr-4">Team</a>
        <a href="#">More</a>
      </div>
    </nav>
  );
}

export default Navbar;
