'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BsSearch, BsThreeDots, BsX } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import NavLinks from './NavLinks';
import NavActions from './NavActions';
import Logo from './Logo';
import { selectAllProducts, fetchProducts } from '@/app/features/productSlice';
import Link from 'next/link';
import Image from 'next/image';

export const NavBar = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setOpenSearch(false);
    }
  };

  useEffect(() => {
    if (openSearch) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openSearch]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                <NavLinks navClick={() => {setOpenSideMenu(false); setOpenSearch(false);}} />
              </div>
            )}
            <div className="hidden lg:flex">
              <NavLinks navClick={() => setOpenSearch(false)} />
            </div>
            <NavActions SearchClick={() => setOpenSearch(true)} />
          </div>
        </div>
      </nav>
      {openSearch && (
        <div ref={searchRef} className="card bg-base-100 w-full shadow-xl mt-5 border-t-4 border-t-green rounded-t-none">
          <div className="card-body">
            <div className='md:flex justify-between items-center'>
              <p>Search Products</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-ghost btn-circle text-2xl"
                  onClick={() => setOpenSearch(false)}
                >
                  <BsX />
                </button>
              </div>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input 
                type="text" 
                className="grow" 
                placeholder="Search Products" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className='btn btn-ghost btn-circle'><BsSearch /></button>
            </label>
            {searchTerm && (
              <div className="mt-4">
                {filteredProducts.length ? (
                  filteredProducts.map(product => (
                    <Link 
                      key={product.id} 
                      href={`/shop/${product.id}`}
                      onClick={() => setOpenSearch(false)}
                    >
                      <div className="flex items-center gap-4 p-2 border-b border-grey-bg hover:bg-grey-bg rounded-md">
                        <Image src={product.thumbnail} alt={product.title} className="w-16 h-16 object-cover" width={20} height={20} />
                        <div>
                          <p className="font-medium">{product.title}</p>
                          <p className="text-md text-green-dark">${product.price}</p>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p>No products found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};