"use client";
import React, { FC, useEffect, useState } from "react";
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
import ProductsDetailsTab from "@/app/components/ProductsDetailsTab";
import { addToCart } from "@/app/features/cartSlice"; 
import Alert from "@/app/components/shared/Alert";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage: FC<ProductPageProps> = ({ params: { id } }) => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (status === "idle" || products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, status, products.length]);

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  const product = products.find((product) => product.id === Number(id));
  const recommendedProducts = products.filter(
    (productItem) => 
      productItem.category === product?.category && productItem.id !== Number(id)
  );

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <Wrapper>
      <div className="breadcrumbs text-sm my-5 hidden md:inline-flex px-8 xl:px-0">
        <ul>
          <li>
            <Link href="/" className="text-grey flex gap-1">
              <BsHouse />
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-black">
              Shop Page
            </Link>
          </li>
          <li>
            <Link href="" className="text-black">
              {product.title}
            </Link>
          </li>
        </ul>
      </div>
      <>
        {status === "loading" ? (
          <Loading oneProduct={true} />
        ) : (
          <>
            <ProductsCard
              image={product.thumbnail}
              title={product.title}
              category={product.category}
              price={product.price}
              rating={product.rating}
              tags={product.tags}
              oneProduct={true}
              addToCart={handleAddToCart}
            />
          </>
        )}
      </>
      <ProductsDetailsTab description={product.description} />
      <div className="px-8 xl:px-0">
        <h4 className="font-medium text-xl mb-8">Related Products</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recommendedProducts.length > 0 ? (
            recommendedProducts.map((recomendedProduct) => (
              <Link
                href={`/shop/${recomendedProduct.id}`}
                key={recomendedProduct.id}
              >
                <ProductsCard
                  image={recomendedProduct.thumbnail}
                  title={recomendedProduct.title}
                  category={recomendedProduct.category}
                  price={recomendedProduct.price}
                  rating={recomendedProduct.rating}
                />
              </Link>
            ))
          ) : (
            <p>No related products found.</p>
          )}
        </div>
      </div>
      {showAlert && <Alert text="Product added to cart." />}
    </Wrapper>
  );
};

export default ProductPage;