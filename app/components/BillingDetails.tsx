import { useEffect, useState } from "react";
import { billingDetailsSchema } from "../validation/billingDetailsSchema";
import { BillingDetailsErrors } from "../types";
import CountrySelection from "./shared/CountrySelection";
import { SingleValue } from "react-select";

type CountryOption = {
  value: string;
  label: string;
};

const BillingDetails = () => {
  const [errors, setErrors] = useState<BillingDetailsErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<SingleValue<CountryOption>>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const formData = new FormData(e.target as HTMLFormElement);
    const values = Object.fromEntries(formData.entries());
    values.country = selectedCountry?.value || "";

    try {
      billingDetailsSchema.parse(values);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
      
    } catch (err: any) {
      setErrors(
        err.errors.reduce(
          (acc: BillingDetailsErrors, curr: any) => ({
            ...acc,
            [curr.path[0]]: curr.message,
          }),
          {}
        )
      );
    }
  };

  return (
    <section>
      <h4 className="font-semibold text-2xl mb-8">Pay Now!</h4>
      <h4 className="font-medium text-xl mb-4">Billing details</h4>
      <form onSubmit={handleSubmit} className="grid gap-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="mb-3 block">
              First Name
            </label>
            <input
              name="firstName"
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
            {errors.firstName && (
              <p className="text-error">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="mb-3 block">
              Last Name
            </label>
            <input
              name="lastName"
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
            {errors.lastName && (
              <p className="text-error">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="email" className="mb-3 block">
              Email Address
            </label>
            <input
              name="email"
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
            {errors.email && <p className="text-error">{errors.email}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div>
            <label htmlFor="mobileNumber" className="mb-3 block">
              Mobile Number
            </label>
            <label className="input input-bordered flex items-center gap-2">
              -94
              <input
                name="mobileNumber"
                type="text"
                className="grow"
                placeholder="0 0000 00 00"
              />
            </label>
            {errors.mobileNumber && (
              <p className="text-error">{errors.mobileNumber}</p>
            )}
          </div>
          <div>
          {isMounted && (
              <CountrySelection
                value={selectedCountry}
                onChange={(newValue) => setSelectedCountry(newValue)}
              />
            )}
            {errors.country && <p className="text-error">{errors.country}</p>}
          </div>
        </div>
        {isSuccess && <p className="text-green-dark">Data successfully saved</p>}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default BillingDetails;