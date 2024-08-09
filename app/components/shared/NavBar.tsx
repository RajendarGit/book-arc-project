"use client";

import React, { useState, useEffect, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import Logo from "./Logo";
import Search from "./Search";

export const NavBar = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setOpenSearch(false);
    }
  };

  useEffect(() => {
    if (openSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSearch]);

  return (
    <>
      <div className="grid items-center justify-center py-5 md:hidden">
        <Logo />
      </div>
      <nav className="container mx-auto md:h-[70px] flex py-4">
        <div className="navbar bg-base-100">
          <div className="flex-1 hidden md:inline-flex">
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
                <NavLinks
                  navClick={() => {
                    setOpenSideMenu(false);
                    setOpenSearch(false);
                  }}
                />
              </div>
            )}
            <div className="hidden lg:flex mt-2">
              <NavLinks navClick={() => setOpenSearch(false)} />
            </div>
            <NavActions searchClick={() => setOpenSearch(true)} />
          </div>
        </div>
      </nav>
      {openSearch && (
        <div ref={searchRef}>
          <Search closeSearch={() => setOpenSearch(false)} />
        </div>
      )}
    </>
  );
};
