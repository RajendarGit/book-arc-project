import React from 'react'
import Wrapper from '../components/shared/Wrapper'
import Header from '../components/shared/Header'
import { BsCheckCircleFill, BsTrash } from 'react-icons/bs';

const Cart = () => {
    const breadcrumbs = [{ title: "Cart Page", link: "/cart" }];
  return (
    <Wrapper>
      <Header
        breadcrumbs={breadcrumbs}
        headerTitle={
          <>
            Your <span className="text-green">Digital</span> Bookshelf
          </>
        }
        headerSubtitle="Explore, Purchase, and Enjoy Your Favourite Ebooks Anytime, Anywhere"
      />
      <div className="grid lg:flex justify-center lg:justify-between gap-5">
        <div className="overflow-x-auto flex-grow">
          <table className="table">
            <thead>
              <tr>
                <th className="text-black font-medium">Product</th>
                <th className="text-black font-medium">Price</th>
                <th className="text-black font-medium">Quantity</th>
                <th className="text-black font-medium">Total</th>
                <th className="text-black font-medium"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="bg-grey h-[80px] w-[80px]">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">
                        All the light we cannot see
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-medium">$ 14.99</td>
                <td>
                  <div className="flex gap-4">
                    <button className="text-grey">-</button>
                    <span className="text-grey">1</span>
                    <button className="text-grey">+</button>
                  </div>
                </td>
                <td className="font-medium">$ 14.99</td>
                <th>
                  <button className="btn btn-ghost btn-sm text-error text-md">
                    <BsTrash />
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card bg-footer-bg p-5 grid gap-6 xl:w-[30%]">
          <div className="flex justify-between border-b border-[#D8D8D8] pb-6">
            <p>Sub Totals</p>
            <p>$ 59.98</p>
          </div>
          <div className="flex justify-between">
            <p>Totals</p>
            <p className='text-green'>$ 59.98</p>
          </div>
          <div className="flex items-center gap-2">
            <BsCheckCircleFill className='text-green' />
            <p className='text-grey'>Shipping & taxes calculated at checkout</p>
          </div>
          <button className="btn btn-primary">Proceed to checkout</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Cart