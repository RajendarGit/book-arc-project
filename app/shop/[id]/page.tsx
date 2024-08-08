"use client";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
  selectProductsError,
  selectProductsStatus,
} from "@/app/features/productSlice";
import Loading from "./Loading";
import ProductsCard from "@/app/components/ProductsCard";
import { AppDispatch } from "@/app/store";
import Wrapper from "@/app/components/shared/Wrapper";
import Link from "next/link";
import { BsHouse } from "react-icons/bs";


interface ProductPageProps {
  params: {
    id: number;
  };
}

const ProductPage: FC<ProductPageProps> = ({ params: { id } }) => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <Wrapper>
        <div className="breadcrumbs text-sm my-5">
          <ul>
            <li>
              <Link href='/' className='text-grey flex gap-1'>
                <BsHouse/>
                Home
              </Link>
            </li>
            <li>
              <Link href='/shop' className='text-black'>
                Shop Page
              </Link>
            </li>
            <li>
              <Link href='/shop' className='text-black'>
                {product.title}
              </Link>
            </li>
          </ul>
        </div>
      <ProductsCard
        image={product.thumbnail}
        title={product.title}
        category={product.category}
        price={product.price.toString()}
        rating={product.rating}
        tags={product.tags}
        oneProduct={true}
      />
    </Wrapper>
  );
};

export default ProductPage;