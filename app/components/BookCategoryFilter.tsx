import React, { FC } from "react";
interface Category {
  id: number;
  name: string;
}

const BookCategoryFilter: FC = () => {
  const categories: Category[] = [
    { id: 1, name: "Fiction" },
    { id: 2, name: "Non-fiction" },
    { id: 3, name: "Children Books" },
    { id: 4, name: "Educational Textbooks" },
    { id: 5, name: "Graphic Novels & Comics" },
    { id: 6, name: "Religion & Spirituality" },
    { id: 7, name: "Arts & Photography" },
    { id: 8, name: "Special Collections" },
  ];
  return (
    <div>
      <h5 className="text-black font-semibold mb-10">Books Category</h5>
      <div className="form-control grid gap-5">
        {categories.map((category) => (
          <label
            key={category.id}
            className="cursor-pointer flex items-center gap-3"
          >
            <input type="checkbox" className="checkbox checkbox-success" />
            <span className="label-text">{category.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BookCategoryFilter;
