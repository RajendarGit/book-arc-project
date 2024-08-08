import Image from 'next/image';
import React from 'react'
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="bg-footer-bg text-base-content p-12">
        <div className="footer container mx-auto">
          <aside>
            <div className="flex flex-col gap-8">
              <Image src="/logo.png" alt="Book Arc" width={100} height={100} />
              <div>
                <p className="font-medium mb-2">Subscribe Now!</p>
                <label className="input input-bordered flex items-center gap-2 rounded-full pr-1 h-[44px]">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Email Address"
                  />
                  <button className="btn-circle btn-primary w-[37px] h-[37px] flex items-center justify-center">
                    <BsFillSendFill />
                  </button>
                </label>
              </div>
              <div>
                <p className="text-[#7b7b7b] mb-2">Contact Info</p>
                <p className="text-black">
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
              </div>
            </div>
          </aside>
          <nav>
            <h6 className="text-black font-semibold">Popular Categories</h6>
            <a className="link link-hover text-[#7b7b7b]">
              Graphic Novels &nbsp; Comics
            </a>
            <a className="link link-hover text-[#7b7b7b]">
              Religion &nbsp; Spirituality
            </a>
            <a className="link link-hover text-[#7b7b7b]">
              Arts &nbsp; Photography
            </a>
            <a className="link link-hover text-[#7b7b7b]">
              Arts &nbsp; Photography
            </a>
            <a className="link link-hover text-[#7b7b7b]">
              Educational &nbsp; Textbooks
            </a>
          </nav>
          <nav>
            <h6 className="text-black font-semibold">Customer Care</h6>
            <a className="link link-hover text-[#7b7b7b]">My Account</a>
            <a className="link link-hover text-[#7b7b7b]">Discount</a>
            <a className="link link-hover text-[#7b7b7b]">Returns</a>
            <a className="link link-hover text-[#7b7b7b]">Orders History</a>
            <a className="link link-hover text-[#7b7b7b]">Order Tracking</a>
          </nav>
          <nav>
            <h6 className="text-black font-semibold">Quick Action</h6>
            <a className="link link-hover text-[#7b7b7b]">Authors</a>
            <a className="link link-hover text-[#7b7b7b]">Books Compare</a>
            <a className="link link-hover text-[#7b7b7b]">All Category</a>
            <a className="link link-hover text-[#7b7b7b]">Blog</a>
          </nav>
        </div>
      </div>
      <div className="copyrights bg-[#373737] py-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className='text-white'>© Ref Hub - All Rights Reserved</p>
            </div>
            <div className='flex items-center gap-4'>
              <p className="text-grey">Powered BY</p>
              <Image src="/stripe.png" alt="Stripe" width={50} height={50} />
              <Image
                src="/master.png"
                alt="Master Card"
                width={50}
                height={50}
              />
              <Image src="/visa.png" alt="Visa" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer