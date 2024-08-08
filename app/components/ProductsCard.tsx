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
}) => {
  return (
    <div className="card bg-base-100 w-full shadow-xl hover:border border-green">
      <figure className="bg-grey-bg">
        <Image src={image} alt="Shoes" width={400} height={400} />
      </figure>
      <div className="card-body grid gap-3">
        <h2 className="card-title font-medium">{title.length > 15 ? title.slice(0, 15) + "..." : title}</h2>
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
      </div>
    </div>
  );
};

export default ProductsCard;
