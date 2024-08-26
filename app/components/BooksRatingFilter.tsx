import React, { FC, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import {
  selectAllProducts,
  selectProductsStatus,
} from "../features/productSlice";
import { ProductProps } from "../types";
import LoadingFilterSkeleton from "./shared/LoadingFilterSkeleton";

interface BooksRatingFilterProps {
  onRatingChange: (selectedRatings: number[]) => void;
}

const BooksRatingFilter: FC<BooksRatingFilterProps> = ({ onRatingChange }) => {
  const products: ProductProps[] = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const uniqueRatings = Array.from(
    new Set(products.map((product) => Math.round(product.rating)))
  );
  uniqueRatings.sort((a, b) => b - a);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const handleRatingChange = (rating: number) => {
    const updatedRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((r) => r !== rating)
      : [...selectedRatings, rating];

    setSelectedRatings(updatedRatings);
    onRatingChange(updatedRatings);
  };

  return (
    <div>
      <h5 className="text-black font-semibold mb-10">Books Rating</h5>
      {status === "loading" ? (
        <LoadingFilterSkeleton />
      ) : (
        <div className="form-control grid gap-5">
          {uniqueRatings.map((rating, index) => (
            <label
              key={index}
              className="cursor-pointer flex items-center gap-3"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-success"
                checked={selectedRatings.includes(rating)}
                onChange={() => handleRatingChange(rating)}
              />
              <span className="label-text flex items-center gap-2">
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <BsStarFill
                    key={starIndex}
                    className={`${
                      starIndex < rating ? "text-[#FF971D]" : "text-[#DEDEDE]"
                    }`}
                  />
                ))}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default BooksRatingFilter;
