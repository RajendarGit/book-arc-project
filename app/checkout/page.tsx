"use client";
import React from "react";
import withCartProtection from "../hoc/withCartProtection";
import Wrapper from "../components/shared/Wrapper";
import Breadcrumbs from "../components/shared/Breadcrumbs";
import BillingDetails from "../components/BillingDetails";
import PaymentMethod from "../components/PaymentMethod";

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
          <div className="w-full lg:w-6/12 xl:w-7/12">
            <BillingDetails />
            <PaymentMethod />
          </div>
          <div className="w-full lg:w-6/12 xl:w-5/12">
            <div className="card bg-grey-bg p-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, repellat!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

// export default withCartProtection(CheckoutPage)
export default CheckoutPage;
