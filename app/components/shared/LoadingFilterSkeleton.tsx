import React from 'react'

const LoadingFilterSkeleton = () => {
  return (
    <div className="grid gap-5">
      <div className="flex gap-4">
        <div className="skeleton h-10 w-10"></div>
        <div className="skeleton h-10 w-full"></div>
      </div>
      <div className="flex gap-4">
        <div className="skeleton h-10 w-10"></div>
        <div className="skeleton h-10 w-full"></div>
      </div>
      <div className="flex gap-4">
        <div className="skeleton h-10 w-10"></div>
        <div className="skeleton h-10 w-full"></div>
      </div>
      <div className="flex gap-4">
        <div className="skeleton h-10 w-10"></div>
        <div className="skeleton h-10 w-full"></div>
      </div>
      <div className="flex gap-4">
        <div className="skeleton h-10 w-10"></div>
        <div className="skeleton h-10 w-full"></div>
      </div>
    </div>
  );
}

export default LoadingFilterSkeleton