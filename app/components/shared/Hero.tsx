import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="w-full">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Book ARC</h1>
          <p className="mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro sunt nisi impedit optio provident vero!
          </p>
          <Link href='/shop' className="btn btn-primary btn-lg px-20">Get Started with shopping</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero