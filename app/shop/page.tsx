'use client'
import React, { useEffect } from 'react'
import Header from '../components/shared/Header';
import FilterSection from '../components/FilterSection';
import Wrapper from '../components/shared/Wrapper';
import ProductsCard from '../components/ProductsCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllProducts, selectProductsError, selectProductsStatus } from '../features/productSlice';
import Loading from './Loading';
import Link from 'next/link';
import { AppDispatch } from '../store';

const Shop = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectAllProducts) as Product[];
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <Wrapper>
      <Header />
      <section className="md:flex md:flex-row md:gap-20">
        <div className="md:w-2/12">
          <FilterSection />
        </div>
        <div className="md:w-10/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <Link href={`/shop/${product.id}`} key={product.id}>
                <ProductsCard 
                  image={product.thumbnail}
                  thumbnail={product.thumbnail}
                  title={product.title}
                  category={product.category}
                  price={product.price.toString()}
                  rating={product.rating}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Shop;