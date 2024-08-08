'use client';

import React, { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import NavLinks from './NavLinks';
import NavActions from './NavActions';
import Logo from './Logo';

export const NavBar = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <nav className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <Logo />
            <div className="gap-4 items-center hidden lg:flex">
              <div className="border border-black border-opacity-20 h-7 w-1/2"></div>
              <button className="flex gap-2 items-center">
                <BsThreeDots />
                Category
              </button>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <button
            className="btn btn-ghost lg:hidden btn-circle text-3xl"
            onClick={() => setOpenSideMenu(!openSideMenu)}
          >
            <BsList />
          </button>
          {openSideMenu && (
            <div className="side-menu">
              <NavLinks />
            </div>
          )}
          <div className="hidden lg:flex">
            <NavLinks />
          </div>
          <NavActions />
        </div>
      </div>
    </nav>
  );
};
