import React from 'react'

const Header = () => {
  return (
    <div className="card bg-footer-bg text-neutral-content">
      <div className="card-body items-center text-center">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <a className='text-grey'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
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