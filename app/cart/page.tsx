'use client'
import React from 'react';
import Wrapper from '../components/shared/Wrapper';
import Header from '../components/shared/Header';
import { BsTrash } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, selectCartItems } from '@/app/features/cartSlice';
import Image from 'next/image';
import { AppDispatch } from '../store';
import withCartProtection from '../hoc/withCartProtection';
import OrderSummary from '../components/OrderSummary';

const Cart = () => {
  const breadcrumbs = [{ title: "Cart Page", link: "/cart" }];
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleQuantityChange = (id: number | undefined, quantity: number) => {
    if (id !== undefined) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };
  
  const handleRemove = (id: number | undefined) => {
    if (id !== undefined) {
      dispatch(removeFromCart(id));
    }
  };

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
        <div className="overflow-x-auto w-full lg:w-6/12 xl:w-8/12">
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
              {cartItems.map((item) => (
                <tr key={item.product.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="bg-grey-bg rounded-md h-[80px] w-[80px]">
                          <Image
                            src={item.product.thumbnail}
                            alt={item.product.title}
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-medium">{item.product.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="font-medium">
                    ${item.product.price.toFixed(2)}
                  </td>
                  <td>
                    <div className="flex gap-4">
                      <button
                        className="text-grey"
                        onClick={() =>
                          handleQuantityChange(
                            item.product.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                      >
                        -
                      </button>
                      <span className="text-grey">{item.quantity}</span>
                      <button
                        className="text-grey"
                        onClick={() =>
                          handleQuantityChange(
                            item.product.id,
                            item.quantity + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </td>
                  <th>
                    <button
                      className="btn btn-ghost btn-sm text-error text-md"
                      onClick={() => handleRemove(item.product.id)}
                    >
                      <BsTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full lg:w-6/12 xl:w-4/12">
          <OrderSummary />
        </div>
      </div>
    </Wrapper>
  );
}

export default withCartProtection(Cart);