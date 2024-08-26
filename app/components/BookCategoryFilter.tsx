import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectAllProducts,
  selectProductsStatus,
} from "../features/productSlice";
import LoadingFilterSkeleton from "./shared/LoadingFilterSkeleton";

interface BookCategoryFilterProps {
  onCategoryChange: (selectedCategories: string[]) => void;
}

const BookCategoryFilter: FC<BookCategoryFilterProps> = ({
  onCategoryChange,
}) => {
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onCategoryChange(updatedCategories);
  };

  return (
    <div>
      <h5 className="text-black font-semibold mb-10">Books Category</h5>
      {status === "loading" ? (
        <LoadingFilterSkeleton />
      ) : (
        <div className="form-control grid gap-5">
          {uniqueCategories.map((category, index) => (
            <label
              key={index}
              className="cursor-pointer flex items-center gap-3"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-success"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <span className="label-text">{category}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookCategoryFilter;
