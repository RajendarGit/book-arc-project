import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react'
import { BsSearch, BsX } from 'react-icons/bs';
import { selectAllProducts, fetchProducts } from '@/app/features/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/app/store';

interface SearchProps {
    closeSearch?: () => void;
}

const Search:FC<SearchProps> = ({closeSearch}) => {
    const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="card bg-base-100 w-full shadow-xl mt-5 border-t-4 border-t-green rounded-t-none"
    >
      <div className="card-body">
        <div className="md:flex justify-between items-center">
          <p>Search Products</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-ghost btn-circle text-2xl"
              onClick={closeSearch}
            >
              <BsX />
            </button>
          </div>
        </div>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search Products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-ghost btn-circle">
            <BsSearch />
          </button>
        </label>
        {searchTerm && (
          <div className="mt-4">
            {filteredProducts.length ? (
              filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.id}`}
                  onClick={closeSearch}
                >
                  <div className="flex items-center gap-4 p-2 border-b border-grey-bg hover:bg-grey-bg rounded-md">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-16 h-16 object-cover"
                      width={20}
                      height={20}
                    />
                    <div>
                      <p className="font-medium">{product.title}</p>
                      <p className="text-md text-green-dark">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search