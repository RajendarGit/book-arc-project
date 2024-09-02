// app/components/NavActions.tsx

import Link from 'next/link';
import React, { FC, useEffect } from 'react';
import { BsCart, BsSearch } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { selectCartItems } from '@/app/features/cartSlice';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/authContext';

interface NavActionProps {
  searchClick?: () => void;
}

const NavActions: FC<NavActionProps> = ({ searchClick }) => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const cartItems = useSelector(selectCartItems);
  const productCount = cartItems.length;
  const router = useRouter();

  useEffect(() => {
    console.log("Checking login status...");
    const userToken = localStorage.getItem("userToken");
    console.log("User token:", userToken);
    setIsLoggedIn(!!userToken);
  }, [setIsLoggedIn]);
  
  useEffect(() => {
    console.log("isLoggedIn state updated:", isLoggedIn);
  }, [isLoggedIn]);
  

  const handleSignOut = () => {
    localStorage.removeItem("userToken"); // Remove token to log out
    setIsLoggedIn(false); // Update state immediately
    router.push('/shop'); // Redirect to shop page
  };

  const handleSignIn = () => {
    router.push('/login'); // Redirect to login page
  };

  return (
    <div className="flex gap-4 items-center">
      <button onClick={searchClick}>
        <BsSearch />
      </button>
      <Link href="/cart" className="mx-4 relative">
        <BsCart />
        {productCount > 0 && (
          <span className="absolute top-[-10px] right-[-10px] rounded-full bg-green text-white px-1 py-0.5 text-xs">
            {productCount}
          </span>
        )}
      </Link>
      {isLoggedIn ? (
        <button className="btn" onClick={handleSignOut}>
          Sign Out
        </button>
      ) : (
        <>
          <button className="btn" onClick={handleSignIn}>
            Sign In
          </button>
          <Link href="/register">
            <button className="btn btn-primary">Register</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default NavActions;