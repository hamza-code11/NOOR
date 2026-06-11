
import React from 'react';
import TopBar from './TopBar';
import MiddleBar from './MiddleBar';
import BottomBar from './BottomBar';

const Navbar = () => {
  return (
    <header className="w-full">
      <TopBar />
      <MiddleBar />
      <BottomBar />
    </header>
  );
};

export default Navbar;