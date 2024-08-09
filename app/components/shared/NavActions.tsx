import React, { FC } from 'react'
import { BsCart } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

interface NavActionProps {
  SearchClick?: () => void;
}

const NavActions:FC<NavActionProps> = ({SearchClick}) => {
  return (
    <div className="flex gap-4">
      <button className="py-1.5 px-3" onClick={SearchClick}>
        <BsSearch />
      </button>
      <button className="py-1.5 px-3">
        <BsCart />
      </button>
      <button className="btn">Sign In</button>
      <button className="btn btn-primary">Register</button>
    </div>
  );
}

export default NavActions