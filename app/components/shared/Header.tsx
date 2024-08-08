import React from 'react'
import { BsHouse } from "react-icons/bs";

const Header = () => {
  return (
    <div className="card bg-footer-bg text-neutral-content mt-5 mb-14">
      <div className="card-body items-center text-center">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <a className='text-grey flex gap-1'>
                <BsHouse/>
                Home
              </a>
            </li>
            <li>
              <a className='text-black'>
                Shop Page
              </a>
            </li>
          </ul>
        </div>
        <h2 className="text-3xl text-black mb-2">Read and add your <span className='text-green'>insight</span></h2>
        <p className='text-black'>find your favorite book and read it here for free</p>
      </div>
    </div>
  );
}

export default Header