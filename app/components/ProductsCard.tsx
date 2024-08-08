import Image from "next/image";
import React, { FC } from "react";
import { BsStarFill } from "react-icons/bs";

interface ProductProps {
  image: string;
  title: string;
  category: string;
  price: string;
  rating: number;
}

const ProductsCard: FC<ProductProps> = ({
  image,
  title,
  category,
  price,
  rating,
}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <Image src={image} alt="Shoes" width={400} height={400} />
      </figure>
      <div className="card-body grid gap-3">
        <h2 className="card-title font-medium">{title}</h2>
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
