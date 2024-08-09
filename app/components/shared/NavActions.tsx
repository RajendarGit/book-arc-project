import Link from 'next/link';
import React, { FC } from 'react';
import { BsCart } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { selectCartItems } from '@/app/features/cartSlice';

interface NavActionProps {
  searchClick?: () => void;
}

const NavActions: FC<NavActionProps> = ({ searchClick }) => {
  const cartItems = useSelector(selectCartItems);
  const productCount = cartItems.length;

  return (
    <div className="flex gap-4 items-center">
      <button onClick={searchClick}>
        <BsSearch />
      </button>
      <Link href='/cart' className='mx-4 relative'>
        <BsCart />
        {productCount > 0 && (
          <span className='absolute top-[-10px] right-[-10px] rounded-full bg-green text-white px-1 py-0.5 text-xs'>
            {productCount}
          </span>
        )}
      </Link>
      <button className="btn">Sign In</button>
      <button className="btn btn-primary">Register</button>
    </div>
  );
}

export default NavActions;