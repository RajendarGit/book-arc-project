import Image from "next/image";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../features/cartSlice";
import { BsCheckCircleFill } from "react-icons/bs";
import Link from "next/link";


interface OrderSummaryProps {
    OrderSummary?: boolean;
}

const OrderSummary:FC<OrderSummaryProps> = ({OrderSummary = false}) => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

  console.log("Cart Items:", cartItems);
  console.log("Total Price:", totalPrice);

  return (
    <div className="card bg-footer-bg p-8 w-full">
      {OrderSummary ? (
        <div className="grid gap-6">
          <h4 className="font-medium text-xl">Order Summary</h4>
          {cartItems.map((item) => (
            <div
              className="flex justify-between items-center py-2 border-b border-[#D8D8D8]"
              key={item.product.id}
            >
              <div className="flex gap-3 items-center">
                <div className="bg-white p-2 rounded-md">
                <Image
                  src={item.product.thumbnail}
                  alt={item.product.title}
                  width={60}
                  height={60}
                />
                </div>
                <p className="font-medium">{item.product.title}</p>
              </div>
              <p>${(item.product.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="flex gap-2 mb-6 border-b border-[#D8D8D8] pb-6">
            <input
              type="text"
              placeholder="Coupon Code"
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
            <Link href='checkout' className="btn btn-primary">Proceed to checkout</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
