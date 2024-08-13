import Image from "next/image";
import React, { FC } from "react";
import { BsStarFill } from "react-icons/bs";
import { ProductProps } from "../types";

const ProductsCard: FC<ProductProps> = ({
  image,
  title,
  category,
  price,
  rating,
  tags,
  oneProduct = false,
  addToCart
}) => {
  return (
    <div
      className={
        oneProduct
          ? "lg:flex lg:mx-auto"
          : "card bg-base-100 w-full shadow-xl hover:border border-green"
      }
    >
      <figure
        className={
          oneProduct
            ? "lg:w-[30%] lg:flex grid items-center justify-center bg-grey-bg rounded-xl"
            : "bg-grey-bg"
        }
      >
        <Image src={image} alt={title} width={220} height={230} />
      </figure>
      <div className="card-body grid gap-3 flex-grow-0">
        <h2 className="card-title font-medium">
          {oneProduct
            ? title
            : title.length > 15
            ? title.slice(0, 15) + "..."
            : title}
        </h2>
        <p className="mb-2 text-grey">{category}</p>
        <p className="text-xl text-green-dark font-medium">$ {price}</p>
        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }, (_, index) => (
            <BsStarFill
              key={index}
              className={`${
                index < rating ? "text-[#FF971D]" : "text-[#DEDEDE]"
              }`}
            />
          ))}
        </div>
        {tags && (
          <div className="sm:flex items-center gap-4">
            <p className="my-3 sm:my-0 flex-grow-0">Category:</p>
            <div className="flex gap-2">
              {tags?.map((tag, index) => (
                <p
                  key={index}
                  className="bg-green bg-opacity-15 text-green-dark py-[4px] px-[15px] text-center rounded-2xl"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        )}
        {oneProduct ? (
          <>
            <div className="card-actions justify-start my-3">
              <button className="btn min-w-[120px] btn-primary">Buy Now</button>
              <button className="btn min-w-[120px]" onClick={addToCart}>
                Add to cart
              </button>
            </div>
            <p className="text-grey">Lifetime Access</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProductsCard;
