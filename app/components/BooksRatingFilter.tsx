import React, { FC } from "react";
import { BsStarFill } from 'react-icons/bs';

interface Ratings {
  id: number;
  star: number;
}

const BooksRatingFilter: FC = () => {
  const ratings: Ratings[] = [
    { id: 1, star: 5 },
    { id: 2, star: 4 },
    { id: 3, star: 3 },
    { id: 4, star: 2 },
  ];
  return (
    <div>
      <h5 className="text-black font-semibold mb-10">Books Rating</h5>
      <div className="form-control grid gap-5">
        {ratings.map((rating) => (
          <label
            key={rating.id}
            className="cursor-pointer flex items-center gap-3"
          >
            <input type="checkbox" className="checkbox checkbox-success" />
            <span className="label-text flex items-center gap-2">
              {Array.from({ length: 5 }, (_, index) => (
                <BsStarFill
                  key={index}
                  className={`${
                    index < rating.star ? "text-[#FF971D]" : "text-[#DEDEDE]"
                  }`}
                />
              ))}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BooksRatingFilter;
