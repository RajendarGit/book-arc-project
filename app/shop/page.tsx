"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/shared/Header";
import FilterSection from "../components/FilterSection";
import Wrapper from "../components/shared/Wrapper";
import ProductsCard from "../components/ProductsCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
  selectProductsError,
  selectProductsStatus,
} from "../features/productSlice";
import Loading from "./Loading";
import Link from "next/link";
import { AppDispatch } from "../store";

const ITEMS_PER_PAGE = 6;

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const breadcrumbs = [
    { title: 'Shop', link: '/shop' },
  ];

  return (
    <Wrapper>
      <Header
        breadcrumbs={breadcrumbs}
        headerTitle={
          <>
            Read and add your <span className='text-green'>insight</span>
          </>
        }
        headerSubtitle="find your favorite book and read it here for free"
      />
      <section className="md:flex md:flex-row md:gap-20 px-6 xl:px-0">
        <div className="lg:w-2/12 mb-10 lg:mb-0">
          <FilterSection />
        </div>
        <div className="lg:w-10/12">
          {status === "loading" ? (
            <Loading />
          ) : (
            <>
              <div className="responsive-cards">
                {selectedProducts.map((product) => (
                  <Link href={`/shop/${product.id}`} key={product.id}>
                    <ProductsCard
                      image={product.thumbnail}
                      title={product.title}
                      category={product.category}
                      price={product.price}
                      rating={product.rating}
                    />
                  </Link>
                ))}
              </div>
            </>
          )}

          <div className="flex gap-2 items-center justify-center my-14">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`join-item btn ${
                  currentPage === index + 1 ? "btn-primary" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Shop;
