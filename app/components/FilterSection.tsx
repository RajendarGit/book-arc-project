import React from 'react';
import BookCategoryFilter from './BookCategoryFilter';
import BooksRatingFilter from './BooksRatingFilter';

interface FilterSectionProps {
  onCategoryChange: (selectedCategories: string[]) => void;
  onRatingChange: (selectedRatings: number[]) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ onCategoryChange, onRatingChange }) => {
  return (
    <div className="grid gap-20">
      <BookCategoryFilter onCategoryChange={onCategoryChange} />
      <BooksRatingFilter onRatingChange={onRatingChange} />
    </div>
  );
};

export default FilterSection;