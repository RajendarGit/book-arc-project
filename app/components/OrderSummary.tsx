import Image from "next/image";
import React, { FC } from "react";
import { AppDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../features/cartSlice";
import { BsCheckCircleFill } from "react-icons/bs";


interface OrderSummaryProps {
    OrderSummary?: boolean;
}

const OrderSummary:FC<OrderSummaryProps> = ({OrderSummary = false}) => {
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);
  return (
    <div className="card bg-footer-bg p-8 w-full">
      {OrderSummary ? (
        <div className="grid gap-6">
          <h4 className="font-medium text-xl">Order Summary</h4>
          {cartItems.map((item) => (
            <div
              className="flex justify-between items-center py-2 border-b border-gray-300"
              key={item.product.id}
            >
              <div className="flex gap-2 items-center">
                <Image
                  src={item.product.thumbnail}
                  alt={item.product.title}
                  width={60}
                  height={60}
                />
                <p className="font-medium">sgsg</p>
              </div>
              <p>$ 24.99</p>
            </div>
          ))}
          <div className="flex gap-2 mb-6 border-b border-[#D8D8D8] pb-6">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary">Apply</button>
          </div>
        </div>
      ) : null}

      <div className="grid gap-6">
        <div className="flex justify-between border-b border-[#D8D8D8] pb-6">
          <p>Sub Totals</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Totals</p>
          <p className="text-green">${totalPrice.toFixed(2)}</p>
        </div>
        {OrderSummary ? null : (
          <>
            <div className="flex items-center gap-2">
              <BsCheckCircleFill className="text-green" />
              <p className="text-grey">
                Shipping & taxes calculated at checkout
              </p>
            </div>
            <button className="btn btn-primary">Proceed to checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
