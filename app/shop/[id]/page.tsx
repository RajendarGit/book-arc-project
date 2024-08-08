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

interface ProductPageProps {
  params: {
    id: number;
  };
}

const ProductPage: FC<ProductPageProps> = ({ params: { id } }) => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectAllProducts) as Product[];
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
    <div className="justify-center items-center max-w-md mx-auto">
      <ProductsCard
        image={product.thumbnail}
        thumbnail={product.thumbnail}
        title={product.title}
        category={product.category}
        price={product.price.toString()}
        rating={product.rating}
      />
    </div>
  );
};

export default ProductPage;