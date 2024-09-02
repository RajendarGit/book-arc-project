import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
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
  addToCart = () => {},
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setIsLoggedIn(!!userToken); // Simplified the check
  }, []);

  const handleAddToCart = () => {
    if (isLoggedIn) {
      addToCart(); // Check if addToCart is defined before calling
    } else {
      router.push("/login");
    }
  };

  // Round the rating to the nearest integer
  const roundedRating = Math.round(rating);

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
            ? `${title.slice(0, 15)}...`
            : title}
        </h2>
        <p className="mb-2 text-grey">{category}</p>
        <p className="text-xl text-green-dark font-medium">$ {price}</p>
        {/* <p className="text-xl text-green-dark font-medium">{rating}</p> */}
        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }, (_, index) => (
            <BsStarFill
              key={index}
              className={`${
                index < roundedRating ? "text-[#FF971D]" : "text-[#DEDEDE]"
              }`}
            />
          ))}
        </div>
        {tags && (
          <div className="sm:flex items-center gap-4">
            <p className="my-3 sm:my-0 flex-grow-0">Category:</p>
            <div className="flex gap-2">
              {tags.map((tag, index) => (
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
        {oneProduct && (
          <>
            <div className="card-actions justify-start my-3">
              <button className="btn min-w-[120px] btn-primary">Buy Now</button>
              <button className="btn min-w-[120px]" onClick={handleAddToCart}>
                Add to cart
              </button>
            </div>
            <p className="text-grey">Lifetime Access</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsCard;