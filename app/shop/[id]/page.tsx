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
import ProductsDetailsTab from "@/app/components/ProductsDetailsTab";
import { addToCart } from "@/app/features/cartSlice"; 
import Alert from "@/app/components/shared/Alert";
import Breadcrumbs from "@/app/components/shared/Breadcrumbs";

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

  const [breadcrumbs, setBreadcrumbs] = useState([
    { title: 'Shop', link: '/shop' },
  ]);

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (status === "idle" || products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, status, products.length]);

  const product = products.find((product) => product.id === Number(id));
  const recommendedProducts = products.filter(
    (productItem) => 
      productItem.category === product?.category && productItem.id !== Number(id)
  );

  useEffect(() => {
    if (product) {
      setBreadcrumbs((prev) => {
        const isProductInBreadcrumbs = prev.some(
          (breadcrumb) => breadcrumb.title === product.title
        );
  
        if (!isProductInBreadcrumbs) {
          return [
            ...prev,
            { title: product.title, link: `/shop/${product.id}` }
          ];
        }
  
        return prev;
      });
    }
  }, [product]);
  

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

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
      <Breadcrumbs breadcrumbs={breadcrumbs} /> 
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