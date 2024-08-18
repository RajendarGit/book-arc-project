"use client";
import React from "react";
import withCartProtection from "../hoc/withCartProtection";
import Wrapper from "../components/shared/Wrapper";
import Breadcrumbs from "../components/shared/Breadcrumbs";
import BillingDetails from "../components/BillingDetails";
import PaymentMethod from "../components/PaymentMethod";
import OrderSummary from "../components/OrderSummary";

const CheckoutPage = () => {
  const breadcrumbs = [
    { title: "Cart Page", link: "/cart" },
    { title: "Checkout", link: "/checkout" },
  ];

  return (
    <Wrapper>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="px-8 xl:px-0">
        <div className="grid lg:flex lg:flex-row gap-6">
          <div className="w-full lg:w-6/12 xl:w-8/12">
            <BillingDetails />
            <PaymentMethod />
          </div>
          <div className="w-full lg:w-6/12 xl:w-4/12">
          <OrderSummary OrderSummary={true} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default withCartProtection(CheckoutPage)