import React from 'react';
import BookCategoryFilter from './BookCategoryFilter';
import BooksRatingFilter from './BooksRatingFilter';

const FilterSection = () => {
  return (
    <div className="grid gap-20">
      <BookCategoryFilter />
      <BooksRatingFilter />
    </div>
  );
};

export default FilterSection;